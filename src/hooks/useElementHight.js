// import { useState, useLayoutEffect } from 'react';

// export function useElementHeight(ref) {
//   const [height, setHeight] = useState(0);

//   useLayoutEffect(() => {
//     if (ref.current) {
//       setHeight(ref.current.getBoundingClientRect().height);
//     }
//   }, [ref]);

//   return height;
// }