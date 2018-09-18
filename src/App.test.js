import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer'

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
        name: 'Krystyna',
        score: 20
    },
];
appComponent.setState({ players });

const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

onScoreUpdate(0, 5);

const playersAfterUpdate = appComponent.state('players');

expect(playersAfterUpdate[0].score).toEqual(25);
});


it('should add a player', () => {
  const appComponent = shallow(<App />);

const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
onPlayerAdd('Ania');

const players = appComponent.state('players');

expect(players.length).toEqual(1);
expect(players[0].name).toEqual('Ania');
expect(players[0].score).toEqual(0);
});


it('should remove a player', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
        name: 'Krystyna',
        score: 20
    },
];
appComponent.setState({ players });

const onPlayerRemoveUpdate = appComponent.find(PlayersList).prop('onPlayerRemoveUpdate');

onPlayerRemoveUpdate(0);

const playersAfterUpdate = appComponent.state('players');

expect(playersAfterUpdate).toEqual([]);
});