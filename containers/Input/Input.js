import React from "react";
import { InputRoot } from "./Input.style";

export default function Input({ type, id, name, label, value, onChange }) {
  return (
    <InputRoot>
      <input
        id={id}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </InputRoot>
  );
}
