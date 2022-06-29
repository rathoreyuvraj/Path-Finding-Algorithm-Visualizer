import "./Node.css";
const Node = (props) => {
  //console.log(props);
  const extraClassName =
    props.isStart === true
      ? "node-start"
      : props.isEnd === true
      ? "node-finish"
      : props.isWall === true
      ? "node-wall"
      : "";
  return (
    <div
      id={`node-${props.row}-${props.col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => {
        props.onMouseDownHandler(props.row, props.col);
      }}
      onMouseUp={() => {
        props.onMouseUpHandler(props.row, props.col);
      }}
      onMouseEnter={() => {
        props.onMouseEnterHandler(props.row, props.col);
      }}
    ></div>
  );
};
export default Node;
