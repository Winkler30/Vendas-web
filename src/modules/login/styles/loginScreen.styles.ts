import styled from 'styled-components';
export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;
export const LogoImage = styled.img`
  width: 150px;
  height: 100px;
`;
export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  padding: 22px;
  width: 100%;
  height: 100vh;
  max-width: 646px;
`;
export const LimitedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 498px;
  flex-direction: column;
`;
