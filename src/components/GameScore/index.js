import {
  ScoreCardContainer,
  Names,
  ScoreContainer,
  GameScoreText,
  GameScoreNumber,
} from './styledComponent'

const GameScore = props => {
  const {score} = props
  return (
    <ScoreCardContainer>
      <Names>
        ROCK <br /> PAPER <br /> SCISSORS
      </Names>
      <ScoreContainer>
        <GameScoreText>Score</GameScoreText>
        <GameScoreNumber>{score}</GameScoreNumber>
      </ScoreContainer>
    </ScoreCardContainer>
  )
}
export default GameScore
