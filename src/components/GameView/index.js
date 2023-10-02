import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultViewContainer,
  ResultName,
  ResultText,
} from './styledComponents'
import './index.css'

const GameView = props => {
  const {isShow, choicesList, restartGame, checkResult, text, newArray} = props

  const showGame = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              key={choicesList[0].id}
              alt={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              key={choicesList[1].id}
              alt={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              key={choicesList[2].id}
              alt={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultViewContainer>
            <ResultName>You</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultViewContainer>
          <ResultViewContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultViewContainer>
          <ResultViewContainer>
            <ResultText>{text}</ResultText>
            <button
              className="play-again-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultViewContainer>
        </>
      )}
    </GameViewContainer>
  )
  return showGame()
}

export default GameView
