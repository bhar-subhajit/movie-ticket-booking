import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import * as Print from "expo-print";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TicketBookingPage = ({ navigation }) => {
  const movie = useSelector((state) => state.movie.selectedMovie);
  const [noOfTicket, setNoOfTicket] = useState("2");
  const [showTime, setshowTime] = useState("12 PM - 3 PM");
  const [selectedPrinter, setSelectedPrinter] = React.useState();
  const print = async () => {
    let pdfTicketHtml = `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body style="text-align: center; border: 1px dotted black">
          <img
            src="https://i2.wp.com/www.ticketonlinebooking.com/wp-content/uploads/2018/11/Paytm-Movie-Offers-Buy-1-Get-1-Tickets-Free-Dealsbees.jpg?fit=500%2C302&ssl=1&resize=1280%2C720"
            style="width: 100%; height: 48%" />
          <div style="width: 100vw; max-height: 35vh; display: flex;">
            <img
            src=${movie.image}
            style="width: 35vw; height: auto; margin: 8px 0 0 8px; " />
            <div style="padding: 20px; font-size: 40px; display: flex; flex-direction: column; justify-content: space-evenly; align-items: flex-start">
              <div>Movie: <span style="color: green">${movie.title}</span></div>
              <div>Adult: <span style="color: green">${noOfTicket}</span></div>
              <div>Time: <span style="color: green">${showTime}</span></div>
              <div>Booking ID: <span style="color: green">${
                "#" + getRndInteger(100000, 999999)
              }</span></div>
            </div>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png"
            style="width: 40vw;" />
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/61OVyYp9VNL.png"
            style="width: 20vw; position: absolute; bottom: 0px; right: 0px;" />
            <img
            src="https://pbs.twimg.com/profile_images/1262780643756265473/wfSuMB4d_400x400.jpg"
            style="width: 70vw; position: absolute; bottom: 25vh; right: 0px; opacity:0.1; z-index: -1;" />
        </body>
      </html>
      `;

    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: pdfTicketHtml,
      printerUrl: selectedPrinter?.url, // iOS only
    });

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: movie.image }}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{
            margin: 20,
            padding: 10,
            width: "90%",
            backgroundColor: "#bf269e",
          }}
        >
          <View style={styles.movieHeader}>
            <Text style={{ marginRight: 10 }}>Movie:</Text>
            <Text>{movie.title}</Text>
          </View>
          <View style={styles.movieHeader}>
            <Text style={{ marginRight: 10 }}>Number Of Tickets:</Text>
            <Picker
              selectedValue={noOfTicket}
              onValueChange={(itemValue, itemIndex) => setNoOfTicket(itemValue)}
              style={{ width: 80 }}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
            </Picker>
          </View>
          <View style={styles.movieHeader}>
            <Text style={{ marginRight: 10 }}>Show Time:</Text>
            <Picker
              selectedValue={showTime}
              onValueChange={(itemValue, itemIndex) => setshowTime(itemValue)}
              style={{ width: 160 }}
            >
              <Picker.Item label="12 PM - 3 PM" value="12 PM - 3 PM" />
              <Picker.Item label="4 PM - 7 PM" value="4 PM - 7 PM" />
              <Picker.Item label="7 PM - 10 PM" value="7 PM - 10 PM" />
            </Picker>
          </View>
        </View>
        <View style={styles.bookButton}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={print}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TicketBookingPage;

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
  image: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // opacity: 0.5,
  },
  movieHeader: {
    flexDirection: "row",
    width: 250,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
