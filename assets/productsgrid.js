function ChangeProdBg(src, id){
  document.getElementById(id).src = src;
}

function SelectId(id, productId){
  document.getElementById('ProductId').value = id;
}

function OpenUrl(url){
  window.open(url,'_self');
}

function OpenMiniCart(){
  const Overlay  = document.getElementById('Overlay');
  const MiniCart = document.getElementById('MiniCart');

  MiniCart.classList.add('open');
  Overlay.classList.add('active');
}

function AddToCart(){
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
     return response.json()+OpenMiniCart();
   })
   .catch((error) => {
     console.error('Error:', error);
   });
}