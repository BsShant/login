import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { layoutReducer } from "./layoutStore/layoutStore.reducer";
import { authReducer } from "./authStore/auth.reducer";
import { ourTeamReducer } from "./ourTeamStore/ourTeamReducer";

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: [ ],
};
const rootReducer = combineReducers({
  authStore: authReducer,
  ourTeamStore: ourTeamReducer,
  layoutStore: layoutReducer,
});

export default persistReducer(persistConfig, rootReducer);
