import { StyleSheet, TextInput, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterMovies } from "../redux/actions";

const NavBarWithFilter = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();
  const filterMovie = (value) => {
    setMovie(value);
    dispatch(filterMovies(value));
  };
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.logo}
        source={require("../assets/paytm-movies-logo.jpg")}
      />
      <TextInput
        maxLength={20}
        style={styles.filterBox}
        placeholder="Search"
        value={movie}
        onChangeText={filterMovie}
      ></TextInput>
    </View>
  );
};

export default NavBarWithFilter;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  filterBox: {
    flex: 1,
    width: windowWidth / 2.5,
    height: 50,
    fontSize: 18,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 18,
    color: "#841584",
    borderRadius: 15,
    borderColor: "#841584",
  },
  logo: {
    flex: 0,
    height: 50,
    width: "20%",
    resizeMode: "center",
  },
  navbar: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
});
