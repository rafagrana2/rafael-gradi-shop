import { domElements } from "../../utils/dom-elements.js"

export class CartDrawer {
  async drawCart() {
    domElements().$sidecart.classList.add('open')
    domElements().$overlay.classList.add('active')
  }

  async hideCart() {
    domElements().$sidecart.classList.remove('open')
    domElements().$overlay.classList.remove('active')
  }
}