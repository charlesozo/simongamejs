import { connect } from 'react-redux';
import { handleSimonButton,
         leaveGame,
         startGame,
         stopButtonSound } from '../actions/index';
import SimonButtonGroup from '../components/SimonButtonGroup';

const mapStateToProps = (state, ownProps) => (
  {
    colors: state.simonButtons.buttonColors,
    gameMode: state.game.mode,
    gameOver: state.game.gameOver,
    playing: state.game.playing,
    simonButtons: state.simonButtons.buttons,
    speed: Number(state.game.speed),
    transitionComplete: ownProps.transitionComplete,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onLeaveGame: () => dispatch(leaveGame()),
    onSimonButtonMouseDown: (id) => {
      dispatch(handleSimonButton(id));
    },
    onSimonButtonMouseLeave: (active, id) => {
      dispatch(stopButtonSound(active, id));
    },
    onSimonButtonMouseUp: (active, id) => {
      dispatch(stopButtonSound(active, id));
    },
    startGame: () => dispatch(startGame()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SimonButtonGroup);
