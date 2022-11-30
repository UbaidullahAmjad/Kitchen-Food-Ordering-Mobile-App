import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const FoodData = [
  {
    id: 1,
    image: require('../../Images/man_picture.jpg'),
    name: 'Hania',
    description: 'Speciality: Biryani, Chicken Kurahi.',
    Count: 'Distance 10m.',
  },
  {
    id: 2,
    image: require('../../Images/man_picture.jpg'),
    name: 'Arsh',
    description: 'Speciality: Biryani, Chicken Kurahi.',
    Count: 'Distance 10m.',
  },
  {
    id: 3,
    image: require('../../Images/man_picture.jpg'),
    name: 'Maryum',
    description: 'Speciality: Biryani, Chicken Kurahi.',
    Count: 'Distance 10m.',
  },
  {
    id: 4,
    image: require('../../Images/man_picture.jpg'),
    name: 'Name',
    description: 'Speciality: Biryani, Chicken Kurahi.',
    Count: 'Distance 10m.',
  },
  {
    id: 5,
    image: require('../../Images/man_picture.jpg'),
    name: 'Talha',
    description: 'Speciality: Biryani, Chicken Kurahi.',
    Count: 'Distance 10m.',
  },
  {
    id: 6,
    image: require('../../Images/man_picture.jpg'),
    name: 'Maryum',
    description: 'Speciality: Biryani, Chicken Kurahi.',
    Count: 'Distance 10m.',
  },
]

export default class SearchFood extends Component {
  renderItem = ({item}) => {
    return (
      <>
        <Text
          style={{
            position: 'absolute',
            fontSize: 12,
            color: 'black',
            width: '25%',
            right: 15,
            top: 20,
          }}>
          {item.Count}
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ChefProfile')}
          activeOpacity={0.7}
          style={{
            margin: 20,
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={item.image}
              style={{height: 80, width: 80, margin: 10, borderRadius: 50}}
            />
            <View style={{ marginTop: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18}}>{item.name}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 14, color: '#A0A0A0', marginTop: 10}}>
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderColor: 'silver',
            borderWidth: 0.5,
            marginLeft: 30,
            marginRight: 30,
          }}></View>
      </>
    )
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 100, backgroundColor: '#0123B4'}}>
          <AntDesign
            style={{
              borderRadius: 30,
              alignSelf: 'flex-end',
              marginTop: 50,
              marginRight: 20,
            }}
            onPress={() => this.props.navigation.navigate('Filter')}
            name='bars'
            size={30}
            color='white'
          />
        </View>
        <FlatList
          data={FoodData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
