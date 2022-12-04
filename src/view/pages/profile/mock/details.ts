import {TaskStatusType} from '@/utils/enum';

export const mockData = {
    id: 1,
    name: "Ahamed Faizal",
    role: "Front end developer",
    contact_no: "+91-9840404382",
    email: "sfaizal@gmail.com",
    task: [
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
    ],
    roadmap: {
            id: 1,
            name: "First road map",
            mile_stone: [
                {
                    id: 1,
                    title: 'Technology training',
                    description: 'Today to August 31, 2022:* Join one good institute and learn HTML, CSS, Javascript, Reactjs, Bootstrap, Fontawesome and git repo. Finish one minor project. Also follow my technology exercise and minor project which I will give also. Finish below technology.',
                    date: '01/08/2022',
                    completed: false,
                },
                {
                    id: 2,
                    title: 'Job Placement',
                    description: '1st, September, 2022 to 30th November, 2022:* Apply for Job from the website which I will share. Daily spend three hours minimum to apply. Morning 9:00 am to 11;00 am and again start from 2:00 pm to 3:00 pm to 3:30 pm. Also find job through institute. I will also give training for job interview and institute may too train u. Will be very very hard to find Job but not impossible.',
                    date: '01/09/2022',
                    completed: true,
                },
                {
                    id: 3,
                    title: 'Job Experience',
                    description: '1st December, 2022 to 31st March 2024: * Work in chennai alone. Get one to two year experience. Come to Singapore and search job. Beat month to search job in Singapore February to April. Follow same timing to apply jobs. Don’t apply job in on Friday night and Saturday. If my current company became success, I may arrange an interview in my company but may take time and not sure too. I will teach u how to live life in IT field.',
                    date: '1/12/2022',
                    completed: true,
                },
                {
                    id: 4,
                    title: 'Aboard Plan',
                    description: '1st April 2024 to 31st May, 2022:* Find job in Singapore. I will guide. But will be very tough.',
                    date: '1/12/2022',
                    completed: false,
                }
            ],
            students: [1, 2]
        }
}