import React from 'react';
import { View, SafeAreaView, Text, FlatList, Image, } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import AfterLoginHeader from '../../components/Header/AfterLoginHeader';
import styles from './style'
import { data } from '../../configuration/json'
import { CONSTANTS } from '../../configuration/constants';

function SerachPanel(props) {
    return (
        <SafeAreaView style={styles.container}>
            {console.log(data.products)}
            <AfterLoginHeader back={true} />
            <View style={styles.categoryHeading}>
                <Text style={styles.categoryText}>Search in car</Text>
            </View>
            <View style={{ height: 40, }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {data.carBrands.map((_, i) => {
                        return (
                            <View key={i} style={styles.singleCategory}>
                                <Text style={styles.singleCategoryText}>{_.name}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.headingMain}>
                <View style={styles.headingLeft}>
                    <Text style={styles.headingLeftText}>Category For Sale</Text>
                </View>
                <View style={styles.switchMenu}>
                    <Image style={styles.gridIcon} source={require('../../assets/icons/grid.png')} />
                    <Image style={styles.listView} source={require('../../assets/icons/list.png')} />
                </View>
            </View>
            <FlatList
                data={data.products}
                renderItem={({ item, index }) => (
                    <View style={{
                        elevation: CONSTANTS.EVELUATE,
                        margin: 5,
                        width: '47%', borderColor: 'red', padding: 5
                    }}>
                        <Image style={{ height: 140, width: '100%' }} source={item.image} />
                        <Text>{item.text}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

export default SerachPanel;