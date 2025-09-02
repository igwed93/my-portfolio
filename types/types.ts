// project type
export type Project = {
    title: string;
    description: string;
    tech: string[];
    href?: string;
    repo?: string;
    image?: string;
};

// certification type
export type Certification = {
    name: string;
    issuer: string;
    link: string;
}

// experience type
export type Experience = {
    company: string;
    role: string;
    period: string;
    points: string[];
}

// learning type
export type Learning = {
    title: string;
    provider: string;
    link: string;
}