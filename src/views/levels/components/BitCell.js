export function BitCell(props) {
  return (
    <div className="bit-cell" onClick={() => props.flipBit(props.id)}>
      <label>{props.bit}</label>
    </div>
  );
}

export default BitCell;
