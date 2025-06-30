// Service Worker Registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('✅ SW Registered');
  });
}

// Demo products
const products = [
  {
    name: "Luxury Watch",
    price: 7999,
    image: "https://sc04.alicdn.com/kf/Hdaa116b24a6f42c39ca713140f6e2154U.jpg"
  },
  {
    name: "Designer Jacket",
    price: 6499,
    image: "https://i.pinimg.com/736x/32/d7/ef/32d7ef10a2cf24b20c7e7303a09e85b4.jpg"
  },
  {
    name: "Silk Handbag",
    price: 9999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpObmzYq2nrEuQ_yZUeCQ8_ADN1RiOaLvwXw&s"
  },
  {
    name: "Gold Earrings",
    price: 5499,
    image: "https://www.chidambaramgoldcovering.com/image/cache/catalog/ChidambaramGoldCovering/earrings/er4052-new-two-gram-gold-stud-earring-shop-online-1a-850x1000.jpg"
  },
  {
    name: "Luxury Perfume",
    price: 3499,
    image: "https://www.thearchies.in/cdn/shop/files/image_2024-10-15_121330696.png?v=1749620391"
  },
  {
    name: "Premium Sneakers",
    price: 5999,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/407719206/KG/DI/CL/71495053/men-s-premium-quality-casual-styish-white-sneakers-500x500.jpg"
  },
  {
    name: "Smart Sunglasses",
    price: 2599,
    image: "https://funkytradition.com/cdn/shop/files/0_2019-Fashion-Round-Sunglasses-Women-Brand-Designer-Luxury-Metal-Sun-Glasses-Classic-Retro-Outdoor-Eyewear-Oculos_0079d389-153f-48a8-8d3a-928126597c19.jpg?v=1723512244"
  },
  {
    name: "Suede Loafers",
    price: 4899,
    image: "https://www.theroyalepeacock.com/cdn/shop/files/TheRoyalePeacockNavyBlueLeatherSuedePennyLoaferShoesforMen.jpg?v=1695538888"
  },
  {
    name: "Classic Leather Belt",
    price: 1499,
    image: "https://www.jiomart.com/images/product/original/rvkyojpusf/cimoni-classic-orginal-gent-s-leather-belt-genuine-leather-belt-for-men-formal-color-black-length-44-inches-waist-upto-38-product-images-rvkyojpusf-0-202207241105.jpg?im=Resize=(500,630)"
  }
];


const container = document.getElementById('products');
let cart = JSON.parse(localStorage.getItem('lux-cart')) || [];

function renderProducts() {
  container.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(name) {
  cart.push(name);
  localStorage.setItem('lux-cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function notifyUser() {
  alert("🎁 Luxury deals coming soon! Stay tuned.");
}

renderProducts();
