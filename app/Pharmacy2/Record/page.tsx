'use client';

import React, { useState } from "react";
import './style.css';
import Image from "next/image";
import icon from '../../images/icon.png';

interface PharmacyItem {
    ID: number;
    firstName: string;
    LastName: string;
    Paymethod: string;
    TestOrder: string;
    Date: string;
}

export default function Pharmacy() {
    const [Pharmacy, setPharmacy] = useState<PharmacyItem[]>([
        { ID: 1, firstName: '', LastName: '', Paymethod: '', TestOrder: '', Date: '' }
    ]);

    const addRow = () => {
        const newRow: PharmacyItem = {
            ID: Pharmacy.length + 1,
            firstName: '',
            LastName: '',
            Paymethod: '',
            TestOrder: '',
            Date: ''
        };
        setPharmacy(prevData => [...prevData, newRow]);
    }

    const deleteRow = (index: number) => {
        setPharmacy(prevData => prevData.filter((row, i) => i !== index));
    }

    const updateRow = (index: number, newData: Partial<PharmacyItem>) => {
        const updatedData = [...Pharmacy];
        updatedData[index] = { ...updatedData[index], ...newData };
        setPharmacy(updatedData);
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
                    <h1 id="pharma-head">Pharmacy</h1>
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
                {Pharmacy.map((row, index) => (
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
                                value={row.firstName}
                                onChange={(event) => updateRow(index, { ...row, firstName: event.target.value })}
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
                            <select name="" id="type" required>
                                <option value="">Cash</option>
                                <option value="">Airtel Money</option>
                                <option value="">Mpamba</option>
                                <option value="">Bank</option>
                            </select>
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
