import React from 'react';
import { View, SafeAreaView, Text, FlatList, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import AfterLoginHeader from '../../components/Header/AfterLoginHeader';
import styles from './style'
import { data } from '../../configuration/json'

function SerachPanel(props) {
    return (
        <SafeAreaView style={styles.container}>
            <AfterLoginHeader back={true} />
            <View style={styles.categoryHeading}>
                <Text style={styles.categoryText}>Search in car</Text>
            </View>
            <View style={{ height: 40, }}>
                <ScrollView horizontal={true} >
                    {data.carBrands.map((_, i) => {
                        return (
                            <View style={styles.singleCategory}>
                                <Text style={styles.singleCategoryText}>{_.name}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: .8, padding: 5 }}>
                    <Text>Category For Sale</Text>
                </View>
                <View style={{
                    flex: .2,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <Image style={{ height: 20, width: 20, alignSelf: 'center' }} source={require('../../assets/icons/grid.png')} />
                    <Image style={{ height: 20, width: 20, alignSelf: 'center' }} source={require('../../assets/icons/list.png')} />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SerachPanel;