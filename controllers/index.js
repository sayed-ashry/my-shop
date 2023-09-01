const products = [
  { id: Math.random(), title: "Book", price: 20 },
  { id: Math.random(), title: "Pen", price: 25 },
];

const getIndex = (req, res) => {
  res.json("Hello World!");
};

const getProducts = (req, res) => {
  res.json(products);
};

const addProduct = (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const product = {
    id: Math.random(),
    title: title,
    price: price,
  };
  products.push(product);
  console.log(product);
  console.log(products.length);
  res.json("Created");
};

const actions = {
  getIndex,
  getProducts,
  addProduct,
};
export default actions;
