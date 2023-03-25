import { createSlice } from "@reduxjs/toolkit";
import { dishes } from "../constants";

const initialState = {
    id: 0,
    name: "",
    image: "",
    rating: 0,
    cooking_time: 0,
    eating_time: 0,
    delivery_time: 0,
    ingredients: [],
};

const dishSlice = createSlice({
    name: "dish",
    initialState,
    reducers: {
        setDish: (state, action) => {
            state.name = action.payload.replaceAll("_", " ");
            state.image = dishes[action.payload.replaceAll("_", " ")].image;
            state.rating = dishes[action.payload.replaceAll("_", " ")].rating;
            state.cooking_time = dishes[action.payload.replaceAll("_", " ")].cooking_time;
            state.eating_time = dishes[action.payload.replaceAll("_", " ")].eating_time;
            state.delivery_time = dishes[action.payload.replaceAll("_", " ")].delivery_time;
            state.ingredients = dishes[action.payload.replaceAll("_", " ")].ingredients;
        }
    }
});

export const { setDish } = dishSlice.actions;
export default dishSlice.reducer;