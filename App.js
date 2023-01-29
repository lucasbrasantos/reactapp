import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import Title from './src/components/Title';

export default function App() {
    return (
        <View style={styles.container}>
            <Title/>
            <Main/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e2e2e',
        paddingTop: 80,
    },
});
