import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { fetchAllMovies, selectMovie } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const LatestMovies = ({ navigation }) => {
  const movieList = useSelector((state) => state.movie.filteredMovies);
  const isLoading = useSelector((state) => state.movie.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  const viewMovieDetails = (movie) => {
    dispatch(selectMovie(movie));
    navigation.navigate("MovieDetails", {
      movieName: movie.title,
    });
  };

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <ScrollView style={styles.scrollView}>
          {movieList.map((item) => (
            <View key={item.id} style={styles.movieContainer}>
              <Image
                style={styles.movieThumbnail}
                source={{
                  uri: item.image,
                }}
              />
              <View style={styles.movieDetails}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.plot}>{item.plot}</Text>
                <View style={styles.buttonWrapper}>
                  <Button
                    title="Details"
                    color="#841584"
                    onPress={() => viewMovieDetails(item)}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View>
          <ActivityIndicator size="large" color="white" />
          <Text style={{ color: "white" }}>Fetching Latest Movies</Text>
        </View>
      )}
    </View>
  );
};

export default LatestMovies;

const styles = StyleSheet.create({
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "80%",
  },
  container: {
    flex: 1,
    backgroundColor: "#dbb2d2",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  movieContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  movieDetails: {
    flex: 1,
    minHeight: "100%",
  },
  movieThumbnail: {
    height: 200,
    width: 150,
  },
  plot: {
    // color: "white",
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  title: {
    // color: "white",
    padding: 10,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
