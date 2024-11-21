import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 사용자 권한을 정의하는 enum
export enum UserRole {
  PARENT = "PARENT",
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
}

interface AuthState {
  isLoggedIn: boolean;
  userId: string | null;
  userName: string | null;
  userRole: UserRole;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userId: null,
  userName: null,
  userRole: UserRole.PARENT,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ userId: string; userName: string; userRole: UserRole }>) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userRole = action.payload.userRole;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.userName = null;
      state.userRole = UserRole.PARENT;
    },
    updateUserRole: (state, action: PayloadAction<UserRole>) => {
      state.userRole = action.payload;
    },
  },
});

export const { login, logout, updateUserRole } = authSlice.actions;
export default authSlice.reducer;