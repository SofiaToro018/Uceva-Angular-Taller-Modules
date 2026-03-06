/**
 * Interfaz que representa la respuesta principal de la API RandomUser.
 *
 * @remarks
 * Contiene un arreglo de usuarios obtenidos desde la API externa
 * {@link https://randomuser.me/api/}.
 *
 * @example
 * ```typescript
 * const response: RandomUserResponse = { results: [] };
 * ```
 */
export interface RandomUserResponse {
  /** Lista de usuarios obtenidos desde la API */
  results: RandomUser[];
}

/**
 * Interfaz que representa un usuario obtenido desde la API RandomUser.
 *
 * @remarks
 * Contiene la información personal del usuario como nombre, ubicación,
 * correo electrónico, teléfono y foto de perfil.
 *
 * @example
 * ```typescript
 * const user: RandomUser = {
 *   gender: 'male',
 *   email: 'john@example.com',
 *   phone: '123-456-7890',
 *   nat: 'US',
 *   name: { title: 'Mr', first: 'John', last: 'Doe' },
 *   location: { city: 'New York', state: 'NY', country: 'US' },
 *   picture: { large: '', medium: '', thumbnail: '' }
 * };
 * ```
 */
export interface RandomUser {
  /** Género del usuario */
  gender: string;
  /** Correo electrónico del usuario */
  email: string;
  /** Número de teléfono del usuario */
  phone: string;
  /** Nacionalidad del usuario */
  nat: string;
  /** Información del nombre del usuario */
  name: Name;
  /** Ubicación geográfica del usuario */
  location: Location;
  /** Imágenes de perfil del usuario */
  picture: Picture;
}

/**
 * Interfaz que representa el nombre de un usuario.
 *
 * @remarks
 * Incluye título, primer nombre y apellido del usuario.
 */
export interface Name {
  /** Título del usuario (Mr, Mrs, Ms, etc.) */
  title: string;
  /** Primer nombre del usuario */
  first: string;
  /** Apellido del usuario */
  last: string;
}

/**
 * Interfaz que representa la ubicación de un usuario.
 *
 * @remarks
 * Contiene la ciudad, estado y país del usuario.
 */
export interface Location {
  /** Ciudad de residencia del usuario */
  city: string;
  /** Estado o departamento del usuario */
  state: string;
  /** País de residencia del usuario */
  country: string;
}

/**
 * Interfaz que representa las imágenes de perfil de un usuario.
 *
 * @remarks
 * Incluye tres tamaños de imagen: grande, mediana y miniatura.
 */
export interface Picture {
  /** URL de la imagen en tamaño grande */
  large: string;
  /** URL de la imagen en tamaño mediano */
  medium: string;
  /** URL de la imagen en tamaño miniatura */
  thumbnail: string;
}
