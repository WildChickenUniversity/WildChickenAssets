import { optimize } from 'svgo';
import { readFileSync, readdirSync, writeFileSync } from 'fs';

const svgFiles = readdirSync('.').filter(file => file.endsWith('.svg'));

svgFiles.forEach(file => {
  const svg = readFileSync(file, 'utf8');
  const { data } = optimize(svg);
  writeFileSync(file, data, 'utf8');
  console.log(`Optimized: ${file}`);
});
