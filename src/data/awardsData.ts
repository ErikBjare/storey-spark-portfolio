
export type Award = {
  id: number;
  title: string;
  organization: string;
  year: number;
  description: string;
  category: 'research' | 'teaching' | 'service' | 'industry';
};

export const awardsData: Award[] = [
  {
    id: 1,
    title: "ACM Distinguished Scientist",
    organization: "Association for Computing Machinery",
    year: 2015,
    description: "Recognized as an ACM Distinguished Scientist for significant accomplishments in and impact on the computing field.",
    category: 'research'
  },
  {
    id: 2,
    title: "Microsoft Research Outstanding Collaborator Award",
    organization: "Microsoft Research",
    year: 2020,
    description: "Awarded for exceptional research collaboration with Microsoft Research teams on developer productivity and experience.",
    category: 'industry'
  },
  {
    id: 3,
    title: "Killam Research Fellowship",
    organization: "Killam Trusts",
    year: 2017,
    description: "Received prestigious fellowship supporting outstanding scholars working on groundbreaking research projects.",
    category: 'research'
  },
  {
    id: 4,
    title: "Faculty of Engineering Teaching Excellence Award",
    organization: "University of Victoria",
    year: 2016,
    description: "Recognized for outstanding contributions to teaching and student mentorship in software engineering.",
    category: 'teaching'
  },
  {
    id: 5,
    title: "IBM Center for Advanced Studies Faculty Fellow",
    organization: "IBM",
    year: 2014,
    description: "Selected as a faculty fellow for collaborative research on software engineering tools and practices.",
    category: 'industry'
  },
  {
    id: 6,
    title: "Distinguished Paper Award at ICSE",
    organization: "International Conference on Software Engineering",
    year: 2018,
    description: "Paper on 'The (R)Evolution of Social Media in Software Engineering' recognized as one of the most influential papers at ICSE.",
    category: 'research'
  },
  {
    id: 7,
    title: "Service to Software Engineering Community Award",
    organization: "IEEE Technical Council on Software Engineering",
    year: 2019,
    description: "Recognized for outstanding service and leadership within the software engineering research community.",
    category: 'service'
  },
  {
    id: 8,
    title: "Google Research Award",
    organization: "Google",
    year: 2021,
    description: "Received funding for innovative research on developer experience and productivity measurement.",
    category: 'industry'
  }
];
