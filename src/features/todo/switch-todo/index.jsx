import React from 'react'
import { useDispatch } from "react-redux";
import { toCompleted, toUnCompleted } from "../todoSlice";

export default function SwitchTodo(props) {
  const dispatch = useDispatch();
  function switchTodo(e) {
    if (e.target.checked) {
      dispatch(toCompleted({id: props.id}))
    } else {
      dispatch(toUnCompleted({id: props.id}))
    }
  }
  return (
    <input type="checkbox" onChange={(e) => switchTodo(e)} defaultChecked={props.isComplete} name="" id="" className="h-4 w-4" />
  )
}
