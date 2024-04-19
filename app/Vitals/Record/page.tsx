'use client'

import React, { useState } from "react";
import './style.css';
import Image from "next/image";
import icon from '../../images/icon.png';

interface VitalsItem {
    ID: number;
    FirstName: string;
    LastName: string;
    Temperature: string;
    Weight: string;
    BloodPressure: string;
    Date: string;
}
const currentDate = new Date();
const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
export default function Vitals() {
    const [Vitals, setVitals] = useState<VitalsItem[]>([
        { ID: 1, FirstName: '', LastName: '', Temperature: '', Weight: '', BloodPressure: '', Date: '' }
    ]);

    const addRow = () => {
        const newRow: VitalsItem = {
            ID: Vitals.length + 1,
            FirstName: '',
            LastName: '',
            Temperature: '',
            Weight: '',
            BloodPressure: '',
            Date: ''
        };
        setVitals(prevData => [...prevData, newRow]);
    }

    const deleteRow = (index: number) => {
        setVitals(prevData => prevData.filter((row, i) => i !== index));
    }

    const updateRow = (index: number, newData: Partial<VitalsItem>) => {
        const updatedData = [...Vitals];
        updatedData[index] = { ...updatedData[index], ...newData };
        setVitals(updatedData);
    }

    return (
        <div>
            
            <div id="table">
                <Image
                    src={icon}
                    alt=""
                    width={100}
                    height={100}
                />
                <div>
                    <h1 id="pharma-head">Body Tests</h1>
                    <h1>{formattedDate}</h1>
                </div>
                <div className="table-box">
                    <div className="table-row">
                        <div className="table-cell">
                            <p>ID</p>
                        </div>
                        <div className="table-cell">
                            <p>FirstName</p>
                        </div>
                        <div className="table-cell">
                            <p>LastName</p>
                        </div>
                        <div className="table-cell">
                            <p>Temperature</p>
                        </div>
                        <div className="table-cell">
                            <p>Weight</p>
                        </div>
                        <div className="table-cell">
                            <p>Blood Pressure</p>
                        </div>
                        <div className="table-cell">
                            <p>Date</p>
                        </div>
                    </div>
                </div>
                {Vitals.map((row, index) => (
                    <div className="table-row" key={index}>
                        <div className="table-cell">
                            <input
                                type="number"
                                id="label"
                                placeholder="e.g 1"
                                value={row.ID}
                                onChange={(event) => updateRow(index, { ...row, ID: parseInt(event.target.value) })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder=" e.g damascus"
                                value={row.FirstName}
                                onChange={(event) => updateRow(index, { ...row, FirstName: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="multiplug"
                                value={row.LastName}
                                onChange={(event) => updateRow(index, { ...row, LastName: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="in degrees"
                                value={row.Temperature}
                                onChange={(event) => updateRow(index, { ...row, Temperature: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="in kilograms"
                                value={row.Weight}
                                onChange={(event) => updateRow(index, { ...row, Weight: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder=""
                                value={row.BloodPressure}
                                onChange={(event) => updateRow(index, { ...row, BloodPressure: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="date"
                                id="label"
                                value={row.Date}
                                onChange={(event) => updateRow(index, { ...row, Date: event.target.value })}
                            />
                        </div>
                     
                        <div className="table-cell">
                            <button className="delete" onClick={() => deleteRow(index)}>Delete</button>
                        </div>
                    </div>
                ))}
                <button onClick={addRow} className="button">Add Row</button>
                <button className="button1">Save</button>
            </div>
        </div>
    );
}
