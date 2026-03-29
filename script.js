const products = [
{name:'Rose Bloom',price:'₹349',emoji:'🌹'},
{name:'Forest King',price:'₹329',emoji:'🌲'},
{name:'Citrus Breeze',price:'₹299',emoji:'🍋'},
{name:'Ocean Mist',price:'₹319',emoji:'🌊'}
];

let cartCount = 0;
let wishCount = 0;

function renderProducts(){
document.getElementById('productGrid').innerHTML =
products.map(p=>`
<div class="product-card">
<div style="font-size:60px">${p.emoji}</div>
<h3>${p.name}</h3>
<p>${p.price}</p>
<button class="add-cart-btn" onclick="addToCart()">Add</button>
</div>
`).join('');
}

function addToCart(){
cartCount++;
document.getElementById('cartBadge').textContent = cartCount;
}

function popHeart(){
wishCount++;
document.getElementById('wishBadge').textContent = wishCount;
}

renderProducts();
