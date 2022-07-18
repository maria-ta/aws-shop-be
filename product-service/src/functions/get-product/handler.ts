import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { ALL_PRODUCTS } from 'src/mocks/products.mock';

import schema from './schema';

const getProduct: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const id = event.pathParameters?.id;
  const product = ALL_PRODUCTS.find((product) => product.id === id);
  const reponseStatus = product ? 200 : 404;
  return formatJSONResponse({
    product,
  }, reponseStatus);
};

export const main = middyfy(getProduct);
