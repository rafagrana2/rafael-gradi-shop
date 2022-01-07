import { domElements } from "../../utils/dom-elements.js";
import API from "../../services/api.js"

class CartDrawer {
  async drawCart() {
    await this.update()
    domElements().$sideCart.classList.add('open')
    domElements().$overlay.classList.add('active')
  }

  hideCart() {
    domElements().$sideCart.classList.remove('open')
    domElements().$overlay.classList.remove('active')
  }

  async update() {
    domElements().$sideCartContainer.innerHTML = "Loading..."
    const htmlMarkup = await API.updateShopifySection('side-cart')
    domElements().$sideCartContainer.innerHTML = htmlMarkup
    
  }
}

export default new CartDrawer()