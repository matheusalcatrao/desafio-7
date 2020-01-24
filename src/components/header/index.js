import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Cart from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';
import { Container, Logo, Notification, NotificationText } from './styles';

function Header({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Logo />
      </TouchableOpacity>
      <Notification>
        <NotificationText>1</NotificationText>
      </Notification>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Cart
          name="shoppingcart"
          color="#fff"
          size={28}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </TouchableOpacity>
    </Container>
  );
}
export default withNavigation(Header);
