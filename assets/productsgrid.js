import CartDrawer from "./js/product/src/cart-drawer.js";
class ProductsGrid extends HTMLElement {
  constructor() {
    super();

    this.Overlay  = document.querySelector('.overlay');
    this.MiniCart = document.querySelector('.side-cart');
    this.MySubmit = document.querySelectorAll('#MySubmit');

    this.querySelectorAll('input[name="MyRadios"]').forEach((inputRadio) =>
      inputRadio.addEventListener('change', function(){
        this.id_var = inputRadio.getAttribute('variant-id');
        document.getElementById('ProductId').value = this.id_var;
      })
    );

    this.querySelectorAll('label[name="MyLabels"]').forEach((inputLabel)=>
      inputLabel.addEventListener('mouseover', function(){
        this.img_src = inputLabel.getAttribute('img-src');
        this.img_id  = inputLabel.getAttribute('img-id');
        document.getElementById(this.img_id).src = this.img_src;
      })
    );

    this.MySubmit.forEach((inputSubmit)=>
      inputSubmit.addEventListener('click', this.addToCart.bind(this))
    );

    //this.MySubmit.addEventListener('click', this.addToCart.bind(this));
  }

  addToCart(evt){
    evt.preventDefault();
    let formData = {
      'items': [{
       'id': document.getElementById('ProductId').value,
       'quantity': 1
       }]
     };

     fetch('/cart/add.js', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
     })
     .then(response => {
       CartDrawer.drawCart();
       return response.json();
     })
     .catch((error) => {
       console.error('Error:', error);
     });
  }

/*  OpenMiniCart(){
    this.MiniCart.classList.add('open');
    this.Overlay.classList.add('active');
  } */

  renderContents(parsedState) {
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach((section => {
      document.getElementById(section.id).innerHTML =
        this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
    }));

    if (this.header) this.header.reveal();
    this.open();
  }

  getSectionsToRender() {
    return [
        {
            id: 'cart-notification-product',
            selector: `#cart-notification-product-${this.productId}`,
        },
        {
            id: 'cart-notification-button'
        },
        {
            id: 'cart-icon-bubble'
        },
        {
            id: 'main-cart-items',
            section: 'main-cart-items',
            selector: '.js-contents',
        },
        {
            id: 'main-cart-footer',
            section: 'main-cart-footer',
            selector: '#main-cart-footer',
        }
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

}

customElements.define('products-grid', ProductsGrid);