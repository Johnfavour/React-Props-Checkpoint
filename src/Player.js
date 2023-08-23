import Card from 'react-bootstrap/Card';


const Player = ({Name, Age, Team, Nationality, JerseyNumber, ImageUrl}) => {
  return (
    // The card tag where the players data is displayed
    <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img variant="top" src={ImageUrl} />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
          Team: {Team} <br/>
          Age: {Age} <br/>
          Nationality: {Nationality} <br/>
          JerseyNumber: {JerseyNumber} 
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
}

export default Player;