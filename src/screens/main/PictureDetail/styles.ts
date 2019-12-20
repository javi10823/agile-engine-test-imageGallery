import { View, Image } from 'react-native';

import styled from 'styled-components/native';
import { Container as _Container, Typography } from '../../../components';

import { rs } from '../../../styled';
import { W } from '../../../utils/dimensions';

export const Container = styled(_Container)({
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
});

export const InfoBox = styled(View)({
  padding: rs(16),
  width: '100%',
  position: 'absolute',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  bottom: 0,
});

export const CameraBox = styled(View)({});

export const Picture = styled(Image)({
  height: rs(400),
  width: W,
});

export const RowBox = styled(View)({
  flexDirection: 'row',
});

export const ActionImage = styled(Image)({
  height: rs(50),
  width: rs(50),
  marginHorizontal: rs(5),
});

export const InfoText = styled(Typography)({
  width: rs(200),
});
