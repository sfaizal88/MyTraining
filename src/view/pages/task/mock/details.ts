import {TaskStatusType} from '@/utils/enum';

export const mockData = {
    id: 1,
    title: "Grid exercise",
    type: "CSS exercise",
    details: "Websites often include forms as a part of their customer data collection strategy. A well-made survey form can help you acquire relevant information about your target audiences like their demographic age, job, location, taste and preference, and pain points. This HTML project is a great way to test your skills and knowledge of designing forms and structuring a webpage.",
    status: TaskStatusType.started,
    images: ['https://img.freepik.com/premium-vector/coding-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-design-flat-illustration-landing-page_128772-1405.jpg', 'https://img.freepik.com/premium-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner-landing-page-template_128772-1368.jpg'],
    students: [1, 2],
    duration: '2d'
};