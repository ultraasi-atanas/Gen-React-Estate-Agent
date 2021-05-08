import Appointment from './Appointment.js'

function Tile(props) {
    return (
      <div className="tile">
        <h1>{props.id} {props.price} {props.area} {props.type}</h1>
        <img src={props.image} alt='' />

        <Appointment key = {props.id} />
      </div>
    );
  }

export default Tile;