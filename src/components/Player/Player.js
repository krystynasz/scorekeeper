import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <div className="Player__name">{props.name}</div>
    <span className="Player__score">{props.score}</span>
    <div className="voteButtons">
    <button className="Player__plusbutton" onClick={() => props.onPlayerScoreChange(1)} >+</button>
    <button className="Player__minusbutton" onClick={() => props.onPlayerScoreChange(-1)} >-</button>
    </div>
    <button className="removePlayer" onClick={() => props.onPlayerRemove()} >Remove the player</button>
  </li>
);

export default Player;