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
import { deleteSupplier, detailSupplier } from "../actions/supplierActions";
import { connect } from "react-redux";
  
class SupplierDetails extends Component {
    componentDidMount() {
      const id = this.props.route.params.itemId;
      console.log("ayooo----------------------------------", id);
  
      this.props.detailSupplier(id);
    }
  
    render() {
      const { navigation } = this.props;
      const { supplier } = this.props;
      const item = (
        <View style={styles.container} key={supplier.id}>
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
              >{`${supplier.name}`}</Text>
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
              Supplier Code:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${supplier.code}`}</Text>
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
              >{`${supplier.companyname}`}</Text>
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
              >{`${supplier.telephone1}`}</Text>
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
              >{`${supplier.telephone2}`}</Text>
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
              >{`${supplier.email}`}</Text>
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
              Business Address:
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
                {`${supplier.busaddress}`}
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
              Category:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${supplier.category}`}</Text>
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
              Terms:
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
              {`${supplier.terms}`}
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
                {`${supplier.tin}`}
              </Text>
            </View>
          </View>
  
          <TouchableOpacity
            onPress={() => {
              this.props.deleteSupplier.bind(this, supplier.id);
              navigation.navigate("supplier summaries");
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
            <Text style={styles.heading}> Supplier Details </Text>
            {item}
          </View>
        </ScrollView>
      );
    }
  }
  
  const mapStateToProps = state => ({
    supplier: state.suppliers.item
  });
  
  export default connect(mapStateToProps, {
    deleteSupplier,
    detailSupplier
  })(SupplierDetails);
  
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
  
