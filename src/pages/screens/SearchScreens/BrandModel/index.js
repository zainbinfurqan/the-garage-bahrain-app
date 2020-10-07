import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import AfterLoginHeader from '../../../../components/Header/AfterLoginHeader'
import { data } from '../../../../configuration/json';
import styles from './style'

function BrandModels(props) {
    return (
        <SafeAreaView style={styles.container}>
            <AfterLoginHeader isMenu={false} />
            <Text>Brands Name</Text>
            <View style={styles.categoryHeadingMain}>
                <Text style={styles.categoryHeadingText}>Select Brand Model</Text>
            </View>
            <FlatList
                data={data.BrandModels}
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
        </SafeAreaView>
    );
}

export default BrandModels;