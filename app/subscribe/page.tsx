'use client'
// Importing necessary components and icons
import Header from "@/componets/navbar";
import Card from "react-bootstrap/Card";
import Footer from '@/componets/footer';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

// Component function
export default function Example() {
  // State variables for email and alert
  const [email, setEmail] = useState(""); 
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);

   const api = "";

  // Function to handle subscription
  const handlesubscribe = async () => {

    try {
         // Checking if email is empty
    if (!email.trim()) {
      setAlert({ type: "error", message: "Please enter your email address." });
      return;
    }
      // Sending email to backend for subscription
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Sending email value
      });

      // Checking if subscription was successful
      if (response.ok) {
        setAlert({ type: "success", message: "Subscription is successful!" });
      } else {
        console.error('Subscription failed:', response.statusText);
        setAlert({ type: "error", message: "Failed to subscribe. Please try again later." });
      }
    } catch (error: any) {
      console.error('Error subscribing:', error.message);
    }
  };

  // JSX structure
  return (
    <>
      {/* Navbar */}
      <Header />
      
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8"> 
        {/* Card section */}
        <div className='bg-gray-400 w-full h-400 justify-center py-24 sm:py-32'>
          <div className="flex">
            <div className="flex-none mr-4">
              <Card
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundColor: "green",
                  borderRadius: "5px"
                }}
              />
            </div>
            <div className="flex-none mr-4">
              <Card
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundColor: "green",
                  borderRadius: "5px"
                }}
              />
            </div>
            <div className="flex-none mr-4">
              <Card
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundColor: "green",
                  borderRadius: "5px"
                }}
              />
            </div>
            <div className="flex-none">
              <Card
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundColor: "green",
                  borderRadius: "5px"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subscription section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to Liwonde Private Hospital Newsletter</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Stay updated with the latest news, events, and health tips from Liwonde Private Hospital.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email address"
                />
                <button
                  onClick={handlesubscribe}
                  className="flex-none rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">Weekly Health Articles</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Get insightful articles on healthcare, wellness, and medical advancements delivered weekly.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">No Spam Policy</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  We respect your privacy. You'll only receive relevant information and updates from us.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
