import { createContext } from 'react';

export const SEOContext = createContext<((data: any) => void) | null>(null);
