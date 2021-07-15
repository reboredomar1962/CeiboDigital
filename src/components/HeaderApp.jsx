/** @format */

var React = require("react");
import { Header } from "react-native-elements";

const HeaderApp = function () {
    return (
      <Header
        // leftComponent={{
        //   icon: "menu",
        //   color: "#fff",
        //   iconStyle: { color: "#fff" },
        // }}
        centerComponent={{ text: "El Club Del Plan", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    );
  };

export default HeaderApp;
