import { useEffect } from "react";

const useClickOutside = (ref, fn) => {
   
   
   useEffect(() => {
      function onClick(e) {
         if(!ref.current.contains(e.target)){
            fn(e);
         }
      }
      
      window.addEventListener('mousedown', onClick);
      window.addEventListener('touchstart', onClick);

      return () => {
         window.removeEventListener('mousedown', onClick);
         window.removeEventListener('touchstart', onClick);
      };
   }, [ref, fn]);
}
 
export default useClickOutside;