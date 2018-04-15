import split from 'lodash/split';

export default function shuffle(worksText) {
  const works = split(worksText, '\n');

  // todo

  return works.join('\n');
}
