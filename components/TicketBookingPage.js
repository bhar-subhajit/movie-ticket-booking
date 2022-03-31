import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import * as Print from "expo-print";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TicketBookingPage = () => {
  const movie = useSelector((state) => state.movie.selectedMovie);
  const [noOfTicket, setNoOfTicket] = useState("2");
  const [showTime, setshowTime] = useState("12 PM - 3 PM");
  const [selectedPrinter, setSelectedPrinter] = React.useState();
  const print = async () => {
    let html = `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body style="text-align: center; background-color: #f7f7f7;">
          <img
            src="https://www.pngitem.com/pimgs/m/193-1936701_transparent-bookmyshow-logo-hd-png-download.png"
            style="width: 100vw;" />
          <div style="width: 100vw; display: flex; back">
            <img
            src=${movie.image}
            style="width: 35vw; height: auto; " />
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
            src="https://cdn.iconscout.com/icon/free/png-256/ticket-1855957-1574163.png"
            style="width: 20vw; position: absolute; bottom: 5px; right: 5px" />
        </body>
      </html>
      `;
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 20, padding: 10, backgroundColor: "yellow" }}>
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
            <Picker.Item label="10" value="10" />
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
  movieHeader: {
    flexDirection: "row",
    width: 250,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
