// CountrySelect.js
import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

// Custom option component to show flag and country name
const customOption = (props) => {
  const { data, innerRef, innerProps } = props;
  const { label } = data;

  // Each flag is encoded in the label by react-select-country-list
  return (
    <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center' }}>
      {/* Flag */}
      <span style={{ marginRight: '10px' }}>{data.label.split(' ')[0]}</span>
      {/* Country Name */}
      <span>{label.split(' ').slice(1).join(' ')}</span>
    </div>
  );
};

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const options = countryList().getData(); // Get country list with flags and names

  // Handle change when selecting country
  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div style={{ width: '400px', margin: '50px auto' }}>
      <h3>Select Country</h3>

      {/* Country Select with Flags */}
      <Select
        options={options}
        value={selectedCountry}
        onChange={handleChange}
        placeholder="Select a country..."
        components={{ Option: customOption }} // Custom option for flag and country name
      />

      {/* Show selected country code and flag */}
      {selectedCountry && (
        <div style={{ marginTop: '20px' }}>
          <h5 >Selected Country Details:</h5>
          <p>
            <strong>Country:</strong> {selectedCountry.label} <br />
            <strong>Country Code:</strong> {selectedCountry.value}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
