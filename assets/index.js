import { domElements } from "./js/utils/dom-elements.js"
import { CartDrawer } from "./js/product/src/cart-drawer.js"

window.addEventListener('DOMContentLoaded', () => {
    const drawer = new CartDrawer()
    //domElements().$overlay.addEventListener("click", drawer.hideCart)

    domElements().$cartIcon.addEventListener("click", ()=>{
      if (domElements().$overlay.classList.contains('active')){
        drawer.hideCart()
      }else{
        drawer.drawCart()
      }
    })
})