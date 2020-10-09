import React, { } from 'react';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ScrollView } from 'react-native';
import Style from './style'
import Item from './Items'
import { useSelector, useDispatch } from 'react-redux'
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
    const navigation = useNavigation();
    const store = useSelector(store => store)
    console.log(store.auth)
    function navigateTo(route) {
        props.navigationProps.navigation.closeDrawer()
        navigation.navigate(route);
    }

    // async function logOut() {
    //     props.loading(true)
    //     try {
    //         setTimeout(() => {
    //             props.logout()
    //             props.loading(false)
    //         }, 2000);
    //     } catch (error) {
    //         props.loading(false)
    //     }
    // }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ height: 100, }}>
                <Image style={Style.logo} source={require('../../assets/images/logo.png')} />
            </View>
            <Item itemText='Home' icon={require('../../assets/icons/home.png')} navigateTo={() => navigateTo('EntryScreen')} />
            <View style={Style.line} />
            {!store.auth.isLogin && <>
                <Item itemText='Registration' icon={require('../../assets/icons/registration.png')} navigateTo={() => navigateTo('Registration')} />
                <View style={Style.line} />
            </>}
            {store.auth.isLogin && store.auth.userData.role.includes('admin') && <>
                <Item itemText='Admin Dashboard' icon={require('../../assets/icons/admin.png')} navigateTo={() => navigateTo('AdminDashbaord')} />
                <View style={Style.line} />
            </>}
            {!store.auth.isLogin && <>
                <Item itemText='Login' icon={require('../../assets/icons/login.png')} navigateTo={() => navigateTo('Login')} />
                {/* <View style={Style.line} /> */}

            </>}
            {store.auth.isLogin && <>
                <Item itemText='Setting' icon={require('../../assets/icons/setting.png')} navigateTo={() => navigateTo('Profile')} />
                {/* <View style={Style.line} /> */}
            </>}
            {/* <Item itemText='FAQ' icon={require('../assets/icons/faq.png')} navigateTo={() => navigateTo('FAQ')} /> */}
            <View style={Style.line} />
            {store.auth.isLogin && <>
                <Item itemText='Upload Product' icon={require('../../assets/icons/upload.png')} navigateTo={() => navigateTo('Uploadproduct')} />
                {/* <View style={Style.line} /> */}
            </>}
            {store.auth.isLogin && <>
                <Item itemText='Dashboard' icon={require('../../assets/icons/dashboard.png')} navigateTo={() => navigateTo('Dashboard')} />
                {/* <View style={Style.line} /> */}
            </>}
            {/* {store.auth.isLogin && <>
                <Item itemText='Message' icon={require('../../assets/icons/chat.png')} navigateTo={() => navigateTo('MessageList')} />
                <View style={Style.line} />
            </>} */}
            {store.auth.isLogin && <>
                <Item itemText='Logout' icon={require('../../assets/icons/login.png')} navigateTo={() => logOut()} />
                {/* <View style={Style.line} /> */}
            </>}

        </ScrollView>
    )
}


export default CustomDrawer;
