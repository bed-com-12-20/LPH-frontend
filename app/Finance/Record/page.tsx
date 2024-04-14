'use client'

import React, { useState } from "react";
import './style.css';
import Image from "next/image";
import icon from '../../images/icon.png';

interface FinanceItem {
    ID: number;
    firstName: string;
    LastName: string;
    Treatment: string;
    Amount: string;
    Paymethod: string;
    TestOrder: string;
    Date: string;
}

export default function Finance() {
    const [finance, setFinance] = useState<FinanceItem[]>([
        { ID: 1, firstName: '', LastName: '', Treatment: '', Amount: '', Paymethod: '', TestOrder: '', Date: '' }
    ]);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const addRow = () => {
        const newRow: FinanceItem = {
            ID: finance.length + 1,
            firstName: '',
            LastName: '',
            Treatment: '',
            Amount: '',
            Paymethod: '',
            TestOrder: '',
            Date: ''
        };
        setFinance(prevData => [...prevData, newRow]);
    }

    const deleteRow = (index: number) => {
        setFinance(prevData => {
            const newData = prevData.filter((row, i) => i !== index);
            calculateTotal(newData); // Recalculate total after row deletion
            return newData;
        });
    }

    const updateRow = (index: number, newData: Partial<FinanceItem>) => {
        const updatedData = [...finance];
        updatedData[index] = { ...updatedData[index], ...newData };
        setFinance(updatedData);

        // Calculate total amount whenever amount is updated
        calculateTotal(updatedData);
    }

    const calculateTotal = (data: FinanceItem[]) => {
        const total = data.reduce((acc, curr) => acc + parseFloat(curr.Amount || '0'), 0);
        setTotalAmount(total);
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
                    <h1 id="pharma-head">Finance Records</h1>
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
                            <p>Treatment</p>
                        </div>
                        <div className="table-cell">
                            <p>Amount</p>
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

                {finance.map((row, index) => (
                    <div className="table-row" key={index}>
                        <div className="table-cell">
                            <input
                                type="number"
                                id="label"
                                placeholder="e.g 1"
                                value={row.ID}
                                // onChange={(event) => updateRow(index, { ID: parseInt(event.target.value) })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder=" e.g damascus"
                                value={row.firstName}
                                onChange={(event) => updateRow(index, { firstName: event.target.value })}
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
                                type="text"
                                id="label"
                                placeholder="treatment"
                                value={row.Treatment}
                                onChange={(event) => updateRow(index, { Treatment: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="number"
                                id="label"
                                placeholder="Amount"
                                value={row.Amount}
                                onChange={(event) => updateRow(index, { Amount: event.target.value })}
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

                {/* Total row */}
                <div className="table-row total-row">
                    <div className="table-cell" colSpan={4}>
                        Total:
                    </div>
                    <div className="table-cell">
                        {totalAmount}
                    </div>
                    <div className="table-cell" colSpan={3}></div>
                </div>

                <button onClick={addRow} className="button">Add Row</button>
                <button className="button1">Save</button>
            </div>
        </div>
    );
}