import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missao) => (
          <MissionCard
            name={ missao.name }
            year={ missao.year }
            country={ missao.country }
            destination={ missao.destination }
            key={ missao.name }
          />))}
      </div>
    );
  }
}

export default Missions;
