const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes text and turns **bold** into <strong>. */
export function emphasize(text: string) {
  return escape(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
