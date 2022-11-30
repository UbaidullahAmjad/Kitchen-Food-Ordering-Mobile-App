import React, {useState, useCallback, useEffect} from 'react'
import {Text, StyleSheet, View, SafeAreaView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {GiftedChat} from 'react-native-gifted-chat'

export default function MessageScreen (props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

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
            onPress={() => props.navigation.goBack()}
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
            Chef Name
          </Text>
        </View>
      </View>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
