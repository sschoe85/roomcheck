import styled from "styled-components";

const RoomListContainer = styled.div`
  text-align: center;
  margin-top: 90px;
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
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BasicListItem = styled.div`
  list-style: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  RoomListContainer,
  RoomListTitle,
  RoomListItem,
  BasicListItem,
  ButtonContainer,
};
