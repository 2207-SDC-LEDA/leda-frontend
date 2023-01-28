// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/products.md
let axios = require('axios');

let options = {
  method: 'get',
  url: `http://localhost:8000/products/products/`,
  headers: { "Authorization": process.env.API_TOKEN },
};

module.exports.ProductsGet = async (token) => {
  try {
    let products = await axios(options);
    return products.data;
  }
  catch (err) {
    console.log('err in products get', err);
  }
}

let SingleProductGet = async (id) => {
  try {
    options.url = `http://localhost:8000/products/${id}`;
    let current = await axios(options);
    return current.data;
  }
  catch (err) {
    console.log('err in single product get', err);
  }
}

let Styles = async (id) => {
  try {
    options.url = `http://localhost:8000/products/${id}/styles`;
    let styles = await axios(options);
    return styles.data;
  }
  catch (err) {
    console.log('err in styles get', err);
  }
}

let Similar = async (id) => {
  try {
    options.url = `http://localhost:8000/products/${id}/related`;
    let similar = await axios(options);
    return similar.data;
  }
  catch (err) {
    console.log('err in similar products get', err);
  }
}

module.exports.currentProduct = async (id) => {
  try {
    let productDetails = {};

    let selectedProduct = await SingleProductGet(id);
    let selectedStyles = await Styles(id);
    let selectedRelated = await Similar(id);
    productDetails.product = selectedProduct;
    productDetails.styles = selectedStyles;
    productDetails.related = selectedRelated;

    return productDetails;
  }
  catch (err) {
    console.log('err in current product get details', err);
  }
}