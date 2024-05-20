import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './slices/quoteSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;