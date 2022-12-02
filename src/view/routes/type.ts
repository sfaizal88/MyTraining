/**
 * 
 * Router type
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {ReactElement} from 'react';

// MENU DATA TYPE
export type MenuType = { 
    id: string,
    label: string,
    link: string,
    subLinks: string,
    icon: ReactElement,
    submenuList: SubMenuType[],
}

// SUB MENU DATA TYPE
export type SubMenuType = {
    id: string,
    label: string,
    link: string,
    subLinks: string,
    icon: ReactElement,
}