import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import axios from '../../plugins/axios';

export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>
                Dashboard Here
            </Text>
            <Button title="Logout" onPress={() => {
                // axios.defaults.headers.common['Authorization'] = 'Token d602f41bf37402da6e87c94394d9e1b3b0ae09dd'
                // axios.post('rest_auth/logout/').then(response => {
                //     navigation.navigate('login');
                // }).catch(error => {
                //     console.log('naay error')
                // })
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