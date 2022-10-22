export function getLastUrlSegment(url) {
    return new URL(url).pathname.split('/').filter(Boolean).pop();
  }