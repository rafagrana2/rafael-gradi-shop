import { domElements } from "./js/utils/dom-elements.js"
import CartDrawer from "./js/product/src/cart-drawer.js"

window.addEventListener('DOMContentLoaded', () => {
    domElements().$closeButton.addEventListener("click", CartDrawer.hideCart)

    domElements().$cartIcon.addEventListener("click", ()=>{
      if (domElements().$overlay.classList.contains('active')){
        CartDrawer.hideCart()
      }else{
        CartDrawer.drawCart()
      }
    })
})