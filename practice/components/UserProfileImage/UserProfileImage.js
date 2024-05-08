import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View>
      <View style={style.userImageContainer}>
        <Image style={{height: 50, width: 50}} source={props.profileImage} />
      </View>
    </View>
  );
};
UserProfileImage.protoTypes = {
  profileImage: PropTypes.any.isRequired,
};

export default UserProfileImage;
