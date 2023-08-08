import styled from "styled-components";
import { PiStudentBold } from "react-icons/pi";

const StyledStudentIcon = styled(PiStudentBold)`
  font-size: 60px;
  color: #343a40;
  position: fixed;
  top: 15px;
  right: 25px;
  z-index: 1;
`;

const StyledStudentIconStudentView = styled(PiStudentBold)`
  font-size: 60px;
  color: #ff0054;
  position: fixed;
  top: 15px;
  right: 100px;
  z-index: 1;
`;
const StyledStudentIconAdminView = styled(PiStudentBold)`
  font-size: 60px;
  color: #343a40;
  position: fixed;
  top: 15px;
  right: 100px;
  z-index: 1;
`;

export {
  StyledStudentIcon,
  StyledStudentIconStudentView,
  StyledStudentIconAdminView,
};
