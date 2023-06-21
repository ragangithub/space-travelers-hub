import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    try {
      const response = await fetch(`${url}`);
      const missions = await response.json();

      return missions;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find(
        (mission) => mission.id === missionId,
      );
      mission.joined = true;
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find(
        (mission) => mission.id === missionId,
      );
      mission.joined = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getMissions.fulfilled, (state, action) => {
        const missions = action.payload.map((mission) => {
          const { mission_id: id, mission_name: name, description } = mission;
          return { id, name, description };
        });
        state.missions = missions;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
