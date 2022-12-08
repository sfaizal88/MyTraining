/**
 * 
 * Profile context
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {createContext} from 'react';

// MODEL IMPORT
import {ProfileType} from '@/models/profile';

// API
import type {RoadmapGetItem} from '@/api/roadmap/roadmap';
import type {TaskGetItem} from '@/api/task/task';
import type {TechStackGetItem} from '@/api/techStack/techStack';
import type {MockInterviewGetItem} from '@/api/mockInterview/mockInterview';

// UTILS IMPORT
import {UserRoleType} from '@/utils/enum';

// CREATING CONTEXT WITH INITIAL VALUES
export const ProfileContext = createContext<ProfileType>({
    id: 0,
    name: "",
    contact_no: "",
    dob: "",
    email: "",
    role: UserRoleType.student,
    task: [] as TaskGetItem[],
    roadmap: {} as RoadmapGetItem,
    tech_stack: [] as TechStackGetItem[],
    mock_interview: [] as MockInterviewGetItem[],
});