import store from "./redux/store";
import { Provider } from "react-redux";
import LatestMovies from "./components/LatestMovies";
import LatestMovieDetails from "./components/LatestMovieDetails";
import TicketBookingPage from "./components/TicketBookingPage";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBarWithFilter from "./components/NavBarWithFilter";

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={LatestMovies}
            options={{
              headerTitle: (props) => <NavBarWithFilter {...props} />,
            }}
          />
          <Stack.Screen
            name="MovieDetails"
            component={LatestMovieDetails}
            options={({ route }) => ({ title: route.params.movieName })}
          />
          <Stack.Screen name="Book Tickets" component={TicketBookingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
