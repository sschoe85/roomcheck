import styled from "styled-components";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const StyledAdminIcon = styled(MdOutlineAdminPanelSettings)`
  font-size: 60px;
  color: #ff0054;
  position: fixed;
  top: 15px;
  right: 175px;
  z-index: 1;
`;

const StyledAdminIconHomepage = styled(MdOutlineAdminPanelSettings)`
  font-size: 60px;
  color: #343a40;
  position: fixed;
  top: 15px;
  right: 175px;
  z-index: 1;
`;
export { StyledAdminIcon, StyledAdminIconHomepage };
