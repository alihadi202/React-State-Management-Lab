import './zombie.css'

const zombieFighter = ({zombieFighter:{name , price , strength , agility , img}}) => {
    return (
        <>
            <div>
                <h4>name:{name}</h4>
                <p>price: {price}</p>
                <p>strength: {strength}</p>
                <p>agility:{agility}</p>
                <img src={img} alt="" />

            </div>
        </>
    );
}

export default zombieFighter