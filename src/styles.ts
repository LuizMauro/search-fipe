import styled from "styled-components";

export const MenuDesktop = styled.div`
  height: 100vh;
  width: 4rem;
  background: rgb(15, 19, 26, 1);
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  -webkit-box-shadow: -10px 10px 49px 36px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -10px 10px 49px 36px rgba(0, 0, 0, 0.44);
  box-shadow: -10px 10px 49px 36px rgba(0, 0, 0, 0.44);

  * {
    cursor: pointer;
  }
`;

export const MenuMobile = styled.div`
  height: 4rem;
  width: 100vw;
  background: rgb(15, 19, 26, 1);
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  -webkit-box-shadow: -10px 10px 49px 36px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -10px 10px 49px 36px rgba(0, 0, 0, 0.44);
  box-shadow: -10px 10px 49px 36px rgba(0, 0, 0, 0.44);

  * {
    cursor: pointer;
  }
`;
