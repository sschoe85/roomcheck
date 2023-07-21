import styled from "styled-components";

const RoomListContainer = styled.div`
  text-align: center;
`;

const RoomListTitle = styled.h3`
  color: #ff0054;
`;
const RoomListItem = styled.li`
  list-style: none;
  font-size: 20px;
  margin-bottom: 40px;
  border-radius: 4px;
  padding: 10px;
  margin-right: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BasicListItem = styled.li`
  list-style: none;
`;

export { RoomListContainer, RoomListTitle, RoomListItem, BasicListItem };
