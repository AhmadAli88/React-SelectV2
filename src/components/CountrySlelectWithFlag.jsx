// PhoneInput.js
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputComponent = () => {
  const [phone, setPhone] = useState('');

  const handleOnChange = (value) => {
    setPhone(value);
  };

  return (
    <div style={{ width: '400px', margin: '50px auto' }}>
      <h3>Select Country (with phone input)</h3>
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={handleOnChange}
        enableSearch
      />

      {/* Show selected phone number */}
      {phone && (
        <div style={{ marginTop: '20px' }}>
          <h4>Phone Number:</h4>
          <p>{phone}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneInputComponent;
