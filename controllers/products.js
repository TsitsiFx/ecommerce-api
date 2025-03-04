export const addProduct = (req, res) => {
  // Upload product image
  // Validate product information
  // Save product info in database
  // Return response
  res.json(req.body);
}

export const getProducts = (req, res) => {
  res.send('All products!');
}

export const countProducts = (req, res) => {
  res.send('All products counted!');
}

export const updateProduct = (req, res) => {
  res.send(`Product with id ${req.params.id} updated!`);
}

export const deleteProduct = (req, res) => {
  res.send(`Product with id ${req.params.id} deleted!`)
}