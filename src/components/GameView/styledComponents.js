import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media (max-width: 576px) {
    width: 256px;
    height: 256px;
  }
`
export const GameButton = styled.button`
  height: 150px;
  width: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
  @media (max-width: 576px) {
    height: 100px;
    width: 100px;
    margin-top: 0;
    margin-bottom: 0;
  }
`
export const GameImage = styled.img`
  height: 150px;
  width: 150px;
  @media (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`
export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 576px) {
    width: 40%;
  }
`
export const ResultName = styled.p`
  color: #ffffff;
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 14px;
    font-family: 'Roboto';
  }
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 26px;
  @media (max-width: 576px) {
    font-size: 16px;
    font-family: 'Roboto';
  }
`
