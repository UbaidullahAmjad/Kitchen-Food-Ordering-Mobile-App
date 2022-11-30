import React, {Component} from 'react'
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import data from './data'
import {Transition, Transitioning} from 'react-native-reanimated'

const transition = (
  <Transition.Together>
    <Transition.In type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='fade' durationMs={200} />
  </Transition.Together>
)

export default function FoodDetail ({navigation}) {
  const [currentIndex, setCurrentIndex] = React.useState(null)
  const ref = React.useRef()
  return (
    <SafeAreaView style={{flex: 1}}>
      <AntDesign
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          borderRadius: 30,
          padding: 5,
          top: 50,
          left: 20,
          zIndex: 1,
        }}
        name='arrowleft'
        size={20}
        color='white'
      />
      <ImageBackground
        style={{height: 250}}
        resizeMode='stretch'
        source={require('../../Images/Food1.jpg')}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: 120,
          }}>
          Chef: Talha
        </Text>
      </ImageBackground>

      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign name='picture' size={18} color='#0920F8' />
            <Text style={{marginLeft: 5, color: '#0920F8', fontWeight: 'bold'}}>
              More images
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Cart')}>
            <Text
              style={{
                backgroundColor: '#2C419A',
                padding: 2,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 5,
                color: 'white',
              }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 20,
            margin: 5,
            borderColor: 'silver',
            borderWidth: 0.5,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{marginLeft: 5, color: 'black', fontWeight: 'bold'}}>
            Time to Cook: 30 min
          </Text>
          <Text
            style={{
              color: 'black',
            }}>
            Price: Rs.100/plate
          </Text>
        </View>

        <View style={styles.parentView}>
          <Transitioning.View
            ref={ref}
            transition={transition}
            style={[styles.container, {marginTop: 10}]}>
            {data.map(({bg, color, category, subCategories}, index) => {
              return (
                <TouchableOpacity
                  key={category}
                  onPress={() => {
                    ref.current.animateNextTransition()
                    setCurrentIndex(index === currentIndex ? null : index)
                  }}
                  style={[styles.cardContainer, {marginBottom: 10}]}
                  activeOpacity={0.9}>
                  <View
                    style={[
                      styles.card,
                      {backgroundColor: bg, borderRadius: 10},
                    ]}>
                    <Text
                      style={[
                        styles.heading,
                        {color, fontSize: 14, padding: 10, fontWeight: 'bold'},
                      ]}>
                      {category}
                    </Text>
                    {index === currentIndex && (
                      <View style={styles.subCategoriesList}>
                        {subCategories.map(subCategory => (
                          <Text
                            key={subCategory}
                            style={[
                              styles.body,
                              {
                                color,
                                textAlign: 'justify',
                                margin: 15,
                                marginTop: 0,
                                marginLeft: 10,
                              },
                            ]}>
                            {subCategory}
                          </Text>
                        ))}
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              )
            })}
          </Transitioning.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    // textTransform: 'uppercase',
    letterSpacing: 0,
  },
  body: {
    fontSize: 16,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  subCategoriesList: {
    marginTop: 0,
  },
  parentView: {
    width: '100%',
    height: '100%',
  },
})
