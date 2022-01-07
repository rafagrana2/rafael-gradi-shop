/**
* Stores all DOM elements with which it we will interact.
* @return {object} Total DOM elements
*/
export const domElements = () => {
  const elements = {
      $closeButton: document.querySelector('#closeMiniCart'),
      $overlay: document.querySelector('.overlay'),
      $sideCart: document.querySelector('.side-cart'),
      $sideCartContainer: document.querySelector('#side-cart-section'),
      $cartIcon: document.querySelector('#cart-icon-bubble'),
      $cartCheckoutBtn : document.querySelector('#sideCartButton'), 
  }

  return elements
}