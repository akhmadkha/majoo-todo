import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import getNowTime from "../../utils/getNowTime";
import { sortAsc, sortDesc } from "../../utils/sortData";

const initialState = {
  fullData: [],
  onProgressTodos: [],
  completedTodos: [],
  status: "idle",
};

// helper
const filterData = (data, by) => {
  return data.filter(item => item.status === by)
}

export const getDataAsync = createAsyncThunk("todo/getTodo", async (params) => {
  try {
    const response = await axios.get(
      "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
    );

    // filtering array by status
    let onProgressTodos = filterData(response.data, 0)
    let completedTodos = filterData(response.data, 1)

    return {
      onProgressTodos: sortAsc(onProgressTodos),
      completedTodos: sortDesc(completedTodos),
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
      // state.onProgressTodos = sortAsc([...state.onProgressTodos, data])
    },
    update: () => {},
    delete: () => {},
    toCompleted: (state, action) => {
      let idx = state.fullData.findIndex(item => item.id === action.payload.id)
      state.fullData[idx].status = 1
      // console.log(data)
      // state.fullData = data
      // let completed = state.onProgressTodos.find(item => item.id === action.payload.id)
      // let newDataOnProgress = state.onProgressTodos.filter(item => item.id !== action.payload.id)

      // state.completedTodos = sortDesc([...state.completedTodos, completed])
      // state.onProgressTodos = sortAsc(newDataOnProgress)
    },
    toUnCompleted: (state, action) => {
      let idx = state.fullData.findIndex(item => item.id === action.payload.id)
      state.fullData[idx].status = 0
      // state.fullData = data
      // let unCompleted = state.completedTodos.find(item => item.id === action.payload.id)
      // let newDataCompleted = state.completedTodos.filter(item => item.id !== action.payload.id)

      // state.onProgressTodos = sortAsc([...state.onProgressTodos, unCompleted])
      // state.completedTodos = sortDesc(newDataCompleted)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // state.onProgressTodos = action.payload.onProgressTodos;
        // state.completedTodos = action.payload.completedTodos;
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
