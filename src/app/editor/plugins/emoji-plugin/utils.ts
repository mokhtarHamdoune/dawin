import emojis from 'emoji-datasource-facebook/emoji.json';

export const nameUniCodeMap = emojis.reduce<Map<string, string>>((prev, curr) => {
  if (!curr.has_img_facebook) {
    return prev;
  }
  prev.set(':' + curr.short_name + ':', curr.unified);
  curr.short_names.forEach((name) => prev.set(':' + name + ':', curr.unified));
  if (curr.text !== null) {
    prev.set(curr.text, curr.unified);
  }
  if (curr.texts !== null) {
    curr.texts.forEach((txt) => prev.set(txt, curr.unified));
  }
  return prev;
}, new Map());

export type EmojiMatch = {
  position: number;
  shortcode: string;
  unifiedID: string;
};

export const findEmoji = (text: string): EmojiMatch | null => {
  const skippedWords: string[] = [];
  for (const word of text.split(' ')) {
    if (!nameUniCodeMap.has(word)) {
      skippedWords.push(word);
      continue;
    }
    if (skippedWords.length > 0) {
      // Compensate for space between skippedText and word
      skippedWords.push('');
    }

    return {
      position: skippedWords.join(' ').length,
      shortcode: word,
      unifiedID: nameUniCodeMap.get(word)!,
    };
  }
  return null;
};
