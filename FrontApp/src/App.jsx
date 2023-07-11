import '../src/App.css';
import React, { useState } from 'react';
import Table from './Table';

const App = () => {
  const [form, setForm] = useState({
    name: '',
    eventName: '',
    city: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    eventName: '',
    city: ''
  });
  const [formDataList, setFormDataList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: ''
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, eventName, city } = form;
    let formErrors = {};

    if (!name) {
      formErrors.name = 'Wypełnij Imię i Nazwisko';
    }

    if (!eventName) {
      formErrors.eventName = 'Wypełnij Wydarzenie';
    }

    if (!city) {
      formErrors.city = 'Wypełnij Miasto';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log(form);
      handleData(form);
      setForm({
        name: '',
        eventName: '',
        city: ''
      });
    }
  };

  const handleData = (formData) => {
    setFormDataList((prevDataList) => [...prevDataList, formData]);
  };

  const handleDelete = (index) => {
    setFormDataList((prevDataList) => prevDataList.filter((_, i) => i !== index));
  };
  

  return (
    <div className="container">
      <h1>Formularz Zapisu Na Kurs</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Imię i Nazwisko:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        {errors.name && <span className="error">{errors.name}</span>}
        <br />
        <label>
          Wydarzenie:
          <select
            name="eventName"
            value={form.eventName}
            onChange={handleInputChange}
            className="input"
          >
            <option value="">Wybierz wydarzenie</option>
            <option value="Kurs Full Stack Developer">Kurs Full Stack Developer</option>
            <option value="Kurs Front End Developer">Kurs Front End Developer</option>
          </select>
        </label>
        {errors.eventName && <span className="error">{errors.eventName}</span>}
        <br />
        <label>
          Miasto:
          <select name="city" value={form.city} onChange={handleInputChange} className="input">
            <option value="">Wybierz miasto</option>
            <option value="Online">Online</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Kraków">Kraków</option>
          </select>
        </label>
        {errors.city && <span className="error">{errors.city}</span>}
        <br />
        <button type="submit" className="Zapisz">Zapisz na Szkolenie</button>
      </form>
      <Table handleData={handleData} data={formDataList} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
