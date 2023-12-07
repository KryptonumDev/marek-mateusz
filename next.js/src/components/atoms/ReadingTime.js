import { toPlainText } from "@portabletext/react";

const countWords = (text) => {
  const trimmedText = text.trim();
  if (trimmedText === '') {
    return 0;
  }
  const words = trimmedText.split(/\s+/);
  return words.length;
};

const readingTime = (text) => {
  const plainText = toPlainText(text || '');
  const words = countWords(plainText);
  const averageReadingSpeedWordsPerMinute = 200;
  const readingTime = Math.ceil(words / averageReadingSpeedWordsPerMinute);
  return `${readingTime} ${readingTime === 1
    ? 'minuta'
    : [2, 3, 4].includes(readingTime)
      ? 'minuty'
      : 'minut'}`;
};

export default readingTime;