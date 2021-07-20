import * as React from "react";
import { Searchbar } from "react-native-paper";
//redux
import { useSelector, useDispatch } from "react-redux";
import { searchPlans } from "../state/plan";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Buscar eventos..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      inputStyle={{ fontFamily: "Poppins_300Light", fontSize: 15 }}
      iconColor="#23036A"
      style={{ backgroundColor: "#F0E8FC", width: 300, marginTop: 15 }}
    />
  );
};

export default Search;
