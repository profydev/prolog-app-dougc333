// Challenge: create a type describing this object
// this time use an enum for the "status" field

enum Status{
  published = "published",
  draft = "draft",
}

const product2 = {
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
  status: Status.published, // alternative value "draft"
};

console.log(product2)

