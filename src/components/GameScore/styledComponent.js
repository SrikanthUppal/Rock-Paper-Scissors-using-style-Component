import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 16px;
  border: 2px solid #ffffff;
  border-radius: 16px;
  background-color: transparent;
  width: 90%;
  max-width: 550px;
  @media (min-width: 768px) {
    width: 80%;
    max-width: 892px;
  }
`
export const Names = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  padding-top: 0;
  padding-bottom: 0;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  height: 90%;
  width: 40%;
  @media (min-width: 768px) {
    width: 20%;
  }
`
export const GameScoreText = styled.p`
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
  color: #223a5f;
  @media (min-width: 768px) {
    font-size: 26px;
  }
`
export const GameScoreNumber = styled(GameScoreText)`
  font-family: 'Roboto';
  margin-top: 4px;
  font-size: 36px;
  @media (min-width: 768px) {
    font-size: 46px;
  }
`
