import { useState, useEffect } from 'react';

export const genrate = (list, element) => {
  let lists = [];
  for (var v = 0;  v < list.length; v++) {
      lists.push(list[v][element]);
  }
  return lists.join(', ')
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}