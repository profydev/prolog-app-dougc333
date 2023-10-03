type Product = {
  name: string;
  price: number;
  images: string[];
};

function useGetProduct():
  | { product: Product; error: undefined }
  | { product: undefined; error: Error } {
  if (Math.random() > 0.5) {
    return { product: undefined, error: new Error("Something went wrong") };
  }
  return {
    error: undefined,
    product: {
      name: "Shampoo",
      price: 2.99,
      images: ["image-1.png", "image-2.png"],
    },
  };
}

//return string not error
export function Product(): string | JSX.Element {
  const { product, error } = useGetProduct();

  if (error) {
    return error.message;
  }

  return (
    <div>
      <div>
        {product.name} ${product.price}
      </div>
      {product.images.map((src, index) => (
        <img src={src} alt="image" key={index} />
      ))}
    </div>
  );
}
