import "./Card.css";
const Card = (props) => {
  return <div className="cardDiv">{props.children}</div>;
};
export default Card;
