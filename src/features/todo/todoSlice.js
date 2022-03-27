import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import getNowTime from "../../utils/getNowTime";
import { sortAsc, sortDesc } from "../../utils/sortData";

const initialState = {
  fullData: [],
  status: "idle",
};
export const getDataAsync = createAsyncThunk("todo/getTodo", async (params) => {
  try {
    const response = await axios.get(
      "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
    );

    return {
      fullData: response.data
    };
  } catch (error) {
    return error;
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    create: (state, action) => {
      let data = {
        id: new Date().valueOf(),
        title: action.payload.title,
        description: action.payload.desc,
        status: 0,
        createdAt: getNowTime(),
      }
      state.fullData = [...state.fullData, data]
    },
    update: (state, action) => {
      let idx = state.fullData.findIndex(item => item.id === action.payload.id)
      // console.log(action.payload)
      state.fullData[idx].status = action.payload.status
      state.fullData[idx].title = action.payload.title
      state.fullData[idx].description = action.payload.desc
    },
    delete: () => {
      // let data
    },
    toCompleted: (state, action) => {
      let idx = state.fullData.findIndex(item => item.id === action.payload.id)
      state.fullData[idx].status = 1
    },
    toUnCompleted: (state, action) => {
      let idx = state.fullData.findIndex(item => item.id === action.payload.id)
      state.fullData[idx].status = 0
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.fullData = action.payload.fullData
      });
  },
});

export const { create, update, toCompleted, toUnCompleted } = todoSlice.actions;

export const dataTodo = createSelector(
  (state) => ({
     onProgress: state.todo.onProgressTodos,
     onComplete: state.todo.completedTodos,
     status: state.todo.status,
     fullData: state.todo.fullData
  }), (state) =>  state
);

export default todoSlice.reducer;
