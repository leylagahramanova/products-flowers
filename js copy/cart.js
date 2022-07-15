const cartWrapper =  document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.card');

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.gul-img').getAttribute('src'),
			title: card.querySelector('.card-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {

			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>

										<!-- cart-item__details -->
										<div class="wrapper">

											<div class="number">
												<span class="minus" data-action="minus">-</span>
												<div class="input" data-counter="">${productInfo.counter}</div>
												<span class="plus" data-action="plus">+</span>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		card.querySelector('[data-counter]').innerText = '1';

		
		toggleCartStatus();

	
		// calcCartPriceAndDelivery();
	}
});
