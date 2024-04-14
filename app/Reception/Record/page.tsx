'use client'

import React, { useState } from "react";
import './style.css';
import Image from "next/image";
import icon from '../../images/icon.png';

interface ReceptionItem {
    ID: number;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    PaymentMethod: string;
    Date: string;
}

export default function Reception() {
    const [Reception, setReception] = useState<ReceptionItem[]>([
        { ID: 1, FirstName: '', LastName: '', PhoneNumber: '', PaymentMethod: '', Date: '' }
    ]);

    const addRow = () => {
        const newRow: ReceptionItem = {
            ID: Reception.length + 1,
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            PaymentMethod: '',
            Date: ''
        };
        setReception(prevData => [...prevData, newRow]);
    }

    const deleteRow = (index: number) => {
        setReception(prevData => prevData.filter((row, i) => i !== index));
    }

    const updateRow = (index: number, newData: Partial<ReceptionItem>) => {
        const updatedData = [...Reception];
        updatedData[index] = { ...updatedData[index], ...newData };
        setReception(updatedData);
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
                    <h1 id="pharma-head">Reception</h1>
                </div>
                <div className="table-box">
                    <div className="table-row">
                        <div className="table-cell">
                            <p>ID</p>
                        </div>
                        <div className="table-cell">
                            <p>First Name</p>
                        </div>
                        <div className="table-cell">
                            <p>Last Name</p>
                        </div>
                        <div className="table-cell">
                            <p>Phone Number</p>
                        </div>
                        <div className="table-cell">
                            <p>Payment Method</p>
                        </div>
                        <div className="table-cell">
                            <p>Date</p>
                        </div>
                      
                        <div className="table-cell">
                            <p>Action</p>
                        </div>
                    </div>
                </div>
                {Reception.map((row, index) => (
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
                                type="number"
                                id="label"
                                placeholder="0888900000"
                                value={row.PhoneNumber}
                                onChange={(event) => updateRow(index, { ...row, PhoneNumber: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <select name="" id="type" required>
                                <option value="">Cash</option>
                                <option value="">Medical Scheme</option>
                               
                            </select>
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
