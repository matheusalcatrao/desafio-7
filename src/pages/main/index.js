import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import Header from '../../components/header';
import { Container, Product, Name, Price, Image } from './styles';
import navigation from '../../services/navigation';

import Api from '../../services/api';

export default function main({ navigation }) {
  const [product, setProducts] = useState();

  useEffect(() => {
    async function loadProducts() {
      const response = await Api.get('products');

      const data = response.data.map(product => ({
        ...product,
        price: product.price,
        // priceFormated: formatPrice(product.price),
      }));
      console.log(data);
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Header />
      {product.map(product => (
        <Product>
          <Image />
          <Name>Tenis de sport</Name>
          <Price>R$100,00</Price>
        </Product>
      ))}
    </Container>
  );
}
