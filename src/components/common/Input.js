import React from 'react'
import { TextInput, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Input = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text> {label} </Text>
      <TextInput
        style={{ height: 20, width: 100 }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func
}

export { Input }
