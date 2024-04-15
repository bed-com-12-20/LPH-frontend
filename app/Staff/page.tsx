'use client'
import React, { useState, ChangeEvent } from "react";
import './style.css';
import Image from "next/image";
import avatar from '../images/avatar.webp';

export default function Staff() {
  // Define state for selected staff members in each department
  const [selectedStaff, setSelectedStaff] = useState({
    OPD: { name: "", picture: "" },
    Pharmacy: { name: "", picture: "" },
    Finance: { name: "", picture: "" },
    Maternity: { name: "", picture: "" },
    Reception: { name: "", picture: "" },
    XRay: { name: "", picture: "" },
    Lab: { name: "", picture: "" },
    Dental: { name: "", picture: "" },
    Backstore: { name: "", picture: "" },
    Vitals: { name: "", picture: "" }
  });

  // Function to handle selection change for each department
  const handleStaffChange = (department: string) => (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;
    setSelectedStaff({ ...selectedStaff, [department]: { name: selectedName, picture: event.target.dataset.picture || "" } });
  };

  // Function to handle login button click
  const handleLoginClick = (department: string) => () => {
    if (!selectedStaff[department].name) {
      alert("Please select a staff member");
      return;
    }
    // Handle login logic here
    window.location.href = `/${department.replace(/\s+/g, '')}/Login`;
  };

  return (
    <div>
      <div className="card">
        <Image
          src={avatar}
          alt="avatar"
          width={132}
          height={128}
          className="image"
        />
        <h1 className="name1"></h1>
        <p className="title">Finance</p>
        <div className="desc">
          <select value={selectedStaff.Finance.name} onChange={handleStaffChange("Finance")}>
            <option value="" data-picture="">Select staff</option>
            <option value="Mr Wakisa" data-picture="https://scontent.fblz2-1.fna.fbcdn.net/v/t1.18169-9/944037_838521949590147_7475974626213026988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeET3LwOiIydTKerUOIe6Gufl4vndxYYiO2Xi-d3FhiI7VWTwkpy1V81IEAH5r17jZ6dzLPazViod8EmXiu03vmW&_nc_ohc=alyIGIvGn-cAb4diFy-&_nc_ht=scontent.fblz2-1.fna&oh=00_AfDWRd0zC7Tpmy_pnYzkyaFsKf3nI7LNolyBxxzzUeioEw&oe=6643CFD7">Mr Wakisa</option>
            <option value="Genesis Welengu" data-picture="">Genesis Welengu</option>
          </select>
          {selectedStaff.Finance.picture && <img src={selectedStaff.Finance.picture} alt="Selected Staff" />}
        </div>
        <button className="btn" onClick={handleLoginClick("Finance")}>Login</button>
      </div>

      <div className="card">
        <Image
          src={avatar}
          alt="avatar"
          width={132}
          height={128}
          className="image"
        />
        <h1 className="name1"></h1>
        <p className="title">OPD</p>
        <div className="desc">
          <select value={selectedStaff.OPD.name} onChange={handleStaffChange("OPD")}>
            <option value="" data-picture="">Select staff</option>
            <option value="Mr chilikumtima" data-picture="https://scontent.fblz2-1.fna.fbcdn.net/v/t1.18169-9/944037_838521949590147_7475974626213026988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeET3LwOiIydTKerUOIe6Gufl4vndxYYiO2Xi-d3FhiI7VWTwkpy1V81IEAH5r17jZ6dzLPazViod8EmXiu03vmW&_nc_ohc=alyIGIvGn-cAb4diFy-&_nc_ht=scontent.fblz2-1.fna&oh=00_AfDWRd0zC7Tpmy_pnYzkyaFsKf3nI7LNolyBxxzzUeioEw&oe=6643CFD7">Mr chilikumtima</option>
            <option value="Gerlad" data-picture="">Gerlad Justin</option>
            <option value="Mrs chilikumtima" data-picture="https://scontent.fblz2-1.fna.fbcdn.net/v/t1.6435-9/162423912_3686246868150960_2697257073003546700_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEGYOtnYOuJ_c7MZd40G9usSviZxIvwkV5K-JnEi_CRXqvZWLtkyF6hXPBNmxj3-5Kmq1WQX9rLMpCiItB-zBGM&_nc_ohc=2b9OM_92Y9AAb4kMHN6&_nc_ht=scontent.fblz2-1.fna&oh=00_AfCZob5JTGH0s5LxNua9uycjSPUxipz7VrXiCBJb7HviIw&oe=6643ED69">Mrs chilikumtima</option>
            <option value="Dr Patrick Phiri" data-picture="https://scontent.fblz2-1.fna.fbcdn.net/v/t39.30808-6/343094389_773195707549057_4910580530597098202_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFcsT-zfH3RpvwS-nPh9LvsseIG2J0Fpaux4gbYnQWlqyM1RHewOyY331yKEbP36OIHXyCja7S2QnUfN9541ESg&_nc_ohc=b3sbQ6Xld8AAb6uSlrM&_nc_zt=23&_nc_ht=scontent.fblz2-1.fna&oh=00_AfC3RWmM597GnLngg8aAihIeywnbB5UGIreXHnpJMooJeA&oe=662238B0">Dr Patrick Phiri</option>
          </select>
          {selectedStaff.OPD.picture && <img src={selectedStaff.OPD.picture} alt="Selected Staff" />}
        </div>
        <button className="btn" onClick={handleLoginClick("OPD")}>Login</button>
      </div>

      <div className="card">
        <Image
          src={avatar}
          alt="avatar"
          width={132}
          height={128}
          className="image"
        />
        <h1 className="name1"></h1>
        <p className="title">Pharmacist</p>
        <div className="desc">
          <select value={selectedStaff.Pharmacy.name} onChange={handleStaffChange("Pharmacy")}>
            <option value="" data-picture="">Select staff</option>
            <option value="Mrs Khoma" data-picture="https://example.com/mrs_khoma.jpg">Mrs Khoma</option>
          </select>
          {selectedStaff.Pharmacy.picture && <img src={selectedStaff.Pharmacy.picture} alt="Selected Staff" />}
        </div>
        <button className="btn" onClick={handleLoginClick("Pharmacy")}>Login</button>
      </div>

      <div className="card">
        <Image
          src={avatar}
          alt="avatar"
          width={132}
          height={128}
          className="image"
        />
        <h1 className="name1"></h1>
        <p className="title">Maternity</p>
        <div className="desc">
          <select value={selectedStaff.Maternity.name} onChange={handleStaffChange("Maternity")}>
            <option value="" data-picture="">Select staff</option>
            <option value="Ms Numero" data-picture="https://example.com/ms_numero.jpg">Ms Numero</option>
          </select>
          {selectedStaff.Maternity.picture && <img src={selectedStaff.Maternity.picture} alt="Selected Staff" />}
        </div>
        <button className="btn" onClick={handleLoginClick("Maternity")}>Login</button>
      </div>

      {/* Repeat similar card structures for other departments */}
    </div>
  );
}
