export interface HeaderDataModel {
  centerAlign: HeaderMenuDataModel[];
  rightAlign: HeaderMenuDataModel[]
}

export interface HeaderMenuDataModel {
  menuName: string;
  redirectTo: string;
  selected?: boolean;
  align?: align,
  cssClass?: string
}

type align = 'center' | 'right'


export const LandingPageHeaderData: HeaderDataModel = {
  centerAlign: [
    {
      menuName: 'Home',
      redirectTo: 'home',
      align: "center"
    },
    {
      menuName: 'Services',
      redirectTo: 'services',
      align: 'center'
    },
    {
      menuName: 'About us',
      redirectTo: 'about',
      align: 'center'
    },
    {
      menuName: 'Contacts',
      redirectTo: 'contacts',
      align: 'center'
    }
  ],
  rightAlign: [
    {
      menuName: 'Register',
      redirectTo: 'register',
      align: 'right'
    },
    {
      menuName: 'Login',
      redirectTo: 'login',
      align: 'right'
    }
  ]
}


