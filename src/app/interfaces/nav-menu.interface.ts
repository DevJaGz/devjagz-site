import { ICONS } from '@constants';

export interface NavMenuItem {
  label?: string;
  onAction?: (params: unknown) => void;
  icon?: keyof typeof ICONS;
}

export type NavMenuItems = NavMenuItem[];