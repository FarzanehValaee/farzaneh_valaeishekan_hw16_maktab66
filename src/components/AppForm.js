import React,{useState} from 'react';
import {ButtonGroup,ToggleButton,Button} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

export default function AppForm() {
 const [buttonValue, setButtonValue] = useState('1');
 const buttons = [
          { name: 'ورود', value: '1' },
          { name: 'ثبت نام', value: '2' },
  ];
  return (
    <div className='shadow-lg bg-dark p-5 m-5 w-100  rounded'>
      <ButtonGroup className='w-100'>
        {buttons.map((btn, index) => (
          <ToggleButton
            key={index}
            id={`radio-${index}`}
            type="radio"
            variant='outline-success'
            name="radio"
            value={btn.value}
            checked={buttonValue === btn.value}
            onChange={(e) => setButtonValue(e.currentTarget.value)}
          >
            {btn.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <div>
      {buttonValue === '1' ?   <Login/> : <Register />}
     </div>
   </div>
  )
}
