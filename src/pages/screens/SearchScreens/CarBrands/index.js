import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import AfterLoginHeader from '../../../../components/Header/AfterLoginHeader'
import { data } from '../../../../configuration/json';
import styles from './style'

function CarBrands(props) {
    return (
        <SafeAreaView style={styles.container}>
            <AfterLoginHeader isMenu={false} />
            <Text>Car For Sale</Text>
            <View style={styles.categoryHeadingMain}>
                <Text style={styles.categoryHeadingText}>Select Car Brand</Text>
            </View>
            {/* <View> */}
            <FlatList
                data={data.carBrands}
                renderItem={({ item, index }) => (
                    <View style={styles.brandMain}>
                        <View style={styles.left}>
                            <Image style={styles.leftIcon} source={item.image} />
                        </View>
                        <View style={styles.right}>
                            <Text>{item.name}</Text>
                        </View>
                    </View>
                )}
            />
            {/* </View> */}
        </SafeAreaView>
    );
}

export default CarBrands;