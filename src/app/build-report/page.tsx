"use client";

import { useState } from "react";

import makeReport from "@/utils/make-report";

import Main from "../components/Main";
import Text from "../components/Text";

interface FormData {
  employees: number;
  meetings: number;
  salary: number;
  email: string;
}

export default function BuildCompanyReport() {
  // Loading
  const [loading, setLoading] = useState(false);
  // Form Errors
  const [formErrors, setFormErrors] = useState(false);
  // Sent
  const [sentTo, setSentTo] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    employees: 0,
    meetings: 0,
    salary: 0,
    email: "",
  });

  function handleFormUpdate(value: number | string, key: string) {
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  async function createNewLead(event: any) {
    event.preventDefault();
    setLoading(true);
    setFormErrors(false);
    const report = makeReport(formData);

    try {
      await fetch("api/send-email/", {
        method: "POST",
        body: JSON.stringify({
          number_of_employees: formData.employees,
          number_of_weekly_meetings_per_employee: formData.meetings,
          average_salary_per_employee: formData.salary,
          ...report,
        }),
      });

      console.log("EMAIL SENT");
      setSentTo(report.email);
    } catch (error) {
      console.log("ERROR", error);
      setFormErrors(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Main>
      {sentTo !== "" ? (
        <>
          <div className="flex align-top justify-between">
            <p>
              We sent your report to:
              <br />
              <a
                className="underline"
                href={`mailto:${sentTo}?subject=A shortcut to your email client`}
              >
                {sentTo}
              </a>
            </p>
            <div className="cursor-pointer border-2 border-gray-600 rounded-md px-4 py-2">
              <span className="text-gray-600">New enquiry</span>
            </div>
          </div>
        </>
      ) : (
        <form onSubmit={createNewLead} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Text>Number of employees in your company</Text>
            <input
              type="number"
              min={0}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={"120"}
              onChange={(e) => handleFormUpdate(e.target.value, "employees")}
              required
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Give or take, doesn&apos;t need to be precise.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Text>Number of weekly recurrent meetings per employee</Text>
            <input
              type="number"
              min={0}
              max={20}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={"5"}
              onChange={(e) => handleFormUpdate(e.target.value, "meetings")}
              required
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Although this varies between positions, average is from 3 to 12.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Text>Average employee annual compensation ($)</Text>
            <input
              type="number"
              min={15000}
              max={1000000}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={"75,000"}
              onChange={(e) => handleFormUpdate(e.target.value, "salary")}
              required
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter the amount in full. For example: 70000 instead of 70k.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Text>Company email</Text>
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => handleFormUpdate(e.target.value, "email")}
              placeholder="name@yourcompany.com"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We&apos;ll send you a report right away.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-4 rounded w-fit bg-blue-800"
            >
              {loading ? "Loading..." : "Find out how much I can be saving"}
            </button>
            {formErrors && (
              <p className="text-sm text-red-500 dark:text-red-400">
                There was an error, please check your submission data
              </p>
            )}
          </div>
        </form>
      )}
    </Main>
  );
}
