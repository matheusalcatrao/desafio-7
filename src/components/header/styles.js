import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 25px 15px 25px;
  background: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  align-items: flex-start;
`;

export const Notification = styled.View`
  display: flex;
  left: 25;
  width: 20px;
  height: 20px;
  border-radius: 50;
  background: #7159c1;
`;
export const NotificationText = styled.Text`
  align-self: center;
`;
