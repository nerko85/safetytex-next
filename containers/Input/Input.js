import React from "react";
import { InputRoot } from "./Input.style";

export default function Input({ type, name, label }) {
  return (
    <InputRoot>
      <input type={type} name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </InputRoot>
  );
}
