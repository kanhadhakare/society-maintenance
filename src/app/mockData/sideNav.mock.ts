import { SideNavMenuItem } from "../model/sideNavMenuData.model";

export const sidenavData: SideNavMenuItem[] = [
  {
    link_name: "Home",
    link: "/home",
    icon: "home",
    sub_menu: []
  },
  {
    link_name: "Customer",
    link: "/super-admin/customer",
    icon: "computer",
    sub_menu: []
  }, {
    link_name: "Category",
    link: '',
    icon: "computer",
    sub_menu: [
      {
        link_name: "HTML & CSS",
        link: "/html-n-css",
      }, {
        link_name: "JavaScript",
        link: "/javascript",
      }, {
        link_name: "PHP & MySQL",
        link: "/php-n-mysql",
      }
    ]
  }, {
    link_name: "Posts",
    link: '',
    icon: "computer",
    sub_menu: [
      {
        link_name: "Web Design",
        link: "/posts/web-design",
      }, {
        link_name: "Login Form",
        link: "/posts/login-form",
      }, {
        link_name: "Card Design",
        link: "/posts/card-design",
      }
    ]
  }, {
    link_name: "Analytics",
    link: "/analytics",
    icon: "computer",
    sub_menu: []
  }, {
    link_name: "Chart",
    link: "/chart",
    icon: "computer",
    sub_menu: []
  }, {
    link_name: "Plugins",
    link: 'null',
    icon: "computer",
    sub_menu: [
      {
        link_name: "UI Face",
        link: "/ui-face",
      }, {
        link_name: "Pigments",
        link: "/pigments",
      }, {
        link_name: "Box Icons",
        link: "/box-icons",
      }
    ]
  }, {
    link_name: "Explore",
    link: "/explore",
    icon: "computer",
    sub_menu: []
  }, {
    link_name: "History",
    link: "/history",
    icon: "computer",
    sub_menu: []
  }, {
    link_name: "Setting",
    link: "/setting",
    icon: "computer",
    sub_menu: []
  }
]
