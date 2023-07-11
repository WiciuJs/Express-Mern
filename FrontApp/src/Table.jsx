import React from 'react';

const Table = ({ data, handleDelete }) => {
  const handleDeleteClick = (index) => {
    handleDelete(index);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Imię i Nazwisko</th>
            <th>Wydarzenie</th>
            <th>Miasto</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {data.map((formData, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{formData.name}</td>
              <td>{formData.eventName}</td>
              <td>{formData.city}</td>
              <td>
                <button className="Usun" onClick={() => handleDeleteClick(index)}>Usuń</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

