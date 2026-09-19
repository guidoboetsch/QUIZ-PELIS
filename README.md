# Quiz Pelis

Quiz mobile-first de películas. Elegí una película, respondé 10 preguntas correctamente de forma consecutiva y desbloqueá la racha. Cada respuesta tiene un límite de 10 segundos; un error o timeout reinicia la partida.

## Ejecutar

Como es una app web estática, se puede abrir `index.html` directamente. Para una experiencia más parecida a producción:

```powershell
python -m http.server 4173
```

Luego abrir <http://localhost:4173>.

## Incluye

- 20 películas elegidas a partir de las favoritas de los invitados.
- 12 preguntas directas por película (240 preguntas en total).
- Búsqueda y filtro por género.
- Timer de 10 segundos por pregunta.
- Reinicio de la racha al fallar.
- Modal al agotar el tiempo para volver a intentarlo o rendirse.
- Pantalla final con la respuesta del acertijo, cantidad de intentos y un QR no clickeable para abrir un video desde otro celular.
- Mejor racha, intentos y victorias guardados en `localStorage`.
- Interfaz responsive, optimizada primero para pantallas chicas.
