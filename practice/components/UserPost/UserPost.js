import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookBookmark,
  faEllipsisH,
  faHeart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

const UserPost = props => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <UserProfileImage
          profileImage={props.profileImage}
          imageDimension={48}
        />
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <Text>
            {props.firstName} {props.lastName}
          </Text>
          {props.location && <Text>{props.location}</Text>}
        </View>
        {/* <FontAwesomeIcon icon={faEllipsisH}/> */}
      </View>
      <View>
        <Image
          style={{
            height: 300,
            width: '100%',
            borderRadius: 20,
            margin: 10,
            marginRight: 50,
          }}
          source={props.profile}
        />
      </View>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} />
          <Text style={{marginLeft: 3}}>{props.likes}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <FontAwesomeIcon icon={faMessage} />
          <Text style={{marginLeft: 3}}>{props.comments}</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <FontAwesomeIcon icon={faBookBookmark} />
          <Text style={{marginLeft: 3}}>{props.bookmark}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  profile: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmark: PropTypes.number.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserPost;
