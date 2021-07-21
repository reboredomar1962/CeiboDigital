import * as React from "react";
import { Searchbar } from "react-native-paper";
//redux
import { useSelector, useDispatch } from "react-redux";
import { searchPlans } from "../state/plan";
import { showPlans } from "../state/plan";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [plansFilter, setPlansFilter] = React.useState([]);
  const plans = useSelector((store) => store.plan);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(showPlans());
  }, []);

  React.useEffect(() => {
    dispatch(searchPlans(searchQuery));
  }, [searchQuery]);

  const onChangeSearch = (query) => {
    console.log("aca ->", query);
    setSearchQuery(query);
    console.log(plans);
  };

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
