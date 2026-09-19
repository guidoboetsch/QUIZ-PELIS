# Quiz Pelis

Quiz mobile-first de películas. Elegí una película, respondé 10 preguntas correctamente de forma consecutiva y desbloqueá la racha. Cada respuesta tiene un límite de 10 segundos; un error o timeout reinicia la partida.

## Ejecutar

Como es una app web estática, se puede abrir `index.html` directamente. Para una experiencia más parecida a producción:

```powershell
python -m http.server 4173
```

Luego abrir <http://localhost:4173>.

## Incluye

- 20 películas y 50 preguntas/variantes por película.
- Búsqueda y filtro por género.
- Timer de 10 segundos por pregunta.
- Reinicio de la racha al fallar o agotar el tiempo.
- Mejor racha, intentos y victorias guardados en `localStorage`.
- Interfaz responsive, optimizada primero para pantallas chicas.
