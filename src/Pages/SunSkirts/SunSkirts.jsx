import React, { useState } from 'react';

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
  const [skirtType, setSkirtType] = useState(null);
  const [waist, setWaist] = useState(0);
  const [length, setLength] = useState(0);
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
        <input type="text" id="waist" onChange={handleWaistChange} />
      </label>
      <label htmlFor="length">
        Length
        <input type="text" id="length" onChange={handleLengthChange} />
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

  return (
    <>
      <h2>Sun Skirts</h2>
      <p>description</p>
      {form()}
      {isCalculated && results()}
    </>
  );
}

export default SunSkirts;
