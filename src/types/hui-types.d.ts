export {};

declare global {
  interface RoutesType {
    name: string;
    path: string;
    icon?: JSX.Element;
    secondary?: boolean;
    layout?: string;
    component?: () => JSX.Element;
    collapse?: boolean;
    items?: {
      name: string;
      path: string;
      secondary?: boolean;
      layout?: string;
      component?: () => JSX.Element;
      collapse?: boolean;
      items?: {
        name: string;
        layout: string;
        path: string;
        component: () => JSX.Element;
        secondary?: boolean;
      }[];
    }[];
  }
  interface NavbarCollapseType {
    name: string;
    path: string;
    secondary?: boolean;
    layout?: string;
    component?: () => JSX.Element;
    collapse?: boolean;
    items?: {
      name: string;
      layout: string;
      path: string;
      component: () => JSX.Element;
      secondary?: boolean;
    }[];
  }
  interface NavbarLinksType {
    name: string;
    layout: string;
    path: string;
    component: () => JSX.Element;
    secondary?: boolean;
  }
  [];
}
