import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: { rockets: rocketsReducer, missions: missionReducer },
});

export default store;
