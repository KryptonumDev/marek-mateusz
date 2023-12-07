export default (markdown) => {
  return markdown?.replace(/\*\*(.*?)\*\*/g, '$1');
}