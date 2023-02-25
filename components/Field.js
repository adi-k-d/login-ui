import React from "react"
import { TextInput } from "react-native"

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: "#000B4F",
        paddingHorizontal: 10,
        width: "78%",
        backgroundColor: "rgb(220,220, 220)",
        marginVertical: 10,
      }}
      placeholderTextColor={"#000B4F"}
    ></TextInput>
  )
}

export default Field
