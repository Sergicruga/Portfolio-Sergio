# Portfolio de Sergio de la Cruz

Web estática (HTML + CSS + JavaScript), pensada para enlazar desde LinkedIn.

## Qué incluye
- GoPlan: dos capturas reales + enlace a Google Play.
- Reset de Conciencia: captura real + enlace a la web real.
- Football Stats: captura real facilitada por el autor.
- Peluquería Dreams: captura real facilitada por el autor.
- Diseño responsive, navegación y filtros de proyectos.
- Sin dependencias, sin instaladores, sin claves API, sin servidor.

## Abrir en local
Abre `index.html` haciendo doble clic. Las imágenes están en la carpeta `assets`.
El sitio puede usar una fuente de Google si hay conexión a Internet, pero tiene fuentes del sistema como alternativa.

## Revisar ANTES de publicar
1. Confirma que los textos describen correctamente los proyectos y el estado de DAW.
2. Comprueba que quieres mostrar las capturas de Football Stats y Peluquería Dreams públicamente (aparecerán en GitHub y Vercel si el repositorio es público).
3. En `script.js`, modifica `CONTACTO.email`, `CONTACTO.linkedin` y `CONTACTO.github` solo si quieres hacer públicos esos enlaces. Por defecto están vacíos.
4. La tarjeta de Reset de Conciencia es una **composición ilustrativa**, no una captura real. Si nos facilitas una captura de la web, podremos sustituirla.
5. No incluyas contraseñas, tokens, claves de Supabase ni información privada de clientes en el repositorio.

## Subir a GitHub desde Windows (PowerShell o Git Bash)
1. Crea en GitHub un repositorio **sin añadir README ni .gitignore iniciales**, por ejemplo `portfolio-sergio`.
2. Descomprime este ZIP y abre una terminal dentro de la carpeta que contiene `index.html`.
3. Ejecuta:

```bash
git init
git add .
git commit -m "Primer portfolio profesional"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portfolio-sergio.git
git push -u origin main
```

Sustituye `TU_USUARIO` por tu usuario de GitHub. Si no conoces Git, también puedes crear el repo en GitHub, pulsar `Add file > Upload files` y subir **el contenido de la carpeta**, manteniendo la carpeta `assets`.

## Publicar en Vercel (después de subir a GitHub)
1. En Vercel, pulsa `Add New > Project`.
2. Importa tu repositorio de GitHub.
3. Framework preset: `Other`. Root directory: `./`. Sin build command y sin output directory personalizado.
4. Pulsa `Deploy`.
5. Prueba el sitio en móvil y ordenador y copia su URL pública a LinkedIn, en la sección `Destacados` o `Proyectos`.

## Modificar después
Edita los archivos localmente y envía cambios a GitHub:

```bash
git add .
git commit -m "Actualizar portfolio"
git push
```

Vercel suele hacer un nuevo despliegue automáticamente al recibir cambios en la rama principal.
