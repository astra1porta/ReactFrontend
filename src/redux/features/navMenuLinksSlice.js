import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    airlineName: "American Airlines",
    bidTypesPath: "/american-airlines/bidTypes",
    pilotsPath: "/american-airlines/pilots",
  },
  {
    airlineName: "Alaska Airlines",
    bidTypesPath: "/alaska-airlines/bidTypes",
    pilotsPath: "/alaska-airlines/pilots",
  },
  {
    airlineName: "Frontier Airlines",
    bidTypesPath: "/frontier-airlines/bidTypes",
    pilotsPath: "/frontier-airlines/pilots",
  },
  {
    airlineName: "UPS",
    bidTypesPath: "/UPS/bidTypes",
    pilotsPath: "/UPS/pilots",
  },
];

export const navMenuLinksSlice = createSlice({
  name: "navBarDropDowns",
  initialState,
  reducers: {
    set: (state) => {},
  },
});

//export const {} = navMenuLinksSlice.actions

export default navMenuLinksSlice.reducer;
