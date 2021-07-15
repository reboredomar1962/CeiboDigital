/** @format */
import React from "react";
import HeaderApp from "./HeaderApp";
import { NativeBaseProvider } from "@react-navigation/native";
import SideBarMenu from "./SideBarMenu";
import Grid from "./Grid";

export default function HomeApp() {
  return (
    <NativeBaseProvider>
      <HeaderApp />
      <SideBarMenu />
      <Grid />
    </NativeBaseProvider>
  );
}
