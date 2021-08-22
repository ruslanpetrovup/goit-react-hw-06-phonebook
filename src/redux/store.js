// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import phoneReducer from "./phonebookReducer";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "contacts",
    storage
}
const persistedReducer = persistReducer(persistConfig, phoneReducer)





const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === "development",
    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})
const persistor = persistStore(store)
const listStore = {store, persistor}
export default listStore