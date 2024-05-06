import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Name = ({ name }) => {

    return (
        <View>
            <Text style={styles.text}>Hello {name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'red'
    }

})

export default Name