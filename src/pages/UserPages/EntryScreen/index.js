import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Home from '../../Home'
import CustomDrawer_ from '../../../components/Drawer'
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {


    return (
        <Drawer.Navigator initialRouteName='PostsFeed'
            drawerContent={(props) => <CustomDrawer_ navigationProps={props} />}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}


export default CustomDrawer;
