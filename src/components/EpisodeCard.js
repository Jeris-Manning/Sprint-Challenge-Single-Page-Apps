import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

const EpisodeCard = ({ episode }) => (
 
  <Card>
    
    <Card.Content>
      <Card.Header>
        {episode.name}
      </Card.Header>
      <Card.Meta>{episode.episode}</Card.Meta>
      <Card.Description>
        {episode.air_date}
      </Card.Description>
    </Card.Content>
    
  </Card>
  
)




export default EpisodeCard