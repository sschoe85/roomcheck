import styled from "styled-components";
import { PiStudentBold } from "react-icons/pi";

const StyledStudentIcon = styled(PiStudentBold)`
  font-size: 60px;
  color: #343a40;
  position: fixed;
  top: 15px;
  right: 25px;
`;

const StyledStudentIconStudentView = styled(PiStudentBold)`
  font-size: 60px;
  color: #ff0054;
  position: fixed;
  top: 15px;
  right: 100px;
`;

export { StyledStudentIcon, StyledStudentIconStudentView };
