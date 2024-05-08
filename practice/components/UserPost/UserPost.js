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
import style from './style';

const UserPost = props => {
  return (
    <SafeAreaView>
      <View style={style.postContainer}>
        <UserProfileImage
          profileImage={props.profileImage}
          imageDimension={48}
        />
        <View style={style.postHeader}>
          <Text>
            {props.firstName} {props.lastName}
          </Text>
          {props.location && <Text>{props.location}</Text>}
        </View>
        {/* <FontAwesomeIcon icon={faEllipsisH}/> */}
      </View>
      <View>
        <Image
          style={style.postImage}
          source={props.profile}
        />
      </View>
      <View style={style.postFooter}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} />
          <Text style={style.postText}>{props.likes}</Text>
        </View>
        <View style={style.postFooter}>
          <FontAwesomeIcon icon={faMessage} />
          <Text style={style.postText}>{props.comments}</Text>
        </View>

        <View style={style.postFooter}>
          <FontAwesomeIcon icon={faBookBookmark} />
          <Text style={style.postText}>{props.bookmark}</Text>
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
