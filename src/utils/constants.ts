/**
 * 
 * Application constant
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// UTILS IMPORT
import {TaskStatusType, DurationType, MockInterviewStatusType, UserRoleType} from './enum';

// GENERIC CONSTANT
export const serverDisplayDateFormat = "DD/MM/YYYY"; // Old "Do MMM, YYYY"
export const displayDateFormat = "Do MMM, YYYY"; // Old "Do MMM, YYYY"
export const displayDateTimeFormat = "Do MMM, YYYY hh:mm A";
export const serverDateTimeFormat = "YYYY-MM-DD hh:mm:ss";
export const serverDateFormat = "YYYY-MM-DD";

// IDEL TIME OUT
export const SESSION_TIMEOUT =1000 * 60 * 5; // 5 min 
export const PROMPT_TIMEOUT =1000 * 60; // 30 min
export const apiFailed = -1;

export const taskStatusDisplayMap = {
    [TaskStatusType.notStarted]: 'Not started',
    [TaskStatusType.started]: 'Started',
    [TaskStatusType.reviewPending]: 'Review Pending',
    [TaskStatusType.reviewCompleted]: 'Review completed',
    [TaskStatusType.done]: 'Completed',
}

export const durationDisplayMap: Record<string, string> = {
    [DurationType.minutes]: 'Minute(s)',
    [DurationType.hours]: 'Hour(s)',
    [DurationType.days]: 'Day(s)',
    [DurationType.weeks]: 'Week(s)',
}

export const mockInterviewStatusDisplayMap: Record<string, string> = {
    [MockInterviewStatusType.pending]: 'Pending',
    [MockInterviewStatusType.completed]: 'Completed',
}

export const userRoleDisplayMap: Record<string, string> = {
    [UserRoleType.admin]: 'Admin',
    [UserRoleType.mentor]: 'Mentor',
    [UserRoleType.student]: 'Student',
}

export const validationRegex = {
    WEB_URL: /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
}

export const fieldLength = {
    NAME: 200,
    EMAIL: 200,
    CONTACT_NO: 25,
    WEB_URL: 500,
}