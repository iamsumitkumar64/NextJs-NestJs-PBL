import { combineReducers, configureStore } from "@reduxjs/toolkit";

//Redux Persist Import
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

//Reducer Import
import conversationReducer from "./slices/current-conversation"
import currentuserReducer from "./slices/current_user"

//Combine Reducer into root Reducer
const rootReducer = combineReducers({
    conversationReducer: conversationReducer,
    currentuserReducer: currentuserReducer,
});

//Persit configurations
const persistConfig = {
    key: "root",
    storage
}

//Attach configurations + Reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Make Store with persist features
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

const persister = persistStore(store);

export { store, persister, rootReducer };

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch