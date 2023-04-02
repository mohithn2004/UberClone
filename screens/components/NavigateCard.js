import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import AutoCompleteInput from 'react-native-tomtom-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation= useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning!!</Text>
      <View style={tw`flex-shrink`}>
      <AutoCompleteInput
          inputProps={{
            placeholder: "Where to?",
          }}
          onPress={(data) => {
            dispatch(
              setDestination({
                location: data.position,
                description: data.address.municipalitySubdivision+ ", "+data.address.municipality ,
              })
            );
              navigation.navigate("RideOptionsCard")
          }}
          inputContainerStyle={tw` bg-gray-200 p-2 w-3/4 flex ml-12`}
          listItemsContainerStyle={tw`rounded-full border-gray-200 m-2`}
          bottomDivider
          tomtomOptions={{ key: "JYtej3ua6EiohlTWS8JvGDiGqZfPc5eY" }}
        />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})