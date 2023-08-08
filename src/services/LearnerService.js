import http from "./http";

class LearnerService {
  getAllLearners() {
    return http.get("/user/learners");
  }

  getAllLearnersCount() {
    return http.get("/user/learners/count");
  }

  getAllLearnerRolesCount() {
    return http.get("/user/learners/rolesCount");
  }

  getAllLearnerWithManagers() {
    return http.get("/user/learners/userRolesWithManagers");
  }

  getAllStaffs() {
    return http.get("/user/staffs");
  }

  getAllStaffsNotTrainer() {
    return http.get("/user/staffsNotTrainer");
  }

  getAllTrainers() {
    return http.get("/user/trainers");
  }

  getTrainers() {
    return http.get("/user/allTrainers");
  }
}

export default new LearnerService();

//   enableUser(userId: any, userInCharged: any) {
//     return http.put("/user/enable/" + userId, {
//       userInCharged,
//     });
//   }

//   disableUser(userId: any, userInCharged: any) {
//     return http.put("/user/disable/" + userId, {
//       userInCharged,
//     });
// }

//   getAllFlatPaginatedSortedSearchLearners(
//     page: any,
//     pageSize: any,
//     sortField: any,
//     sortDirection: any,
//     searchedText: any
//   ) {
//     return http.get("/user/learners/paginatedSortedSearch", {
//       params: {
//         page: page,
//         pageSize: pageSize,
//         sortField: sortField,
//         sortDirection: sortDirection,
//         searchedText: searchedText,
//       },
//     });
// }
