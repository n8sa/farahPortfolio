import React from 'react';
import { Experience, SkillCategory, EducationItem, Certification, Project } from './types';

export const GITHUB_URL = "https://github.com/n8sa";
export const LINKEDIN_URL = "https://www.linkedin.com/in/farah-nisa-syahindah-binti-yaakob-a9a3b817b/";
export const EMAIL_ADDRESS = "farahnisasyahindah@gmail.com";
export const LOCATION = "Kuala Lumpur";

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Personal Portfolio Website",
        image: "https://picsum.photos/seed/portfolio/800/600",
        description: "Built with React & TypeScript, this site showcases my work with a clean, interactive design and smooth animations. The code itself demonstrates my frontend development capabilities.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/n8sa/personal-portfolio",
        liveUrl: "#",
    },
    {
        id: 2,
        name: "Azure VM Deployment Automation",
        image: "https://github.com/n8sa/farahPortfolio/blob/main/context/migrationAzure.png",
        description: "Automated Azure VM deployment with PowerShell and VBScript, cutting manual infrastructure setup effort by over 60% and ensuring consistent, error-free server environments.",
        technologies: ["PowerShell", "Azure", "VBScript", "Windows Server"],
        githubUrl: "https://github.com/n8sa/azure-automation-scripts",
    },
    {
        id: 3,
        name: "Performance Monitoring Dashboard",
        image: "https://picsum.photos/seed/dashboard/800/600",
        description: "Developed a React dashboard for Petronas Digital, providing senior leaders with real-time, actionable insights into team performance and workload distribution.",
        technologies: ["React.js", "HTML & CSS", "REST APIs", "Postman"],
        githubUrl: "https://github.com/n8sa/performance-dashboard",
    },
    {
        id: 4,
        name: "Legacy DB Migration Tool",
        image: "https://picsum.photos/seed/db-migration/800/600",
        description: "Engineered a T-SQL solution that boosted query performance by 40% for a critical backend application by migrating complex business logic from legacy VBA.",
        technologies: ["T-SQL", "SQL Server", "VBA", "C#"],
        githubUrl: "https://github.com/n8sa/db-migration-tool",
    },
];

export const EXPERIENCES: Experience[] = [
    {
        role: "System Engineer",
        company: "Fujitsu System Global Solution Sdn Bhd",
        period: "Feb 2022 – Apr 2025",
        location: "Kuala Lumpur",
        description: [
            "Deployed and configured 10+ Azure Virtual Machines (Windows Server 2016/2019/2022 with Japanese locale).",
            "Streamlined deployments by 15% through efficient resource group setup and server parameter tuning.",
            "Migrated data across VMs using PowerShell, OneDrive, and SharePoint automation in ServiceNow-driven workflows.",
            "Automated bulk Excel processing using VBScript, cutting manual effort by over 50%.",
            "Enhanced financial reporting visibility by integrating PowerShell and Batch scripts for log tracking and system auditing.",
            "Converted legacy VBA logic into T-SQL, accelerating query performance by 40% for Japanese backend applications.",
        ],
    },
    {
        role: "Software Engineer",
        company: "Parkson Credit Sdn Bhd",
        period: "Sep 2021 – Feb 2022",
        location: "Bukit Bintang",
        description: [
            "Redesigned UI for enterprise web system using React.js and Ant Design, improving load times by 30% and user satisfaction.",
            "Developed standardized layout components, resulting in 50% faster feature deployments.",
            "Streamlined team workflows using GitHub and Jira, enhancing project tracking accuracy by 25%.",
            "Expanded backend proficiency through hands-on experience with Node.js, C#, and SQL.",
        ],
    },
    {
        role: "Software Engineer (Internship)",
        company: "Petronas Digital Sdn Bhd",
        period: "May 2021 – Aug 2021",
        location: "Remote",
        description: [
            "Built a performance monitoring dashboard using React.js, HTML & CSS, enabling senior leaders to track 5+ teams in real-time.",
            "Used Postman to create and test APIs linking the dashboard with backend services.",
            "Implemented a custom task rating system to support workload distribution and strategic planning.",
            "Supported project documentation and functional validation activities in Agile development cycles.",
        ],
    },
    {
        role: "Design & Marketing Officer",
        company: "Lesong Mart Sdn Bhd",
        period: "Aug 2020 – Nov 2020",
        location: "Jasin",
        description: [
            "Designed the official company portfolio, showcasing products, services, and branding direction.",
            "Created visual assets including event posters, marketing materials, and promotional designs for digital and print distribution.",
            "Managed Facebook Live sessions for product promotions, increasing online engagement.",
            "Coordinated the grand opening event for Lesong Mart's expansion, launching 30+ new branches across Peninsular Malaysia.",
        ],
    },
    {
        role: "Computer Science Intern",
        company: "Star Media Group Berhad",
        period: "July 2019 – Aug 2019",
        location: "Petaling Jaya",
        description: [
            "Gained hands-on experience with WordPress, including basic content updates and plugin integration for company websites.",
            "Learned fundamentals of web marketing and SEO (Search Engine Optimization) to increase website traffic and user engagement.",
            "Observed and understood the API integration process, learning how frontend systems connect with backend services.",
        ],
    },
];

export const SKILLS: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [{name: 'Java'}, {name: 'C#'}, {name: 'JavaScript'}, {name: 'Python'}, {name: 'SQL'}, {name: 'T-SQL'}, {name: 'Batch'}, {name: 'PowerShell'}, {name: 'MySQL'}, {name: 'HTML & CSS'}, {name: 'C++'}],
    },
    {
        title: 'Frameworks & Tools',
        skills: [{name: 'React.js'}, {name: 'Node.js'}, {name: 'GitHub'}, {name: 'Firebase'}, {name: 'Visual Studio Code'}, {name: 'Microsoft Visual Studio'}, {name: 'Postman'}, {name: 'Jira'}, {name: 'ServiceNow'}],
    },
    {
        title: 'Cloud & Infrastructure',
        skills: [{name: 'Microsoft Azure'}, {name: 'VM Provisioning'}, {name: 'Server Migration'}, {name: 'Resource Groups'}, {name: 'SQL Server'}, {name: 'Power BI'}],
    },
    {
        title: 'DevOps & Workflow',
        skills: [{name: 'Automation Scripting'}, {name: 'Git'}, {name: 'CI/CD (basic)'}, {name: 'Agile/Scrum Workflows'}],
    },
    {
        title: 'Testing & QA',
        skills: [{name: 'Manual Testing'}, {name: 'UAT'}, {name: 'Test Documentation'}, {name: 'Integration & Program Testing'}],
    },
    {
        title: 'Others',
        skills: [{name: 'MS Office Suite'}, {name: 'Excel Automation'}, {name: 'Canva'}, {name: 'Operational Readiness'}],
    },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor Degree (Hons) Computer Science",
    institution: "Universiti Teknologi MARA (UiTM) Kampus Jasin, Melaka",
    period: "Mar 2019 - Aug 2021"
  },
  {
    degree: "Diploma Computer Science",
    institution: "Universiti Teknologi MARA (UiTM) Kampus Arau, Perlis",
    period: "Jun 2016 - Dec 2018"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Azure Data Fundamentals (DP 900)", issuer: "Microsoft", date: "Jun 2024", url: "https://learn.microsoft.com/en-us/users/farahnisasyahindah/credentials/c63875840af3cf60?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
  { name: "Meta: Introduction to Front-End Development", issuer: "Coursera", date: "Feb 2024", url: "https://www.coursera.org/account/accomplishments/verify/PPYMD4ZT7DEX" },
  { name: "Linux : Bash Shell and Scripts", issuer: "LinkedIn", date: "July 2023", url: "https://www.linkedin.com/learning/certificates/a213490e66a98e093df62dc746779a1dc5a6de2de0e1033ca978bcadd690174d" },
  { name: "Learning Python", issuer: "LinkedIn", date: "July 2023", url: "https://www.linkedin.com/learning/certificates/6244dc3daea4c0adc68ba110bdad77bd58b6649c5b8be5d2200d4f8f1e0ffda1" },
  { name: "Azure Fundamentals (AZ 900)", issuer: "Microsoft", date: "Jun 2022", url: "https://www.credly.com/badges/8e05e047-788b-4546-9a18-2da8b0879b9d?source=linked_in_profile" },
  { name: "Agile for Software Development", issuer: "Skillsoft", date: "Jun 2022", url: "https://skillsoft.digitalbadges.skillsoft.com/f72bf1ec-1e2c-4c86-8c19-68ceffd70c0a#acc.dlGogzrF" },
];


export const GithubIcon: React.ReactNode = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export const LinkedinIcon: React.ReactNode = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const MailIcon: React.ReactNode = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

export const LocationIcon: React.ReactNode = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export const ExternalLinkIcon: React.ReactNode = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);