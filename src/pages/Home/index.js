import React from 'react';
import { View, TouchableOpacity, FlatList, Text, SafeAreaView, Image } from 'react-native'

import AfterLoginHeader from '../../components/Header/AfterLoginHeader'
import CustomAdds from '../../components/CustomAdds'
import { data } from '../../configuration/json'
import Banner from '../../components/Banner'
import styles from './style'
import { ScrollView } from 'react-native-gesture-handler';

function Home(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <AfterLoginHeader />
                <Banner />
                <View style={{ height: 340 }}>
                    <FlatList
                        data={data.categories}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { console.log('TouchableOpacity') }}
                                style={styles.categoriesMain}>
                                <Image style={styles.categoryImage} source={item.image} />
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.value}
                        numColumns={2}
                    />
                </View>
                <CustomAdds />
            </ScrollView>
            <View style={styles.addPost}></View>
        </SafeAreaView>
    );
}

export default Home;