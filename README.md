# Portfolio de Carlos Martín de Prado Barragán

Portfolio estático con una terminal interactiva. El contenido profesional procede del CV entregado por Carlos y de los README de sus repositorios públicos. La figura del encabezado se generó a partir de la fotografía del CV y usa un fondo transparente.

## Abrir en local

En Windows, haz doble clic en `Abrir portfolio.cmd`. También puedes abrir directamente `dist/index.html` en el navegador. La terminal, las imágenes y el CV descargable funcionan sin servidor.

Si prefieres servirlo por HTTP desde la raíz del proyecto:

Desde la raíz del proyecto:

```bash
python -m http.server 8765 --directory dist
```

Abre `http://localhost:8765/`. Solo será accesible en este equipo mientras el servidor esté en marcha.

## Comandos

`whoami`, `ls ~/proyectos`, `cat trayectoria.md`, `grep aptitudes cv.txt`, `help` y `clear`. Los botones muestran el comando mediante una animación breve antes de presentar la sección. El campo de entrada ejecuta el comando directamente.

## Recursos

- Las imágenes de los proyectos provienen de los repositorios correspondientes, excepto el diagrama conceptual de Ensamble Secuencial, creado para este portfolio.
- El PDF de la raíz de `dist` es una copia del CV proporcionado para que el botón de descarga funcione sin servicios externos.
- La foto extraída del CV usada como referencia no se distribuye por separado.
