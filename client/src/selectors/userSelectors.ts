import { RootState } from "../reducers";

export const selectUserId = (state:RootState) => state.setUser._id

export const selectUser = (state:RootState) => state.setUser