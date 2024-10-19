# Planetary

## Descripción del Proyecto

Una aplicación web que muestra un listado de planetas del sistema solar utilizando una API REST pública.

## Instalación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

## Funcionalidades

- Listado de planetas con opción de búsqueda y ordenamiento.
- Paginación para mostrar un máximo de 5 resultados por página.
- Detalles del planeta con opción para marcar como favorito.
- Aplicación responsiva y estilizada con Tailwind.

## Estructura de Carpetas

- `/pages`: Páginas de la aplicación.
- `/components`: Componentes reutilizables.
- `/store`: Manejo del estado.
- `/types`: Tipos TypeScript.
- `/Domains`: Constantes y Paths de las Pages del proyecto

## Notas

- Cada card renderiza la imagen del planeta, Nombre y su masa.
- Detalle del planeta permite ver un poco más del planeta seleccionado.
- Puedes guardarlo en favoritos (Se almacena en el localstorage).
- Se utiliza zustand para tener un control global de la información de manera optima.

## Mejoras

- Agregar listado de favoritos.
- Mejorar visual de la pagina principal y la detalles.
