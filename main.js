const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
shoppingCartContainer.addEventListener('click', toggleshoppingCartContainer);
productDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function toggleShoppingCart(){
    if(!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')
}

function toggleMobileMenu(){
    if(!shoppingCartContainer.classList.contains('inactive')){
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleshoppingCartContainer(){
    
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive')
    }
    productDetail.classList.toggle('inactive')
}

const products = [];

products.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

function openProductDetailAside(){
    if(!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive')
    }
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive')
}

for (product of products) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card');
    const productImage = document.createElement('img')
    productImage.setAttribute("src", product.image);
    productImage.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div')
    
    const productPrice = document.createElement('p')
    productPrice.classList.add('product-price');
    productPrice.innerText = `$ ${product.price}`;
    
    const productName = document.createElement('p')
    productName.classList.add('product-name');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure')
    const cartImage = document.createElement('img')
    cartImage.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(cartImage)
    productInfoDiv.append(productPrice, productName)
    productInfo.append(productInfoDiv, productInfoFigure)
    productCard.append(productImage, productInfo)
    cardsContainer.append(productCard)
}