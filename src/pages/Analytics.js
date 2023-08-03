import React from "react";

import Admin from "../shared/images/users/admin.png";
import Approver from "../shared/images/users/approver.png";
import Student from "../shared/images/users/student.png";
import Manager from "../shared/images/users/manager.png";
import Trainer from "../shared/images/users/trainer.png";
import Add from "../shared/images/icons/add.png";

import "../css/analytics.css";
import { Link } from "react-router-dom";
import Layout2 from "../shared/Layout";

const Analytics = () => {
  const bondRequests = [
    {
      bondId: 1,
      requestedBy: "John Doe",
      courseTitle: "Introduction to React",
      cost: 50,
      duration: "3 months",
      requestDate: "2023-07-01",
      status: "Pending",
    },
    {
      bondId: 2,
      requestedBy: "Jane Smith",
      courseTitle: "Advanced JavaScript",
      cost: 80,
      duration: "4 months",
      requestDate: "2023-07-02",
      status: "Approved",
    },
    {
      bondId: 3,
      requestedBy: "Michael Johnson",
      courseTitle: "CSS Basics",
      cost: 30,
      duration: "2 months",
      requestDate: "2023-07-03",
      status: "Declined",
    },
  ];

  return (
    <Layout2>
      <h1>Analytics</h1>
      <div className="analyse">
        <div className="shadowed-box users">
          <div className="status">
            <div>
              <h3>Total Users</h3>
              <h1>69,420</h1>
            </div>

            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">+81%</div>
            </div>
          </div>
        </div>

        <div className="shadowed-box courses">
          <div className="status">
            <div>
              <h3>Courses</h3>
              <h1>20,432</h1>
            </div>

            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">+4324</div>
            </div>
          </div>
        </div>

        <div className="shadowed-box enrollments">
          <div className="status">
            <div>
              <h3>Enrollments</h3>
              <h1>42,069</h1>
            </div>

            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">+61%</div>
            </div>
          </div>
        </div>

        <div className="shadowed-box posts">
          <div className="status">
            <div>
              <h3>Posts</h3>
              <h1>12,345</h1>
            </div>

            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">+57%</div>
            </div>
          </div>
        </div>
      </div>

      {/* end of analyses */}

      <div className="new-users">
        <h2>Users</h2>
        <div className="shadowed-box user-list">
          <div className="user">
            <img src={Admin} alt="" />
            <h2>1388</h2>
            <p>Admins</p>
          </div>
          <div className="user">
            <img src={Manager} alt="" />
            <h2>6244</h2>
            <p>Managers</p>
          </div>

          <div className="user">
            <img src={Approver} alt="" />
            <h2>4165</h2>
            <p>Approvers</p>
          </div>

          <div className="user">
            <img src={Trainer} alt="" />
            <h2>11382</h2>
            <p>Trainers</p>
          </div>

          <div className="user">
            <img src={Student} alt="" />
            <h2>45528</h2>
            <p>Learners</p>
          </div>

          {/* <div className="user">
            <img src={Add} alt="" />
            <h2>More</h2>
            <p>New User</p>
          </div> */}
        </div>
      </div>

      {/* end of users */}

      <div className="recent-orders">
        <h2>Recent Training Bond Requests</h2>
        <div className="shadowed-box">
          <table>
            <thead>
              <tr>
                <th>Bond Id</th>
                <th>Course Title</th>
                <th>Requested By</th>
                <th>Requested By</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bondRequests?.map((bond, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{bond.bondId}</td>
                    <td>{bond.courseTitle}</td>
                    <td>{bond.requestedBy}</td>
                    <td>{bond.requestedBy}</td>
                    <td
                      className={
                        bond.status === "Declined"
                          ? "danger"
                          : bond.status === "Pending"
                          ? "warning"
                          : "success"
                      }
                    >
                      {bond.status}
                    </td>
                    <td className="info hover:underline cursor-pointer">
                      Details
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <Link to="/admin/trainingbonds">Show All</Link>
      </div>
      {/* end of recent orders */}
    </Layout2>
  );
};

export default Analytics;
