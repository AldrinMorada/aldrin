import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LearnerService from "../services/LearnerService";
import CourseService from "../services/CourseService";
import LearnerCourseService from "../services/LearnerCourseService";
import PostService from "../services/PostService";

import Layout from "../shared/components/Layout";

import "../shared/css/analytics.css";

import Admin from "../shared/images/users/admin.png";
import Approver from "../shared/images/users/approver.png";
import Student from "../shared/images/users/student.png";
import Manager from "../shared/images/users/manager.png";
import Trainer from "../shared/images/users/trainer.png";

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

  const [loading, setLoading] = useState(false);

  const [learnersCount, setLearnersCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [rolesCount, setRolesCount] = useState(0);

  const getAllLearnersCount = () => {
    LearnerService.getAllLearnersCount().then((res) => {
      setLearnersCount(res.data);
    });
  };

  const getCoursesCount = () => {
    CourseService.getAllCoursesCount().then((res) => {
      setCourseCount(res.data);
    });
  };

  const getAllEnrollmentCount = () => {
    LearnerCourseService.getAllLearnerCoursesStat().then((res) => {
      setEnrollmentCount(res.data);
    });
  };

  const getAllPostCount = () => {
    PostService.getAllPostCount().then((res) => {
      setPostCount(res.data);
    });
  };

  const getAllRolesCount = () => {
    LearnerService.getAllLearnerRolesCount().then((res) => {
      setRolesCount(res.data);
    });
  };

  function getValueByType(array, targetType) {
    const foundObject = array.find((obj) => obj.type === targetType);
    return foundObject ? foundObject.value : null;
  }

  useEffect(() => {
    setLoading(true);
    getAllLearnersCount();
    getCoursesCount();
    getAllEnrollmentCount();
    getAllPostCount();
    getAllRolesCount();
    setLoading(false);
  }, []);

  return (
    <Layout>
      {/* <h1>Analytics</h1> */}
      <div className="analyse">
        <div className="shadowed-box users">
          <div className="status">
            <div>
              <h3>Users</h3>
              <h1>{learnersCount}</h1>
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
              <h1>{courseCount}</h1>
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
              <h1>{enrollmentCount ? enrollmentCount.length : 0}</h1>
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
              <h1>{postCount}</h1>
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
            <h2>{rolesCount && getValueByType(rolesCount, "ROLE_ADMIN")}</h2>
            <p>Admins</p>
          </div>
          <div className="user">
            <img src={Manager} alt="" />
            <h2>{rolesCount && getValueByType(rolesCount, "ROLE_MANAGER")}</h2>
            <p>Managers</p>
          </div>

          <div className="user">
            <img src={Approver} alt="" />
            <h2>{rolesCount && getValueByType(rolesCount, "ROLE_APPROVER")}</h2>
            <p>Approvers</p>
          </div>

          <div className="user">
            <img src={Trainer} alt="" />
            <h2>{rolesCount && getValueByType(rolesCount, "ROLE_TRAINER")}</h2>
            <p>Trainers</p>
          </div>

          <div className="user">
            <img src={Student} alt="" />
            <h2>{rolesCount && getValueByType(rolesCount, "ROLE_LEARNER")}</h2>
            <p>Learners</p>
          </div>
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
                    <td className="text-[#677483] dark:text-[#a3bdcc]">
                      {bond.bondId}
                    </td>
                    <td className="text-[#677483] dark:text-[#a3bdcc]">
                      {bond.courseTitle}
                    </td>
                    <td className="text-[#677483] dark:text-[#a3bdcc]">
                      {bond.requestedBy}
                    </td>
                    <td className="text-[#677483] dark:text-[#a3bdcc]">
                      {bond.requestedBy}
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
                    <td className="text-info hover:underline cursor-pointer">
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
    </Layout>
  );
};

export default Analytics;
