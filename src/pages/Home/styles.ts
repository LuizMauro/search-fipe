import styled from "styled-components";
import { AutoComplete } from "rsuite";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex: 1;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  max-width: 20rem;
  min-width: 18rem;
`;

export const AutoCompleteComponent = styled(AutoComplete)`
  width: 100%;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);

  p {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerFipe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
