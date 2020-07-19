import React from 'react';

export function classes(...classNames) {
  return classNames.filter(v => v).join(' ');
}

export function mmss(seconds) {
  return `${`${seconds / 60 | 0}`.padStart(2, '0')}:${`${seconds % 60}`.padStart(2, '0')}`;
}
