import { NavbarItem } from "../../modules/shared/interfaces/navbar.interface";

/**
 * Configuración de los ítems del menú de navegación principal.
 *
 * Esta constante define las opciones visibles en el Navbar de la aplicación,
 * permitiendo centralizar la gestión de rutas y etiquetas del menú.
 *
 * Cada elemento representa un acceso directo a un módulo funcional del sistema.
 *
 * @type {NavbarItem[]}
 *
 * @example
 * <app-navbar></app-navbar>
 */
export const NAVBAR_ITEMS: NavbarItem[] = [
    { label: 'Usuarios', url: '/users' },
    { label: 'Productos', url: '/products' },
    { label: 'Libros', url: '/books' },
    { label: 'Películas', url: '/movies' },
    { label: 'Random Users', url: '/random-users' }
] 