import { View, Text, Button, Alert, TextInput, Pressable, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'


const First = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        Alert.alert('Count Changed')
    }, [count])
    return (
        <View>
           
            <Text>{count}</Text>
            <Button onPress={() => setCount(count + 1)} title='Increment' />
            <Button onPress={() => setCount(count - 1)} title='Decrement' />

            <TextInput placeholder='Enter User name' onChangeText={value => setName(value)} value={name} />

            <TextInput placeholder='Enter User age' value={age} onChangeText={value => setAge(value)} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Pressable style={{ backgroundColor: 'black', alignItems: 'center', width: '30%', height: 25, borderRadius: 25 }}><Text style={{ color: 'white' }} onPress={() => Alert.alert('Data saved', `${name} , ${age}`)}>Done</Text></Pressable>
            </View>

            <Switch value={toggle} onValueChange={value => setToggle(value)} />

            {toggle && (
                <View>
                    <Text>{name}</Text>
                    <Text>{age}</Text>
                </View>

            )}


        </View>
    )
}

export default First