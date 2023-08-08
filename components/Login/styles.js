import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  width: 170px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LogoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  width: 170px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const RoleButton = styled.button`
  background-color: #f29400;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  width: 170px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #cc7700;
  }
`;

const LoginText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export { LoginContainer, LoginButton, LoginText, LogoutButton, RoleButton };
