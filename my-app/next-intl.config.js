export const defaultLocale = 'en'
export const locales = ['en', 'es']

// Define los patrones de ruta para cada idioma
export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    es: '/acerca'
  },
  '/legal': {
    en: '/legal',
    es: '/terminos_y_condiciones_legales'
  },
  '/products': {
    en: '/products',
    es: '/productos'
  },
  '/contact': {
    en: '/contact',
    es: '/contacto'
  },

}

// Exporta la configuración completa
export default {
  defaultLocale,
  locales,
  pathnames
}