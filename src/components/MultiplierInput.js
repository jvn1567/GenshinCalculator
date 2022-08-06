function MultiplierInput({name, updateInit, updateFinal}) {
  return (
    <div>
      <label>{name}</label>
      <input
        type='number'
        placeholder='BEFORE'
        onChange={updateInit}
      />
      <input
        type='number'
        placeholder='AFTER'
        onChange={updateFinal}
      />
    </div>
  );
}

export default MultiplierInput;