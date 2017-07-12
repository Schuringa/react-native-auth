import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native'
import { Header, Button, Card, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyAREqqoQA_wywN9PXRzmBsar0VSmFC1S2s',
      authDomain: 'udemy-auth-c3c7c.firebaseapp.com',
      databaseURL: 'https://udemy-auth-c3c7c.firebaseio.com',
      projectId: 'udemy-auth-c3c7c',
      storageBucket: 'udemy-auth-c3c7c.appspot.com',
      messagingSenderId: '697175397000'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        )

      case false:
        return <LoginForm />

      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
