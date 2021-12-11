import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { makeRequest } from "../../utils/makeRequest";

const initialState = {
  status: "idle",
  currentRequestId: "",
  error: null,
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
);
export const deletePilot = createAsyncThunk(
  "pilot/delete/:crewId",
  async (crewId) => {
    const response = await makeRequest(`/api/pilot/delete/${crewId}`, {
      method: "delete",
      crewId: JSON.stringify({ crewId }),
    });

    return { response };
  }
);
export const addPilot = createAsyncThunk(
  "pilot/add",
  async ({
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
    avatar,
  }) => {
    const addResponse = await makeRequest(`/api/pilot/add`, {
      method: "POST",
      body: JSON.stringify({
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
        avatar: avatar,
      }),
    });
    return addResponse.json();
  }
);
export const pilotsSlice = createSlice({
  name: "pilots",
  initialState,
  extraReducers: {
    [loadPilots.pending]: (state, action) => {
      state.status = "pending";
    },
    [loadPilots.fulfilled]: (state, action) => {
      state.pilots = action.payload;
      state.status = "idle";
    },
    [loadPilots.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [updatePilot.pending]: (state, action) => {
      state.currentRequestId = action.meta;
      state.status = "pending";
    },
    [updatePilot.rejected]: (state, action) => {
      state.currentRequestId = action.meta;
      state.status = "rejected";
      state.pilots = action.payload;
      state.error = action.error;
    },
    [updatePilot.fulfilled]: (state, action) => {
      if (action.meta.requestId === state.currentRequestId.requestId) {
        const index = state.pilots.findIndex(
          (pilot) => pilot.crewId === action.payload.crewId
        );
        state.pilots[index] = { ...state.pilots[index], ...action.payload };
        state.status = "idle";
        state.currentRequestId = "";
      }
    },
    [addPilot.fulfilled]: (state, action) => {
      const pilot = { ...action.meta.arg, crewId: action.payload.crewId };
      state.pilots = state.pilots.concat(pilot);
    },
    [deletePilot.pending]: (state, action) => {
      state.currentRequestId = action.meta;
      state.status = "pending";
    },
    [deletePilot.fulfilled]: (state, action) => {
      if (parseInt(action.payload.response.status) === 204) {
        state.pilots = state.pilots.filter(
          ({ crewId }) => crewId !== parseInt(action.meta.arg)
        );
        state.status = "idle";
        state.currentRequestId = "";
      }
    },
  },
});

export const selectPilots = (state) => state.pilots.pilots;

export default pilotsSlice.reducer;
