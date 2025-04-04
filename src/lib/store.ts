import { configureStore } from '@reduxjs/toolkit'
import mentorBookingRegisterSlice from './features/mentor-booking/register'
import mentorBookingMentorsSlice from './features/mentor-booking/mentors'


export const makeStore = () => {
  return configureStore({
    reducer: {
      mentorBookingRegister :mentorBookingRegisterSlice,
      mentorBookingMentors :mentorBookingMentorsSlice,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']