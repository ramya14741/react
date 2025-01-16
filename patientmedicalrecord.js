import React, { useState } from "react";
import medicalRecords from "./medicalRecords";

function Search({ setRecord, setId, id }) {
  const [selectedPatientId, setSelectedPatientId] = useState("");

  const handleShow = () => {
    if (!selectedPatientId) {
      alert("Please select a patient name");
      return;
    }
    const patient = medicalRecords.find(
      (record) => record.id === Number(selectedPatientId)
    );
    setId(Number(selectedPatientId));
    setRecord(patient);
  };

  return (
    <div>
      <select
        value={selectedPatientId}
        onChange={(e) => setSelectedPatientId(e.target.value)}
      >
        <option value="" disabled>
          Select Patient
        </option>
        {medicalRecords.map((record) => (
          <option key={record.id} value={record.id}>
            {record.name}
          </option>
        ))}
      </select>
      <button onClick={handleShow}>Show</button>
    </div>
  );
}

function Records({ record, setRecord, id, setId }) {
  const handleNext = () => {
    const nextId = id === medicalRecords.length ? 1 : id + 1;
    const nextPatient = medicalRecords.find((record) => record.id === nextId);
    setId(nextId);
    setRecord(nextPatient);
  };

  if (!record) return null;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{record.name}</td>
            <td>{record.age}</td>
            <td>{record.condition}</td>
            <td>{record.treatment}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

function App() {
  const [record, setRecord] = useState(null);
  const [id, setId] = useState(null);

  return (
    <div>
      <Search setRecord={setRecord} setId={setId} id={id} />
      <Records record={record} setRecord={setRecord} id={id} setId={setId} />
    </div>
  );
}

export default App;
