import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import postReducer from "./reducers/post.reducer";
import themeReducer from "./reducers/theme.reducer";

const  persistConfig = {
    key:'root',
    storage,
    whitelist:[]
}

const rootReducer = combineReducers({
    post:postReducer,
    theme:themeReducer
})

export default persistReducer(persistConfig, rootReducer)
