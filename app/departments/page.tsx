"use client";
import React from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
// import { useSession, signIn, signOut } from "next-auth/react";
const departments = [
  {
    name: "Admin",
    description:
      "Manage Everything In Liwonde Private Hospital.",
  },
  {
    name: "Dental Department",
    description:
      "The Dental Department provides comprehensive dental care services, including routine checkups, cleanings, fillings, extractions, and specialized dental procedures.",
  },
  {
    name: "X-ray and Scanning Department",
    description:
      "The X-ray and Scanning Department offers advanced diagnostic imaging services, including X-rays, CT scans, MRI scans, and ultrasound scans, to assist in the diagnosis and treatment of various medical conditions.",
  },
  {
    name: "Financial Department",
    description: "Where all the Funds are audited",
  },
  {
    name: "OPD (Outpatient Department)",
    description:
      "The OPD is where patients receive non-emergency medical care, consultation with doctors, treatment for minor ailments, and prescriptions for medications without requiring hospitalization.",
  },
  {
    name: "Laboratory Department",
    description:
      "The Laboratory Department conducts a wide range of medical tests and analyses on patient samples, including blood tests, urine tests, microbiological tests, and histopathological examinations, to aid in diagnosis and treatment planning.",
  },
  {
    name: "Pharmacy",
    description:
      "The Pharmacy dispenses prescribed medications, provides pharmaceutical counseling, and ensures safe and effective medication management for patients, maintaining a comprehensive inventory of pharmaceuticals and medical supplies.",
  },
  {
    name: "Theatre",
    description:
      "The Theatre Department is equipped for performing surgical procedures, ranging from minor surgeries to complex surgical interventions, with state-of-the-art surgical equipment and highly skilled surgical teams ensuring patient safety and optimal outcomes.",
  },
  {
    name: "Maternity Ward",
    description:
      "The Maternity Ward provides prenatal care, delivery services, and postnatal care for expectant mothers, ensuring a safe and supportive environment for childbirth and promoting maternal and newborn health.",
  },
  {
    name: "Under Five Clinic",
    description:
      "The Under Five Clinic offers specialized healthcare services for infants and young children, including vaccinations, growth monitoring, nutritional counseling, and treatment of common childhood illnesses, to promote child health and development.",
  },
];
const DepartmentCard = ({ department }: any) => {
  const router = useRouter();
  const cookies = parseCookies();
  const isLoggedIn = cookies.isLoggedIn === "true";
  const handleClick = () => {
    if (isLoggedIn) {
      // Navigate to department page if logged in
      router.push(
        `/departments/${department.name.toLowerCase().replace(/\s+/g, "-")}`
      );
    } else {
      // Redirect to login page if not logged in
      router.push("/login");
    }
  };

  return (
    <Card className="mt-6 w-96  bg-white shadow-lg p-6  transition duration-300 ease-in-out transform hover:scale-105">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {department.name}
        </Typography>
        <Typography>{department.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="hidden items-center gap-2 lg:flex">
          <a href="" target="_blank" className="inline-block">
            <Button
              size="sm"
              // variant="text"
              className="flex items-center gap-2"
              onClick={handleClick}
              color={"green"}
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

const DepartmentSection = () => {
  // const { data: session } = useSession();
  const router = useRouter();
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <DepartmentCard key={index} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
