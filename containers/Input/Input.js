import React from "react";
import { InputRoot } from "./Input.style";

export default function Input({ type, name, label, value, onChange }) {
  return (
    <InputRoot>
      <input
        type={type}
        name={name}
        id={value}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </InputRoot>
  );
}
