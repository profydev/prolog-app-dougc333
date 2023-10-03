//primitive parameters

//the function updateProduct changes the state of the product instance
//but the function signature doesn't update a product. Parameters are passed by value
//and copied onto the stack. There is no reference to any object to update in the function signature. 
//
//A function can't exist by itself. It has to be part of a class or 
//it has to operate on data. 



/* class CatalogItem{
  updateProduct(name:string){
    this.name=name;
  }
}
 */
/* function Item(){
  const [name,setName] = useState("")

  function updateItem(name:string){
    setName(name)
  }
} */


/* function updateProduct(name: string, price: number, images: string[]) {
  // update logic here ...
  console.log({ name, price, images });
}

updateProduct("Shampoo", 2.99, ["image-1.png", "image-2.png"]);
 */

//confusing, in a class model updateProduct should belong to a class 
//or in the functional world a function can operate on objects directly without
//the need for classes. Most operations in FP revolve around a list or hashtable. 
//a function has no state

//it isnt clear where the object is. Lets assume it is in an array


const product_data = [
  {
    name: '3 qt pot',
    price: 19.44,
    images: ['small_pot.png'],
  },
  {
    name: '6 qt pot',
    price: 29.99,
    images:
      ['medium_pot.png'],
  },
  {
    name: '12 qt pot',
    price: 49.99,
    images: ['large_pot.png'],
  },
];

//
function updateProduct(name: string, price: number, images: string[]){
  if (name==='3 qt pot'){
    console.log("found!!")
    console.log("name:",name, "price:", price," images:", images)
  }
}

product_data.forEach(x=>updateProduct(x.name, x.price, x.images));
