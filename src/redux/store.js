import { configureStore } from "@reduxjs/toolkit";
import navMenuLinksReducer from "./features/navMenuLinksSlice";
import aapilotsReducer from "./features/pilotsSlice";

export const store = configureStore({
  reducer: {
    navBarDropDowns: navMenuLinksReducer,
    pilots: aapilotsReducer,
  },
});
