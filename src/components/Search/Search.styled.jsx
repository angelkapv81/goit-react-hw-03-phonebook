import styled from 'styled-components';

export const ContactSearch = styled.input`
  padding: 10px;
  font-size: 24px;
  border: none;
  background-color: #f1f1f1;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  &:focus,
  :hover {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    background-color: rgb(173, 255, 173);
  }
`;
export const ContactFind = styled.label`
  display: block;
  text-align: center;
  font-size: 24px;
`;
