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
import { deleteEmployee, detailEmployee } from "../actions/employeeActions";
import { connect } from "react-redux";
  
class EmployeeDetails extends Component {
    componentDidMount() {
      const id = this.props.route.params.itemId;
      console.log("ayooo----------------------------------", id);
  
      this.props.detailEmployee(id);
    }
  
    render() {
      const { navigation } = this.props;
      const { employee } = this.props;
      const item = (
        <View style={styles.container} key={employee.id}>
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
              >{`${employee.fullname}`}</Text>
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
              Gender:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${employee.gender}`}</Text>
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
              Employee No.:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${employee.employeeno}`}</Text>
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
              Date of Birth:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${employee.dob}`}</Text>
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
              Position:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${employee.position}`}</Text>
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
              Department:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${employee.department}`}</Text>
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
              >
                {`${employee.email}`}
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
              Phone No.:
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >{`${employee.phone1}`}</Text>
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
              Alternative Phone No.:
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
              {`${employee.phone2}`}
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
              Start Date:
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
                {`${employee.startdate}`}
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
              Education:
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
                {`${employee.education}`}
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
              Religion:
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
                {`${employee.religion}`}
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
              NIN:
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
                {`${employee.nin}`}
              </Text>
            </View>
          </View>
            <TouchableOpacity
            onPress={() => {
              this.props.deleteEmployee.bind(this, employee.id);
              navigation.navigate("employee summaries");
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
            <Text style={styles.heading}> Employee Details </Text>
            {item}
          </View>
        </ScrollView>
      );
    }
  }
  
  const mapStateToProps = state => ({
    employee: state.employees.item
  });
  
  export default connect(mapStateToProps, {
    deleteEmployee,
    detailEmployee
  })(EmployeeDetails);
  
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
  
