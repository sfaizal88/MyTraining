/**
 * 
 * Router type
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {ReactElement} from 'react';

// UTILS IMPORT
import {Permission} from '@/utils/permission';

// MENU DATA TYPE
export type MenuType = { 
    id: string,
    label: string,
    link: string,
    subLinks: string,
    icon: ReactElement,
    submenuList: SubMenuType[],
    permissionKey: Permission
}

// SUB MENU DATA TYPE
export type SubMenuType = {
    id: string,
    label: string,
    link: string,
    subLinks: string,
    icon: ReactElement,
    permissionKey: Permission
}