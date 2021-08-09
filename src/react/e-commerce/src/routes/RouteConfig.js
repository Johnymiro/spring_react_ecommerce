import { LoginPage, ProfilePage, SignupPage } from "../modules/auth";

export default function routeConfiguration() {
  return [
    {
      name: "SignupPage",
      path: "/signup",
      component: (props) => <SignupPage {...props} />,
      auth: false,
    },
    {
      name: "LoginPage",
      path: "/login",
      component: (props) => <LoginPage {...props} />,
      auth: false,
    },
    {
      name: "ProfilePage",
      path: "/profile",
      component: (props) => <ProfilePage {...props} />,
      auth: true,
    },
  ];
}
