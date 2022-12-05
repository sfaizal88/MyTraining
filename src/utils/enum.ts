/**
 * 
 * Enum constant
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// NOTIFICATION TYPE
export enum NotificationType {
    success = 'success',
    error = 'error',
}

// STATUS TYPE
export enum StatusType {
    completed = 1,
    pending,
    rejected,
}

// TASK STATUS TYPE
export enum TaskStatusType {
    notStarted = 1,
    started,
    reviewPending,
    reviewCompleted,
    done,
}

// DURATION TYPE
export enum DurationType {
    minutes = 'm',
    hours = 'h',
    days = 'd',
    weeks = 'w',
}

// USER ROLES TYPE
export enum UserRoleType {
    admin = 1,
    mentor,
    student,
}

// MOCK INTERVIEW STATUS TYPE
export enum MockInterviewStatusType {
    pending = 1,
    completed,
}