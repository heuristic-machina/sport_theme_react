import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropDownPage() {

  const [selection, setSelection] = useState(null);

  const onChange = (value) => {
    setSelection(value);
  };

  const options = [
    {label: 'Week 1', value: 'Week 1'},
    {label: 'Week 2', value: 'Week 2'},
    {label: 'Week 3', value: 'Week 3'},
  ];

  
  return (
    <div className="App">
          <div className='flex'>
              <Dropdown
                  options={options}
                  value={selection}
                  onChange={onChange} />
          </div>
    </div>
    
  );
}

export default DropDownPage;
