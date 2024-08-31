import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    let storedValue;
    if (typeof window !== "undefined" && window.localStorage) {
      storedValue = localStorage.getItem(key);
    }
    setValue(storedValue ? JSON.parse(storedValue) : initialState);
  }, [initialState, key]);

  useEffect(() => {
    if (
      value !== null &&
      typeof window !== "undefined" &&
      window.localStorage
    ) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
}
