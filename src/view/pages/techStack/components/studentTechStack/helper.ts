/**
 * 
 * Tech Stack page helper
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// API IMPORT
import {TechStackGet, TechStackGetItem} from '@/api/techStack/techStack';
export const preparePostData = (data: TechStackGet) => data.tech_stack
    .map((techStachItem: TechStackGetItem) => (
        {
            tech_stack_id: techStachItem.id, 
            student_id: techStachItem.student_id,
            topic_ids: techStachItem.tech_details
                .filter(tech => tech.isSelected)
                    .map(item => (item.id))
        }
    ));