import { FlatList, Image } from 'react-native';
import styled from 'styled-components/native';
import { rs } from '../../../styled';
import { Container as _Container } from '../../../components';

export const Container = styled(_Container)({
  backgroundColor: 'black',
});

export const Box = styled(_Container)({
  justifyContent: 'center',
  alignItems: 'center',
});

export const ImageGalery = styled(FlatList)({
  flex: 1,
});

export const Picture = styled(Image)({
  flex: 1,
  height: rs(250),
  width: '100%',
  borderWidth: 4,
  borderColor: 'black',
});
