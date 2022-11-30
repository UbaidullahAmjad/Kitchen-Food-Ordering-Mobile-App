import * as React from 'react'
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {IMAGE} from '../Images/Images'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import LoginScreen from '../Screens/Auth/LoginScreen'
import EmailRegisterPage from '../Screens/Auth/EmailRegisterPage'
import MobileRegisterPage from '../Screens/Auth/MobileRegisterPage'
import OTPPage from '../Screens/Auth/OTPPage'
import ForgetPassword from '../Screens/Auth/ForgetPassword'
import Home from '../Screens/Home'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Settings from '../Screens/SettingScreens/Settings'
import Wallet from '../Screens/WalletScreens/Wallet'
import Notifications from '../Screens/NotificationScreens/Notifications'
import Messages from '../Screens/MessagScreens/Messages'
import MyOrders from '../Screens/OrderScreens/MyOrders'
import NotificationDescription from '../Screens/NotificationScreens/NotificationDescription'
import MessageScreen from '../Screens/MessagScreens/MessageScreen'
import DateTIme from '../Screens/OrderScreens/DateTIme'
import ReportAnIssue from '../Screens/OrderScreens/ReportAnIssue'
import ReportIssueDetail from '../Screens/OrderScreens/ReportIssueDetail'
import ContactUs from '../Screens/OrderScreens/ContactUs'
import AddCreditDebitCard from '../Screens/WalletScreens/AddCreditDebitCard'
import TopUpCredit from '../Screens/WalletScreens/TopUpCredit'
import SearchFood from '../Screens/HomeScreens/SearchFood'
import Filter from '../Screens/HomeScreens/Filter'
import ChefProfile from '../Screens/HomeScreens/ChefProfile'
import FoodDetail from '../Screens/HomeScreens/FoodDetail'
import Cart from '../Screens/HomeScreens/Carts'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export function CustomDrawerContent ({navigation}) {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#092DC1',
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={IMAGE.ICON_USER}
            style={{marginTop: 60, height: 100, width: 100, borderRadius: 60}}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
              fontWeight: 'bold',
            }}>
            Mian Talha
          </Text>
        </View>
        <ScrollView>
          <View style={{margin: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Messages'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialCommunityIcons
                name='android-messages'
                size={24}
                color='#BABBBD'
              />
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 16}}> Messages</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyOrders'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <FontAwesome name='reorder' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> My Orders</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Wallet'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialCommunityIcons name='wallet' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> Wallet</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notifications'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialIcons
                name='notifications-active'
                size={24}
                color='#BABBBD'
              />
              <View style={{marginLeft: 20}}>
                <Text> Notifications</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialIcons name='feedback' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> Feedback</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialCommunityIcons
                name='alert-circle-check-outline'
                size={24}
                color='#BABBBD'
              />
              <View style={{marginLeft: 20}}>
                <Text> Help</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Setting'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialIcons name='handyman' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> Account Settings</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <Entypo name='info' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> About Us</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 10,
          }}>
          <TouchableOpacity activeOpacity={0.6} style={{flexDirection: 'row'}}>
            <View>
              <Text style={{color: '#092DC1', fontWeight: 'bold'}}>
                Become a Pilot
              </Text>
            </View>
            <MaterialCommunityIcons
              name='human-child'
              size={20}
              color='#BABBBD'
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{flexDirection: 'row'}}>
            <View>
              <Text style={{color: '#092DC1', fontWeight: 'bold'}}>
                Become a Chef
              </Text>
            </View>
            <MaterialCommunityIcons name='chef-hat' size={20} color='#BABBBD' />
          </TouchableOpacity>
        </View>
        <View style={{height: 50, backgroundColor: '#092DC1'}}></View>
      </SafeAreaView>
    </>
  )
}

export function Draweral () {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Dashboard' component={Home} />
    </Drawer.Navigator>
  )
}

function Stackss () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='EmailRegisterPage'
          component={EmailRegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='MobileRegisterPage'
          component={MobileRegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='OTPPage'
          component={OTPPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ForgetPassword'
          component={ForgetPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Setting'
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Wallet'
          component={Wallet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='AddCreditDebitCard'
          component={AddCreditDebitCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='TopUpCredit'
          component={TopUpCredit}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Notifications'
          component={Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='NotificationDescription'
          component={NotificationDescription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Messages'
          component={Messages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='MessageScreen'
          component={MessageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='MyOrders'
          component={MyOrders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DateTIme'
          component={DateTIme}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ReportAnIssue'
          component={ReportAnIssue}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ReportIssueDetail'
          component={ReportIssueDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ContactUs'
          component={ContactUs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='SearchFood'
          component={SearchFood}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Filter'
          component={Filter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ChefProfile'
          component={ChefProfile}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name='FoodDetail'
          component={FoodDetail}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DraweralScreen'
          component={Draweral}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stackss
