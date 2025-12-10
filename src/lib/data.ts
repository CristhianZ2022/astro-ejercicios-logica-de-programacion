export interface Ejercicio {
  id: number;
  slug: string;
  titulo: string;
  nivel: number;
  dificultad: string;
  descripcion: string;
  ejemplo: string;
  codigo: string;
  tasaExito: number;
}

export const ejercicios: Ejercicio[] = [
  {
    id: 1,
    slug: "el-famoso-fizz-buzz",
    titulo: 'EL FAMOSO "FIZZ BUZZ"',
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Implementa el clásico ejercicio Fizz Buzz: imprime números del 1 al 100, reemplazando múltiplos de 3 por 'Fizz', múltiplos de 5 por 'Buzz' y múltiplos de ambos por 'FizzBuzz'.",
    ejemplo: "3 % 3 = 0 ? fizz",
    codigo: `function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " fizzbuzz");
    } else if (i % 3 == 0) {
      console.log(i + " fizz");
    } else if (i % 5 == 0) {
      console.log(i + " buzz");
    } else {
      console.log(i);
    }
  }
}`,
    tasaExito: 98,
  },
  {
    id: 2,
    slug: "es-un-anagrama",
    titulo: "¿ES UN ANAGRAMA?",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Determina si dos palabras son anagramas entre sí, es decir, si contienen exactamente las mismas letras con la misma frecuencia, ignorando mayúsculas y espacios.",
    ejemplo: "anagrama(Cara - arca) // true",
    codigo: `function anagrama(word1, word2) {
  if (word1.toLowerCase() === word2.toLowerCase()) return false;
  let word1Array = word1.split("");
  let word2Array = word2.split("");
  word1Array.sort();
  word2Array.sort();
  return word1Array.join("") === word2Array.join("") ? true : false;
}`,
    tasaExito: 92,
  },
  {
    id: 3,
    slug: "la-sucesi-n-de-fibonacci",
    titulo: "LA SUCESIÓN DE FIBONACCI",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Genera la secuencia de Fibonacci hasta un número dado o imprime los primeros n términos de esta sucesión matemática.",
    ejemplo: "fibonacci(5) // 0, 1, 1, 2, 3",
    codigo: `function fibonacci() {
  let fib = 0;
  let fib2 = 1;
  for (let i = 0; i < 50; i++) {
    let fibNew = fib + fib2;
    fib = fib2;
    fib2 = fibNew;
    console.log(fib);
  }
}`,
    tasaExito: 85,
  },
  {
    id: 4,
    slug: "es-un-n-mero-primo",
    titulo: "¿ES UN NÚMERO PRIMO?",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Comprueba si un número entero es primo, es decir, si solo es divisible por 1 y por sí mismo.",
    ejemplo: "esPrimo(17) // true",
    codigo: `function primo() {
  const primos = [];
  
  for (let num = 2; num <= 100; num++) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) primos.push(num);
  }
}
`,
    tasaExito: 94,
  },
  {
    id: 5,
    slug: "rea-de-un-pol-gono",
    titulo: "ÁREA DE UN POLÍGONO",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Calcula el área de un polígono regular dado el número de lados y la longitud de un lado.",
    ejemplo: "areaPoligono(6, 5) // 129.9",
    codigo: `function area(pol, tipo) { 
  let area = 0;
  if (tipo === "Triangulo") {
    area = (pol.base * pol.altura) / 2;
    console.log("El área del Triángulo es: " + area);
  } else if (tipo === "Cuadrado") {
    area = Math.pow(pol.lado, 2);
    console.log("El área del Cuadrado es: " + area);
  } else if (tipo === "Rectángulo") {
    area = pol.lado * pol.altura;
    console.log("El área del Rectángulo es: " + area);
  }
}`,
    tasaExito: 90,
  },
  {
    id: 6,
    slug: "aspect-ratio-de-una-imagen",
    titulo: "ASPECT RATIO DE UNA IMAGEN",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Calcula el aspect ratio de una imagen a partir de sus dimensiones en píxeles y maneja diferentes formatos.",
    ejemplo: "aspectRatio(1920, 1080) // 16:9",
    codigo: `async function aspectRatio(url) {
  const img = new Image();
  img.src = url;

  await img.decode();

  img.onload = () => {
    const width = img.width;
    const height = img.height;
    const ratio = width / height;
    console.log(ratio);
  };
}
    `,
    tasaExito: 87,
  },
  {
    id: 7,
    slug: "invirtiendo-cadenas",
    titulo: "INVERTIENDO CADENAS",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Invierte el orden de los caracteres en una cadena de texto.",
    ejemplo: "invertir('Hola') // 'aloH'",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 8,
    slug: "contando-palabras",
    titulo: "CONTANDO PALABRAS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Cuenta el número de palabras en un texto, considerando espacios como separadores.",
    ejemplo: "contarPalabras('Hola mundo') // 2",
    codigo: "",
    tasaExito: 93,
  },
  {
    id: 9,
    slug: "decimal-a-binario",
    titulo: "DECIMAL A BINARIO",
    nivel: 2,
    dificultad: "medio",
    descripcion: "Convierte un número decimal a su representación binaria.",
    ejemplo: "decimalABinario(10) // '1010'",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 10,
    slug: "c-digo-morse",
    titulo: "CÓDIGO MORSE",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Convierte texto a código Morse y viceversa, utilizando una tabla de mapeo.",
    ejemplo: "textoAMorse('SOS') // '... --- ...'",
    codigo: "",
    tasaExito: 91,
  },
  {
    id: 11,
    slug: "expresiones-equilibradas",
    titulo: "EXPRESIONES EQUILIBRADAS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Verifica si los paréntesis, llaves y corchetes en una expresión están correctamente balanceados.",
    ejemplo: "equilibrado('()[]{}') // true",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 12,
    slug: "eliminando-caracteres",
    titulo: "ELIMINANDO CARACTERES",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Elimina todas las ocurrencias de un carácter específico de una cadena.",
    ejemplo: "eliminar('banana', 'a') // 'bnn'",
    codigo: "",
    tasaExito: 92,
  },
  {
    id: 13,
    slug: "es-un-pal-indromo",
    titulo: "¿ES UN PALÍNDROMO?",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Determina si una palabra o frase es un palíndromo, leyendo igual de izquierda a derecha que de derecha a izquierda.",
    ejemplo: "esPalindromo('radar') // true",
    codigo: "",
    tasaExito: 96,
  },
  {
    id: 14,
    slug: "factorial-recursivo",
    titulo: "FACTORIAL RECURSIVO",
    nivel: 2,
    dificultad: "medio",
    descripcion: "Calcula el factorial de un número utilizando recursión.",
    ejemplo: "factorial(5) // 120",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 15,
    slug: "es-un-n-mero-de-armstrong",
    titulo: "¿ES UN NÚMERO DE ARMSTRONG?",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Comprueba si un número es narcisista o de Armstrong, es decir, si la suma de sus dígitos elevados a la potencia de la cantidad de dígitos es igual al número.",
    ejemplo: "esArmstrong(153) // true",
    codigo: "",
    tasaExito: 84,
  },
  {
    id: 16,
    slug: "cu-ntos-d-as",
    titulo: "¿CUÁNTOS DÍAS?",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Calcula el número de días entre dos fechas dadas.",
    ejemplo: "diasEntre('2023-01-01', '2023-01-05') // 4",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 17,
    slug: "en-may-scula",
    titulo: "EN MAYÚSCULA",
    nivel: 2,
    dificultad: "medio",
    descripcion: "Convierte todo el texto de entrada a mayúsculas.",
    ejemplo: "mayuscula('hola') // 'HOLA'",
    codigo: "",
    tasaExito: 97,
  },
  {
    id: 18,
    slug: "la-carrera-de-obst-culos",
    titulo: "LA CARRERA DE OBSTÁCULOS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Simula una carrera donde un personaje debe superar obstáculos en un camino aleatorio.",
    ejemplo: "carrera(10) // simulación de saltos",
    codigo: "",
    tasaExito: 80,
  },
  {
    id: 19,
    slug: "tres-en-raya",
    titulo: "TRES EN RAYA",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Implementa el juego de tres en raya (Tic-Tac-Toe) para dos jugadores.",
    ejemplo: "tresEnRaya(tablero) // ganador o empate",
    codigo: "",
    tasaExito: 85,
  },
  {
    id: 20,
    slug: "conversor-tiempo",
    titulo: "CONVERSOR TIEMPO",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Convierte un tiempo dado en segundos a horas, minutos y segundos.",
    ejemplo: "convertirTiempo(3661) // '1:01:01'",
    codigo: "",
    tasaExito: 94,
  },
  {
    id: 21,
    slug: "parando-el-tiempo",
    titulo: "PARANDO EL TIEMPO",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Simula una función que 'pausa' el tiempo durante un intervalo dado.",
    ejemplo: "pausa(2000) // espera 2 segundos",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 22,
    slug: "calculadora-txt",
    titulo: "CALCULADORA .TXT",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Lee operaciones matemáticas desde un archivo de texto y las ejecuta.",
    ejemplo: "calcularDesdeArchivo('ops.txt') // resultados",
    codigo: "",
    tasaExito: 86,
  },
  {
    id: 23,
    slug: "conjuntos",
    titulo: "CONJUNTOS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Realiza operaciones básicas con conjuntos como unión, intersección y diferencia.",
    ejemplo: "union({1,2}, {2,3}) // {1,2,3}",
    codigo: "",
    tasaExito: 91,
  },
  {
    id: 24,
    slug: "m-ximo-com-n-divisor-y-m-nimo-com-n-m-ltiple",
    titulo: "MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Calcula el MCD y el MCM de dos números enteros.",
    ejemplo: "mcd(12, 18) // 6",
    codigo: "",
    tasaExito: 92,
  },
  {
    id: 25,
    slug: "iteration-master",
    titulo: "ITERATION MASTER",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Practica el uso de bucles (for, while) para resolver problemas iterativos.",
    ejemplo: "iterar(5) // suma 1+2+3+4+5",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 26,
    slug: "piedra-papel-tijera",
    titulo: "PIEDRA, PAPEL, TIJERA",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Implementa el juego clásico de piedra, papel o tijera contra la computadora.",
    ejemplo: "jugar('piedra') // 'empate' o ganador",
    codigo: "",
    tasaExito: 93,
  },
  {
    id: 27,
    slug: "cuadrado-y-tri-ngulo-2d",
    titulo: "CUADRADO Y TRIÁNGULO 2D",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Dibuja un cuadrado y un triángulo en un plano 2D usando caracteres o gráficos simples.",
    ejemplo: "dibujarCuadrado(4) // ****\n****",
    codigo: "",
    tasaExito: 87,
  },
  {
    id: 28,
    slug: "vectores-ortogonales",
    titulo: "VECTORES ORTOGONALES",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Determina si dos vectores son ortogonales calculando su producto escalar.",
    ejemplo: "ortogonales([1,0], [0,1]) // true",
    codigo: "",
    tasaExito: 85,
  },
  {
    id: 29,
    slug: "m-quina-expendedora",
    titulo: "MÁQUINA EXPENDEDORA",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Simula una máquina expendedora que recibe dinero y devuelve productos.",
    ejemplo: "comprar('agua', 1.5) // cambio 0.5",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 30,
    slug: "ordena-la-lista",
    titulo: "ORDENA LA LISTA",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Ordena una lista de números utilizando un algoritmo de ordenamiento básico.",
    ejemplo: "ordenar([3,1,2]) // [1,2,3]",
    codigo: "",
    tasaExito: 94,
  },
  {
    id: 31,
    slug: "marco-de-palabras",
    titulo: "MARCO DE PALABRAS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Crea un marco o borde alrededor de una palabra o frase usando caracteres.",
    ejemplo: "marco('Hola') // +----+\n|Hola|",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 32,
    slug: "a-os-bisiestos",
    titulo: "AÑOS BISIESTOS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Determina si un año es bisiesto según las reglas del calendario gregoriano.",
    ejemplo: "esBisiesto(2024) // true",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 33,
    slug: "el-segundo",
    titulo: "EL SEGUNDO",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Convierte un tiempo dado en segundos a su formato en horas, minutos y segundos.",
    ejemplo: "formatoTiempo(3661) // '01:01:01'",
    codigo: "",
    tasaExito: 92,
  },
  {
    id: 34,
    slug: "ciclo-sexagenario-chino",
    titulo: "CICLO SEXAGENARIO CHINO",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Calcula el signo zodiacal chino correspondiente a un año dado.",
    ejemplo: "signoChino(2024) // 'Dragón'",
    codigo: "",
    tasaExito: 86,
  },
  {
    id: 35,
    slug: "los-n-meros-perdidos",
    titulo: "LOS NÚMEROS PERDIDOS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Encuentra números faltantes en una secuencia aparentemente continua.",
    ejemplo: "perdidos([1,2,4,5]) // 3",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 36,
    slug: "batalla-pokemon",
    titulo: "BATALLA POKÉMON",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Simula un combate entre dos Pokémon con estadísticas y ataques.",
    ejemplo: "batalla(pikachu, charmander) // ganador",
    codigo: "",
    tasaExito: 83,
  },
  {
    id: 37,
    slug: "los-anillos-de-poder",
    titulo: "LOS ANILLOS DE PODER",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Genera o analiza una estructura relacionada con los anillos de poder de la saga.",
    ejemplo: "anillos(3) // lista de anillos",
    codigo: "",
    tasaExito: 81,
  },
  {
    id: 38,
    slug: "los-lanzamientos-de-the-legend-of-zelda",
    titulo: 'LOS LANZAMIENTOS DE "THE LEGEND OF ZELDA"',
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Lista o filtra los lanzamientos de juegos de The Legend of Zelda por año o plataforma.",
    ejemplo: "lanzamientosZelda('NES') // lista de juegos",
    codigo: "",
    tasaExito: 87,
  },
  {
    id: 39,
    slug: "binario-a-decimal",
    titulo: "BINARIO A DECIMAL",
    nivel: 2,
    dificultad: "medio",
    descripcion: "Convierte un número binario a su equivalente en decimal.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 40,
    slug: "top-algoritmos-quick-sort",
    titulo: "TOP ALGORITMOS | QUICK SORT",
    nivel: 2,
    dificultad: "medio",
    descripcion: "Implementa el algoritmo de ordenación Quick Sort.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 41,
    slug: "triangulo-de-pascal",
    titulo: "TRIÁNGULO DE PASCAL",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Genera el triángulo de Pascal hasta una fila dada.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 42,
    slug: "la-ley-de-ohm",
    titulo: "LA LEY DE OHM",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Calcula la resistencia, voltaje o corriente usando la ley de Ohm.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 43,
    slug: "conversor-de-temperatura",
    titulo: "CONVERSOR DE TEMPERATURA",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Convierte temperaturas entre diferentes escalas como Celsius, Fahrenheit y Kelvin.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 44,
    slug: "truco-o-trato",
    titulo: "TRUCO O TRATO",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Simula un juego de truco o trato con decisiones aleatorias.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 45,
    slug: "bumeranes",
    titulo: "BUMERANES",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Detecta si una cadena es un bumerán (se lee igual al revés en partes).",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 46,
    slug: "contenedor-de-agua",
    titulo: "CONTENEDOR DE AGUA",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Encuentra la cantidad máxima de agua que puede contener un contenedor formado por barras de alturas variables.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 47,
    slug: "donde-esta-el-robot",
    titulo: "¿DÓNDE ESTÁ EL ROBOT?",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Simula el movimiento de un robot en una cuadrícula y determina su posición final.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 48,
    slug: "vocal-mas-comun",
    titulo: "VOCAL MÁS COMÚN",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Encuentra la vocal que más se repite en una cadena de texto.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 49,
    slug: "el-calendario-de-adevento-2022",
    titulo: "EL CALENDARIO DE ADEVIENTO 2022",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Genera un calendario de adviento con puertas numeradas del 1 al 24.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 50,
    slug: "el-detector-de-handles",
    titulo: "EL DETECTOR DE HANDLES",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Detecta si una cadena contiene un handle válido (por ejemplo, @usuario).",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 51,
    slug: "la-encriptacion-de-karaca",
    titulo: "LA ENCRIPTACIÓN DE KARACA",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Implementa un cifrado simple basado en sustitución de caracteres.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 52,
    slug: "el-reto-random",
    titulo: "EL RETO RANDOM",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Genera un número aleatorio dentro de un rango y realiza una operación básica con él.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 53,
    slug: "el-famoso-fizz-buzz-v2",
    titulo: 'EL FAMOSO "FIZZ BUZZ" (v2)',
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Imprime números del 1 al 100, reemplazando múltiplos de 3 y 5 por 'Fizz' y 'Buzz'.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 54,
    slug: "el-lenguaje-hacker",
    titulo: 'EL "LENGUAJE HACKER"',
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Convierte texto normal a un estilo 'hacker' usando caracteres especiales o patrones.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 55,
    slug: "el-partido-de-tenis",
    titulo: "EL PARTIDO DE TENIS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Simula el conteo de un partido de tenis con lógica de 15, 30, 40 y ventaja.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 56,
    slug: "el-generador-de-contrasenas",
    titulo: "EL GENERADOR DE CONTRASEÑAS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Genera una contraseña aleatoria con longitud y caracteres personalizados.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 57,
    slug: "primo-fibonacci-y-par",
    titulo: "PRIMO, FIBONACCI Y PAR",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Clasifica un número como primo, fibonacci o par.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 58,
    slug: "hola-mundo",
    titulo: "¡HOLA MUNDO!",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Imprime 'Hola, Mundo!' con variaciones o en diferentes idiomas.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 59,
    slug: "piedra-papel-tijera-lagarto-spock",
    titulo: "PIEDRA, PAPEL, TIJERA, LAGARTO, SPOCK",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Implementa el juego extendido de Piedra, Papel, Tijera con nuevas reglas.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 60,
    slug: "el-sombrero-seleccionador",
    titulo: "EL SOMBRERO SELECCIONADOR",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Asigna una casa de Hogwarts según características del usuario.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 61,
    slug: "el-generador-pseudoaleatorio",
    titulo: "EL GENERADOR PSEUDOALEATORIO",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Genera una secuencia de números pseudoaleatorios usando un algoritmo simple.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 62,
    slug: "heterograma-isograma-y-pangrama",
    titulo: "HETEROGRAMA, ISOGRAMA Y PANGRAMA",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Clasifica un texto según si tiene todas letras únicas, repite letras o es pangrama.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 63,
    slug: "la-api-application-programming-interface",
    titulo: "LA API (APPLICATION PROGRAMMING INTERFACE)",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Simula el uso de una API consumiendo datos ficticios.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 64,
    slug: "parametros-url",
    titulo: "PARÁMETROS URL",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Extrae parámetros de una URL codificada.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 65,
    slug: "viernes-13",
    titulo: "VIERNES 13",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Cuenta cuántos días del año son viernes 13 en un año dado.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 66,
    slug: "adivina-la-palabra",
    titulo: "ADIVINA LA PALABRA",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Simula un juego de adivinar una palabra con pistas y intentos limitados.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 67,
    slug: "octal-y-hexadecimal",
    titulo: "OCTAL Y HEXADECIMAL",
    nivel: 1,
    dificultad: "fácil",
    descripcion: "Convierte números entre bases octal, hexadecimal y decimal.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 68,
    slug: "aurebesh",
    titulo: "AUREBESH",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Convierte texto a un alfabeto ficticio como el de Star Wars (Aurebesh).",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 69,
    slug: "la-escalera",
    titulo: "LA ESCALERA",
    nivel: 3,
    dificultad: "difícil",
    descripcion: "Genera una escalera de caracteres con patrones específicos.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 85,
  },
  {
    id: 70,
    slug: "git-y-github",
    titulo: "GIT Y GITHUB",
    nivel: 3,
    dificultad: "difícil",
    descripcion:
      "Se trata de resolver un ejercicio relacionado con el uso de Git y GitHub, probablemente involucrando comandos avanzados o flujos de trabajo típicos de control de versiones.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 85,
  },
  {
    id: 71,
    slug: "web-scraping",
    titulo: "WEB SCRAPING",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El ejercicio consiste en extraer información de una página web utilizando técnicas de web scraping.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 72,
    slug: "analisis-de-texto",
    titulo: "ANÁLISIS DE TEXTO",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe realizar un análisis estadístico o estructural sobre un texto dado, como contar frecuencias o identificar patrones.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 73,
    slug: "la-trifuerza",
    titulo: "LA TRIFUERZA",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El reto implica simular o resolver un problema relacionado con la Trifuerza de Zelda, posiblemente manipulando combinaciones o estructuras lógicas.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 87,
  },
  {
    id: 74,
    slug: "numeros-primos-gemelos",
    titulo: "NÚMEROS PRIMOS GEMELOS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se pide identificar o generar números primos gemelos, es decir, pares de primos que difieren en 2 unidades.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 92,
  },
  {
    id: 75,
    slug: "la-espiral",
    titulo: "LA ESPIRAL",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El ejercicio requiere generar o trabajar con una matriz o secuencia que forme una espiral numérica.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 76,
    slug: "la-base-de-datos",
    titulo: "LA BASE DE DATOS",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Se debe simular o interactuar con una base de datos básica, posiblemente realizando consultas o inserciones.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 77,
    slug: "cifrado-cesar",
    titulo: "CIFRADO CÉSAR",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El reto consiste en implementar el cifrado de César, un método de encriptación por desplazamiento de letras.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 93,
  },
  {
    id: 78,
    slug: "el-codigo-konami",
    titulo: "EL CÓDIGO KONAMI",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe detectar una secuencia específica de teclas, como el famoso código Konami, en una entrada.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 79,
    slug: "testing",
    titulo: "TESTING",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El ejercicio implica escribir pruebas unitarias o validar el comportamiento de un programa mediante testing.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 80,
    slug: "cuenta-atras",
    titulo: "CUENTA ATRÁS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe simular una cuenta regresiva, posiblemente con formato de tiempo o eventos.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 91,
  },
  {
    id: 81,
    slug: "expresion-matematica",
    titulo: "EXPRESIÓN MATEMÁTICA",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "El reto consiste en evaluar o validar una expresión matemática ingresada como cadena.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 96,
  },
  {
    id: 82,
    slug: "el-caracter-infiltrado",
    titulo: "EL CARÁCTER INFILTRADO",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe identificar un carácter que aparece de forma inesperada en una cadena, posiblemente un intruso.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 83,
    slug: "el-teclado-t9",
    titulo: "EL TECLADO T9",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "El ejercicio requiere simular el funcionamiento de un teclado T9 para convertir pulsaciones en texto.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 94,
  },
  {
    id: 84,
    slug: "el-abaco",
    titulo: "EL ÁBACO",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe modelar o simular el funcionamiento de un ábaco para realizar operaciones aritméticas.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 87,
  },
  {
    id: 85,
    slug: "la-columna-de-excel",
    titulo: "LA COLUMNA DE EXCEL",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El reto implica convertir un número en la notación de columna de Excel (A, B, ..., Z, AA, AB, ...).",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 86,
    slug: "tetris",
    titulo: "TETRIS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe implementar una simulación básica del juego Tetris, manejando piezas y colisiones.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 85,
  },
  {
    id: 87,
    slug: "txt",
    titulo: "TXT",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "El ejercicio consiste en leer o procesar un archivo de texto plano (TXT) para extraer información.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 97,
  },
  {
    id: 88,
    slug: "primeros-pasos",
    titulo: "PRIMEROS PASOS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe realizar una introducción práctica a conceptos básicos de programación o manejo de datos.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 92,
  },
  {
    id: 89,
    slug: "permutaciones",
    titulo: "PERMUTACIONES",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El reto requiere generar todas las permutaciones posibles de un conjunto de elementos.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 90,
    slug: "colores-hex-y-rgb",
    titulo: "COLORES HEX Y RGB",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe convertir entre códigos de color en formato hexadecimal y valores RGB.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 91,
  },
  {
    id: 91,
    slug: "las-sumas",
    titulo: "LAS SUMAS",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El ejercicio implica resolver o generar problemas de sumas, posiblemente en un formato específico.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 92,
    slug: "triples-pitagoricos",
    titulo: "TRIPLES PITAGÓRICOS",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "Se debe encontrar o validar triples de números que cumplan el teorema de Pitágoras.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 93,
    slug: "tabla-de-multiplicar",
    titulo: "TABLA DE MULTIPLICAR",
    nivel: 3,
    dificultad: "difícil",
    descripcion:
      "El reto requiere generar una tabla de multiplicar completa, posiblemente con formato avanzado o condiciones.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 83,
  },
  {
    id: 94,
    slug: "la-casa-encantada",
    titulo: "LA CASA ENCANTADA",
    nivel: 3,
    dificultad: "difícil",
    descripcion:
      "Se debe simular una casa encantada, posiblemente resolviendo un puzzle o navegación lógica.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 82,
  },
  {
    id: 95,
    slug: "punto-de-encuentro",
    titulo: "PUNTO DE ENCUENTRO",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "El ejercicio consiste en determinar un punto de encuentro basado en condiciones dadas.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 96,
  },
  {
    id: 96,
    slug: "simulador-de-clima",
    titulo: "SIMULADOR DE CLIMA",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe crear un simulador simple que genere datos climáticos o prediga condiciones.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 97,
    slug: "adivinzanzas-matematicas",
    titulo: "ADIVINANZAS MATEMÁTICAS",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "El reto implica resolver o generar adivinanzas basadas en conceptos matemáticos.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 94,
  },
  {
    id: 98,
    slug: "el-calendario-de-adevento-2023",
    titulo: "EL CALENDARIO DE ADEVIENTO 2023",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "Se debe implementar un calendario de Adviento que muestre información día a día en diciembre.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 99,
    slug: "la-carrera-de-coches",
    titulo: "LA CARRERA DE COCHES",
    nivel: 1,
    dificultad: "fácil",
    descripcion:
      "El ejercicio simula una carrera entre coches, determinando ganadores o posiciones.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 93,
  },
  {
    id: 100,
    slug: "la-palabra-de-100-puntos",
    titulo: "LA PALABRA DE 100 PUNTOS",
    nivel: 3,
    dificultad: "difícil",
    descripcion:
      "Se debe encontrar o construir una palabra que alcance 100 puntos según reglas de puntuación.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 84,
  },
  {
    id: 101,
    slug: "el-ranking",
    titulo: "EL RANKING",
    nivel: 2,
    dificultad: "medio",
    descripcion:
      "El reto consiste en generar o gestionar un ranking basado en puntuaciones o criterios específicos.",
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 89,
  },
];
