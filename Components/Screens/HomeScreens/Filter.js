import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CheckBox from '@react-native-community/checkbox'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const OffersData = [
  {id: 1, name: 'Maximum orders Delivered'},
  {id: 2, name: 'Top Ranked'},
  {id: 3, name: 'Nearest'},
  {id: 4, name: 'Deals'},
]

const CuisineData = [
  {id: 1, name: 'Pakistan'},
  {id: 2, name: 'Italian'},
  {id: 3, name: 'Seafood'},
  {id: 4, name: 'Thai'},
  {id: 5, name: 'Middle eastern'},
  {id: 6, name: 'Vegetarian'},
  {id: 7, name: 'European'},
  {id: 8, name: 'Healthy'},
  {id: 9, name: 'Burgers'},
  {id: 10, name: 'Pizza'},
  {id: 11, name: 'FastFood'},
  {id: 12, name: 'Beverages'},
  {id: 13, name: 'Deserts'},
  {id: 14, name: 'Sandwiches'},
]

const AttributesData = [
  {id: 1, name: 'chef on delivery'},
  {id: 2, name: 'BBQ'},
  {id: 3, name: 'Chicken'},
  {id: 4, name: 'Fast Food'},
  {id: 5, name: 'Fried Chicken'},
  {id: 6, name: 'Icecream'},
  {id: 7, name: 'Meat'},
  {id: 8, name: 'Salad'},
  {id: 9, name: 'Soup'},
  {id: 10, name: 'Roat'},
  {id: 11, name: 'Roil Paratha'},
  {id: 12, name: 'Thin Crust Pizza'},
]

export default class Filter extends React.Component {
  state = {
    check1: {},
    check2: {},
    check3: {},
    lowRangeValue: '0',
    highRangeValue: '0',
  }

  checkBox1 = id => {
    const checkCopy = {...this.state.check1}
    if (checkCopy[id]) checkCopy[id] = false
    else checkCopy[id] = true
    this.setState({check1: checkCopy})
  }

  checkBox2 = id => {
    const checkCopy = {...this.state.check2}
    if (checkCopy[id]) checkCopy[id] = false
    else checkCopy[id] = true
    this.setState({check2: checkCopy})
  }

  checkBox3 = id => {
    const checkCopy = {...this.state.check3}
    if (checkCopy[id]) checkCopy[id] = false
    else checkCopy[id] = true
    this.setState({check3: checkCopy})
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}> {item.name}</Text>
        <CheckBox
          tintColors='#0123B4'
          value={this.state.check1[item.id]}
          onChange={() => this.checkBox1(item.id)}
        />
      </TouchableOpacity>
    )
  }

  renderItem1 = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}> {item.name}</Text>
        <CheckBox
          tintColors='#0123B4'
          value={this.state.check3[item.id]}
          onChange={() => this.checkBox3(item.id)}
        />
      </TouchableOpacity>
    )
  }

  renderItem2 = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}> {item.name}</Text>
        <CheckBox
          tintColors='#0123B4'
          value={this.state.check3[item.id]}
          onChange={() => this.checkBox3(item.id)}
        />
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
              Filters
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={{margin: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Price Range</Text>
            <Text style={{marginTop: 5}}>
              Choose a price range to search in
            </Text>
            <View
              style={{
                marginTop: 20,
                marginBottom: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MultiSlider
                values={[0, 999]}
                min={0}
                max={999}
                step={1}
                touchDimensions={{height: 20, width: 20}}
                // enableLabel={true}
                onValuesChange={val => {
                  console.log('Range Values', val)
                  this.setState({lowRangeValue: val[0]})
                  this.setState({highRangeValue: val[1]})
                }}
                sliderLength={260}
                selectedStyle={{backgroundColor: '#0123B4'}}
                trackStyle={{backgroundColor: 'silver'}}
                markerStyle={{
                  height: 20,
                  width: 20,
                  backgroundColor: '#0123B4',
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{borderColor: 'black', borderWidth: 0.5, padding: 10}}>
                Rs. {this.state.lowRangeValue}
              </Text>
              <Text
                style={{padding: 10, borderColor: 'black', borderWidth: 0.5}}>
                Rs. {this.state.highRangeValue}
              </Text>
            </View>
            <View
              style={{
                borderColor: 'grey',
                borderWidth: 0.5,
                marginTop: 20,
              }}></View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                margin: 10,
              }}>
              OFFERS
            </Text>
            <FlatList
              data={OffersData}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View
            style={{borderColor: 'grey', borderWidth: 0.5, margin: 10}}></View>

          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                margin: 10,
              }}>
              CUISINES
            </Text>
            <FlatList
              data={CuisineData}
              renderItem={this.renderItem1}
              keyExtractor={item => item.id}
            />
          </View>
          <View
            style={{borderColor: 'grey', borderWidth: 0.5, margin: 10}}></View>

          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                margin: 10,
              }}>
              ATTRIBUTES
            </Text>
            <FlatList
              data={AttributesData}
              renderItem={this.renderItem2}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Add Filters
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#0123B4',
    elevation: 5,
    padding: 20,
  },
})
