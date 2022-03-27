import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import { getTodo } from "./todoAPI";

const initialState = {
  onProgressTodos: [],
  completedTodos: [],
  status: "idle",
};

export const getDataAsync = createAsyncThunk("todo/getTodo", async (params) => {
  try {
    const response = await axios.get(
      "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
    );

    // filtering array by status
    let onProgressTodos = response.data.filter(item => item.status === 0)
    let completedTodos = response.data.filter(item => item.status === 1)

    return {
      onProgressTodos,
      completedTodos
    };
  } catch (error) {
    return error;
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    create: () => {},
    update: () => {},
    delete: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.onProgressTodos = action.payload.onProgressTodos;
        state.completedTodos = action.payload.completedTodos;
      });
  },
});

export const { create, update } = todoSlice.actions;

export const dataTodo = createSelector(
  (state) => ({
     onProgress: state.todo.onProgressTodos,
     onComplete: state.todo.completedTodos,
     status: state.todo.status,
  }), (state) =>  state
);

export default todoSlice.reducer;
