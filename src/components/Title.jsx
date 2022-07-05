import "./Title";
import Subtitle from "./Subtitle";

const Title = (props) => {
  return (
    <>
      <h2>{props.headline}</h2>
      <Subtitle subtitle={props.newprop} />
    </>
  );
};

export default Title;
