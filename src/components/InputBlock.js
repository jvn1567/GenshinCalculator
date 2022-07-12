import MultiplierInput from './MultiplierInput'

const multipliers = ['Atk', 'test2', 'test3']; // input line names

// setup input lines
var multiplierInputs = [];
for (var i = 0; i < multipliers.length; i++) {
  multiplierInputs.push(<MultiplierInput name={multipliers[i]} />);
}

function InputBlock() {
  return (
    <div>
      {multiplierInputs}
    </div>
  );
}

export default InputBlock;