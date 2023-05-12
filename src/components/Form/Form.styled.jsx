import styled from 'styled-components';

export const ContactsBlock = styled.div`
  margin-top: 50px;
`;

export const ContactPhonebook = styled.h1`
  font-size: 70px;
  font-weight: bold;
  text-align: center;
`;
export const ContactBook = styled.form`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border: 2px solid rgb(69, 65, 65);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
`;

export const ContactForm = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 24px;
  border: none;
  background-color: #f1f1f1;
  border-radius: 5px;
  width: 100%;
  &:focus,
  :hover {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    background-color: rgb(173, 255, 173);
  }
`;

export const ContactAdd = styled.button`
  font-size: 24px;
  border-radius: 5px;
  padding: 5px;
  &:focus,
  :hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    background-color: color(rgb(242, 242, 242) 20%);
  }
`;
