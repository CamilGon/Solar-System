import React, { Component } from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title.js';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="lista-planetas">
          { Planets.map((planeta) => (
            <PlanetCard
              key={ planeta.name }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
