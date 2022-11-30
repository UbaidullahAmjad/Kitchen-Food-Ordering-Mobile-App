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

const MessageData = [
  {
    id: 1,
    image: require('../../Images/man_picture.jpg'),
    name: 'Name',
    time: 'Time,Date',
    description: 'Text Message',
    Count: 1,
  },
  {
    id: 2,
    image: require('../../Images/man_picture.jpg'),
    name: 'Name',
    time: 'Time,Date',
    description: 'Text Message',
    Count: 2,
  },
  {
    id: 3,
    image: require('../../Images/man_picture.jpg'),
    name: 'Name',
    time: 'Time,Date',
    description: 'Text Message',
    Count: 1,
  },
  {
    id: 4,
    image: require('../../Images/man_picture.jpg'),
    name: 'Name',
    time: 'Time,Date',
    description: 'Text Message',
    Count: 1,
  },
  {
    id: 5,
    image: require('../../Images/man_picture.jpg'),
    name: 'Name',
    time: 'Time,Date',
    description: 'Text Message',
    Count: 1,
  },
  {
    id: 6,
    image: require('../../Images/man_picture.jpg'),
    name: 'Name',
    time: 'Time,Date',
    description: 'Text Message',
    Count: 5,
  },
]

export default class Messages extends Component {
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('MessageScreen')}
        activeOpacity={0.7}
        style={{
          margin: 20,
          marginTop: 10,
          marginBottom: 10,
          elevation: 1,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={item.image}
            style={{height: 80, width: 80, margin: 10, borderRadius: 50}}
          />
          <View style={{margin: 10, marginTop: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18}}>{item.name}</Text>
              <Text
                style={{
                  marginLeft: '50%',
                  fontSize: 14,
                  color: 'white',
                  backgroundColor: '#2A4297',
                  padding: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 30,
                }}>
                {item.Count}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14, color: '#A0A0A0', marginTop: 10}}>
                {item.description}
              </Text>
              <Text
                style={{
                  marginLeft: '20%',
                  fontSize: 14,
                  color: '#A0A0A0',
                  marginTop: 10,
                }}>
                {item.time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

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
              Messages
            </Text>
          </View>
        </View>
        <FlatList
          data={MessageData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
