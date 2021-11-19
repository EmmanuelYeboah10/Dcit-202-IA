import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Checkout({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <Text
        style={{
          alignItems: "center",
          color: "black",
          fontSize: 30,
          fontWeight: "600",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        CHECKOUT
      </Text>

      <Image
        style={{
          width: 130,
          height: 130,
          marginBottom: 30,
          borderRadius: 100,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
      />

      <View>
        <Text
          style={{
            marginBottom: 10,
            borderBottomColor: "rgba(0,0,0,0.3)",
            borderBottomWidth: 1,
          }}
        >
          PERSONAL SHIPPING INFO
        </Text>
        <TextInput
          style={{
            height: 40,
            paddingLeft: 10,
            backgroundColor: "#e3e3e3",
            fontSize: 15,
            width: 230,
            outline: "none",
            marginBottom: 10,
            borderTopLeftRadius: 10,
          }}
          placeholder="Fullname"
        />

        <TextInput
          style={{
            height: 40,
            backgroundColor: "#e3e3e3",
            fontSize: 15,
            width: 230,
            paddingLeft: 10,
            outline: "none",
            marginTop: 10,
            borderTopLeftRadius: 10,
          }}
          placeholder="Address"
        />

        <TextInput
          keyboardType="numeric"
          style={{
            height: 40,
            backgroundColor: "#e3e3e3",
            fontSize: 15,
            width: 230,
            paddingLeft: 10,
            outline: "none",
            marginTop: 10,
            borderTopLeftRadius: 10,
          }}
          placeholder="Phone"
        />

        <TextInput
          style={{
            height: 40,
            backgroundColor: "#e3e3e3",
            fontSize: 15,
            width: 230,
            paddingLeft: 10,
            outline: "none",
            marginTop: 10,
            borderTopLeftRadius: 10,
          }}
          placeholder="Email"
        />

        <Text
          style={{
            margintop: 10,
            borderBottomColor: "rgba(0,0,0,0.3)",
            borderBottomWidth: 1,
          }}
        >
          PAYMENT INFO
        </Text>

        <TextInput
          keyboardType="numeric"
          style={{
            height: 40,
            backgroundColor: "#e3e3e3",
            fontSize: 15,
            width: 230,
            paddingLeft: 10,
            outline: "none",
            marginTop: 10,
            borderTopLeftRadius: 10,
          }}
          placeholder="Credit Card Number"
        />

        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ color: "rgb(255,40,45)" }}>OR UPLOAD CC</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF0000",
            padding: 10,
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginStart: 10,
          }}
        >
          <Text style={{ fontSize: "17", fontWeight: "700", color: "white" }}>
            PROCEED TO CHECKOUT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#00ff00",
            padding: 10,
            width: 130,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginStart: 10,
          }}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={{ fontSize: "17", fontWeight: "700", color: "white" }}>
            CANCEL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
