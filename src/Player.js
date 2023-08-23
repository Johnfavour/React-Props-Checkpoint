import Card from 'react-bootstrap/Card';


const Player = ({name, age, team, nationality, jerseyNumber, imageUrl}) => {
  return (
    // The card tag where the players data is displayed
    <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          team: {team} <br/>
          age: {age} <br/>
          nationality: {nationality} <br/>
          jerseyNumber: {jerseyNumber} 
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
}

export default Player;