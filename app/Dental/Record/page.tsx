'use client'

import React, { useState } from "react";
import './style.css';
import Image from "next/image";
import icon from '../../images/icon.png';

interface DentalItem {
    ID: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Address: string;
    Diogonis: string;
    Amount: string;
    MedicalScheme: string;
    Treatment: string;
    Date: string;
}

export default function Dental() {
    const [dental, setDental] = useState<DentalItem[]>([
        { ID: '1', FirstName: '', LastName: '', PhoneNumber: '', Address: '', Diogonis: '', Amount: '', MedicalScheme: '', Treatment: '', Date: '' }
    ]);

    const addRow = () => {
        const newRow = {
            ID: (dental.length + 1).toString(),
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            Address: '',
            Diogonis: '',
            Amount: '',
            MedicalScheme: '',
            Treatment: '',
            Date: ''
        };
        setDental(prevData => [...prevData, newRow]);
    }

    const deleteRow = (index: number) => {
        setDental(prevData => prevData.filter((row, i) => i !== index));
    }

    const updateRow = (index: number, newData: Partial<DentalItem>) => {
        const updatedData = [...dental];
        updatedData[index] = { ...updatedData[index], ...newData };
        setDental(updatedData);
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
                    <h1 id="pharma-head">Dental</h1>
                </div>
                <div className="table-box">
                    <div className="table-row" id="tab">
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
                            <p>PhoneNumber</p>
                        </div>
                        <div className="table-cell">
                            <p>Address</p>
                        </div>
                        <div className="table-cell">
                            <p>Diagonisis</p>
                        </div>
                        <div className="table-cell">
                            <p>Amount</p>
                        </div>
                        <div className="table-cell">
                            <p>Medical Scheme</p>
                        </div>
                        <div className="table-cell">
                            <p>Treatment</p>
                        </div>
                        <div className="table-cell">
                            <p>Date</p>
                        </div>
                      
                        <div className="table-cell">
                            <p>Action</p>
                        </div>
                    </div>
                </div>
                {dental.map((row, index) => (
                    <div className="table-row" key={index}>
                        <div className="table-cell">
                            <input
                                type="number"
                                id="label"
                                placeholder="e.g 1"
                                value={row.ID}
                                onChange={(event) => updateRow(index, { ID: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder=" e.g damascus"
                                value={row.FirstName}
                                onChange={(event) => updateRow(index, { FirstName: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="multiplug"
                                value={row.LastName}
                                onChange={(event) => updateRow(index, { LastName: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="number"
                                id="label"
                                placeholder="0888009005"
                                value={row.PhoneNumber}
                                onChange={(event) => updateRow(index, { PhoneNumber: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="p.o box liwonde"
                                value={row.Address}
                                onChange={(event) => updateRow(index, { Address: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="bracelets"
                                value={row.Diogonis}
                                onChange={(event) => updateRow(index, { Diogonis: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="k 1000"
                                value={row.Amount}
                                onChange={(event) => updateRow(index, { Amount: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <select name="" id="type" required>
                                <option value=""></option>
                                <option value="">MASM</option>
                                <option value="">MediHealth</option>
                                <option value="">National Bank</option>
                                <option value="">Liberty Health</option>
                                <option value="">MRA</option>
                                <option value="">ECM</option>
                            </select>
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="teath removal"
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="date"
                                id="label"
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
