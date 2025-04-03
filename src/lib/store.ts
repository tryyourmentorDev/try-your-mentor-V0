import { configureStore } from '@reduxjs/toolkit'
import mentorBookingRegisterSlice from './features/mentor-booking/register'


export const makeStore = () => {
  return configureStore({
    reducer: {
      mentorBookingRegister :mentorBookingRegisterSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']