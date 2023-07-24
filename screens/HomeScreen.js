import { StyleSheet, Text , SafeAreaView , Image , View} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
const HomeScreen = ({}) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>

        <Image source={{
            uri:"https://logos-marques.com/wp-content/uploads/2020/01/Uber-logo.jpg"
        }} 

        style={{
            width:100 , height:100 , resizeMode:"contain"
        }}
        
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
