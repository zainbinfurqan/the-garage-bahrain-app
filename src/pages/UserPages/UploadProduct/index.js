import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Button, FlatList, Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AfterLoginHeader from '../../../components/Header/AfterLoginHeader';
import CustomButton from '../../../components/Button'
import styles from './style'
import { CONSTANTS } from '../../../configuration/constants';

function UploadProduct(props) {

    const [images, setImages] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <AfterLoginHeader back={true} />
                <View style={{ paddingTop: 5, marginBottom: 5 }}>
                    <Text style={styles.headingText}>What you want to sell</Text>
                    <View style={styles.selectCategoryMain}>
                        <Text style={styles.selectCateogryText}>Select Category</Text>
                    </View>
                    <Text style={styles.headingText}>What you want to sell</Text>
                    <TextInput style={styles.inputArea} numberOfLines={6} />
                    <Text style={styles.headingText}>What you want to sell</Text>
                    <View style={styles.priceMain}>
                        <View style={styles.inputTextPrice}>
                            <TextInput style={styles.inputText} />
                        </View>
                        <View style={styles.priceIcon}>
                            <Text style={styles.iconText}>BD</Text>
                        </View>
                    </View>
                    <View style={styles.selectedImageSlider} >
                        <ScrollView horizontal={true} style={{}}>
                            <View style={styles.adImageMain}>
                                <Image style={styles.uplaodImageIcon} source={require('../../../assets/icons/add-image-icon.png')} />
                                <Text style={styles.uploadImageText}>ADD IMAGE</Text>
                            </View>
                            {images.map((_, i) => {
                                return (
                                    <View style={styles.adImageMain}>
                                        <Image style={styles.uplaodImageIcon} source={require('../../../assets/icons/add-image-icon.png')} />
                                        <Text style={styles.uploadImageText}>ADD IMAGE</Text>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <CustomButton
                        customStyle={styles.Button}
                        textColor={CONSTANTS.WHITE_COLOR}
                        color={CONSTANTS.DARK_YELLOW_COLOR}
                        title="Upload Product" />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default UploadProduct;