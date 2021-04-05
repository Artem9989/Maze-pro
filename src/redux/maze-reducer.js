const MAZE_VALUE = "MAZE_VALUE";

let initialState = {
  startSquare: null,
  steps: [],
  currentSquare: null,
  startIcon: 'Z',
  resultIcon: '💣',
  resultText: '',
  gamePoints: 0,

};

const MazeReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAZE_VALUE:

      return {
        ...state,
        [action.payload.field]: action.payload.value

      };


    default:
      return state;
  }
};

export const getMazeValue = ( field, value) => ({
  type: MAZE_VALUE,
   payload: {
     field,
     value
   } 
});




export default MazeReducer;
