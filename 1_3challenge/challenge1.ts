// Challenge: create a type describing this object

export {};

type Product = {
  name: string;
  price: number;
  images: string[];
  status: string;
};

//object literal
const product = {
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
  status: "published",
} as Product;

console.log("product:", product);

type Product_Type = {
  name: string;
  price: number;
  images?: string[];
  status?: string;
};

const p1: Product_Type = {
  name: "Soap",
  price: 10,
};

console.log("p1:", p1);

const doggie: {
  name: string;
  age: number;
} = {
  name: "fido",
  age: 1,
};

console.log("doggie:", doggie);
