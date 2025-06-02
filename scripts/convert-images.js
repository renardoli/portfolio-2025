import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📁 Répertoires à traiter
const folders = [
  path.resolve(__dirname, '../public/img'),
  path.resolve(__dirname, '../src/assets/img'),
];

// 📁 Dossier de backup à la racine
const backupRoot = path.resolve(__dirname, '../original-imgs');

// 🔧 Récupération récursive des fichiers image
function getImageFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      getImageFiles(fullPath, list);
    } else if (/\.(jpe?g|png)$/i.test(fullPath)) {
      list.push(fullPath);
    }
  }

  return list;
}

// 🧩 Crée les répertoires parents si besoin
function ensureDirectoryExistence(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 🛠️ Conversion et backup
async function convertImagesToWebp() {
  for (const folder of folders) {
    const files = getImageFiles(folder);

    for (const file of files) {
      const output = file.replace(/\.(jpe?g|png)$/i, '.webp');
      await sharp(file).webp({ quality: 80 }).toFile(output);

      // Création du chemin de backup
      const relativePath = path.relative(path.resolve(__dirname, '..'), file);
      const backupPath = path.join(backupRoot, relativePath);
      ensureDirectoryExistence(backupPath);
      fs.renameSync(file, backupPath);

      // biome-ignore lint/suspicious/noConsole: <explanation>
      console.log(
        `✅ Converti : ${path.basename(file)} → ${path.basename(output)}`,
      );
      // biome-ignore lint/suspicious/noConsole: <explanation>
      console.log(
        `🗂️ Sauvegardé dans : ${path.relative(process.cwd(), backupPath)}\n`,
      );
    }
  }

  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.log(
    '🎉 Conversion terminée. Originaux déplacés dans `/backup-originals`.',
  );
}

convertImagesToWebp().catch((err) => {
  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.error('❌ Erreur pendant la conversion :', err);
});
