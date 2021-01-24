import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"
import { window, document,body, exists } from "browser-monads";

import { scroll } from "../theme"

const Scroll = callbacks => {
  
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("vertical", func.direction)
    })

    


    // locomotiveScroll.on('call', (obj) => {
    //   console.log(obj);

    //   if(document.body.classList.contains('modal-open')){
    //     document.body.classList.remove('modal-open');
    //   }else{
    //     document.body.classList.add('modal-open');
    //   }
    
    // });

 
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll