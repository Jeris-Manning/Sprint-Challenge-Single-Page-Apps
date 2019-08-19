import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

const CharacterCard = ({ character }) => (
 
  <Card>
    <Image src={character.image} />
    <Card.Content>
      <Card.Header>
        {character.name}
      </Card.Header>
      <Card.Meta>{character.status}</Card.Meta>
      <Card.Description>
        {character.name} is a {character.gender} {character.species} from {character.origin.name}.
        {character.name} was last seen by the {character.location.name} Media. 
      </Card.Description>
    </Card.Content>
    
  </Card>
  
)




export default CharacterCard