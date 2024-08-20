import { useEffect } from "react";
import config from "../services/config";

function HeaderForm({ categories, dispatch }) {
  useEffect(() => {
    config.get("categories?limit=5").then((res) => dispatch({ type: "categories_success", payload: res }));
  }, []);
  return (
    <form>
      <input type="text" name="search" placeholder="Search" />
      <select name="filter">
        <option value={"all"}>all</option>
        {categories?.map(({ name, id }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default HeaderForm;
