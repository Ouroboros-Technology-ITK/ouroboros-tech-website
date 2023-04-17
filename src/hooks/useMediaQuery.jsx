import { useEffect, useRef, useState } from "react";

export const useMediaQuery = (query) => {
  const mediaQueryList = useRef(null);
  const [matches, setMatches] = useState(
    mediaQueryList.current?.matches || false,
  );

  useEffect(() => {
    const listener = (mediaMatches) => {
      setMatches(mediaMatches);
    };

    if (typeof window !== "undefined") {
      mediaQueryList.current = window.matchMedia(query);
      setMatches(mediaQueryList.current.matches);

      mediaQueryList.current.addEventListener("change", () => {
        listener(mediaQueryList.current.matches);
      });
    }
    return () => {
      if (mediaQueryList.current) {
        mediaQueryList.current.removeEventListener("change", () => {
          listener(mediaQueryList.current.matches);
        });
      }
    };
  }, [query, mediaQueryList]);

  return matches;
};
