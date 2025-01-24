// types.ts
export type User = {
    gender: string;
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: string;
    nat: string;
    team: 'Cloud' | 'IAM';
    role: string;
    skills: string[];
  };