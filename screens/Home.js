import { StyleSheet, Text, View } from "react-native"
import React from "react"
import Background from "../Background"
import Btn from "../components/Button"

export default function Home(props) {
  return (
    <Background>
      <View
        style={{ marginHorizontal: 40, marginTop: 80, alignItems: "center" }}
      >
        <Text style={{ color: "white", fontSize: 64 }}>Aries</Text>
        <Text style={{ color: "white", fontSize: 64 }}>Online</Text>
        <Btn
          bgColor="#000B4F"
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          textColor="#000B4F"
          btnLabel="Signup"
          Press={() => props.navigation.navigate("Register")}
        />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({})
