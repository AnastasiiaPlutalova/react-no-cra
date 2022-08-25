import React, { useState } from 'react';

// TODO add calculation if L is greater than fabric width

// TODO consider using Map instead of an object
const SUN_SKIRT_TYPES = {
  SUN: {
    name: 'SUN',
    koef: 0.32,
    angle: 180,
  },
  HALF_SUN: {
    name: 'HALF_SUN',
    koef: 0.64,
    angle: 90,
  },
  BELL_L: {
    name: 'BELL_L',
    koef: 0.8,
    angle: 75,
  },
  BELL_M: {
    name: 'BELL_M',
    koef: 0.9,
    angle: 65,
  },
  BELL_S: {
    name: 'BELL_S',
    koef: 1,
    angle: 60,
  },
};

function SunSkirts() {
  const [skirtType, setSkirtType] = useState(SUN_SKIRT_TYPES.SUN);
  const [waist, setWaist] = useState(70);
  const [length, setLength] = useState(80);
  const [radius, setRadius] = useState(0);
  const [fabric, setFabric] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleSkirtTypeChange = (e) => {
    setSkirtType(SUN_SKIRT_TYPES[e.target.value]);
  };

  const handleWaistChange = (e) => {
    setWaist(e.target.value);
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const R = (waist / 2) * skirtType.koef;
    const L = 2 * (R + length) + 2;
    setRadius(R);
    setFabric(L);
    setIsCalculated(true);
  };

  const radioGroup = Object.values(SUN_SKIRT_TYPES).map(({ name }) => (
    <div key={name}>
      <input
        name="skirt_type"
        id={name}
        value={name}
        type="radio"
        onChange={handleSkirtTypeChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  ));

  const form = () => (
    <form onSubmit={handleFormSubmit}>
      <div>{radioGroup}</div>
      <label htmlFor="waist">
        Waist
        <input
          type="text"
          id="waist"
          value={waist}
          onChange={handleWaistChange}
        />
      </label>
      <label htmlFor="length">
        Length
        <input
          type="text"
          id="length"
          value={length}
          onChange={handleLengthChange}
        />
      </label>
      <button type="submit">Generate</button>
    </form>
  );

  const results = () => (
    <div>
      <p>koef: {skirtType.koef}</p>
      <p>angle: {skirtType.angle}</p>
      <p>radius: {radius}</p>
      <p>fabric needed: {fabric}</p>
    </div>
  );

  const width = 450;
  const centerH = width / 2;
  const margin = 10;
  const dotR = 3;

  const svgSun = () => (
    // eslint-disable-next-line react/style-prop-object
    <svg height="400" width="450" style={{ border: '1px solid black' }}>
      <path
        d={`M 0 10 l ${width} 0`}
        stroke="green"
        strokeWidth="3"
        fill="none"
      />
      <g stroke="black" strokeWidth="3" fill="black">
        <circle id="pointO" cx={centerH} cy={margin} r={dotR} />
        <circle id="pointW" cx={centerH + radius} cy={margin} r={dotR} />
        <circle id="pointW1" cx={centerH - radius} cy={margin} r={dotR} />
        <circle id="pointW2" cx={centerH} cy={margin + radius} r={dotR} />
        <circle id="pointB" cx={centerH + fabric} cy={margin} r={dotR} />
        <circle id="pointB1" cx={centerH - fabric} cy={margin} r={dotR} />
        <circle id="pointB2" cx={centerH} cy={margin + fabric} r={dotR} />
      </g>
    </svg>
  );

  return (
    <>
      <h2>Sun Skirts</h2>
      <p>description</p>
      {form()}
      {isCalculated && results()}
      {svgSun()}
    </>
  );
}

export default SunSkirts;

