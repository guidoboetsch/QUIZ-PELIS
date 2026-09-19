# Quiz Pelis

Quiz mobile-first de películas. Elegí una película, respondé 10 desafíos correctamente de forma consecutiva y desbloqueá la racha. Las preguntas tienen un límite de 10 segundos; un error o timeout reinicia la partida.

## Ejecutar

Como es una app web estática, se puede abrir `index.html` directamente. Para una experiencia más parecida a producción:

```powershell
python -m http.server 4173
```

Luego abrir <http://localhost:4173>.

## Incluye

- 20 películas elegidas a partir de las favoritas de los invitados.
- Selección visual mediante 20 pósters locales, sin mostrar títulos, años ni géneros en las tarjetas.
- 12 preguntas directas por película (240 preguntas en total).
- Búsqueda y filtro por género.
- Timer de 10 segundos para las preguntas 1 a 8.
- Pregunta 9 de nivel difícil con 15 segundos.
- Pregunta 10 en formato memo-test: nueve cartas temáticas se muestran durante 15 segundos y después hay que tocarlas del 1 al 9, ya ocultas y sin límite de tiempo. Un error reinicia todo el quiz.
- Reinicio de la racha al fallar.
- Modal al agotar el tiempo para volver a intentarlo o rendirse.
- Pantalla final con la respuesta del acertijo, cantidad de intentos y un QR no clickeable para abrir un video desde otro celular.
- Mejor racha, intentos y victorias guardados en `localStorage`.
- Interfaz responsive, optimizada primero para pantallas chicas.
