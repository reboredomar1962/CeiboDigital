import * as React from "react";
import { Searchbar } from "react-native-paper";
//redux
import { useSelector, useDispatch } from "react-redux";
import { searchPlans } from "../state/plan";
import { showPlans } from "../state/plan";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(showPlans());
  // }, []);

  React.useEffect(() => {
    console.log("actualiza el search query", searchQuery);
    dispatch(searchPlans(searchQuery));
  }, [searchQuery]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Searchbar
      placeholder="Buscar eventos..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      inputStyle={{ fontFamily: "Poppins_300Light", fontSize: 15 }}
      iconColor="#23036A"
      style={{
        backgroundColor: "#F0E8FC",
        width: 300,
        marginTop: 15,

        alignSelf: "center",
      }}
    />
  );
};

export default Search;
