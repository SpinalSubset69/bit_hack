/**
 * This component represents a cell that contains a value of 1 or 0.
 *
 * @param {Object} props parent component properties.
 * @returns {JSX} BitCell component.
 */
export function BitCell(props) {
  return (
    // div contains onClick attribute bound to an annonymous flipBit(id)
    // function with the unique id of the BitCell passed as the argument
    <div className="bit-cell" onClick={() => props.flipBit(props.id)}>
      <label>{props.bit}</label>
    </div>
  );
}

export default BitCell;
