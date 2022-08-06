import React, { useState } from 'react'
import MultiplierInput from './MultiplierInput'

function InputBlock() {

  const [attackInit, setAttackInit] = useState(0);
  const [critRInit, setCritRInit] = useState(0);
  const [critDInit, setCritDInit] = useState(0);
  const [elementInit, setElementInit] = useState(0);
  const [otherInit, setOtherInit] = useState(0);

  const [attackFinal, setAttackFinal] = useState(0);
  const [critRFinal, setCritRFinal] = useState(0);
  const [critDFinal, setCritDFinal] = useState(0);
  const [elementFinal, setElementFinal] = useState(0);
  const [otherFinal, setOtherFinal] = useState(0);

  // TODO: PLACEHOLDER
  const calculate = () => {
    var attackMult = attackFinal / attackInit;
    var critMult = (1 + (critRFinal / 100) * (critDFinal / 100)) /
                   (1 + (critRInit / 100) * (critDInit / 100));
    var dmgMult = (1 + (elementFinal / 100) + (otherFinal / 100)) /
                  (1 + (elementInit / 100) + (otherInit / 100));
    var finalMult = (attackMult * critMult * dmgMult);
    alert(parseFloat((finalMult - 1) * 100).toFixed(2).toString() + "% increase");
  }

  return (
    <div>
      <div>
        <MultiplierInput
          name='Attack'
          updateInit={e=>setAttackInit(e.target.value)}
          updateFinal={e=>setAttackFinal(e.target.value)}
        />
        <MultiplierInput
          name='Crit Rate'
          updateInit={e=>setCritRInit(e.target.value)}
          updateFinal={e=>setCritRFinal(e.target.value)}
        />
        <MultiplierInput
          name='Crit Dmg'
          updateInit={e=>setCritDInit(e.target.value)}
          updateFinal={e=>setCritDFinal(e.target.value)}
        />
        <MultiplierInput
          name='Element %'
          updateInit={e=>setElementInit(e.target.value)}
          updateFinal={e=>setElementFinal(e.target.value)}
        />
        <MultiplierInput
          name='Other %'
          updateInit={e=>setOtherInit(e.target.value)}
          updateFinal={e=>setOtherFinal(e.target.value)}
        />
      </div>
      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default InputBlock;