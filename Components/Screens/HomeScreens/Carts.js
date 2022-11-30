import React, {Component} from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default class Cart extends Component {
  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 100, backgroundColor: '#0123B4'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '15%',
              margin: 20,
            }}>
            <AntDesign
              style={{
                backgroundColor: 'white',
                borderRadius: 30,
              }}
              onPress={() => this.props.navigation.goBack()}
              name='arrowleft'
              size={24}
              color='#0123B4'
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
                marginLeft: 20,
              }}>
              Cart
            </Text>
          </View>
        </View>

        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16}}>Item no 1</Text>
            <Text style={{fontSize: 16}}>Rs. 450</Text>
            <Text style={{fontSize: 16}}>1</Text>
            <View style={{flexDirection: 'row'}}>
              <AntDesign
                style={{
                  backgroundColor: '#2B409A',
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                }}
                name='plus'
                size={24}
                color='white'
              />
              <AntDesign
                style={{
                  marginLeft: 5,
                  backgroundColor: '#2B409A',
                  borderBottomRightRadius: 30,
                  borderTopRightRadius: 30,
                }}
                name='minus'
                size={24}
                color='white'
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16}}>Item no 1</Text>
            <Text style={{fontSize: 16}}>Rs. 450</Text>
            <Text style={{fontSize: 16}}>1</Text>
            <View style={{flexDirection: 'row'}}>
              <AntDesign
                style={{
                  backgroundColor: '#2B409A',
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                }}
                name='plus'
                size={24}
                color='white'
              />
              <AntDesign
                style={{
                  marginLeft: 5,
                  backgroundColor: '#2B409A',
                  borderBottomRightRadius: 30,
                  borderTopRightRadius: 30,
                }}
                name='minus'
                size={24}
                color='white'
              />
            </View>
          </View>

          <View
            style={{
              borderColor: 'grey',
              borderWidth: 0.5,
              margin: 20,
            }}></View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{fontSize: 16}}>Subtotal (Incl.GST</Text>
            <Text style={{fontSize: 16}}>Rs. 1000</Text>
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              Search Delivery Person
            </Text>
          </TouchableOpacity>

          <Text style={{marginLeft: 20, fontSize: 16}}>
            Delivery Charges Rs. 75
          </Text>

          <View
            style={{
              borderColor: 'grey',
              borderWidth: 0.5,
              margin: 20,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 0,
              margin: 20,
            }}>
            <Text style={{fontSize: 16}}>Total</Text>
            <Text style={{fontSize: 16}}>Rs. 1075</Text>
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: '80%',
              margin: 10,
              backgroundColor: '#0123B4',
              elevation: 5,
              padding: 15,
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              Confirm Order
            </Text>
          </TouchableOpacity>
          <Fontisto
            name='date'
            size={35}
            color='#0123B4'
            style={{paddingTop: 20}}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    margin: 20,
    backgroundColor: '#0123B4',
    elevation: 5,
    padding: 15,
  },
})
