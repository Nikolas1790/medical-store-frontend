import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import pharmacySlice from "./ePharmacy/slice";
import { authReducer } from './auth/sliceAuth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

 const store = configureStore({  
  reducer: {    
    auth: persistReducer(authPersistConfig, authReducer),
    pharmacy: pharmacySlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
export default store;