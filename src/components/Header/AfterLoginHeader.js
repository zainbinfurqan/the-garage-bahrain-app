import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native'
import styles from './style';

function AfterLoginHeader(props) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.leftIcon} source={props.leftIcon} />
            </View>
            <View style={styles.middle}>
                <Text style={styles.headerText}>{props.headerText}</Text>
            </View>
            <View style={styles.right}></View>
        </View>
    );
}

AfterLoginHeader.defaultProps = {
    leftIcon: require('../../assets/icons/menu.png'),
    headerText: 'Header'
}

export default AfterLoginHeader;