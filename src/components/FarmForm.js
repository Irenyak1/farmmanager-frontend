import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  SafeAreaView
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const Phone = t.refinement(t.Number, Phone => {
  const reg = /^[0]?[0-9]\d{9}$/;
  return reg.test(Phone);
});

// const Farm = t.struct({
//   Name: t.String,
//   Location: t.String,
//   Address: t.String,
//   ContactPerson: t.String,
//   Phone: Phone,
//   Tin: t.Number
// });

const Farm = t.struct({
  Name: t.String,
  Location: t.String,
  Tin: t.maybe(t.Number),
  Phone: Phone,
  Description: t.maybe(t.String),
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {}
  },
  controlLabel: {
    normal: {
      color: "#006432",
      fontSize: 20
    },
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    Name: {
      autoFocus: true,
      label: "Farm Name",
      returnKeyType: "next",
      error: "Please fill this field"
    },
    Location: {
      label: "Farm Location",
      returnKeyType: "next",
      error: "Please fill this field"
    },
    Tin: {
      label: "TIN",
      error: "Please enter correct TIN"
    },
    Phone: {
      label: "Phone Number",
      returnKeyType: "next",
      error: "Please enter a correct phone number"
    },
    Description: {
      label: "Description",
      returnKeyType: "next",
      error: "Please enter a description"
    },
    
  },
  stylesheet: formStyles
};

export default class FarmForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("https://farmmanager-api.herokuapp.com/api/farm/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.Name,
        location: this.Location,
        tin: this.Tin,
        phone: this.Phone,
        description: this.Description       
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        alert("Farm was successfully added!");
        Alert.alert(responseJson);
        this.props.navigation.navigate("Login");
      })
      .catch(error => {
        console.error(error);
      });
  };

  onChange = value => {
    this.setState({ value });
  };

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null });
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if (value != null) {
      (this.Name = value.Name),
        (this.Location = value.Location),
        (this.Tin = value.Tin),
        (this.Phone = value.Phone),
        (this.Description = value.Description),
        this.InsertDataToServer();
      // clear all fields after submit
      this.clearForm();
      alert("Farm captured!");
    } else console.log("No data entered");
  };

  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Farm</Text>
            <Form
              ref={c => (this._form = c)}
              type={Farm}
              options={options}
              onChange={this.onChange.bind(this)}
            />
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="REGISTER"
                onPress={this.handleSubmit.bind(this)}
                // onPress={() => navigation.navigate("Login")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // marginTop: 10,
    padding: 10,
    borderWidth: 5,
    borderColor: "#006432",
    borderRadius: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "#006432",
    textAlign: "center",
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 80,
    marginLeft: 80
  }
});
