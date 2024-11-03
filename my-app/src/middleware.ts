import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, pathnames } from '../next-intl.config';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames
});

// Combinar los matchers
export const config = {
    
    matcher: ['/((?!api|_next|.*\\..*).*)']

};