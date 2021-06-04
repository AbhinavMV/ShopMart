export const ShortenString = (text, len) => {
  return text.length > len ? text.slice(0, len) + "..." : text;
};
