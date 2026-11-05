# Portfolio de Carlos Martín de Prado Barragán

Versión oficial del portfolio, con diseño de terminal y contenido en español e inglés.

## Abrir

Haz doble clic en `Abrir portfolio.cmd`. También puedes abrir `dist/index.html`.

## Cambios visuales

- Fondo oscuro neutro y superficies diferenciadas; azul para acciones y selección.
- Terminal con borde fino, sombra contenida, barra superior sutilmente translúcida y degradado inferior del original.
- Tipografía con espaciado más abierto y mayor separación en la presentación.
- Tarjetas con elevación de 3 px, halo azul suave y zoom de imagen (200 ms).
- Indicador de pestaña móvil con degradado azul; comandos a 55 ms por carácter y contenido al terminar, con fundido y desplazamiento de 6 px en una cascada breve (220–280 ms).
- Prompt y cursor con el mismo azul de los iconos y brillo tenue.
- Etiquetas de tecnologías con borde fino, fondo neutro y reflejo interior.
- Trayectoria con icono degradado y puntos originales de contorno azul, centrados sobre la línea en escritorio y móvil.
- Respuesta uniforme en enlaces; compresión de 0,97 al pulsar.
- Línea degradada de cabecera y animaciones del cambio de tema recuperadas del original.
- Iconos de profesión, contacto y proyectos, junto con la nota del TFG, con el mismo degradado azul y brillo suave, adaptados a ambos temas.
- Entrada coordinada de la presentación durante la salida de la bienvenida (680 ms), sin mostrar el contenido y volverlo a ocultar; espacio de scrollbar reservado para evitar saltos de ancho.
- Pantalla de carga con los mismos degradados azules: logo, prompts, cursores, confirmaciones y línea inferior; progreso continuo sincronizado con cada carácter y las pausas entre comandos, y destello tenue al terminar.
- Footer con divisor azul degradado y brillo tenue, copyright acentuado y texto centrado en escritorio y móvil.
- Aptitudes técnicas organizadas en filas por las cuatro categorías del CV, con iconos azules y etiquetas legibles.
- Idiomas como sección abierta debajo de Aptitudes técnicas: español nativo, Cambridge B2 First y C1 Advanced en preparación; emblema oficial de Cambridge presentado como los de Formación.
- Perfil basado en el CV, el «Acerca de» de LinkedIn y las indicaciones del autor: aprendizaje construyendo sistemas, experiencia en desarrollo y objetivo de especializarse en ciberseguridad, con todos los párrafos en el mismo tono.
- Respeto de movimiento reducido, navegación por teclado y dispositivos táctiles.
- Selector español/inglés junto al tema, con animación similar y preferencia persistente. Traduce presentación, terminal, proyectos, trayectoria, aptitudes, carga, descripciones de imágenes y etiquetas accesibles.

`dist/polish.css` reúne los estilos del portfolio. Las preferencias de tema e idioma se guardan en el navegador.

`dist/i18n.js` contiene las traducciones y conserva el español como texto de origen. El selector recuerda el idioma y mantiene la sección abierta. Los nombres propios, tecnologías y enlaces a proyectos se conservan.

El botón de CV descarga la versión entregada por el autor para el idioma seleccionado: `Carlos_Martin_de_Prado_Barragan_CV_ES.pdf` en español y `Carlos_Martin_de_Prado_Barragan_CV_EN.pdf` en inglés. La dirección anterior del PDF también contiene la nueva versión española para conservar los enlaces existentes.

## Vista previa local

Desde esta carpeta: `python -m http.server 8766 --bind 127.0.0.1 --directory dist`.
Abre http://127.0.0.1:8766/.

URL pública: https://carlosmdpb.github.io/.

## Publicación en GitHub Pages

Repositorio: `carlosmdpb/carlosmdpb.github.io`. En Settings → Pages, el origen de publicación debe ser GitHub Actions.

El flujo `.github/workflows/pages.yml` publica únicamente `dist/` cuando cambia la web en `main`. También se puede ejecutar manualmente desde Actions. Las capturas y referencias locales no se publican.

## Vista previa al compartir

`dist/assets/portfolio-social.png` es la portada horizontal de 1200 × 627 píxeles: figura sentada completa y terminal con los cuatro comandos en `[OK]`. `dist/index.html` declara esta imagen mediante Open Graph y Twitter Cards con su URL pública absoluta.

La composición editable está en `tools/social-preview.html`, fuera de la carpeta publicada. Usa la figura original de carga y las mismas fuentes y colores del portfolio. Para regenerarla, sirve la raíz del proyecto, abre esa página y exporta una captura de su lienzo de 1200 × 627 píxeles cuando hayan cargado las fuentes y la figura.

Tras publicar una nueva miniatura, actualiza la vista previa del enlace en LinkedIn con https://www.linkedin.com/post-inspector/. Si una tarjeta de Destacados conserva la imagen anterior, vuelve a añadir el enlace.

El emblema de Cambridge procede de https://candidates.cambridgeenglish.org/common/images/cambridge-assessment-english-shield_192x192.png.
