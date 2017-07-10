import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componenetWillMount () {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyAREqqoQA_wywN9PXRzmBsar0VSmFC1S2s',
      authDomain: 'udemy-auth-c3c7c.firebaseapp.com',
      databaseURL: 'https://udemy-auth-c3c7c.firebaseio.com',
      projectId: 'udemy-auth-c3c7c',
      storageBucket: 'udemy-auth-c3c7c.appspot.com',
      messagingSenderId: '697175397000'
    })
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App
