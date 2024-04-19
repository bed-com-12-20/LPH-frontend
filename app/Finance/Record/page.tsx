'use client'
import React, { useState, useEffect } from "react";
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
        { ID: 1, firstName: '', LastName: '', Treatment: '', Amount: '', Paymethod: '', TestOrder: '', Date: new Date().toDateString() }
    ]);

    const [dataModified, setDataModified] = useState(false);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (dataModified) {
                event.preventDefault();
                event.returnValue = "";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [dataModified]);

    useEffect(() => {
        // Calculate total amount whenever finance data changes
        calculateTotal(finance);
    }, [finance]);

    const addRow = () => {
        const newRow: FinanceItem = {
            ID: finance.length + 1,
            firstName: '',
            LastName: '',
            Treatment: '',
            Amount: '',
            Paymethod: '',
            TestOrder: '',
            Date: new Date().toDateString()
        };
        setFinance(prevData => [...prevData, newRow]);
        setDataModified(true);
    }

    const deleteRow = (index: number) => {
        setFinance(prevData => {
            const newData = prevData.filter((row, i) => i !== index);
            setDataModified(true);
            return newData;
        });
    }

    const updateRow = (index: number, newData: Partial<FinanceItem>) => {
        const updatedData = [...finance];
        updatedData[index] = { ...updatedData[index], ...newData };
        setFinance(updatedData);
        setDataModified(true);
    }

    const calculateTotal = (data: FinanceItem[]) => {
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toDateString();
        const total = data
            .filter((item) => item.Date === formattedCurrentDate)
            .reduce((acc, curr) => acc + parseFloat(curr.Amount || '0'), 0);
        setTotalAmount(total);
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

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
                    <h1 className="tsiku">{formattedDate}</h1>
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
                                onChange={(event) => updateRow(index, { ID: parseInt(event.target.value) })}
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
                            <select
                                value={row.Paymethod}
                                id="label"
                                onChange={(event) => updateRow(index, { Paymethod: event.target.value })}
                            >
                                <option value="">Select Payment Method</option>
                                <option value="Cash">Cash</option>
                                <option value="Airtel Money">Airtel Money</option>
                                <option value="Mpamba">Mpamba</option>
                                <option value="Bank">Bank</option>
                            </select>
                        </div>
                        <div className="table-cell">
                            <button className="delete" onClick={() => deleteRow(index)}>Delete</button>
                        </div>
                    </div>
                ))}

                {/* Total row */}
                <div className="table-row total-row">
                    <div className="table-cell">
                        Total:
                    </div>
                    <div className="table-cell">
                        {totalAmount}
                    </div>
                    <div className="table-cell" ></div>
                </div>

                <button onClick={addRow} className="button">Add Row</button>
                <button className="button1">Save</button>
            </div>
        </div>
    );
}
