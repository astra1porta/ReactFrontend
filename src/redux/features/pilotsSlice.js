import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import alex from "../../assets/img/alex-johnathan.jpeg";
import janet from "../../assets/img/janet-carton.jpeg";
import john from "../../assets/img/john-smith.jpeg";
import michael from "../../assets/img/michael-zimber.jpeg";
import monica from "../../assets/img/monica-smith.jpeg";
import sandra from "../../assets/img/sandra-smith.jpeg";
import { makeRequest } from "../../utils/makeRequest";

const avatar = {
  alex: { src: alex, alt: "Alex" },
  janet: { src: janet, alt: "Janet" },
  john: { src: john, alt: "John" },
  michael: { src: michael, alt: "Michael" },
  monica: { src: monica, alt: "Monica" },
  sandra: { src: sandra, alt: "Sandra" },
};

const initialState = {
  loading: 'idle',
  pilots: [],
  
};
export const loadPilots = createAsyncThunk("pilots/load", async () => {
  let res = await makeRequest(`/api/pilot/all`);
  return res.json();
});
export const updatePilot = createAsyncThunk(
  "pilot/update",
  async ({
    crewId,
    airline,
    firstName,
    lastName,
    fleet,
    seat,
    domicile,
    trainingFacility,
    company,
    address1,
    address2,
    city,
    state,
    postalCode,
    areaCode,
    prefix,
    suffix,
  }) => {
    await makeRequest(`/api/pilot/update`, {
      method: "put",
      body: JSON.stringify({
        crewId: crewId,
        airline: airline,
        firstName: firstName,
        lastName: lastName,
        fleet: fleet,
        seat: seat,
        domicile: domicile,
        trainingFacility: trainingFacility,
        company: company,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        postalCode: postalCode,
        areaCode: areaCode,
        prefix: prefix,
        suffix: suffix,
      }),
    });
    return {
      crewId: crewId,
      airline: airline,
      firstName: firstName,
      lastName: lastName,
      fleet: fleet,
      seat: seat,
      domicile: domicile,
      trainingFacility: trainingFacility,
      company: company,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      postalCode: postalCode,
      areaCode: areaCode,
      prefix: prefix,
      suffix: suffix,
    };
  }
); /*
export const deletePilot = createAsyncThunk("pilot/delete/:crewId", async(crewId) => {
  await makeRequest(`/api/pilot/delete/${crewId}`, {
    method: "delete",
    crewId: JSON.stringify({crewId})
  })
})*/
export const pilotsSlice = createSlice({
  name: "pilots",
  initialState,
  reducers: {
    addPilot: {
      reducer: (state, action) => {
        state.pilots.push(action.payload);
      },
    },
    deletePilot: (state, action) => {
      return {
        pilots: [
          ...state.pilots.filter((pilot) => pilot.crewId !== action.payload),
        ],
      };
    },
    /*
    editPilot: (state, action) => {
      state.pilots = state.pilots.map(el => el.id === action.payload.id ? action.payload :el)
    },*/
  },
  // end of reducers
  extraReducers: {
    [loadPilots.pending]: (state, action) => {
      state.loading = 'loading';
    },
    [loadPilots.fulfilled]: (state, action) => {
      state.pilots = action.payload;
      state.loading = 'idle';
    },
    [loadPilots.rejected]: (state, action) => {
      state.loading = 'rejected';
    },

    [updatePilot.fulfilled]: (state, action) => {
      const index = state.pilots.findIndex(
        (pilot) => pilot.crewId === action.payload.crewId
      );
      state.pilots[index] = {
        ...state.pilots[index],
        ...action.payload,
      };
    } /*
      [addPilot.fulfilled]: (state, action) => {
        state.pilots.push(action.payload);
      },
      [deletePilot.fulfilled]: (state, action) => {
        return{
          pilots: [...state.pilots.map(el => el.id === action.payload.id ? action.payload :el)]
        }
      }*/,
  },
});

export const selectPilots = (state) => state.pilots.pilots;
export const { addPilot, deletePilot } = pilotsSlice.actions;

export default pilotsSlice.reducer;
