import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  // try {
  //   const response = await axios.get(url);
  //   return response.data;
  // } catch (error) {
  //   return isRejectedWithValue(error.message);
  // }

  try {
    const response = await fetch(`${url}`);
    const rockets = await response.json();

    return rockets;
  } catch (error) {
    return isRejectedWithValue(error.message);
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    cancelReserve: (state, action) => {
      const rocketId = action.payload;

      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);

      rocket.reserved = false;
    },
    reserve: (state, action) => {
      const rocketId = action.payload;

      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);

      rocket.reserved = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getRockets.fulfilled, (state, action) => {
        const rockets = action.payload.map((rocket) => {
          const {
            id,
            rocket_name: rocketName,
            type,
            description,
            flickr_images: flickrImages,
          } = rocket;
          return {
            id,
            rocketName,
            type,
            description,
            flickrImages,
          };
        });
        state.rockets = rockets;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reserve, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
