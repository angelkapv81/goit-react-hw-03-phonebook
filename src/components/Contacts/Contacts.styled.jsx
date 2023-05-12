import styled from 'styled-components';

export const ContactBox = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const Contact = styled.p`
  font-size: 50px;
  font-weight: bold;
`;
export const ContactList = styled.ul`
  font-size: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const ContactItem = styled.li`
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  &:nth-child(2n) {
    background-color: #ffffff;
  }
`;

export const ContactButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  margin-left: auto;
`;
