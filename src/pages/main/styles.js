import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const Name = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #333333;
`;

export const Price = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  /* identical to box height */

  color: #000000;
`;

export const Image = styled.View`
  left: 4.55%;
  right: 4.55%;
  top: 2.79%;
  bottom: 41.34%;
`;
