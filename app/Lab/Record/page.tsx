'use client'; // Mark the component as a Client Component

import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import icon from "../../images/icon.png";

const API_URL = "https://lph-backend.onrender.com/laboratory";

export default function Lab() {
  // Your component code with useState

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Amount, setAmount] = useState<number>(0); // Corrected type to number
  const [PaymentMethod, setPaymentMethod] = useState("");
  const [TestOrdered, setTestOrdered] = useState("");

  const [lab, setLab] = useState<LabItem[]>([
    {
      ID: 1,
      FirstName: "",
      LastName: "",
      Amount: 0,
      PaymentMethod: "",
      TestOrdered: "",
      Date: "",
    },
  ]);

  interface LabItem {
    ID: number;
    FirstName: string;
    LastName: string;
    Amount: number; // Corrected type to number
    PaymentMethod: string;
    TestOrdered: string;
    Date: string;
  }

  const postData = async (
    url: string | URL | Request,
    data: LabItem // Corrected data type to LabItem
  ) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
        alert("saved")
      } else {
        throw new Error("Error: Table not added, try again");
      }
    } catch (error) {
      throw new Error("Server data fetching error: " + error);
      alert("Server data fetching error")
    }
  };

  const handleSubmit = async () => {
    try {
      const apiUrl = "https://lph-backend.onrender.com/laboratory";
      const data: LabItem = {
        ID: lab.length + 1,
        FirstName,
        LastName,
        Amount,
        PaymentMethod,
        TestOrdered,
        Date: new Date().toDateString(), // Assuming Date is today's date
      };

      const apiResponse = await postData(apiUrl, data);
      console.log("Table added", apiResponse);
      alert("Data saved successfully");
    } catch (error) {
      console.log("Error connecting to server:");
      alert("Failed to save data");
    }
  };

  const addRow = () => {
    const newRow: LabItem = {
      ID: lab.length + 1,
      FirstName: "",
      LastName: "",
      Amount: 0,
      PaymentMethod: "",
      TestOrdered: "",
      Date: "",
    };
    setLab((prevData) => [...prevData, newRow]);
  };

  const deleteRow = (index: number) => {
    setLab((prevData) => prevData.filter((row, i) => i !== index));
  };

  const updateRow = (index: number, newData: Partial<LabItem>) => {
    const updatedData = [...lab];
    updatedData[index] = { ...updatedData[index], ...newData };
    setLab(updatedData);
  };

  return (
    <div>
      <div id="table">
        <Image src={icon} alt="" width={100} height={100} />
        <div>
          <h1 id="pharma-head">Laboratory</h1>
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
              <p>Amount</p>
            </div>
            <div className="table-cell">
              <p>Payment Method</p>
            </div>
            <div className="table-cell">
              <p>Test Ordered</p>
            </div>
            <div className="table-cell">
              <p>Date</p>
            </div>
         
            <div className="table-cell">
              <p>Action</p>
            </div>
          </div>
        </div>
        {lab.map((row, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">
              <input
                type="number"
                id="label"
                placeholder="e.g 1"
                value={row.ID}
                onChange={(event) =>
                  updateRow(index, { ...row, ID: parseInt(event.target.value) })
                }
              />
            </div>
            <div className="table-cell">
              <input
                type="text"
                id="label"
                placeholder=" e.g damascus"
                value={row.FirstName}
                onChange={(e) =>
                  updateRow(index, { ...row, FirstName: e.target.value })
                }
              />
            </div>
            <div className="table-cell">
              <input
                type="text"
                id="label"
                placeholder="multiplug"
                value={row.LastName}
                onChange={(e) =>
                  updateRow(index, { ...row, LastName: e.target.value })
                }
              />
            </div>
            <div className="table-cell">
              <input
                type="number" // Assuming Amount is a number field
                id="label"
                placeholder="0"
                value={row.Amount}
                onChange={(e) =>
                  updateRow(index, { ...row, Amount: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="table-cell">
              <select
                name=""
                id="type"
                required
                value={row.PaymentMethod}
                onChange={(e) =>
                  updateRow(index, { ...row, PaymentMethod: e.target.value })
                }
              >
                <option value="">Cash</option>
                <option value="">Airtel Money</option>
                <option value="">Mpamba</option>
                <option value="">Bank</option>
              </select>
            </div>
            <div className="table-cell">
              <select
                name=""
                id="type"
                required
                value={row.TestOrdered}
                onChange={(e) =>
                  updateRow(index, { ...row, TestOrdered: e.target.value })
                }
              >
                <option value="">BP</option>
                <option value="">TB</option>
                <option value="">Cancer</option>
                <option value="">Malaria</option>
              </select>
            </div>
            <div className="table-cell">
             
            </div>
            <div className="table-cell">
              <button className="delete" onClick={() => deleteRow(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
        <button onClick={addRow} className="button">
          Add Row
        </button>
        <button onClick={handleSubmit} className="button1">
          Save
        </button>
      </div>
    </div>
  );
}
