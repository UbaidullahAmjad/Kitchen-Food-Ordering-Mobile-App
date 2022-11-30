import React, {Component} from 'react'
import {LogBox, StyleSheet} from 'react-native'
import Nav from './Components/Navigation/Nav'
import SplashScreen from 'react-native-splash-screen'

LogBox.ignoreAllLogs()

export default class App extends Component {
  componentDidMount () {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide()
  }
  render () {
    return <Nav />
  }
}

const styles = StyleSheet.create({})
