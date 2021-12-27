const { default: axiosClient } = require("./axiosClient");

const USER_API = "/users";
const STUDENT_API = "/student";
const TEACHER_API = "/teacher";

const userApi = {
  getInfoUser: () => {
    const url = USER_API + "/my";
    return axiosClient.get(url);
  },
  //For student
  updateInfo: (info_update) => {
    const url = USER_API + "/my";
    return axiosClient.post(url, info_update);
  },
  mapStudentId: (student_id) => {
    const url = USER_API + "/student-id";
    return axiosClient.post(url, student_id);
  },

  join_newClass: (code) => {
    const url = USER_API + "/join";
    return axiosClient.post(url, code);
  },
  get_myCourses: (class_info) => {
    const url = USER_API + STUDENT_API + "/my-courses";
    return axiosClient.get(url, {
      params: class_info,
    });
  },
  get_myCoursesDetail: (code_course) => {
    const url = USER_API + STUDENT_API + `/course/${code_course}`;
    return axiosClient.get(url);
  },

  //for teacher
  create_newClass: (className) => {
    const url = USER_API + TEACHER_API + "/create-class";
    return axiosClient.post(url, className);
  },
  get_myClass: (info_Class) => {
    const url = USER_API + TEACHER_API + "/my-class";
    return axiosClient.get(url, {
      params: info_Class,
    });
  },
  get_myClassDetail: (code_class) => {
    const url = USER_API + TEACHER_API + `/class/${code_class}`;
    return axiosClient.get(url);
  },
  get_TeacherAssignments: (code_class) => {
    const url = USER_API + TEACHER_API + `/assignments`;
    return axiosClient.get(url, code_class);
  },
  get_TeacherGrades: (code_class) => {
    const url = USER_API + TEACHER_API + `/grades`;
    return axiosClient.get(url, code_class);
  },
};

export default userApi;
