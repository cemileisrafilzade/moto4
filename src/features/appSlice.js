import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newPromotion: {
    brand: "",
    model: [],
    price: -1,
    currency: "",
    frontView: null,
    backView: null,
    panelView: null,
    others: [],
    year: "",
    fuelType: "",
    fuelConsumption: "",
    gearBox: "",
    transmission: "",
    pankingSensor: [],
    speedControl: [],
    innerMaterial: "",
    airBags: [],
    seatNumbers: "",
    seller: "",
    ownNumbers: "",
    city: "",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    emptyNewPromotion: (state) => {
      state.newPromotion = {};
    },
    handleNewPromotionState: (state, action) => {
      const { name, value } = action.payload;

      if (name === "others" && Array.isArray(value)) {
        state.newPromotion = {
          ...state.newPromotion,
          others: [...state.newPromotion.others, value],
        };
      } else {
        state.newPromotion = {
          ...state.newPromotion,
          [name]: value,
        };
      }
    },
  },
});

export const { emptyNewPromotion, handleNewPromotionState } = appSlice.actions;

export default appSlice.reducer;
