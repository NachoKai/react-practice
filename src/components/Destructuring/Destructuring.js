import React from "react";
import cars from "./practice";

const Destructuring = () => {
  const [honda, tesla] = cars;

  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;

  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;

  return (
    <div>
      <h2>Destructuring</h2>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
};

export default Destructuring;
