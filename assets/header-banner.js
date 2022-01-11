window.addEventListener('DOMContentLoaded', (event) => {
    const customBanner = new CustomBanner();
    customBanner.fetchData();
});

class CustomBanner{
    async fetchData(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const response = await fetch("http://localhost:3000", requestOptions);
        const orders = await response.json();
        
        let banner  = document.querySelector('.customBanner');
        banner.innerHTML = `★ Somos una tienda de alto impacto con más de `+` ${orders.fulfilledOrders}`+ ` órdenes entregadas y más de ` +`${orders.vipCustomers}`+` clientes a nivel mundial ★`;
    }
}
