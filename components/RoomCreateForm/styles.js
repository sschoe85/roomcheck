import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 30px;
  font-size: 16px;
  background-color: #f29400;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc7700;
  }
`;

export { FormContainer, Form, Label, Input, SubmitButton };
