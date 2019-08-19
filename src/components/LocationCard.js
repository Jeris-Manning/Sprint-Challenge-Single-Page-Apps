import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const LocationCard = ({ location }) => (
  <Card>
    <Card.Content>
      <Card.Header>{location.name}</Card.Header>
      <Card.Meta>{location.dimension}</Card.Meta>
      <Card.Description>{location.type}</Card.Description>
    </Card.Content>
  </Card>
);

export default LocationCard;
