import React from "react";

import "../css/table.css";
import Layout2 from "../shared/Layout";

const TrainingBonds = () => {
  const bondRequests = [
    {
      bondId: 1,
      requestedBy: "John Doe",
      courseTitle: "Introduction to React",
      cost: "P500,000",
      duration: "3 months",
      requestDate: "2023-07-01",
      status: "Pending",
    },
    {
      bondId: 2,
      requestedBy: "Jane Smith",
      courseTitle: "Advanced JavaScript",
      cost: "P800,000",
      duration: "4 months",
      requestDate: "2023-07-02",
      status: "Approved",
    },
    {
      bondId: 3,
      requestedBy: "Michael Johnson",
      courseTitle: "CSS Basics",
      cost: "P300,000",
      duration: "2 months",
      requestDate: "2023-07-03",
      status: "Declined",
    },
    {
      bondId: 4,
      requestedBy: "Emily Davis",
      courseTitle: "Node.js Fundamentals",
      cost: "P600,000",
      duration: "3 months",
      requestDate: "2023-07-04",
      status: "Approved",
    },
    {
      bondId: 5,
      requestedBy: "William Brown",
      courseTitle: "React Hooks in Depth",
      cost: "P700,000",
      duration: "4 months",
      requestDate: "2023-07-05",
      status: "Pending",
    },
    {
      bondId: 6,
      requestedBy: "Olivia Wilson",
      courseTitle: "HTML5 and CSS3",
      cost: "P400,000",
      duration: "2 months",
      requestDate: "2023-07-06",
      status: "Approved",
    },
    {
      bondId: 7,
      requestedBy: "James Johnson",
      courseTitle: "Responsive Web Design",
      cost: "P450,000",
      duration: "3 months",
      requestDate: "2023-07-07",
      status: "Pending",
    },
    {
      bondId: 8,
      requestedBy: "Sophia Lee",
      courseTitle: "JavaScript ES6+",
      cost: "P550,000",
      duration: "3 months",
      requestDate: "2023-07-08",
      status: "Approved",
    },
    {
      bondId: 9,
      requestedBy: "Liam Miller",
      courseTitle: "Introduction to Vue.js",
      cost: "P650,000",
      duration: "4 months",
      requestDate: "2023-07-09",
      status: "Declined",
    },
    {
      bondId: 10,
      requestedBy: "Ava Anderson",
      courseTitle: "TypeScript Basics",
      cost: "P500,000",
      duration: "3 months",
      requestDate: "2023-07-10",
      status: "Approved",
    },
  ];

  return (
    <Layout2>
      <h1>Training Bonds</h1>

      {/* search */}
      <div className="p-4 w-full flex justify-end">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="text-sm rounded-lg  block w-80 pl-10 p-2.5"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="shadowed-box table-container">
        <table>
          <thead>
            <tr>
              <th>Bond Id</th>
              <th>Requested By</th>
              <th>Course Title</th>
              <th>Cost</th>
              <th>Duration</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bondRequests?.map((bond, index) => (
              <React.Fragment>
                <tr>
                  <td className="text-[#677483] dark:text-[#a3bdcc]">
                    {bond.bondId}
                  </td>
                  <td className="text-[#677483] dark:text-[#a3bdcc]">
                    {bond.requestedBy}
                  </td>
                  <td className="text-[#677483] dark:text-[#a3bdcc]">
                    {bond.courseTitle}
                  </td>
                  <td className="text-[#677483] dark:text-[#a3bdcc]">
                    {bond.cost}
                  </td>
                  <td className="text-[#677483] dark:text-[#a3bdcc]">
                    {bond.duration}
                  </td>
                  <td className="text-[#677483] dark:text-[#a3bdcc]">
                    {bond.requestDate}
                  </td>
                  <td
                    className={
                      bond.status === "Declined"
                        ? "text-danger"
                        : bond.status === "Pending"
                        ? "text-warning"
                        : "text-success"
                    }
                  >
                    {bond.status}
                  </td>
                  <td className="cursor-pointer">
                    <span className="material-icons-sharp">more_vert</span>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Layout2>
  );
};

export default TrainingBonds;
