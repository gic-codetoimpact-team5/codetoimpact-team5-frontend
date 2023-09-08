import { ComponentType, Element } from 'react';

export interface IRoute {
  path: string;
  name: string;
  layout?: string;
  component?: ComponentType;
  icon?: ComponentType | string | Element;
  secondary?: boolean;
  collapse?: boolean;
  items?: RoutesType[];
}
