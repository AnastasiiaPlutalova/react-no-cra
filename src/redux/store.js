import { configureStore } from '@reduxjs/toolkit';
import urlReducer from './slices/urlsSlice';

export default configureStore({
  reducer: {
    urls: urlReducer,
  },
});
