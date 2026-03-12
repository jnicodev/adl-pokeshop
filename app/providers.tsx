'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { CartProvider } from '@/contexts/CartContext';

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
            <CartProvider>
                { children }
            </CartProvider>
        </QueryClientProvider>
    );
};

export default Providers;