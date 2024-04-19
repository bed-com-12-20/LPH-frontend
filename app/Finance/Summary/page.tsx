'use client'
import React, { useState } from "react";
//import DaySummary from "./DaySummary";
import "./Style.css"; // Import your CSS file
import Finance from "../Record/page";

interface DaySummaryItem {
    ID:number;
    DayTotal: number;
    Expenditure: number;
    Banking: number;
    CashInHand: number;
    Date: Date;
}

const handleSubmit = async () => {
    //logic to handle saving data and send sms
    try {
        alert("save and send sms")
    }
    catch{

    }
}

export default function DaySummary() {
    const [daySummary, setDaySummary] = useState<DaySummaryItem[]>([
        { ID:1,DayTotal: 0, Expenditure: 0, Banking: 0, CashInHand: 0, Date: new Date() }
    ]);

    const updateRow = (index: number, newData: Partial<DaySummaryItem>) => {
        const updatedData = [...daySummary];
        updatedData[index] = { ...updatedData[index], ...newData };

        // Calculate Cash in Hand
        const cashInHand = updatedData[index].DayTotal - updatedData[index].Expenditure;
        updatedData[index].CashInHand = cashInHand;

        setDaySummary(updatedData);
    }
  

    const addRow = () => {
        // Check if there are already rows added
        if (daySummary.length === 1) {
            alert("You can only add one row.");
            return;
        }
    
        const newRow: DaySummaryItem = {
            ID:1,
            DayTotal: 0,
            Expenditure: 0,
            Banking: 0,
            CashInHand: 0,
            Date: new Date()
        };
        setDaySummary(prevData => [...prevData, newRow]);
    }
    
    const deleteRow = (index: number) => {
        setDaySummary(prevData => {
            return prevData.filter((row, i) => i !== index);
        });
    }

  

    // Calculate totals
    const Daytotal = daySummary.reduce((acc, cur) => acc + cur.DayTotal, 0);
    const totalExpenditure = daySummary.reduce((acc, cur) => acc + cur.Expenditure, 0);
    const totalBanking = daySummary.reduce((acc, cur) => acc + cur.Banking, 0);
    const totalCashInHand = Daytotal - totalExpenditure;

    return (
        <div className="table-box">
                    <div className="table-row">
                        <div className="table-cell">
                            <p>ID</p>
                        </div>
                        <div className="table-cell">
                            <p>DayTotal</p>
                        </div>
                        <div className="table-cell">
                            <p>Expenditure</p>
                        </div>
                        <div className="table-cell">
                            <p>Banking</p>
                        </div>
                        <div className="table-cell">
                            <p>CashInHand</p>
                        </div>
                        <div className="table-cell">
                            <p>Action</p>
                        </div>
                    </div>
                
            {daySummary.map((row, index) => (
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
                          type="number"
                          id="label"
                          value={row.DayTotal}
                          readOnly
                          onChange={(event) => updateRow(index, { DayTotal: parseInt(event.target.value) })}
                      />
                  </div>
                  <div className="table-cell">
                      <input
                          type="number"
                          id="label"
                          value={row.Expenditure}
                          onChange={(event) => updateRow(index, { Expenditure: parseInt(event.target.value) })}
                      />
                  </div>
                  <div className="table-cell">
                      <input
                          type="number"
                          id="label"
                          value={row.Banking}
                          onChange={(event) => updateRow(index, { Banking: parseInt(event.target.value) })}
                      />
                  </div>
                  <div className="table-cell">
                      <input
                          type="number"
                          id="label"
                          value={row.CashInHand}
                          onChange={(event) => updateRow(index, { CashInHand: parseInt(event.target.value) })}
                      />
                  </div>
                  <div className="table-cell">
                      <button className="delete" onClick={() => deleteRow(index)}>Delete</button>
                  </div>
              </div>
           
            ))}
            {/* Total Row */}
            <div className="table-row">
                <div className="table-cell">
                    <p>{Daytotal}</p>
                </div>
                <div className="table-cell">
                    <p>{totalExpenditure}</p>
                </div>
                <div className="table-cell">
                    <p>{totalBanking}</p>
                </div>
                <div className="table-cell">
                    <p>{totalCashInHand}</p>
                </div>
                <div className="table-cell"></div>
            </div>
            <button onClick={addRow} className="button">Add Row</button>
            <p><button className="button1 " onClick={handleSubmit}>Save and Send</button></p>
        
        </div>
    );
}