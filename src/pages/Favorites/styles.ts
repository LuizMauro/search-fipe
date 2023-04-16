import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
`;

export const CardModel = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 320px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  -webkit-box-shadow: -5px 10px 10px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -5px 10px 10px 5px rgba(0, 0, 0, 0.1);
  box-shadow: -5px 10px 10px 5px rgba(0, 0, 0, 0.1);

  p {
    padding: 10px;
  }
`;
