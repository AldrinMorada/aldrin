import http from "./http";

class LearnerCourseService {
  getLearnerCourseByCourseIdAndLearnerId(learnerId, courseId) {
    return http.get("/learner_course/" + learnerId + "/" + courseId);
  }

  getLearnerCourseProgressStatusByCourseIdAndLearnerId(learnerId, courseId) {
    return http.get("/learner_course/progress/" + learnerId + "/" + courseId);
  }

  getAllLearnerCourseByLearnerId(learnerId) {
    return http.get("/learner_course/all/" + learnerId);
  }

  getAllLearnerCourses() {
    return http.get("/learner_course/allLearnerCourses");
  }

  getAllLearnerCoursesStat() {
    return http.get("/learner_course/allLearnerCoursesStat");
  }

  getAllLearnerCourseInProgress(learnerId) {
    return http.get("/learner_course/in_progress_course/" + learnerId);
  }

  getAllLearnerCourseCompleted(learnerId) {
    return http.get("/learner_course/completed_course/" + learnerId);
  }
}

export default new LearnerCourseService();
