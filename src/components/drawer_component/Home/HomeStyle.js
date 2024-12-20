import styled from "styled-components";

export const BodyContainer = styled.div`
    padding-top: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const FotoPerfil = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 130px;
`;

export const ContainerFotoPerfil = styled.div`
  display: flex;
  align-items: center;
  height: 126px;
  width: fit-content;
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10%;
`;

export const PresentationText = styled.div`
  font-weight: 600;
  font-family: 'JetBrains-Mono', monospace;
  font-size: 10px;
  position: relative;
  text-shadow: 0px 4px 4px #1EF1A599;
  background-color: transparent;
  width: 180px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

