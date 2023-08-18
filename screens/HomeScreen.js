import { StyleSheet, Text , SafeAreaView , Image , View} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import {GOOGLE_MAPS_APIKEY} from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import { useDispatch } from 'react-redux/es';
import {setDestination , setOrigin} from '../slices/navSlice'
const HomeScreen = () => {
  const dispatch = useDispatch()

  const updateOtrigin = (data, details)=>{
      dispatch(setOrigin(
        {
          location:details.geometry.location,
          description:data.description
        }
      ))

  }
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

        <GooglePlacesAutocomplete 
           styles={{
            container:{
              flex:0
            },
            textInput:{
              fontSize:18
            }
            
            
           }}
           fetchDetails={true}
           onPress={(data,details=null)=>{
            updateOtrigin(data,details)
            
            
            
           }}
           returnKeyType={"search"}
           enablePoweredByContainer={false}
           minLength={2}
           query={{
            key:GOOGLE_MAPS_APIKEY,
            language:'en'
           }}
           debounce={400}
           nearbyPlacesAPI="GooglePlacesSearch"
           placeholder='Where from ?'
        
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
