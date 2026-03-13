# PokéShop

PokéShop es la simulación de una tienda virtual de Pokémon desarrollada como solución de la prueba técnica para ADL.

La aplicación permite a los usuarios registrarse, iniciar sesión,
explorar Pokémon obtenidos desde la PokéAPI, visualizar el detalle de
cada Pokémon y agregarlos a un carrito de compras persistente.

------------------------------------------------------------------------

# Repositorio

https://github.com/jnicodev/adl-pokeshop

------------------------------------------------------------------------

# Tecnologías

### Frontend

- Next.js
-   React
-   TypeScript
-   TanStack Query
-   TailwindCSS
- Tailwind Variants
- Sonner
- Lucide

### Backend

-   Next.js API
-   TypeScript

### API externa

-   PokéAPI

La elección de estas tecnologías permite mantener **tipado completo en
toda la aplicación**, desde el consumo de APIs hasta la lógica de
negocio.

------------------------------------------------------------------------

# Funcionalidades implementadas

La aplicación cumple con todos los requisitos solicitados en la prueba
técnica.

## Autenticación

El sistema permite:

-   Registro de usuarios
-   Inicio de sesión
- Cerrar la sesión

Los usuarios se almacenan en un archivo JSON, cumpliendo con la
restricción de **no usar una base de datos real**.

## Catálogo de Pokémon

Los Pokémon se obtienen desde la PokéAPI y se presentan como productos
dentro de la tienda.

El catálogo incluye:

-   Listado paginado
-   Buscador básico
-   Precio generado dinámicamente
- Cambio de vista del Pokémon

## Página de detalle

Cada Pokémon tiene su propia página de detalle que incluye:

-   Sprite animado
-   Información básica del Pokémon

## Carrito de compras

El carrito permite:

-   Agregar productos
-   Eliminar productos
-   Visualizar resumen
-   Calcular total de compra
- Ver el contador de productos
- Acumular cantidades de un mismo Pokémon
- Vaciar el carrito con un clic

La persistencia del carrito se realiza mediante **localStorage**.

## Interfaz responsive

La aplicación se adapta a múltiples tamaños de pantalla.

------------------------------------------------------------------------

# Instalación

Clonar el repositorio:

``` bash
git clone https://github.com/jnicodev/adl-pokeshop
cd adl-pokeshop
```

Instalar dependencias:

``` bash
yarn install
```

Crear archivo `.env`:

    NEXT_PUBLIC_POKEAPI_URL=https://pokeapi.co/api/v2

------------------------------------------------------------------------

# Ejecución del proyecto

Iniciar el servidor de desarrollo:

``` bash
yarn build
```

Al completar el comando anterior:

``` bash
yarn start
```

Abrir en el navegador:

    http://localhost:3000

------------------------------------------------------------------------

# Arquitectura del proyecto

El proyecto sigue una arquitectura simple enfocada en la separación de
responsabilidades.

    src
     ├─ app
     │   ├─ api
     │   │   ├─ auth
     │   │   └─ pkmn
     │   │
     │   └─ shop
     │
     ├─ components
     │
     ├─ contexts
     │
     ├─ data
     │
     ├─ hooks
     │
     ├─ lib
     │
     └─ types

Puntos a destacar:

-   Usé Atomic Design para organizar los componentes
-   El carrito se usa en toda la tienda mediante un Contexto

------------------------------------------------------------------------

# Autenticación

Tal como indica la prueba técnica, **no se utiliza base de datos**.

Los usuarios se almacenan en:

    data/users.json

Ejemplo de estructura:

``` json
[
  {
    "id": "uuid",
    "nickname": "ash",
    "password": "ahs"
  }
]
```

El flujo de autenticación incluye:

1.  Registro de usuario
2.  Validación de existencia
3.  Generación automática de contraseña
4.  Validación de credenciales en login

La sesión se mantiene mediante cookies simples.

------------------------------------------------------------------------

# Integración con PokéAPI

La información de los Pokémon proviene de:

https://pokeapi.co/api/v2/pokemon

Para facilitar el consumo desde el frontend se implementó un pequeño
backend que actúa como proxy.

Ejemplo de endpoint interno:

    GET /api/pkmn?offset=30

Internamente se consulta:

    GET https://pokeapi.co/api/v2/pokemon?limit=30&offset=30

Para el detalle de Pokémon:

    GET /api/pkmn/[name]

Este enfoque permite:

-   Controlar la paginación
-   Centralizar el consumo de la API
-   Transformar los datos antes de enviarlos al frontend

------------------------------------------------------------------------

# Conversión de Pokémon en productos

La PokéAPI no está diseñada para una tienda virtual, por lo que se
realizó una transformación simple de los datos.

Cada Pokémon se convierte en un producto de conveniente uso para el frontend.

El precio se calcula dinámicamente utilizando estadísticas base del
Pokémon.

------------------------------------------------------------------------

# Testing

No se incluyeron pruebas automatizadas en esta versión.

------------------------------------------------------------------------

# Decisiones técnicas

## Next.js como backend

Se utilizaron **API Routes** para evitar introducir un backend separado
y mantener un stack simple basado en TypeScript.

## TanStack Query

Se utiliza para manejar:

-   fetching de datos
-   caché
-   estados de carga
-   reintentos

Esto simplifica la lógica de consumo de APIs en el frontend.

## TailwindCSS

Se eligió Tailwind por:

-   rapidez de desarrollo
-   consistencia visual
-   facilidad para construir interfaces responsive

------------------------------------------------------------------------

# Posibles mejoras

Algunas mejoras que podrían incorporarse en una versión futura:

-   Autenticación más robusta
-   Tests
-   Optimización de carga de imágenes
-   Manejo avanzado de sesiones

------------------------------------------------------------------------

# Autor

Juan Nicolás Murillo\
Ingeniero de Software
