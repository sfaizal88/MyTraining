/**
 * 
 * Main menu component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import compact from 'lodash/compact';

// MENU IMPORT
import {homeMenuList, settingsMenuList, appsMenuList, myProfileMenuList} from './mainMenuItem';

// ROUTER IMPORT
import {MainMenuType} from '@/view/routes/type';

// MAIN MENU
export const mainMenuList: MainMenuType[] = compact([
    {
        id: "home",
        label: "HOME",
        menuList: homeMenuList,
        permissionKeys: ['general.dashboard']
    },
    {
        id: "apps",
        label: "APPS",
        menuList: appsMenuList,
        permissionKeys: ['admin.student', 'admin.mentor', 'mentor.report', 'mentor.techStack', 'mentor.roadmap', 'mentor.task']
    },
    {
        id: "myProfile",
        label: "MY PROFILE",
        menuList: myProfileMenuList,
        permissionKeys: ['student.techStack', 'student.task', 'student.roadmap', 'student.mockInterview']
    },
    {
        id: "setting",
        label: "SETTING",
        menuList: settingsMenuList,
        permissionKeys: ['general.settings']
    }
])