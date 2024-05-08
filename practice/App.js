import {View,Text,TouchableOpacity,SafeAreaView,FlatList,} from 'react-native';
import React from 'react';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Chetna',
      id: 8,
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/circle.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston',
      likes: 1201,
      comments: 55,
      bookmark: 34,
      id: 1,
      profile: require('./assets/images/box.png'),
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Adam',
      lastName: 'Ben',
      location: 'New York',
      likes: 101,
      comments: 85,
      bookmark: 34,
      id: 2,
      profile: require('./assets/images/box.png'),
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Alisa',
      lastName: 'Spera',
      location: 'USA',
      likes: 12431,
      comments: 325,
      bookmark: 34,
      id: 3,
      profile: require('./assets/images/box.png'),
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Chetna',
      lastName: 'Rana',
      location: 'India',
      likes: 12031,
      comments: 23,
      bookmark: 34,
      id: 4,
      profile: require('./assets/images/box.png'),
      profileImage: require('./assets/images/circle.png'),
    },
    {
      firstName: 'Navya',
      lastName: 'Rathod',
      location: 'Mumbai',
      likes: 1201,
      comments: 55,
      bookmark: 34,
      id: 5,
      profile: require('./assets/images/box.png'),
      profileImage: require('./assets/images/circle.png'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        {/* <First /> */}
        <Title title="Lets Explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon size={20} icon={faEnvelope} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
      <FlatList
        data={userPosts}
        renderItem={({item}) => (
          <View style={globalStyle.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              profile={item.profile}
              likes={item.likes}
              comments={item.comments}
              bookmark={item.bookmark}
              profileImage={item.profileImage}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
