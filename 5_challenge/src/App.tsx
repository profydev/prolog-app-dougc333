// Challenge: type the props so that the component
// can be rendered as follows
//
// <Product
//   name="Shampoo"
//   price={2.99}
//   images={["image-1.png", "image-2.png"]}
// />

type ProductProps = {
  name: string;
  price: number;
  images: string[];
};

export function Product({ name, price, images }: ProductProps) {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((src: string, index) => (
        <img src={src} alt="img" key={index} />
      ))}
    </div>
  );
}

function App() {
  return (
    <Product
      name="Shampoo"
      price={2.99}
      images={["image-1.png", "image-2.png"]}
    />
  );
}

export default App;
