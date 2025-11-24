export const getYearsExperience = (startDate: string): number => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(years);
};

export const formatYearsExperience = (startDate: string): string => {
    const years = getYearsExperience(startDate);
    return `${years}+`;
};

export const CAREER_START_DATE = '2008-01-01';
