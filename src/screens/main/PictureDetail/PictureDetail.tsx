import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';

import State from '../../../reducers';
import { Container, Picture, InfoBox, ActionImage, RowBox, InfoText } from './styles';
import { filter, share } from '../../../assets/images';
import { compose } from 'redux';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

import ImageZoom from 'react-native-image-pan-zoom';
import { W, H } from '../../../utils/dimensions';
import { getPictureDetail } from '../../../actions/pictures';

import Share from 'react-native-share';

interface Props {
  loading: boolean;
  detail: any;
  error: string | boolean;
  getDetailConnected: (any) => void;
  id: string;
}

class PictureDetail extends React.Component<Props> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
  };

  componentDidMount() {
    const { getDetailConnected, id } = this.props;

    getDetailConnected(id);
  }

  onSharePress = () => {
    const { detail } = this.props;

    Share.open({ url: detail.full_picture });
  };

  render() {
    const { loading, detail, error } = this.props;
    return (
      <Container>
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : error ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <>
            <ImageZoom cropWidth={W} cropHeight={H} imageWidth={W} imageHeight={400}>
              <Picture source={{ uri: detail.full_picture }} />
            </ImageZoom>
            <InfoBox>
              <View>
                <InfoText color="white" size={22} variant="bold" numberOfLines={1}>
                  {detail.author}
                </InfoText>
                <InfoText color="white" size={14} variant="bold" numberOfLines={1}>
                  {detail.camera}
                </InfoText>
              </View>
              <RowBox>
                <ActionImage source={filter} style={{ tintColor: 'white' }} />
                <TouchableWithoutFeedback onPress={this.onSharePress}>
                  <ActionImage source={share} style={{ borderRadius: 200 }} />
                </TouchableWithoutFeedback>
              </RowBox>
            </InfoBox>
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ pictures }) => ({
  loading: pictures.detailLoading,
  detail: pictures.detailData,
  error: pictures.detailError,
});

const mapDispatchToProps = dispatch => ({
  getDetailConnected: id => dispatch(getPictureDetail(id)),
});

export default compose(
  withMappedNavigationParams(),
  connect(mapStateToProps, mapDispatchToProps),
)(PictureDetail);
