import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

const Title = props => {
  return (
    <SafeAreaView>
      <View>
        <Text style={style.title}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
