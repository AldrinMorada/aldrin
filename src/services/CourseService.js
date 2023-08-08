import http from "./http";

class CourseService {
  getAllCourses() {
    return http.get("/course");
  }

  getAllCoursesForTestimonials() {
    return http.get("/course/testimonials");
  }

  getUniqueCategories() {
    return http.get("/course/uniqueCategories");
  }

  getAllFlatCourses() {
    return http.get("/course/homePageCardsCourses");
  }

  getAllCoursesCount() {
    return http.get("/course/count");
  }

  getAllCoursesForGetCertified() {
    return http.get("/course/simpleCourses");
  }

  getAllTopRatedCourses() {
    return http.get("/course/topRatedCourses");
  }

  getAllRewardingCourses() {
    return http.get("/course/rewardingCourses");
  }

  getAllNewCourses() {
    return http.get("/course/newCourses");
  }

  getAllCoursesWithoutExam() {
    return http.get("/course/no_exam");
  }

  getAllCoursesWithExam() {
    return http.get("/course/exam");
  }

  getCoursesWithExam() {
    return http.get("/course/courseWithExams");
  }

  getCoursesWithoutExam() {
    return http.get("/course/courseWithoutExams");
  }

  getCourseTrainerById(userId) {
    return http.get("/course/withTrainer/" + userId);
  }

  getAllInProgressCourse(id) {
    return http.get("/course/in_progress/" + encodeURI(id));
  }

  getAllFlatInProgressCourse(id) {
    return http.get("/course/flat_in_progress/" + encodeURI(id));
  }

  getAllPendingCourses(id) {
    return http.get("/course/pending/" + encodeURI(id));
  }

  getAllFlatPendingCourses(id) {
    return http.get("/course/flat_pending/" + encodeURI(id));
  }

  getAllCompletedCourses(id) {
    return http.get("/course/completed/" + encodeURI(id));
  }

  getAllFlatCompletedCourses(id) {
    return http.get("/course/flat_completed/" + encodeURI(id));
  }

  getCourseById(id) {
    return http.get("/course/" + encodeURI(id));
  }

  addCourse(
    title,
    type,
    category,
    difficulty,
    description,
    withBond,
    points,
    thumbnail,
    towerId,
    userInCharged
  ) {
    return http.post("/course", {
      title,
      type,
      category,
      difficulty,
      description,
      withBond,
      points,
      thumbnail,
      towerId,
      userInCharged,
    });
  }

  addModuleToCourse(title, content, id, userInCharged, moduleFiles) {
    return http.post("/course/module/" + id, {
      title,
      content,
      moduleFiles,
      userInCharged,
    });
  }

  getModuleById(id) {
    return http.get(`/module/${id}`);
  }

  editModuleToCourse(title, content, id, userInCharged, moduleFiles) {
    return http.put("/module/" + id, {
      title,
      content,
      moduleFiles,
      userInCharged,
    });
  }

  archivedCourse(id, userInCharged) {
    return http.put("/course/archived/" + id, {
      userInCharged,
    });
  }

  retrieveCourse(id, userInCharged) {
    return http.put("/course/retrieve/" + id, {
      userInCharged,
    });
  }

  assignTrainer(id, trainer, userInCharged) {
    return http.put("/course/assign_trainer/" + id, {
      trainer,
      userInCharged,
    });
  }

  getAllArchivedCourse() {
    return http.get("/course/archived");
  }

  getAllCourseWithTrainer() {
    return http.get("course/withTrainer");
  }

  getCourseWithTrainerId(id) {
    return http.get("course/withTrainer/" + id);
  }

  getAllNotArchivedCourse() {
    return http.get("/course/notArchived");
  }

  getNotArchivedCourses() {
    return http.get("/course/notArchivedV2");
  }

  getAllFlatPaginatedSortedSearchCourses(
    page,
    pageSize,
    sortField,
    sortDirection,
    searchedText
  ) {
    return http.get("/course/notArchived/paginatedSortedSearch", {
      params: {
        page: page,
        pageSize: pageSize,
        sortField: sortField,
        sortDirection: sortDirection,
        searchedText: searchedText,
      },
    });
  }

  getArchivedCourses() {
    return http.get("/course/archivedV2");
  }

  getAllSelectedCourse(id) {
    return http.get(`/course/course/${id}`);
  }

  editCourse(
    title,
    type,
    category,
    difficulty,
    description,
    withBond,
    points,
    id,
    towerId,
    trainerId,
    userInCharged
  ) {
    return http.put("/course/" + id, {
      title,
      type,
      category,
      difficulty,
      description,
      withBond,
      points,
      towerId,
      trainerId,
      userInCharged,
    });
  }

  getSelectedCriteria(courseId) {
    return http.get("/course/selected/" + courseId);
  }
}

export default new CourseService();
