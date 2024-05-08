import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeader: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  postImage: {
    height: 300,
    width: '100%',
    borderRadius: 20,
    margin: 10,
    marginRight: 50,
  },
  postFooter: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  postText: {
    marginLeft: 10,
  },
});

export default style;
