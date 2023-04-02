import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  LogBox,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "./components/NavOptions";
import AutoCompleteInput from "react-native-tomtom-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white pl-1 h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
          }}
        />
        <NavOptions />
        <AutoCompleteInput
          inputProps={{
            placeholder: "Enter pickup point",
          }}
          onPress={(data) => {
            dispatch(
              setOrigin({
                location: data.position,
                description: data.address.municipalitySubdivision+ ", "+data.address.municipality ,
              })
            );

            dispatch(setDestination(null));
          }}
          inputContainerStyle={tw`rounded-full bg-gray-200 p-3`}
          listItemsContainerStyle={tw`rounded-full border-gray-200 m-2`}
          bottomDivider
          tomtomOptions={{ key: "JYtej3ua6EiohlTWS8JvGDiGqZfPc5eY" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
