
let itemsCount = 0;
let darklight = true;

// LOADING
window.addEventListener('load', function() {
	const loadingPage = document.getElementById('page_loader');
	if (loadingPage) {
		window.setTimeout(function(){ loadingPage.style.display = 'none'; }, 700);
	}
	// bind eventlisteners
    const buybtns = document.querySelectorAll('.buy-btn');
    for(let i=0; i<buybtns.length; i++) {
    	buybtns[i].addEventListener('click', function(e) { addToCart(e); });
	}
});

// THEME
function darklightToggle() {
	// document.body.style.backgroundColor = 'red';

	if (darklight) {
		className('.header-gradient').style.backgroundImage = 'none';
		className('.products-section').style.backgroundImage = 'none';
		// className('.contact-wrapper').style.backgroundImage = 'none';
		darklight = !darklight;
	} else {
		className('.header-gradient').style.backgroundImage = 'linear-gradient(315deg, #485461 0%, #28313b 74%)';
		className('.products-section').style.backgroundImage = 'linear-gradient(315deg, #485461 0%, #28313b 74%)';
		// className('.contact-wrapper').style.backgroundImage = 'linear-gradient(315deg, #485461 0%, #28313b 74%)';
		darklight = !darklight;
	}

	function set(el, property, val) {
		el.style.property = val;
	}

}

// ADDTOCART
function addToCart(e) {
	// console.log(e);
	const productInfo = e;
	// increment cart count
	let count = Number(id('basketCount').textContent);
	count = count + 1;
	itemsCount = count; // for global scope
	id('basketCount').textContent = String(itemsCount);
	className('.basket-count').style.backgroundColor = itemsCount == 0 ? 'grey' : 'blue';
	// alert(count);
}

// HELPER FNS
function id(__) {
	return document.getElementById(__);
}

function className(__) {
	return document.querySelector(__);
}