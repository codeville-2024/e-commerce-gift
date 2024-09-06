const products = [
  {
    id: 1,
    name: "Vanilla Cookie",
    price: 19.99,
    image: "Images/biscuits-1.jpg",
    description: "Slim cookies with a rich taste",
  },
  {
    id: 2,
    name: "Nice Biscuit ",
    price: 19.99,
    image: "Images/biscuit-2.jpeg",
    description: "One of our best biscuits",
  },
  {
    id: 3,
    name: "Cookies",
    price: 10.25,
    image: "Images/biscuit-3.jpeg",
    description: "Oven Cookies with a surprise",
  },
  {
    id: 4,
    name: "Black bag",
    price: 10.99,
    image: "Images/bags-1.webp",
    description: "Strong bags",
  },
  {
    id: 5,
    name: "Blue bag",
    price: 10.99,
    image: "Images/bag-2.webp",
    description: "Quality bags",
  },
  {
    id: 6,
    name: "Pink bag",
    price: 10.99,
    image: "Images/bag-3.jpeg",
    description: "Colored bags",
  },
  {
    id: 7,
    name: "Pink bag",
    price: 10.99,
    image: "Images/cream-1.webp",
    description: "Colored bags",
  },
  {
    id: 8,
    name: "Pink bag",
    price: 10.99,
    image: "Images/cream-2.webp",
    description: "Colored bags",
  },
  {
    id: 9,
    name: "Pink bag",
    price: 10.99,
    image: "Images/cream-3.webp",
    description: "Colored bags",
  },
  {
    id: 10,
    name: "Pink bag",
    price: 10.99,
    image: "Images/ball-1.webp",
    description: "Colored bags",
  },
  {
    id: 11,
    name: "Pink bag",
    price: 10.99,
    image: "Images/ball-2.jpg",
    description: "Colored bags",
  },
  {
    id: 12,
    name: "Pink bag",
    price: 10.99,
    image: "Images/ball-3.jpg",
    description: "Colored bags",
  },
  {
    id: 13,
    name: "Pink bag",
    price: 10.99,
    image: "Images/jersey-1.webp",
    description: "Colored bags",
  },
  {
    id: 14,
    name: "Pink bag",
    price: 10.99,
    image: "Images/jersey-2.webp",
    description: "Colored bags",
  },
  {
    id: 15,
    name: "Pink bag",
    price: 10.99,
    image: "Images/jersey-3.webp",
    description: "Colored bags",
  },
  {
    id: 16,
    name: "Red pink football boot",
    price: 20.99,
    image: "Images/boot-1.jpg",
    description: "Boot",
  },
  {
    id: 17,
    name: "Red pink football boot",
    price: 20.99,
    image: "Images/boot-2.jpg",
    description: "Boot",
  },
  {
    id: 18,
    name: "Red pink football boot",
    price: 20.99,
    image: "Images/boot-3.webp",
    description: "Boot",
  },
  {
    id: 19,
    name: "Red pink football boot",
    price: 20.99,
    image: "Images/crocs-1.webp",
    description: "Boot",
  },
  {
    id: 20,
    name: "Red pink football boot",
    price: 20.99,
    image: "Images/crocs-2.png",
    description: "Boot",
  },
  {
    id: 21,
    name: "Red pink football boot",
    price: 20.99,
    image: "Images/crocs-3.jpg",
    description: "Boot",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
function getProductDetails(productId) {
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (product) {
    const imageId = document.getElementById("marine-blue");
    imageId.src = `${product.image}`;
    const productName = document.getElementById("mw");
    productName.innerHTML = `${product.name}`
    const productPrice = document.getElementById("dt");
    productPrice.innerHTML = `${product.price}`
  } else {
    console.error(`Product with ID ${productId} not found`);
  }
}

getProductDetails(productId);