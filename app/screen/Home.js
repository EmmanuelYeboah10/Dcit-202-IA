import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import uuid from "react-native-uuid";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import CategoryContainer from "../components/CategoryContainer";
import Product from "../components/Product";
import Loader from "../components/Loader";

import { primaryColorDark, primaryColorLight } from "../helpers/Variables";
import {
  Entypo,
  Feather,
  Ionicons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";

const Home = ({ navigation }) => {
  //state to store the api res data from the API
  const [products, setProducts] = useState();

  //state for the toggling of the menu component in the home page
  const [toggleMenu, setToggleMenu] = useState(false);

  //state for the cart information of the app
  const cart = useSelector((state) => state.cart);

  //function that fires when the home page mounts to go and fetch the api data
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
      params: { limit: 20 },
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "d3456c96a9mshb62066b1e421ea0p1749acjsna406b9a86a1f",
      },
    };

    //setting the products data back from the api to the products state
    axios
      .request(options)
      .then((data) => setProducts(data.data.results))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <SafeAreaView
      style={
        (styles.container,
        { position: "relative", backgroundColor: "white", padding: 10 })
      }
    >
      <StyledHomeHeader>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            backgroundColor: "white",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setToggleMenu(!toggleMenu)}
        >
          <AntDesign name="appstore1" size={20} color="rgba(0,0,0,0.8)" />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={{ position: "relative" }}
          >
            <EvilIcons name="cart" size={24} color="black" />
            <View
              style={{
                backgroundColor: `${primaryColorLight}`,
                borderRadius: 50,
                position: "absolute",
                padding: 2,
                width: 20,
                height: 20,
                top: -10,
                right: -8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: `${primaryColorDark}` }}>
                {cart.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </StyledHomeHeader>

      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexBasis: "15%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "white",
              borderRadius: 50,
              width: 50,
              height: 50,
              alignItems: "center",
            }}
          ></TouchableOpacity>
          <Text
            style={{
              color: "rgba(0,0,0,0.8)",
              fontSize: 10,
              fontWeight: 900,
              marginTop: 10,
            }}
          >
            PARTY
          </Text>
        </View>

        <View
          style={{
            flexBasis: "35%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "white",
              borderRadius: 100,
              width: 50,
              height: 50,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Classic")}
          ></TouchableOpacity>
          <Text
            style={{
              color: "rgba(0,0,0,0.8)",
              fontSize: 10,
              fontWeight: 900,
              marginTop: 10,
            }}
          >
            OUTING{" "}
          </Text>
        </View>
        <View
          style={{
            flexBasis: "25%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "white",
              borderRadius: 100,
              width: 50,
              height: 50,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Sports")}
          ></TouchableOpacity>
          <Text
            style={{
              color: "rgba(0,0,0,0.8)",
              fontSize: 10,
              fontWeight: 900,
              marginTop: 10,
            }}
          >
            SPORTS
          </Text>
        </View>
        <View
          style={{
            flexBasis: "33%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "white",
              borderRadius: 100,
              width: 50,
              height: 50,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Outdoor")}
          ></TouchableOpacity>
          <Text
            style={{
              color: "rgba(0,0,0,0.8)",
              fontSize: 10,
              fontWeight: 900,
              marginTop: 10,
            }}
          >
            CLASSIC
          </Text>
        </View>
      </View>

      {products && products.length > 0 ? (
        <ScrollView>
          {products &&
            products.map((product) => (
              <Product
                submit={() =>
                  navigation.navigate("ProductDetails", {
                    ...product,
                  }) && products.length
                }
                key={product.id}
                id={product.id}
                image={product.media.imageUrl}
                title={product.title}
                price={product.retailPrice}
              />
            ))}
        </ScrollView>
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
});

const StyledHomeHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

const StyledHomeLogo = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

const StyledHomeHeading = styled.View`
  flex-basis: 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledHomeCateg = styled.View`
  flex-basis: 8%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default Home;
