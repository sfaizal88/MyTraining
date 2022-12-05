import {TaskStatusType, MockInterviewStatusType} from '@/utils/enum';

export const mockData = {
    id: 1,
    name: "Mohamed Raslan",
    role: "Front end developer",
    contact_no: "+91-9840404382",
    dob: "22/10/1988",
    email: "sfaizal@gmail.com",
    task: [
        {
            id: 1,
            title: "HTML table",
            type: "HTML exercise",
            details: "If several languages coalesce the grammar is more simple and regular than that of the individual languages.",
            status: TaskStatusType.reviewCompleted,
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
            title: "Grid exercise",
            type: "CSS exercise",
            details: "Websites often include forms as a part of their customer data collection strategy. A well-made survey form can help you acquire relevant information about your target audiences like their demographic age, job, location, taste and preference, and pain points. This HTML project is a great way to test your skills and knowledge of designing forms and structuring a webpage.",
            status: TaskStatusType.done,
            images: ['https://img.freepik.com/premium-vector/coding-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-design-flat-illustration-landing-page_128772-1405.jpg', 'https://img.freepik.com/premium-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner-landing-page-template_128772-1368.jpg'],
            students: [1, 2],
            duration: '2d',
            notes: "I have completed all the code",
            githubLink: "https://github.com/faizalahd4/BookWeb",
            review: "To summarize, good and valuable code review feedback is feedback to focuses on the goal of the code review: to inspect whether the current code change is correct and of high-quality. Discussions that aren't helping to achieve this goal should happen outside of the code review process."
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
        },
    tech_stack: [
        {
            id: 1,
            title: "HTML Language",
            tutorial_url: 'https://www.w3schools.com/html/default.asp',
            video_url: 'https://www.youtube.com/watch?v=aPpK3Tb3wjI&list=PLpYn3LR7eQI2trAr1z1lmvYGAQfsbllY5',
            tech_details: [
                {
                    id: 1,
                    title: 'Heading tag',
                    tutorial_url: 'https://www.w3schools.com/html/html_headings.asp',
                    video_url: 'https://www.youtube.com/watch?v=aPpK3Tb3wjI&list=PLpYn3LR7eQI2trAr1z1lmvYGAQfsbllY5&index=8',
                },
                {
                    id: 2,
                    title: 'Paragraphs tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_p.asp',
                    video_url: 'https://www.youtube.com/watch?v=aPpK3Tb3wjI&list=PLpYn3LR7eQI2trAr1z1lmvYGAQfsbllY5&index=8',
                },
                {
                    id: 3,
                    title: 'Anchor tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_a.asp',
                    video_url: '',
                },
                {
                    id: 4,
                    title: 'Images tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 5,
                    title: 'Style tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 6,
                    title: 'Fonts tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 7,
                    title: 'Bold tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 8,
                    title: 'Italic tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 9,
                    title: 'Strong tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 10,
                    title: 'Small tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 11,
                    title: 'Div tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 12,
                    title: 'Span tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 13,
                    title: 'Blockquote tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 14,
                    title: 'Comments info',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 15,
                    title: 'Title tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 16,
                    title: 'Head tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 17,
                    title: 'Html tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 18,
                    title: 'Body tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 19,
                    title: 'Favicon',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 20,
                    title: 'Ordered list tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 21,
                    title: 'Unordered list tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 22,
                    title: 'Class and Id tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 23,
                    title: 'IFrame tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 24,
                    title: 'Input tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 25,
                    title: 'Select tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 26,
                    title: 'Textarea tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 27,
                    title: 'Radio tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 28,
                    title: 'Checkbox tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 29,
                    title: 'HR tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 30,
                    title: 'Breakling tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 31,
                    title: 'Form tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 32,
                    title: 'Video tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 33,
                    title: 'Audio tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 34,
                    title: 'Link tag css',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 35,
                    title: 'Script tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 36,
                    title: 'Center tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 37,
                    title: 'No script tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                },
                {
                    id: 38,
                    title: 'Map tag',
                    tutorial_url: 'https://www.w3schools.com/tags/tag_img.asp',
                    video_url: '',
                }
            ],
            students: [1, 2]
        },
        {
            id: 2,
            title: "CSS",
            tutorial_url: 'https://www.w3schools.com/css/default.asp',
            video_url: '',
            tech_details: [
                {
                    id: 1,
                    title: 'Syntax',
                    tutorial_url: 'https://www.w3schools.com/css/css_syntax.asp',
                    video_url: '',
                },
                {
                    id: 2,
                    title: 'Selectors',
                    tutorial_url: 'https://www.w3schools.com/css/css_selectors.asp',
                    video_url: '',
                },
                {
                    id: 3,
                    title: 'Comments',
                    tutorial_url: 'https://www.w3schools.com/css/css_comments.asp',
                    video_url: '',
                },
                {
                    id: 4,
                    title: 'Colors',
                    tutorial_url: 'https://www.w3schools.com/css/css_colors.asp',
                    video_url: '',
                }
            ],
            students: [1, 2, 3, 5]
        }
    ],
    mock_interview: [
        {
            id: 1,
            title: "HTML exercise basic round",
            details: "Websites often include forms as a part of their customer data collection strategy. A well-made survey form can help you acquire relevant information about your target audiences like their demographic age, job, location, taste and preference, and pain points. This HTML project is a great way to test your skills and knowledge of designing forms and structuring a webpage.",
            students: 1,
            interviewer: 1,
            review: "",
            meeting_link: "https://coderthemes.com/adminto/layouts/task-details.html",
            status: MockInterviewStatusType.pending,
            interview_date: '13/12/2022',
        },
        {
            id: 2,
            title: "CSS exercise basic round",
            details: "Websites often include forms as a part of their customer data collection strategy. A well-made survey form can help you acquire relevant information about your target audiences like their demographic age, job, location, taste and preference, and pain points. This HTML project is a great way to test your skills and knowledge of designing forms and structuring a webpage.",
            students: 2,
            interviewer: 1,
            review: "",
            meeting_link: "https://coderthemes.com/adminto/layouts/task-details.html",
            status: MockInterviewStatusType.completed,
            interview_date: '11/12/2022',
        }
    ]
}