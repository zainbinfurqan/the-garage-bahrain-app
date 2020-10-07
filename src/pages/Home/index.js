import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native'

import AfterLoginHeader from '../../components/Header/AfterLoginHeader'
import styles from './style'

function Home(props) {
    return (
        <SafeAreaView style={styles.container}>
            <AfterLoginHeader />

        </SafeAreaView>
    );
}

export default Home;