import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { useSelector, useDispatch } from "react-redux";
import { resetError, setError } from "../redux/actions/actions";

import Alert from "../components/Alert";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //state variables for the password and errors used
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const error = useSelector((state) => state.error);

  const handleSignin = () => {
    if (email && password) {
      navigation.navigate("Home");
    } else {
      dispatch(
        setError({
          message: "No login credentials given",
          type: "danger",
          screen: "login",
        })
      );
      setTimeout(() => {
        dispatch(resetError());
      }, 5000);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", position: "relative" }}
    >
      {error.type && (
        <Alert
          screen={error.screen}
          type={error.type}
          message={error.message}
        />
      )}
      <KeyboardAvoidingView behavior="padding">
        <StyledLogin>
          <StyledLoginText>
            <StyledLoginTextMain>Welcome To</StyledLoginTextMain>
            <StyledLoginTextSub>Toronto</StyledLoginTextSub>
          </StyledLoginText>
          <Image
            style={{
              width: 130,
              height: 130,
              marginBottom: 10,
              borderRadius: 100,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <StyledLoginFields>
            <StyledInputs
              type="username"
              placeholder="Username"
              onChange={(text) => setEmail(text)}
            />
            <StyledInputs
              type="password"
              placeholder="Password"
              onChange={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </StyledLoginFields>
          <StyledLoginBtns>
            <StyledButtons onPress={handleSignin}>
              <StyledButtonValue>SIGN IN</StyledButtonValue>
            </StyledButtons>
          </StyledLoginBtns>
        </StyledLogin>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const StyledLogin = styled.View`
  width: 90%;
  margin: 20% auto;
  justify-content: center;
  align-items: center;
`;

const StyledLoginLogo = styled.Image`
  yle={{
          width: 130PX;
          height: 130PX;
          marginBottom: 30;
          borderRadius: 100;
`;

const StyledLoginText = styled.View`
  margin-bottom: 5%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledLoginTextMain = styled.Text`
  color: "rgba(0,0,0,0.8)";
  font-size: 24px;
  margin-top: 5%;
`;

const StyledLoginTextSub = styled.Text`
  color: "black";
  font-size: 30px;
  font-weight: 600;
`;

const StyledInputs = styled.TextInput`
  padding: 15px;
  height: 40;
  margin-bottom: 10px;
  font-size: 15;
  outline: 0;
  width: 230;
  margin-bottom: 10;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledButtons = styled.TouchableOpacity`
  padding: 10px 90px;
  margin-bottom: 10px;
  background-color: "rgb(100,255,45)";
`;

const StyledButtonValue = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
`;

const StyledLoginFields = styled.View``;

const StyledLoginBtns = styled.View``;

export default Login;
