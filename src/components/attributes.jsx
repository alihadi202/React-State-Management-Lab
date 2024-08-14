

const attributes= (props) => {
    return (
        <>
             <h2>Money: {props.money}</h2>
            <h2>Team Strength: {props.strength}</h2>
            <p>Total Team Agility: {props.agility}</p>
        </>
    );
}

export default attributes