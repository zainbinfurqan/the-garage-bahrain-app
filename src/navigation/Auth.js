
import * as React from 'react';
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
// import { connect } from 'react-redux'
// routes
// import PendingPosts from '../screens/adminDashboard/pendingPosts'
// import AllUsers from '../screens/adminDashboard/allUsers'
// import AllPosts from '../screens/adminDashboard/allPosts'
// import ProductDetailView from '../screens/productDetail'
// import ForgetPassword from '../screens/forgetPassword'
// import AdminDashbaord from '../screens/adminDashboard'
// import EditableView from '../components/EditableView'
// import Uploadproduct from '../screens/uplaodProduct'
// import ApiResponse from '../components/apiresponse'
// import Registration from '../screens/registration'
// import Notification from '../screens/notification'
// import CommonAction from '../redux/common/action'
// import MessageList from '../screens/message'
// import Dashboard from '../screens/dashboard'
// import Loading from '../components/loading'
// import MainScreen from '../screens/main'
// import Profile from '../screens/profile'
// import PostsFeed from '../screens/feed'
// import Login from '../screens/login'
// import Chat from '../screens/chat'
// import FAQ from '../screens/faq'
import EntryScreen from '../pages/UserPages/EntryScreen'
const Stack = createStackNavigator();

function Auth(props) {

    React.useEffect(() => {
        // props.fetchCategory()
    }, [])

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator
                    initialRouteName='EntryScreen'
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <Stack.Screen name="EntryScreen" component={EntryScreen} />
                    {/* <Stack.Screen name="ProductDetailView" component={ProductDetailView} />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                    <Stack.Screen name="AdminDashbaord" component={AdminDashbaord} />
                    <Stack.Screen name="Uploadproduct" component={Uploadproduct} />
                    <Stack.Screen name="Registration" component={Registration} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="PendingPosts" component={PendingPosts} />
                    <Stack.Screen name="EditableView" component={EditableView} />
                    <Stack.Screen name="MessageList" component={MessageList} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="PostsFeed" component={PostsFeed} />
                    <Stack.Screen name="AllUsers" component={AllUsers} />
                    <Stack.Screen name="AllPosts" component={AllPosts} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Chat" component={Chat} />
                    <Stack.Screen name="FAQ" component={FAQ} /> */}
                </Stack.Navigator>
            </SafeAreaView>
            {/* {props.loading && <Loading />} */}
            {/* {props.apiResponse.flag && <ApiResponse />} */}
        </>

    );
}



export default Auth;