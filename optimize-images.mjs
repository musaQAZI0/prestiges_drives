import sharp from 'sharp';
import { readdir, stat, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('public/assets');
const officialSources = JSON.parse(await readFile(path.join(root, 'fleet/official/sources.json'), 'utf8'));
const officialCrops = new Map(officialSources.filter(item => item.crop).map(item => [path.resolve(item.original), item.crop]));
let before=0, after=0, count=0;
async function walk(dir) {
 for (const e of await readdir(dir,{withFileTypes:true})) {
  if(e.name==='optimized') continue;
  const src=path.join(dir,e.name);
  if(e.isDirectory()){await walk(src);continue;}
  if(!/\.(png|jpe?g)$/i.test(e.name))continue;
  const dest=path.join(root,'optimized',path.relative(root,src).replace(/\.[^.]+$/,'.webp'));
  await mkdir(path.dirname(dest),{recursive:true});
  let pipeline = sharp(src).rotate();
  const crop = officialCrops.get(src);
  if (crop) pipeline = pipeline.extract(crop);
  await pipeline.resize({width:1920,withoutEnlargement:true}).webp({quality:78,effort:5}).toFile(dest);
  before+=(await stat(src)).size;after+=(await stat(dest)).size;count++;
 }
}
await walk(root);
console.log(JSON.stringify({count,before,after,reduction:100*(1-after/before)}));
