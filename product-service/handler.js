'use strict';

const ALL_PRODUCTS = [
  {
    count: 10,
    description: 'It is a scrambling shrub climbing over other plants to a height of 3–5 m (9.8–16.4 ft), with stout stems with recurved prickles (sometimes absent). The leaves are 5–10 cm (2–4 in) long, compound, with 5–9 leaflets and feathered stipules. The flowers are produced in large corymbs, each flower small, 1.5–4 cm (5⁄8–1+5⁄8 in) diameter, white or pink, borne in early summer. The hips are reddish to purple, 6–8 mm (0.24–0.31 in) diameter.',
    id: 'product-1',
    price: 100,
    title: 'Japanese rose',
  }
]

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(ALL_PRODUCTS),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getProduct = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(ALL_PRODUCTS[0]),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
