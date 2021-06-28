import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  ContactForm as StyledForm,
  InputErrorBox,
  Input,
  Label,
  TextArea,
} from "./ContactForm.style";
import Tag from "../../containers/Tag";

export default function ContactForm() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const initialValues = {
    name: "",
    phone: "",
    subject: "",
    message: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMessage(res.message);
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      })
      .catch((error) => setError(JSON.parse(error)));

    formik.resetForm({
      values: initialValues,
    });
  };

  setTimeout(() => {
    formik.setErrors({});
  }, 3000);

  const validationSchema = yup.object({
    name: yup.string().required(),
    phone: yup.number().required().nullable(),
    subject: yup.string().required(),
    message: yup.string().required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <StyledForm>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-wrapp">
          <Tag>Šta mi nudimo</Tag>
          <Label htmlFor="name" style={{ display: "block" }}>
            Full name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <InputErrorBox style={{ color: "red" }}>
              {formik.errors.name}
            </InputErrorBox>
          )}

          <Label htmlFor="phone" style={{ display: "block" }}>
            Phone number
          </Label>
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone && (
            <InputErrorBox style={{ color: "red" }}>
              {formik.errors.phone}
            </InputErrorBox>
          )}

          <Label htmlFor="subject" style={{ display: "block" }}>
            Subject
          </Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            {...formik.getFieldProps("subject")}
          />
          {formik.touched.subject && formik.errors.subject && (
            <InputErrorBox style={{ color: "red" }}>
              {formik.errors.subject}
            </InputErrorBox>
          )}

          <Label htmlFor="message" style={{ display: "block" }}>
            Message
          </Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Write your message here"
            {...formik.getFieldProps("message")}
          ></TextArea>
          {formik.touched.message && formik.errors.message && (
            <InputErrorBox style={{ color: "red" }}>
              {formik.errors.message}
            </InputErrorBox>
          )}
        </div>

        <button
          type="submit"
          style={{ display: "block" }}
          disabled={formik.isSubmitting}
        >
          Pošaljite poruku
        </button>

        {error && (
          <InputErrorBox style={{ color: "red" }}>{error}</InputErrorBox>
        )}

        {message && (
          <InputErrorBox style={{ color: "green" }}>{message}</InputErrorBox>
        )}
      </form>
    </StyledForm>
  );
}
