const aProducts = document.getElementsByClassName('product');

for (let i = 0; i < aProducts.length; i++) {

    const decQuantity = aProducts[i].getElementsByClassName('product__quantity-control_dec')[0];
    const incQuantity = aProducts[i].getElementsByClassName('product__quantity-control_inc')[0];
    const quantity = aProducts[i].getElementsByClassName('product__quantity-value')[0];


    decQuantity.addEventListener('click', function () {
        let q = +quantity.innerText;
        if (q !== 1) {
            quantity.innerText = q - 1;
        }
    });

    incQuantity.addEventListener('click', function () {
        let q = +quantity.innerText;
        quantity.innerText = q + 1;
    });

    const productAdd = aProducts[i].getElementsByClassName('product__add')[0];

    productAdd.addEventListener('click', function () {
        const picture = aProducts[i].getElementsByClassName('product__image')[0].getAttribute('src');
        const id = aProducts[i].dataset.id;
        const cart = document.getElementsByClassName('cart__products')[0];
        const cartProducts = Array.from(cart.getElementsByClassName('cart__product'));

        const hasItem = cartProducts.find((item) => item.dataset.id == aProducts[i].dataset.id);

        if (hasItem) {
            hasItem.lastElementChild.innerText = +quantity.innerText + +hasItem.lastElementChild.innerText;
            return false;
        }

        const html = `
			<div class="cart__product" data-id="${id}">
			    <img class="cart__product-image" src="${picture}">
			    <div class="cart__product-count">${+quantity.innerText}</div>
			</div>
		`;

        cart.insertAdjacentHTML('beforeend', html);
    });
};