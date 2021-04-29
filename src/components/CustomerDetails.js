import "react-native-gesture-handler";
import React, { Component } from "react";
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    StyleSheet
} from "react-native";
import { deleteCustomer, detailCustomer } from "../actions/customerActions";
import { connect } from "react-redux";
  
class CustomerDetails extends Component {
    componentDidMount() {
      const id = this.props.route.params.itemId;
      console.log("ayooo----------------------------------", id);
  
      this.props.detailCustomer(id);
    }
  
    render() {
      const { navigation } = this.props;
      const { customer } = this.props;
      const item = (
        <View style={styles.container} key={customer.id}>
          <View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
                Name:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${customer.name}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Customer Code:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${customer.code}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Company Name:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${customer.companyname}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/user.png")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Telephone 1:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${customer.telephone1}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Telephone 2:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${customer.telephone2}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
                Email Address:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${customer.email}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Billing Address:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >
                {`${customer.billingaddress}`}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Delivery Address:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${customer.deliveryaddress}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
              Website:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >
              {`${customer.website}`}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "row",
                height: 35,
                margin: 10
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
                source={require("../images/worker.jpg")}
              />
              <Text style={{ flex: 1, alignSelf: "stretch", color: "#228B22" }}>
                TIN:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >
                {`${customer.tin}`}
              </Text>
            </View>
          </View>
  
          <TouchableOpacity
            onPress={() => {
              this.props.deleteCustomer.bind(this, customer.id);
              navigation.navigate("customer summaries");
            }}
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              backgroundColor: "#cedcf2",
              height: 35,
              borderBottomColor: "#cedcf2",
              fontSize: 30,
              borderBottomWidth: 2,
              margin: 10
            }}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      );
      return (
        <ScrollView>
          <View>
            <Text style={styles.heading}> Customer Details </Text>
            {item}
          </View>
        </ScrollView>
      );
    }
  }
  
  const mapStateToProps = state => ({
    customer: state.customers.item
  });
  
  export default connect(mapStateToProps, {
    deleteCustomer,
    detailCustomer
  })(CustomerDetails);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "space-between",
      width: "100%",
      backgroundColor: "#F5FCFF"
    },
    heading: {
      margin: 10,
      fontWeight: "bold",
      fontSize: 20,
      color: "#006432",
      textAlign: "center"
    }
  });
  