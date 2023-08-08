import styled from "styled-components";
import { GiTeacher } from "react-icons/gi";

const StyledTeacherIcon = styled(GiTeacher)`
  font-size: 60px;
  color: #343a40;
  position: fixed;
  top: 15px;
  right: 25px;
  z-index: 1;
`;

const StyledTeacherIconTeacherView = styled(GiTeacher)`
  font-size: 60px;
  color: #ff0054;
  position: fixed;
  top: 15px;
  right: 100px;
  z-index: 1;
`;

const StyledTeacherIconHomepage = styled(GiTeacher)`
  font-size: 60px;
  color: #343a40;
  position: fixed;
  top: 15px;
  right: 100px;
  z-index: 1;
`;

export {
  StyledTeacherIcon,
  StyledTeacherIconTeacherView,
  StyledTeacherIconHomepage,
};
