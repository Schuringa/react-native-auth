import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Card, CardSection, Button, Input, Spinner } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress() {
    const { email, password } = this.state
    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
      console.log(err)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
          console.log(err)
          this.setState({ error: err.message })
        })
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm
