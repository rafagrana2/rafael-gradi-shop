/**
* Stores all DOM elements with which it we will interact.
* @return {object} Total DOM elements
*/
export const domElements = () => {
  const elements = {
      //$productButton: document.querySelector('#productButton'),
      $overlay: document.querySelector('.overlay'),
      $sidecart: document.querySelector('.side-cart'),
      $cartIcon: document.querySelector('#cart-icon-bubble')
  }

  return elements
}