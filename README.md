# Quiz Pelis

Quiz mobile-first de películas. Elijan una película, respondan 10 desafíos correctamente de forma consecutiva y desbloqueen la racha. Las preguntas 1 a 8 tienen 10 segundos y la 9 tiene 15; un error o timeout reinicia la partida.

## Ejecutar

Como es una app web estática, se puede abrir `index.html` directamente. Para una experiencia más parecida a producción:

```powershell
python -m http.server 4173
```

Luego abrir <http://localhost:4173>.

## Incluye

- 20 películas elegidas a partir de la lista definitiva.
- Selección visual mediante 20 pósters locales, sin mostrar títulos, años ni géneros en las tarjetas.
- Banco por película con 6 preguntas fáciles, variantes intermedias, una difícil fija y el memo-test final.
- Preguntas 1 a 5 de nivel fácil y preguntas 6 a 8 de nivel intermedio, todas con 10 segundos.
- Una de las tres preguntas intermedias es visual: muestra seis objetos tomados de un banco común de 20 imágenes reutilizables, una por película.
- Pregunta 9 de nivel difícil con 15 segundos.
- Pregunta 10 en formato memo-test: doce íconos temáticos se muestran durante 15 segundos y después el juego solicita cada ícono para que el jugador recuerde su posición, sin límite de tiempo. Un error reinicia todo el quiz.
- Bienvenida antes de la primera partida de cada sesión.
- Memo-test sin números: el juego solicita uno de los 12 íconos por vez y hay que recordar su posición.
- Cartel de derrota tanto por tiempo agotado como por respuesta o ícono incorrecto.
- Espera progresiva por película después de cada derrota: 5, 10, 20, 30 y luego 60 segundos como máximo.
- Reinicio de la racha al fallar.
- Modal al agotar el tiempo para volver a intentarlo o rendirse.
- Pantalla final con la respuesta del acertijo, cantidad de intentos y un QR no clickeable para abrir un video desde otro celular.
- Mejor racha, intentos y victorias guardados en `localStorage`.
- Interfaz responsive, optimizada primero para pantallas chicas.
