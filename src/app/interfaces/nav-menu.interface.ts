import { ICONS } from '@constants';

export interface NavMenuItem {
  label?: string;
  onAction?: (params?: unknown) => void;
  link?: string;
  icon?: keyof typeof ICONS;
}

export type NavMenuItems = NavMenuItem[];