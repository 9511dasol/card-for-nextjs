import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum UserRole {
  GUEST = 'GUEST',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN',
  PARENT = 'PARENT',
}

interface AuthState {
  isLoggedIn: boolean;
  userId: string | null;
  userRole: UserRole;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userId: null,
  userRole: UserRole.GUEST,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ userId: string; userRole: UserRole }>) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.userRole = action.payload.userRole;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.userRole = UserRole.GUEST;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;