// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Adicione seus reducers aqui
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;