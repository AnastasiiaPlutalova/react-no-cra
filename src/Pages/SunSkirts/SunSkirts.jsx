import React, { useState } from 'react';

const SUN_SKIRT_TYPES = {
  SUN: 'sun',
  HALF_SUN: 'half_sun',
  BELL_L: 'bell_l',
  BELL_M: 'bell_m',
  BELL_S: 'bell_s',
};

function SunSkirts() {
  const [koef, setKoef] = useState(0);
  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(0);
  const [length, setLength] = useState(0);

  const radioGroup = Object.values(SUN_SKIRT_TYPES).map((item) => (
    <div key={item}>
      <input key={item} name="skirt_type" id={item} value={item} type="radio" />
      <label htmlFor={item}>{item}</label>
    </div>
  ));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(1);
  };

  return (
    <>
      <h2>Sun Skirts</h2>
      <p>description</p>
      <form onSubmit={handleFormSubmit}>
        <div>{radioGroup}</div>
        <label htmlFor="waist">
          Waist
          <input type="text" id="waist" />
        </label>
        <label htmlFor="length">
          Length
          <input type="text" id="length" />
        </label>
        <button type="submit">Generate</button>
      </form>
    </>
  );
}

export default SunSkirts;
