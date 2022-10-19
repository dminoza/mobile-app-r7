import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import axios from '../../../plugins/axios';

export default function Login() {
    const navigation = useNavigation();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    return (
        <View style={styles.container}>
            <TextInput 
            placeholder="Email"
            value={data.email}
            onChangeText={(text) => {
                setData({
                    ...data,
                    email: text
                })
            }}/>
            <TextInput
            placeholder="Password"
            value={data.password}
            onChangeText={(text) => {
                setData({
                    ...data,
                    password: text
                })
            }} />
            <Button title="Login" onPress={() => {
                // navigation.navigate('dashboard');
                axios.post('rest_auth/login/', data).then(response => {
                    navigation.navigate('dashboard');
                }).catch(error => {
                    console.log('error dinhi');
                });
                // 
            }} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });