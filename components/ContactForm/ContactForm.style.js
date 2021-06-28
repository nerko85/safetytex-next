import styled from "styled-components";

const ContactForm = styled.div`
  margin-left: 2rem;

  form {
    .form-wrapp {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 4rem 2rem 2rem;
      border: 1px solid ${({ theme }) => theme.darkGray};
      border-bottom-color: ${({ theme }) => theme.primary};

      h5 {
        margin-bottom: 1rem;
      }
    }

    button {
      width: 100%;
      padding: 1rem 0;
      text-align: center;
      border: none;
      background: ${({ theme }) => theme.primary};
      color: #fff;
      text-transform: uppercase;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: 0;

    form .form-wrapp {
      padding: 2rem;
    }
  }
`;

const Label = styled.label`
  margin-top: 1rem;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0 1rem;
  line-height: 2.5;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid black;

  &:placeholder {
    font-weight: 200;
  }

  &:hover,
  &:active {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }

  &:focus {
    background: rgba(5, 126, 84, 0.1);
  }
`;

const TextArea = styled.textarea`
  height: 100px;
  padding: 0 1rem;
  line-height: 2.5;
  font-family: "Open Sans";
  font-size: 1rem;
  border: none;
  box-sizing: border-box;
  resize: none;

  &:placeholder {
    font-weight: 200;
  }

  &:hover,
  &:active {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }

  &:focus {
    background: rgba(5, 126, 84, 0.1);
  }
`;

const InputErrorBox = styled.span`
  display: block;
  color: #ff6271;
  font-size: 12px;
  font-weight: 700;
  margin: 4px 0;
  text-align: left;
`;

export { ContactForm, InputErrorBox, Input, Label, TextArea };
