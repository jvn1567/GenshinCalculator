function MultiplierInput(multiplier) {
  return (
    <div>
      <label>{multiplier.name}</label>
      <input type="number" placeholder="BEFORE"></input>
      <input type="number" placeholder="AFTER"></input>
    </div>
  );
}

export default MultiplierInput;