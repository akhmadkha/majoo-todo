import React from "react";
import { useDispatch } from "react-redux";
import { toCompleted, toUnCompleted } from "../todoSlice";

export default function SwitchTodo(props) {
  const dispatch = useDispatch();
  function switchTodo(e) {
    if (e.target.checked) {
      dispatch(toCompleted({ id: props.id }));
    } else {
      dispatch(toUnCompleted({ id: props.id }));
    }
  }
  return props.isComplete === 1 ? (
    <input
      type="checkbox"
      onChange={(e) => switchTodo(e)}
      defaultChecked={true}
      name={props.id}
      checked={true}
      id={props.id}
      className="h-4 w-4"
    />
  ) : (
    <input
      type="checkbox"
      onChange={(e) => switchTodo(e)}
      defaultChecked={false}
      name={props.id}
      checked={false}
      id={props.id}
      className="h-4 w-4"
    />
  );
}
