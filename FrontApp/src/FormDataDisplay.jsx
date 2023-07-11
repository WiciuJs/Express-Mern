import React from 'react';

const FormDataDisplay = ({ data }) => {
  return (
    <div className="data-display">
      <table>
        <thead>
          <tr>
            <th>Imię i Nazwisko</th>
            <th>Wydarzenie</th>
            <th>Miasto</th>
          </tr>
        </thead>
        <tbody>
          {data.map((formData, index) => (
            <tr key={index}>
              <td>{formData.name}</td>
              <td>{formData.eventName}</td>
              <td>{formData.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDataDisplay;
