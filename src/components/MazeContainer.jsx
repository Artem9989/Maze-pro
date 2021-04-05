import React from "react";
import MazeReducer from "../redux/maze-reducer";
import { getMazeValue } from "../redux/maze-reducer";
import { connect } from "react-redux";
import { compose } from "redux";

import Maze from "./maze.jsx";

class MazeContainer extends React.Component {
  render() {
    return (
      <>
        <Maze
          MazeValue={this.props.MazeValue}
          getMazeValue={this.props.getMazeValue}
          MazeReducer={this.props.MazeReducer}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    MazeValue: state.MazeReducer,
  };
};

export default compose(
  connect(mapStateToProps, {
    getMazeValue,
    MazeReducer,
  })
)(MazeContainer);
