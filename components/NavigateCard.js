import { StyleSheet, Text, View , SafeAreaView  , KeyboardAvoidingView} from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env"

export default function NavigateCard() {
  return (
    <KeyboardAvoidingView   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
             <SafeAreaView style={tw`bg-white flex-1`}>
                <Text style={tw`text-center py-5 text-xl`} >Good night Hakim</Text>
                <View style={tw`border-t  border-gray-200 flex-shrink`} >

                    <View>
                        <GooglePlacesAutocomplete 

                        style={styles}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        placeholder='where to ?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        minLength={2}
                        query={{
                            key:GOOGLE_MAPS_APIKEY,
                            language:'en'
                        }}
                        
                        />

                    </View>
                </View>
    </SafeAreaView>


    </KeyboardAvoidingView>
   
  )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        paddingBottom:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }
})