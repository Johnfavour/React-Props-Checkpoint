import players from './players';
import Player from './Player';

const PlayerList = () => {
    return (
        // The list of players called through the map function
        <div style= {{display: 'flex',gap: '20px', background: 'linear-gradient(white, black, white)', margin: '100px 0 0 50px'}}>
            {players.map((players, index) => (
                <Player key={index} {...players}/>
            ))}
        </div>
    )
}


export default PlayerList
