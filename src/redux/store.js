import { configureStore } from "@reduxjs/toolkit";
import navMenuLinksReducer from "./features/navMenuLinksSlice";
import pilotsReducer from "./features/pilotsSlice";
import bidTypeReducer from "./features/bidTypeSlice";

export const store = configureStore({
  reducer: {
    navBarDropDowns: navMenuLinksReducer,
    pilots: pilotsReducer,
    bidTypes: bidTypeReducer
  },

});
