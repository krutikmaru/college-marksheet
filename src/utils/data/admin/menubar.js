import {
  faBook,
  faChalkboardTeacher,
  faHome,
  faRightFromBracket,
  faUser,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

export const menubar = {
  actions: [
    {
      title: "Home",
      icon: faHome,
      id: "5225da39369d45d7bc3c05fd03f61b69",
      navigate: "/",
    },
    {
      title: "Subjects",
      icon: faBook,
      id: "24d707543a344bbda65e8157524b2f1b",
      navigate: "/subjects",
    },
    {
      title: "Teachers",
      icon: faChalkboardTeacher,
      id: "55e6ca900aaf432a8dea13820a36ddb1",
      navigate: "/teachers",
    },
    {
      title: "Students",
      icon: faUserGraduate,
      id: "5fa9138bbfeb44a8a1f8287825247db0",
      navigate: "/students",
    },
  ],
  account: [
    {
      title: "Account",
      icon: faUser,
      id: "3cbd85224a4c490e91ac180c4e3e0db5",
      navigate: "/account",
    },
    {
      title: "Logout",
      icon: faRightFromBracket,
      id: "8bdb442289454cf1987e932cd6a866f8",
      type: "logout",
      navigate: "/",
    },
  ],
};
