export function camelToNormal(text) {
  let normalText = "";
  let startIndex = 0;

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      normalText += text.substring(startIndex, i) + " ";
      startIndex = i;
    }
  }

  normalText += text.substring(startIndex);
  const normalCaseText =
    normalText.charAt(0).toUpperCase() + normalText.slice(1);
  return normalCaseText;
}
