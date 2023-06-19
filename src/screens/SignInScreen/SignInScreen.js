import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { FetchPostCall } from "../../utils/FetchApiCalls";
import { axiosLoginPostCall } from "../../utils/AxiosApiCalls";

const SignInscreen = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const onSignInPressed = async () => {
    await FetchPostCall({
      emails: "syamjith@zappyhire.com",
      password: "feb_23_reset",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Please check the username and password", err);
      });

    /* await axiosFreePostCall({
      title: "sdfsdf",
      desc: "edwe",
      id: 100,
    })
      .then((res) => {
        console.c(res);
      })
      .catch(() => {
        console.warns("Please check the username and password");
      });*/
    /*  const res = await FetchPostCall({
      username: "syamjith@zappyhire.com",
      password: "feb_23_reset",
    });
    console.warn(res);*/
  };
  return (
    <View>
      <Text>Sign In</Text>
      <CustomInput
        placeholder="Username"
        value={userName}
        setValue={setUserName}
      />
      <CustomInput
        placeholder="Password"
        value={passWord}
        setValue={setPassWord}
        secureTextEntry
      />
      <CustomButton text="Sign In" onPress={onSignInPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});
export default SignInscreen;
