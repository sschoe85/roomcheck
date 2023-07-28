import styled from "styled-components";

const StyledDeleteButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 20px;
  height: 45px;
  width: 200px;
  border-radius: 7px;
  font-weight: 400;
  font-size: 16px;
  margin-top: 15px;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  background-color: #ff0000; /* Red color */
  color: white;

  &:hover {
    background-color: #cc0000; /* Darker shade of red on hover */
  }
`;

export { StyledDeleteButton };
