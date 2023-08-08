import styled from "styled-components";
import { MdHome, MdAdd, MdPerson } from "react-icons/md";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const HomeIcon = styled(MdHome)`
  font-size: 40px;
  color: #ff0054;
`;

const AddIcon = styled(MdAdd)`
  font-size: 40px;
  color: #ff0054;
`;

const LoginIcon = styled(MdPerson)`
  font-size: 40px;
  color: #ff0054;
`;

export { NavContainer, NavButtonContainer, HomeIcon, AddIcon, LoginIcon };
