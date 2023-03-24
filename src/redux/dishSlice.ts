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
            state.name = action.payload;
            state.image = dishes[action.payload].image;
            state.rating = dishes[action.payload].rating;
            state.cooking_time = dishes[action.payload].cooking_time;
            state.eating_time = dishes[action.payload].eating_time;
            state.delivery_time = dishes[action.payload].delivery_time;
            state.ingredients = dishes[action.payload].ingredients;
        }
    }
});

export const { setDish } = dishSlice.actions;
export default dishSlice.reducer;