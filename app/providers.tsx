'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <QueryClientProvider client={ queryClient }>
            { children }
        </QueryClientProvider>
    );
};

export default Providers;