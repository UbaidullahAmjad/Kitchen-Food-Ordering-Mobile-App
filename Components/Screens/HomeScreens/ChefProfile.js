import React, {Component} from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const ChefData = [
  {
    id: 1,
    image: require('../../Images/Food1.jpg'),
    title: 'Lets get rolling.',
    time: '3 days ago',
    description: 'Order food for Rs.350 and delivery for Rs.50 Only.',
  },
  {
    id: 2,
    image: require('../../Images/Food3.jpg'),
    title: 'Lets get rolling.',
    description: 'Order food for Rs.350 and delivery for Rs.50 Only.',
  },
  {
    id: 3,
    image: require('../../Images/Food3.jpg'),
    title: 'Lets get rolling.',
    description: 'Order food for Rs.350 and delivery for Rs.50 Only.',
  },
  {
    id: 4,
    image: require('../../Images/Food1.jpg'),
    title: 'Lets get rolling.',
    description: 'Order food for Rs.350 and delivery for Rs.50 Only.',
  },
]

export default class ChefProfile extends Component {
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('FoodDetail')}
        activeOpacity={0.7}
        style={{
          width: '44%',
          margin: 10,
          elevation: 1,
          backgroundColor: 'white',
        }}>
        <Image
          source={item.image}
          style={{width: '100%'}}
          resizeMode='stretch'
        />
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>{'Biryani'}</Text>
          </View>
          <Text style={{marginTop: 5, color: 'black'}}>Price 100</Text>
          <Text style={{marginTop: 5, color: 'black'}}>Calories 250</Text>
          <Text style={{marginTop: 5, color: 'black'}}>Time 30min</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 50}}></View>
        <Text
          style={{
            position: 'absolute',
            fontSize: 14,
            color: 'orange',
            fontWeight: 'bold',
            width: '25%',
            right: 0,
            top: 50,
          }}>
          3.7 <Text style={{color: 'black'}}>(100)</Text>
        </Text>
        <View
          style={{
            margin: 20,
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../Images/man_picture.jpg')}
              style={{height: 100, width: 100, margin: 10, borderRadius: 50}}
            />
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18}}>Talha</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 14, color: '#A0A0A0', marginTop: 10}}>
                  Location ABC
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              right: 5,
              bottom: -20,
              position: 'absolute',
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 10,
                margin: 5,
                marginTop: 0,
                backgroundColor: '#2B4498',
              }}>
              <MaterialCommunityIcons
                name='email'
                size={24}
                color='white'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 10,
                marginTop: 0,
                margin: 5,
                backgroundColor: '#2B4498',
              }}>
              <Entypo
                name='phone'
                size={24}
                color='white'
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={ChefData}
          style={{marginTop: 30}}
          numColumns={2}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
