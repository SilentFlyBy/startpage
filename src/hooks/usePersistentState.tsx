import { useEffect, useState } from 'react';

const windowDefined = typeof window !== 'undefined';

export const usePersistentState = (defaultValue: any, key: any) => {
  const [value, setValue] = useState(() => {
    const stickyValue = windowDefined ? window.localStorage.getItem(key) : null;
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    windowDefined && window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
