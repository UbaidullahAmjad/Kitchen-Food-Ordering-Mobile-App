import React, {Component} from 'react'
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
  TextInput,
} from 'react-native'
import RNAndroidLocationEnabler from 'react-native-android-location-enabler'
import MapView, {Circle, PROVIDER_GOOGLE} from 'react-native-maps'

// import Geolocation from '@react-native-community/geolocation'
import Geolocation from 'react-native-geolocation-service'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

const windowWidth = Dimensions.get('window').width
// const windowHeight = Dimensions.get('window').height
export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      longitude: 37.78825,
      latitude: -122.4324,
    }
  }

  componentDidMount () {
    this.watchPosition()
  }

  async watchPosition () {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'YourProject App Location Permission',
          message: 'YourProject App needs access to location.',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        }).then(data => {
          if (data === 'already-enabled') {
            try {
              return Geolocation.getCurrentPosition(info => {
                this.setState({
                  latitude: info.coords.latitude,
                  longitude: info.coords.longitude,
                })
              })
            } catch (error) {
              alert(error.message)
            }
          } else {
            setInterval(() => {
              return Geolocation.getCurrentPosition(info => {
                this.setState({
                  latitude: info.coords.latitude,
                  longitude: info.coords.longitude,
                })
              })
            }, 1000)
          }
        })
      } else {
        alert('Permission Denied')
      }
    } catch (err) {
      alert(err)
    }
  }

  render () {
    const {longitude, latitude} = this.state
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' translucent={true} />
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          // showsUserLocation={true}
          showsTraffic={true}>
          <MapView.Marker
            coordinate={{
              latitude,
              longitude,
            }}
            title={'Your Location'}
            draggable
          />
          <Circle
            center={{latitude, longitude}}
            radius={400}
            fillColor={'rgba(200, 300, 200, 0.5)'}
          />
        </MapView>

        <View
          activeOpacity={0.7}
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            top: 40,
            right: 0,
            left: 0,
            borderRadius: 30,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              onPress={() => this.props.navigation.openDrawer()}
              style={{padding: 15, marginLeft: 5}}
              name='menu'
              color='black'
              size={25}
            />

            <AntDesign
              style={{position: 'absolute', right: 40, zIndex: 1, top: 15}}
              name='search1'
              color='grey'
              size={20}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              style={{width: '100%'}}
              onPress={() => this.props.navigation.navigate('SearchFood')}>
              <TextInput
                editable={false}
                selectionColor='#2C419A'
                placeholder='  Search Food ...'
                placeholderTextColor='grey'
                style={{
                  height: 50,
                  color: '#2C419A',
                  marginLeft: 5,
                  width: '75%',
                  backgroundColor: 'white',
                  borderColor: 'grey',
                  borderWidth: 1,
                }}></TextInput>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            position: 'absolute',
            backgroundColor: '#2C429B',
            bottom: 30,
            right: 30,
            borderRadius: 30,
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            style={{padding: 15}}
            name='bell'
            color='white'
            size={25}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: windowWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
