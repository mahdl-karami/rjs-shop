//? reducer
const initialState = {
  allProducts: undefined,
  cartProducts: undefined,
  loading: false,
  error: false,
};
const reducer = (state, { type, payload = undefined }) => {
  switch (type) {
    case "products_sending":
      return { ...state, ["loading"]: true };
    case "products_success":
      //! adding count to products
      const newProducts = payload.map((product) => ({ ...product, ["count"]: 0 }));
      return { ...state, ["allProducts"]: newProducts, ["loading"]: false, ["error"]: false };
    case "products_error":
      return { ...state, ["error"]: payload, ["loading"]: false };
    case "products_edit_count":
      return { ...state, ["allProducts"]: payload };
    case "products_update_cart":
      return { ...state, ["cartProducts"]: state?.allProducts?.filter((p) => p.count) };
    default:
      console.log("undefined action");
      return state;
  }
};

export {reducer , initialState}