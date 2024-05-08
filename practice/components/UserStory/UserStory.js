import {View, Text, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={props.profileImage} />

      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};
UserStory.protoTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};

export default UserStory;
