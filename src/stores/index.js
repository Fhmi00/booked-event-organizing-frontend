// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import promiseMiddleware from "redux-promise-middleware";
// import rootReducer from "./reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// // export default createStore(
// //   rootReducer,
// //   applyMiddleware(promiseMiddleware, logger)
// // );
