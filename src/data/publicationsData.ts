
export type Publication = {
  id: number;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  citations: number;
  abstract: string;
  keywords: string[];
  url?: string;
};

export const publicationsData: Publication[] = [
  {
    id: 1,
    title: "The SPACE of Developer Productivity: There's more to it than you think",
    authors: ["Margaret-Anne Storey", "Thomas Zimmermann", "Christian Bird", "Jacek Czerwonka"],
    year: 2020,
    venue: "Queue",
    citations: 86,
    abstract: "Developer productivity is about more than an individual's activity levels or the efficiency of the engineering systems relied on to ship software. It's about making the right decisions to drive results while using time, energy, and resources effectively.",
    keywords: ["productivity", "software engineering", "SPACE framework", "developer experience"]
  },
  {
    id: 2,
    title: "How Do Program Understanding Tools Affect How Programmers Understand Programs?",
    authors: ["Margaret-Anne Storey", "Kenny Wong", "Hausi A. Müller"],
    year: 2005,
    venue: "Science of Computer Programming",
    citations: 432,
    abstract: "In this paper, we describe an ethnographically-based experiment conducted to investigate how software visualization tools affect the way programmers understand programs.",
    keywords: ["program comprehension", "software visualization", "user studies"]
  },
  {
    id: 3,
    title: "The (R)Evolution of Social Media in Software Engineering",
    authors: ["Margaret-Anne Storey", "Leif Singer", "Fernando Figueira Filho"],
    year: 2018,
    venue: "ICSE-SEIS",
    citations: 123,
    abstract: "This paper traces the history of social media in software engineering, from the early days of technologies such as mailing lists and IRC to modern social coding sites like GitHub.",
    keywords: ["social media", "software engineering", "collaboration", "GitHub"]
  },
  {
    id: 4,
    title: "Software Engineering at the Speed of Light: How Developer Productivity Metrics Can Harm Developer Experience",
    authors: ["Margaret-Anne Storey", "Nicole Forsgren", "Eirini Kalliamvakou"],
    year: 2021,
    venue: "IEEE Software",
    citations: 67,
    abstract: "This article explores how productivity metrics can negatively impact developer experience and offers alternative approaches for measuring and improving developer productivity.",
    keywords: ["metrics", "developer productivity", "developer experience", "SPACE framework"]
  },
  {
    id: 5,
    title: "Towards a Theory of Software Developer Job Satisfaction and Perceived Productivity",
    authors: ["Margaret-Anne Storey", "Thomas Fritz", "Brian Houck"],
    year: 2019,
    venue: "IEEE Transactions on Software Engineering",
    citations: 94,
    abstract: "This study investigates the factors that influence software developer job satisfaction and perceived productivity, based on a survey of over 2,000 developers.",
    keywords: ["job satisfaction", "productivity", "human factors", "survey research"]
  },
  {
    id: 6,
    title: "The Impact of AI on Software Development Practices",
    authors: ["Margaret-Anne Storey", "Alexey Zagalsky", "Fernando Figueira Filho"],
    year: 2023,
    venue: "Communications of the ACM",
    citations: 32,
    abstract: "This article explores how AI-based tools are changing software development practices and what implications this has for the future of software engineering education and training.",
    keywords: ["artificial intelligence", "software development", "developer tools", "future of work"]
  },
  {
    id: 7,
    title: "Disrupting Developer Productivity One Bot at a Time",
    authors: ["Margaret-Anne Storey", "Bogdan Vasilescu"],
    year: 2022,
    venue: "FSE",
    citations: 41,
    abstract: "This paper examines the impact of automation bots on developer productivity in open source software projects, finding both positive and negative effects.",
    keywords: ["bots", "automation", "open source", "developer productivity"]
  },
  {
    id: 8,
    title: "Designing for Software Engineers: Lessons from a Study of Developer Tool Usage",
    authors: ["Margaret-Anne Storey", "Chris Parnin", "Daniela Damian"],
    year: 2018,
    venue: "ICSE",
    citations: 87,
    abstract: "Based on a study of how developers use tools in their daily work, this paper presents guidelines for designing more effective software engineering tools.",
    keywords: ["developer tools", "user experience", "tool design", "software engineering"]
  }
];
