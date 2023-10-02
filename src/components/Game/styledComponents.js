import styled from 'styled-components'

export const GameMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`
export const GameRulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 576px) {
    height: 256px;
    width: 100%;
  }
`
export const PopupImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: auto;
  padding: 18px;
`
