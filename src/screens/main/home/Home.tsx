import React, { Component } from 'react';
import { TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';

import { getAllPictures } from '../../../actions/pictures';
import { logIn } from '../../../actions/auth';

import SplashScreen from 'react-native-splash-screen';

import { goToPage } from '../../../navigation';

import { Container, ImageGalery, Picture, Box } from './styles';

interface Props {
  logInConnected: () => void;
  getImagesConnected: (any) => void;
  userLogged: boolean;
  loading: boolean;
  hasMore: boolean;
  actualPage: number;
  allPictures: any;
  picturesError: string | boolean;
}

class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Gallery App',
    headerStyle: {
      backgroundColor: '#3F51B5',
    },
    headerTintColor: '#fff',
  };

  componentDidMount() {
    SplashScreen.hide();

    const { logInConnected } = this.props;

    logInConnected();
  }

  componentDidUpdate(prevProps: any) {
    const { userLogged, getImagesConnected } = this.props;

    if (userLogged !== prevProps.userLogged && userLogged) getImagesConnected(1);
  }

  getMorePictures = () => {
    const { getImagesConnected, loading, hasMore, actualPage } = this.props;

    if (!loading && hasMore) getImagesConnected(actualPage + 1);
  };

  goToDetail = item => () => goToPage('PictureDetail', { id: item.id });

  render() {
    const { loading, allPictures, picturesError } = this.props;

    return (
      <Container>
        {loading && !allPictures.length ? (
          <Box>
            <ActivityIndicator size="large" color="white" />
          </Box>
        ) : picturesError ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <ImageGalery
            data={allPictures}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={this.goToDetail(item)}>
                <Picture source={{ uri: item.cropped_picture }} />
              </TouchableWithoutFeedback>
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ width: '100%' }}
            onEndReached={this.getMorePictures}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ auth, pictures }) => ({
  userLogged: auth.logged,
  picturesError: pictures.AllPicturesError,
  loading: pictures.AllPicturesLoading,
  allPictures: pictures.AllPicturesData.pictures,
  actualPage: pictures.AllPicturesData.page,
  hasMore: pictures.AllPicturesData.hasMore,
});

const mapDispatchToProps = dispatch => ({
  logInConnected: () => dispatch(logIn()),
  getImagesConnected: page => dispatch(getAllPictures(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
