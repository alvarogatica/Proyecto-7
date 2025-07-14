# **urdupes.cl**

**LINKS FRONTEND PROD/DEV:**
https://urdupescl.vercel.app/
https://github.com/alvarogatica/Proyecto-7.git

**LINKS BACKEND PROD/DEV:**
https://urdupescl.onrender.com/
https://github.com/alvarogatica/Proyecto_modulo_6.git


Bienvenido a **urdupes.cl**, una tienda online de accesorios femeninos inspirada en la elegancia minimalista para complementar los looks del día a día. Este proyecto corresponde al **frontend** desarrollado con **React** y **Vite**.

## 🚀 Tecnologías utilizadas

- **React** — Librería principal para construir la interfaz de usuario.
- **Vite** — Bundler ultrarrápido para desarrollo y build de producción.
- **Tailwind CSS** — Framework de utilidades para estilos modernos y responsivos.
- **React Router DOM** — Manejo de rutas y navegación SPA.
- **Axios** — Cliente HTTP para consumir la API del backend.
- **Lucide React** — Íconos elegantes y minimalistas.

## ✨ Funcionalidades principales

- **Catálogo de productos**: Visualización dinámica de carteras y anteojos de sol.
- **Navegación intuitiva**: Páginas claras con enlaces accesibles a cada categoría.
- **Carrito de compras**: Añadir productos al carrito, ver cantidades y eliminar productos.
- **Integración con backend**: Consulta de productos y operaciones de carrito mediante API REST.
- **Página de checkout**: Redirección a Stripe para procesar pagos de forma segura.
- **Páginas de éxito y cancelación**: Mensajes amigables según el resultado de la compra.
- **Diseño responsive**: Se adapta a dispositivos móviles y escritorio.

## ⚙️ Cómo ejecutar el proyecto en local

Clona el repositorio, instala dependencias y configura la variable de entorno con la URL de tu backend.

```bash
git clone https://github.com/alvarogatica/Proyecto-7.git
```

Dirigete a la carpeta raiz:

```bash
cd Proyecto-7
```

Instala las dependencias:

```bash
npm install
```

Crea un archivo en la carpeta raiz del proyecto con el nombre ``.env`` con esto dentro:

```bash
VITE_BACKEND_URL=http://localhost:3000/api
```

Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

Dirigete a la URL que te da.

## Notas

- Asegurate que el backend este corriendo
- Para produccion cambia ``VITE_BACKEND_URL`` a la URL publica del backend
- Desarrollado por Álvaro Gatica

