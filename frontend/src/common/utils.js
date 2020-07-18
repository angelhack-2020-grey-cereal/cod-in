export function classes(...classNames) {
  return classNames.filter(v => v).join(' ');
}
