import React, {useState} from 'react';

export default function Dropdown(props){
  const {options, style, defaultValue = "Select"} = props;
  let [value, setValue] = useState(defaultValue);

  return  <div className="Dropdown" style={style}>
            <button onClick={toggleOptions}>{value}</button>
            {options.map((option, key) => <div key={`${key}-${option}`}>
                                            {option}
                                          </div>)}
          </div>
}
