
export type TimelineEvent = {
  id: number;
  year: number;
  title: string;
  description: string;
  category: 'research' | 'award' | 'publication' | 'career';
};

export const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: 1994,
    title: "Master's Degree in Computer Science",
    description: "Completed Master's degree at Simon Fraser University",
    category: 'career'
  },
  {
    id: 2,
    year: 1999,
    title: "PhD in Computer Science",
    description: "Earned PhD from Simon Fraser University focusing on software visualization and comprehension",
    category: 'career'
  },
  {
    id: 3,
    year: 2000,
    title: "Joined University of Victoria",
    description: "Began faculty position at University of Victoria",
    category: 'career'
  },
  {
    id: 4,
    year: 2005,
    title: "Published 'How Do Program Understanding Tools Affect How Programmers Understand Programs?'",
    description: "Influential paper on program comprehension tools",
    category: 'publication'
  },
  {
    id: 5,
    year: 2010,
    title: "Introduced SPACE Framework",
    description: "Developed the SPACE framework for analyzing developer productivity",
    category: 'research'
  },
  {
    id: 6,
    year: 2015,
    title: "ACM Distinguished Scientist",
    description: "Recognized as an ACM Distinguished Scientist for contributions to software engineering",
    category: 'award'
  },
  {
    id: 7,
    year: 2018,
    title: "Published 'The (R)Evolution of Social Media in Software Engineering'",
    description: "Influential work on how social media has transformed software engineering practices",
    category: 'publication'
  },
  {
    id: 8,
    year: 2020,
    title: "Microsoft Research Outstanding Collaborator Award",
    description: "Recognized for exceptional research collaboration with industry",
    category: 'award'
  },
  {
    id: 9,
    year: 2022,
    title: "IEEE Technical Council on Software Engineering Chair",
    description: "Elected as Chair of the IEEE Technical Council on Software Engineering",
    category: 'career'
  },
  {
    id: 10,
    year: 2023,
    title: "Published work on AI and Developer Productivity",
    description: "Research on the impact of AI tools on software developer productivity",
    category: 'publication'
  },
  {
    id: 11,
    year: 2024,
    title: "Honorary Doctorate from Lund University",
    description: "Awarded honorary doctorate (hedersdoktor) from Lund University Faculty of Engineering (LTH) for pioneering research in software engineering",
    category: 'award'
  }
];
