// Challenge: type the function parameter and the return type

function updateProduct({ name, price, images }) {
  // update logic here ...
  return { name, price, images };
}

const product = updateProduct({
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
});

console.log(product);
