import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import userReducer from "./reducers/user.reducer";
import themeReducer from "./reducers/theme.reducer";

const  persistConfig = {
    key:'root',
    storage,
    whitelist:['user', 'theme']
}

const rootReducer = combineReducers({
    user:userReducer,
    theme:themeReducer
})

export default persistReducer(persistConfig, rootReducer)
