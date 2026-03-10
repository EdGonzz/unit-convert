export function typeWriter(element, text, speed = 50) {
  if (element.__typewriterTimer) {
    clearTimeout(element.__typewriterTimer);
  }

  let i = 0;
  element.textContent = '';
  let paragraph = '';

  function type() {
    if (i < text.length) {
      paragraph += text.charAt(i);
      i++;
      element.__typewriterTimer = setTimeout(type, speed);
    } else {
      element.__typewriterTimer = null;
    }
    element.textContent = paragraph;
  }

  type();
}
