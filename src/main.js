import parse from './parse';
import pipes from './pipes';
import getContent from './getContent';
import insert from './insert';

export default async function(file, config) {
  let insertions = await parse(file);
  insertions = await getContent(insertions);
  insertions = await pipes(insertions, config);
  return await insert(insertions, file);
}
