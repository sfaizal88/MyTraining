/**
 * 
 * Profile model 
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// API IMPORT
import type {StudentGetItem} from '@/api/student/student';
import type {TaskGetItem} from '@/api/task/task';
import type {RoadmapGetItem} from '@/api/roadmap/roadmap';

// OPTION DATA TYPE
export type ProfileType = StudentGetItem & {
    task: TaskGetItem[];
    roadmap: RoadmapGetItem;
} 