import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const LatestMovieDetails = ({ navigation }) => {
  const movie = useSelector((state) => state.movie.selectedMovie);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.movieThumbnail}
          source={{
            uri: movie.image,
          }}
        />
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text>{movie.releaseDate}</Text>
          </View>
          <View style={styles.container4}>
            <Text>Duration:</Text>
            <Text>{movie.duration}</Text>
          </View>
          <View style={styles.container4}>
            <Text>Ratings:</Text>
            <Text>{movie.rating}/10</Text>
          </View>
        </View>
      </View>
      <View style={styles.bookButton}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => navigation.navigate("Book Tickets")}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LatestMovieDetails;

const styles = StyleSheet.create({
  bookButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#dbb2d2",
  },
  button: {
    flexDirection: "row",
    height: "100%",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#dbb2d2",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    height: 400,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    height: 200,
  },
  container3: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 80,
    backgroundColor: "yellow",
    alignContent: "center",
  },
  container4: {
    flexDirection: "row",
    backgroundColor: "#bf269e",
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,
  },
  movieThumbnail: {
    height: 200,
    width: 150,
  },
  title: {
    fontWeight: "bold",
  },
});
