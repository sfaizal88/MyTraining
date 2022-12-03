import {TaskStatusType} from '@/utils/enum';

export const mockData = [
    {
        id: 1,
        title: "HTML table",
        type: "HTML exercise",
        details: "If several languages coalesce the grammar is more simple and regular than that of the individual languages.",
        status: TaskStatusType.completed,
        images: ['https://parallelcodes.com/wp-content/uploads/2021/08/create-login-page-with-html-css-sample.png'],
        students: [1, 2],
        duration: '4h'
    },
    {
        id: 2,
        title: "Login page design",
        type: "HTML & CSS exercise",
        details: "If several languages coalesce the grammar is more simple and regular than that of the individual languages more simple and regular than that of the individual languages.",
        status: TaskStatusType.notStarted,
        images: ['https://parallelcodes.com/wp-content/uploads/2021/08/create-login-page-with-html-css-sample.png'],
        students: [1, 2],
        duration: '1d'
    },
    {
        id: 3,
        title: "Pricing table design",
        type: "HTML & CSS exercise",
        details: "If several languages coalesce the grammar is more simple and regular than that of the individual languages.",
        status: TaskStatusType.reviewPending,
        images: ['https://parallelcodes.com/wp-content/uploads/2021/08/create-login-page-with-html-css-sample.png'],
        students: [1, 2],
        duration: '8h'
    },
    {
        id: 4,
        title: "Slack webpage",
        type: "UI developer exercise",
        details: "If several languages coalesce the grammar is more simple and regular than that of the individual languages.",
        status: TaskStatusType.started,
        images: ['https://parallelcodes.com/wp-content/uploads/2021/08/create-login-page-with-html-css-sample.png'],
        students: [1, 2],
        duration: '2d'
    },
    {
        id: 5,
        title: "Grid exercise",
        type: "CSS exercise",
        details: "If several languages coalesce the grammar is more simple and regular than that of the individual languages.",
        status: TaskStatusType.started,
        images: ['https://parallelcodes.com/wp-content/uploads/2021/08/create-login-page-with-html-css-sample.png'],
        students: [1, 2],
        duration: '2d'
    },
    {
        id: 6,
        title: "Flex exercise",
        type: "CSS exercise",
        details: "If several languages coalesce the grammar is more simple and regular than that of the individual languages.",
        status: TaskStatusType.started,
        images: ['https://parallelcodes.com/wp-content/uploads/2021/08/create-login-page-with-html-css-sample.png'],
        students: [1, 2],
        duration: '2d'
    }
]