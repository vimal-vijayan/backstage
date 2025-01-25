// // ExampleFetchComponent.tsx
// import React from 'react';
// import { Progress, ResponseErrorPanel } from '@backstage/core-components';
// import useAsync from 'react-use/lib/useAsync';
// import { TeamTable } from './TeamTable';
// import { teamMembers } from './mockData';
// import { User } from './types';

// export const ExampleFetchComponent = () => {
//   const { value, loading, error } = useAsync(async (): Promise<User[]> => {
//     return teamMembers;
//   }, []);

//   if (loading) return <Progress />;
//   if (error) return <ResponseErrorPanel error={error} />;
//   return <TeamTable users={value || []} teamName="CET" />;
// };