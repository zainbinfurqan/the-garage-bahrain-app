import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native'
import styles from './style'

function Banner(props) {
    return (
        <View style={styles.container}>
            <Image resizeMode="cover" style={styles.bannerPic} source={props.bannerPic} />
        </View>
    );
}

Banner.defaultProps = {
    bannerPic: require('../../assets/images/banner-home.png'),
}

export default Banner;