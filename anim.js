// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando", time: 16 },
  { text: "Con una flor amarilla", time: 20 },
  { text: "Ella lo estaba soñando", time: 25 },
  { text: "Con la luz en su pupila", time: 28 },

  { text: "Y el amarillo del Sol", time: 32 },
  { text: "Iluminaba la esquina", time: 36 },
  { text: "Lo sentía tan cercano", time: 40 },
  { text: "Lo sentía desde niña", time: 44 },

  { text: "Ella sabía que él sabía", time: 50 },
  { text: "Que algún día pasaría", time: 55 },
  { text: "Que vendría a buscarla", time: 60 },
  { text: "Con sus flores amarillas", time: 65 },

  { text: "No te apures, no detengas", time: 72 },
  { text: "El instante del encuentro", time: 77 },
  { text: "Está dicho que es un hecho", time: 82 },
  { text: "No la pierdas, no hay derecho", time: 87 },

  { text: "No te olvides que la vida", time: 94 },
  { text: "Casi nunca está dormida", time: 99 },

  { text: "En ese bar tan desierto", time: 110 },
  { text: "Nos esperaba el encuentro", time: 114 },
  { text: "Ella llegó en limusina", time: 119 },
  { text: "Amarilla por supuesto", time: 123 },

  { text: "Él se acercó de repente", time: 130 },
  { text: "La miró tan de frente", time: 134 },
  { text: "Toda una vida soñada", time: 138 },
  { text: "Y no pudo decir nada", time: 142 },

  { text: "Ella sabía que él sabía", time: 148 },
  { text: "Que algún día pasaría", time: 152 },
  { text: "Que vendría a buscarla", time: 156 },
  { text: "Con sus flores amarillas", time: 160 },

  { text: "No te apures, no detengas", time: 167 },
  { text: "El instante del encuentro", time: 171 },
  { text: "Está dicho que es un hecho", time: 176 },
  { text: "No la pierdas, no hay derecho", time: 181 },

  { text: "No te olvides que la vida", time: 188 },
  { text: "Casi nunca está dormida", time: 193 },

  { text: "(Flores amarillas)", time: 200 },

  { text: "Ella sabía que él sabía", time: 210 },
  { text: "Que algún día pasaría", time: 214 },
  { text: "Que vendría a buscarla", time: 218 },
  { text: "Con sus flores amarillas", time: 222 },

  { text: "No te apures, no detengas", time: 229 },
  { text: "El instante del encuentro", time: 233 },
  { text: "Está dicho que es un hecho", time: 238 },
  { text: "No la pierdas, no hay derecho", time: 243 },

  { text: "No te olvides que la vida", time: 250 },
  { text: "Casi nunca está dormida", time: 255 },

  { text: "Ella sabía que él sabía", time: 265 },
  { text: "Él sabía, ella sabía", time: 270 },
  { text: "Que él sabía, ella sabía", time: 274 },
  { text: "Y se olvidaron de sus flores amarillas", time: 280 }
]
;

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
