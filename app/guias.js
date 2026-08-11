/* ============================================================
   GUÍAS DE ESTUDIO
   Material original escrito para Gabo, siguiendo el temario de
   los capítulos 1 a 3 del libro guía de Métodos Numéricos.
   No reproduce el texto del libro: son explicaciones, ejemplos
   y ejercicios propios sobre los mismos contenidos.
============================================================ */
window.GUIAS=[

/* ===================== CAPÍTULO 1 ===================== */
{
 id:'cap1', ramo:'mn', tag:'Cap 1',
 titulo:'Modelación matemática y métodos numéricos',
 bajada:'De dónde salen los problemas que vas a resolver todo el semestre, y por qué a veces no queda otra que resolverlos con un computador.',
 min:35,
 secciones:[
 {
  t:'Qué problema resuelven los métodos numéricos',
  h:`<p>En cálculo aprendiste a resolver ecuaciones <b>despejando</b>. Te daban una integral y buscabas la primitiva; te daban una EDO y encontrabas la función exacta. Eso se llama <b>solución analítica</b>: una fórmula cerrada que vale para todos los valores posibles.</p>
  <p>El problema es que la gran mayoría de las ecuaciones que aparecen en ingeniería <b>no tienen solución analítica</b>. No es que sea difícil encontrarla: es que está demostrado que no existe en términos de funciones elementales. Un ejemplo típico:</p>
  <p class="fx">∫ e<sup>−x²</sup> dx</p>
  <p>Esa integral aparece en cualquier cosa que involucre distribución normal, y no tiene primitiva elemental. Tampoco la tiene algo tan inocente como despejar <i>x</i> de <span class="fx-i">x = cos(x)</span>.</p>
  <p>Ahí entran los métodos numéricos: en vez de buscar la fórmula, <b>construyen una aproximación</b> del valor que te interesa, con un error que puedes controlar y, ojalá, estimar.</p>`,
  ojo:'El cambio mental importante: dejas de preguntar "¿cuál es la respuesta?" y empiezas a preguntar "¿qué tan cerca de la respuesta estoy, y cuánto me cuesta acercarme más?".'
 },
 {
  t:'Anatomía de un modelo matemático',
  h:`<p>Un modelo matemático es una ecuación que relaciona el comportamiento de un sistema con las cosas que lo afectan. La estructura general es siempre parecida:</p>
  <p class="fx">variable dependiente = f( variables independientes, parámetros, forzantes )</p>
  <ul>
  <li><b>Variable dependiente:</b> lo que quieres saber. La temperatura, la posición, la concentración.</li>
  <li><b>Variables independientes:</b> respecto a qué cambia. Casi siempre el tiempo o el espacio.</li>
  <li><b>Parámetros:</b> propiedades del sistema. Masa, conductividad, tasa de interés.</li>
  <li><b>Forzantes:</b> influencias externas. Una fuerza aplicada, la temperatura ambiente.</li>
  </ul>
  <p>La mayoría de los modelos salen de aplicar una <b>ley de conservación</b>: la masa, la energía o el momentum no se crean ni se destruyen. En régimen estacionario eso se traduce en "lo que entra es igual a lo que sale". En régimen transiente, en "lo que se acumula es lo que entra menos lo que sale", y eso te da una ecuación diferencial.</p>`
 },
 {
  t:'Analítico vs numérico: el café que se enfría',
  h:`<p>Tomemos un caso concreto. Dejas un café a 80 °C en una sala a 20 °C. La <b>ley de enfriamiento de Newton</b> dice que la velocidad a la que se enfría es proporcional a la diferencia de temperatura con el ambiente:</p>
  <p class="fx">dT/dt = −k (T − T<sub>amb</sub>)</p>
  <p>Esta EDO <b>sí</b> tiene solución analítica, y por eso sirve para comparar. Separando variables llegas a:</p>
  <p class="fx">T(t) = T<sub>amb</sub> + (T<sub>0</sub> − T<sub>amb</sub>) e<sup>−kt</sup></p>
  <p>Perfecto. Pero ahora cambia una cosa: supón que la sala no está a temperatura constante, sino que el aire acondicionado la hace oscilar, y que <i>k</i> depende de la temperatura porque la convección cambia. La ecuación deja de ser separable y la fórmula cerrada se acaba.</p>
  <p>El fenómeno físico no cambió nada. Lo que se rompió fue tu capacidad de despejar. Eso pasa <b>constantemente</b>, y por eso existe este ramo.</p>`,
  code:`import numpy as np
import matplotlib.pyplot as plt

# Parámetros del modelo
T0    = 80.0    # temperatura inicial [°C]
Tamb  = 20.0    # temperatura ambiente [°C]
k     = 0.06    # constante de enfriamiento [1/min]

# Solución analítica
t = np.linspace(0, 60, 200)          # 200 instantes entre 0 y 60 min
T = Tamb + (T0 - Tamb) * np.exp(-k*t)

plt.plot(t, T)
plt.xlabel('tiempo [min]')
plt.ylabel('temperatura [°C]')
plt.grid(True)
plt.show()`
 },
 {
  t:'La idea central: el método de Euler',
  h:`<p>Casi todos los métodos numéricos que vas a ver son variaciones de una sola idea: <b>si sabes dónde estás y sabes hacia dónde vas, puedes estimar dónde estarás un poquito después</b>.</p>
  <p class="fx">nuevo valor ≈ valor actual + pendiente × paso</p>
  <p>En el caso del café, la EDO te entrega la pendiente directamente. Entonces:</p>
  <p class="fx">T<sub>i+1</sub> = T<sub>i</sub> + [ −k (T<sub>i</sub> − T<sub>amb</sub>) ] · h</p>
  <p>donde <i>h</i> es el tamaño del paso de tiempo. Repites eso muchas veces y vas construyendo la curva punto por punto.</p>
  <p>Lo notable es que este método <b>no necesita que la ecuación sea resoluble</b>. Solo necesita que puedas evaluar la pendiente. Por eso funciona igual cuando <i>k</i> varía, cuando el ambiente oscila, o cuando la ecuación es un desastre.</p>
  <p>El precio: cada paso introduce un error, porque estás usando una recta para aproximar una curva. Achicar <i>h</i> reduce ese error pero aumenta la cantidad de pasos, y con ellos el tiempo de cómputo y la acumulación de errores de redondeo. Ese equilibrio es el tema del capítulo 4.</p>`,
  code:`import numpy as np
import matplotlib.pyplot as plt

T0, Tamb, k = 80.0, 20.0, 0.06
h      = 5.0            # paso de tiempo [min]  <-- prueba con 1.0 y con 10.0
t_fin  = 60.0

# --- Euler paso a paso ---
t_num = np.arange(0, t_fin + h, h)
T_num = np.zeros(len(t_num))
T_num[0] = T0

for i in range(len(t_num) - 1):
    pendiente = -k * (T_num[i] - Tamb)      # esto es dT/dt evaluado en el punto actual
    T_num[i+1] = T_num[i] + pendiente * h   # el paso de Euler

# --- Comparación con la solución exacta ---
t_exacto = np.linspace(0, t_fin, 300)
T_exacto = Tamb + (T0 - Tamb) * np.exp(-k * t_exacto)

plt.plot(t_exacto, T_exacto, label='analítica')
plt.plot(t_num, T_num, 'o--', label=f'Euler h={h}')
plt.xlabel('tiempo [min]'); plt.ylabel('T [°C]')
plt.legend(); plt.grid(True); plt.show()

error_final = abs(T_num[-1] - (Tamb + (T0-Tamb)*np.exp(-k*t_fin)))
print(f'Error al final: {error_final:.4f} °C')`,
  ojo:'Corre ese código con h = 10, h = 5 y h = 1, y mira cómo cae el error. Vas a notar que reducir h a la mitad reduce el error aproximadamente a la mitad. Eso significa que Euler es un método de primer orden — un concepto que vas a usar todo el semestre.'
 },
 {
  t:'Cómo plantear una EDO desde un balance',
  h:`<p>Esta es la parte que más cuesta al principio, y no porque sea difícil sino porque uno cree que la ecuación hay que <i>ocurrírsela</i>. No: se <b>construye</b>, siempre con la misma receta.</p>
  <p class="fx">acumulación = entra − sale</p>
  <p>La "acumulación" es la derivada de lo que estás siguiendo. Si sigues la masa de sal S, entonces la acumulación es <span class="fx-i">dS/dt</span>. Nada más.</p>
  <p><b>Los cuatro pasos:</b></p>
  <ol>
  <li><b>Decide qué sigues.</b> Masa de sal en kg. No el volumen, no la concentración. Elegir mal acá arruina todo lo demás.</li>
  <li><b>Traza la caja</b> (volumen de control). Todo lo que cruza su borde cuenta.</li>
  <li><b>Escribe cada término en las mismas unidades.</b> Como sigues kg, todo va en kg/min.</li>
  <li><b>Arma la resta.</b></li>
  </ol>
  <p><b>Aplicado al estanque:</b> 500 L de agua con 10 kg de sal, entra agua pura a 5 L/min, sale mezcla a 5 L/min.</p>
  <table class="tb"><tr><th>Término</th><th>Cálculo</th><th>Resultado</th></tr>
  <tr><td>Entra</td><td>5 L/min × 0 kg/L</td><td>0 kg/min</td></tr>
  <tr><td>Sale</td><td>5 L/min × (S/500) kg/L</td><td>S/100 kg/min</td></tr></table>
  <p class="fx">dS/dt = 0 − S/100</p>
  <p><b>El término de salida es el que traba a todo el mundo.</b> La pregunta es: ¿con qué concentración sale el líquido por ese tubo? Con la que hay <b>adentro</b>, porque el supuesto de mezcla perfecta dice que el estanque es homogéneo. Esa concentración es S/V.</p>
  <p>Y ahí está lo importante: <b>la incógnita S aparece en el término de salida</b>. Por eso queda una ecuación diferencial y no una cuenta aritmética. Si la sal saliera a ritmo fijo, no habría EDO.</p>
  <p><b>Verificación de unidades.</b> L/min × kg/L = kg/min. Si te queda otra cosa, mezclaste algo. Este chequeo salva más pruebas de lo que parece.</p>
  <p><b>La variante que sí cae:</b> si el caudal que entra no iguala al que sale, el volumen cambia con el tiempo:</p>
  <p class="fx">V(t) = V<sub>0</sub> + (q<sub>ent</sub> − q<sub>sal</sub>) · t</p>
  <p>y el término de salida pasa a ser q<sub>sal</sub> · S/V(t). Misma receta, pero el denominador se mueve.</p>`,
  ojo:'Si en vez de agua pura entrara salmuera a 0,2 kg/L, el término de entrada sería 5 × 0,2 = 1 kg/min y la ecuación quedaría dS/dt = 1 − S/100. Fíjate que ahora existe un equilibrio: cuando S = 100 kg, entra y sale lo mismo y la sal deja de cambiar. Ese valor se llama estado estacionario y se encuentra haciendo dS/dt = 0.'
 },
 {
  t:'Por qué esto importa antes de que empieces',
  h:`<p>El curso está armado sobre este ciclo: <b>problema físico → modelo matemático → algoritmo numérico → código → interpretación del resultado</b>. Las pruebas evalúan que entiendas los eslabones del medio; los laboratorios, que sepas ejecutar los dos últimos.</p>
  <p>Y hay un detalle práctico: el profe declaró en el syllabus que <b>no entrega apuntes ni resúmenes</b>. Tú armas tu material. Eso significa que conviene que desde la primera clase lleves un cuaderno donde por cada método anotes cuatro cosas: qué problema resuelve, cuál es la idea geométrica, cuál es su orden de error, y cuál es la función de SciPy que lo implementa. Esas cuatro columnas son básicamente el formulario que vas a querer tener en las pruebas.</p>`
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Un estanque tiene 500 L de agua con 10 kg de sal disuelta. Entra agua pura a 5 L/min y sale mezcla a 5 L/min. Escribe el modelo matemático de la cantidad de sal S(t) e identifica cuál es la variable dependiente, la independiente y los parámetros.',
    a:`Aplica la receta de la sección anterior: acumulación = entra − sale, todo en kg/min.<br><br>
    <b>Entra:</b> 5 L/min × 0 kg/L = 0 kg/min. El agua es pura, no trae sal.<br>
    <b>Sale:</b> 5 L/min × (S/500) kg/L = S/100 kg/min. Sale con la concentración que hay adentro, por el supuesto de mezcla perfecta.<br><br>
    <span class="fx">dS/dt = 0 − S/100 = −S/100</span><br><br>
    <b>Variable dependiente:</b> S, la masa de sal.<br>
    <b>Variable independiente:</b> t, el tiempo.<br>
    <b>Parámetros:</b> el volumen (500 L) y el caudal (5 L/min), que juntos dan la constante 1/100.<br>
    <b>Forzante:</b> la concentración de entrada, que en este caso es cero.<br><br>
    Ojo que este modelo asume mezcla instantánea y perfecta. Ese supuesto es parte del modelo, no de la realidad.`},
   {q:'La solución analítica del ejercicio anterior es S(t) = 10·e^(−t/100). Aplica Euler con h = 20 min y calcula S a los 60 minutos. Compara con el valor exacto.',
    a:`Con h = 20 haces 3 pasos. La pendiente es −S/100.<br><br>
    <b>Paso 1:</b> S₁ = 10 + (−10/100)(20) = 10 − 2 = 8,000<br>
    <b>Paso 2:</b> S₂ = 8 + (−8/100)(20) = 8 − 1,6 = 6,400<br>
    <b>Paso 3:</b> S₃ = 6,4 + (−6,4/100)(20) = 6,4 − 1,28 = 5,120<br><br>
    <b>Exacto:</b> 10·e^(−0,6) = 5,488<br>
    <b>Error absoluto:</b> |5,488 − 5,120| = 0,368 kg<br>
    <b>Error relativo:</b> 0,368 / 5,488 = 6,7 %<br><br>
    Euler quedó <b>por debajo</b> del valor real. Eso no es casualidad: la curva es convexa (decae y se aplana), así que la recta tangente en cada punto cae más rápido que la curva. Con h más chico el error baja proporcionalmente.`},
   {q:'¿Por qué no basta con achicar h todo lo que uno quiera para tener la respuesta exacta?',
    a:`Por dos razones que empujan en direcciones opuestas.<br><br>
    <b>1. Costo computacional.</b> Achicar h a la décima parte significa diez veces más pasos. En un problema real con miles de variables eso puede volver el cálculo inviable.<br><br>
    <b>2. Error de redondeo.</b> El computador guarda los números con precisión finita. Cada operación introduce un errorcito de redondeo, y si haces millones de operaciones esos errores se acumulan. Llega un punto en que <b>achicar más el paso empeora el resultado</b> en vez de mejorarlo.<br><br>
    Existe entonces un h óptimo: el error de truncamiento baja al achicar h, el de redondeo sube, y la suma tiene un mínimo. Ese es exactamente el tema del capítulo 4, que es lo que vieron la primera clase.`}
  ]
 }
 ]
},

/* ===================== CAPÍTULO 2 ===================== */
{
 id:'cap2', ramo:'mn', tag:'Cap 2',
 titulo:'Fundamentos de Python',
 bajada:'Lo mínimo que el profe da por sabido: tipos, listas, arrays de NumPy y gráficos. Esta es la guía que más te conviene dominar antes del laboratorio.',
 min:60,
 secciones:[
 {
  t:'Dónde vas a escribir el código',
  h:`<p>En los laboratorios solo puedes usar <b>Jupyter a través de Chrome</b>. Nada de VSCode, Spyder ni tu computador personal. Así que acostúmbrate a Jupyter desde ya: instálalo local o usa Google Colab, que es lo mismo pero en el navegador.</p>
  <p>Jupyter funciona por <b>celdas</b>. Cada celda es un pedacito de código que corres por separado con <kbd>Shift + Enter</kbd>. Lo clave: las variables <b>persisten entre celdas</b>, y se mantienen en el orden en que <i>ejecutaste</i>, no en el orden en que aparecen en pantalla.</p>`,
  ojo:'El error número uno en Jupyter: correr celdas fuera de orden y terminar con variables que ya no corresponden a lo que ves escrito. Si algo se pone raro, usa Kernel → Restart & Run All. En una prueba de laboratorio eso te puede salvar de un resultado incoherente.'
 },
 {
  t:'Variables y tipos',
  h:`<p>Python no te obliga a declarar el tipo: lo deduce del valor. Pero el tipo <b>existe</b> y te va a morder si no lo miras.</p>
  <p>Los cuatro que te importan:</p>
  <ul>
  <li><code>int</code> — enteros, precisión ilimitada en Python</li>
  <li><code>float</code> — reales, guardados en 64 bits (aquí viven los errores de redondeo)</li>
  <li><code>bool</code> — <code>True</code> / <code>False</code>, con mayúscula</li>
  <li><code>str</code> — texto</li>
  </ul>`,
  code:`a = 7           # int
b = 7.0         # float
c = 7 / 2       # float -> 3.5   (la división SIEMPRE da float)
d = 7 // 2      # int   -> 3     (división entera, trunca hacia abajo)
e = 7 % 2       # int   -> 1     (resto)
f = 7 ** 2      # int   -> 49    (potencia, NO uses ^)

print(type(a), type(b), type(c))

# El clásico que sorprende a todo el mundo:
print(0.1 + 0.2)              # 0.30000000000000004
print(0.1 + 0.2 == 0.3)       # False  <-- ojo con esto

# La forma correcta de comparar floats:
import numpy as np
print(np.isclose(0.1 + 0.2, 0.3))   # True`,
  ojo:'Ese 0.30000000000000004 no es un bug de Python: es cómo funcionan los números de punto flotante en cualquier lenguaje. 0,1 en binario es periódico, igual que 1/3 en decimal, y hay que cortarlo en algún lado. Nunca compares floats con ==. Este es literalmente el contenido del capítulo 4.'
 },
 {
  t:'Operadores y precedencia',
  h:`<p>El orden de evaluación es el matemático de siempre, con una trampa: <b>la potencia se asocia hacia la derecha</b>.</p>
  <ol>
  <li><code>**</code> potencia</li>
  <li><code>-x</code> negación unaria</li>
  <li><code>*</code> <code>/</code> <code>//</code> <code>%</code></li>
  <li><code>+</code> <code>-</code></li>
  <li><code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code> <code>==</code> <code>!=</code></li>
  <li><code>not</code>, después <code>and</code>, después <code>or</code></li>
  </ol>`,
  code:`print(2 ** 3 ** 2)     # 512, no 64  -> se lee 2**(3**2)
print(-2 ** 2)         # -4, no 4     -> la potencia va antes que el menos
print((-2) ** 2)       # 4            -> con paréntesis queda claro

# Regla práctica: si dudas, pon paréntesis. Nadie te va a descontar por eso.`
 },
 {
  t:'Strings y salida formateada',
  h:`<p>Para reportar resultados numéricos vas a usar <b>f-strings</b>. Son la forma moderna y la más legible.</p>`,
  code:`x = 3.14159265
n = 42

print(f'x vale {x}')             # x vale 3.14159265
print(f'x vale {x:.3f}')         # x vale 3.142        <- 3 decimales
print(f'x vale {x:.2e}')         # x vale 3.14e+00     <- notación científica
print(f'x vale {x:10.4f}')       # ancho 10, 4 decimales (útil para tablas)
print(f'{n} pasos, error {x:.1%}')  # porcentaje

# Tabla alineada: esto te sirve harto para mostrar iteraciones
for i in range(3):
    print(f'{i:>3d} {x*i:>10.4f}')`
 },
 {
  t:'Listas, tuplas y diccionarios',
  h:`<p>Son las estructuras nativas de Python. Para cálculo numérico vas a preferir arrays de NumPy, pero necesitas entender estas primero.</p>
  <ul>
  <li><b>Lista</b> <code>[ ]</code> — ordenada y <i>mutable</i>. La que más usas.</li>
  <li><b>Tupla</b> <code>( )</code> — ordenada e <i>inmutable</i>. Típica para devolver varios valores de una función.</li>
  <li><b>Diccionario</b> <code>{ }</code> — pares clave:valor, sin orden numérico.</li>
  </ul>`,
  code:`# --- Listas ---
notas = [4.5, 6.0, 3.8, 5.2]
print(notas[0])      # 4.5   primer elemento (se cuenta desde 0)
print(notas[-1])     # 5.2   último elemento
print(notas[1:3])    # [6.0, 3.8]  desde el 1 hasta ANTES del 3
print(len(notas))    # 4

notas.append(6.5)    # agrega al final
notas[0] = 5.0       # se puede modificar

# --- Tupla ---
punto = (3.0, 4.0)
x, y = punto         # desempaquetado

# --- Diccionario ---
params = {'k': 0.06, 'Tamb': 20.0, 'T0': 80.0}
print(params['k'])   # 0.06
params['h'] = 5.0    # agregar clave nueva`,
  ojo:'El slicing en Python excluye el extremo derecho: notas[1:3] te da los índices 1 y 2, no el 3. Es la fuente de la mitad de los errores de gente que viene de MATLAB, donde los índices parten en 1 y sí incluyen el extremo.'
 },
 {
  t:'NumPy: el array, que es lo que de verdad vas a usar',
  h:`<p>Una lista de Python puede guardar cualquier cosa mezclada, y por eso es lenta. Un <b>array de NumPy</b> guarda un solo tipo de dato en memoria contigua, y eso lo hace órdenes de magnitud más rápido — además de permitir operaciones matemáticas directas.</p>
  <p>La diferencia crítica:</p>`,
  code:`import numpy as np

lista = [1, 2, 3]
arr   = np.array([1, 2, 3])

print(lista * 2)   # [1, 2, 3, 1, 2, 3]   <- repite la lista
print(arr * 2)     # [2 4 6]              <- multiplica cada elemento

# --- Formas de crear arrays ---
np.zeros(5)                 # [0. 0. 0. 0. 0.]
np.ones((2, 3))             # matriz 2x3 de unos
np.arange(0, 10, 2)         # [0 2 4 6 8]     paso fijo, excluye el final
np.linspace(0, 1, 5)        # [0. 0.25 0.5 0.75 1.]  cantidad fija, INCLUYE el final
np.eye(3)                   # identidad 3x3

A = np.array([[1, 2],
              [3, 4]])
print(A.shape)   # (2, 2)   filas, columnas
print(A.T)       # transpuesta`,
  ojo:'linspace vs arange: usa linspace cuando sabes cuántos puntos quieres (típico para graficar), y arange cuando sabes el tamaño del paso (típico para iterar en el tiempo). Y recuerda que arange excluye el extremo derecho, por eso en el código de Euler escribí np.arange(0, t_fin + h, h).'
 },
 {
  t:'Indexado, slicing y máscaras booleanas',
  h:`<p>Acceder a pedazos de un array es la operación que más vas a repetir. En matrices el orden es <code>[fila, columna]</code>.</p>`,
  code:`import numpy as np
A = np.array([[10, 20, 30],
              [40, 50, 60],
              [70, 80, 90]])

A[0, 0]       # 10       elemento
A[1, :]       # [40 50 60]   fila completa
A[:, 2]       # [30 60 90]   columna completa
A[0:2, 1:3]   # submatriz [[20 30],[50 60]]
A[-1, -1]     # 90       esquina inferior derecha

# --- Máscaras booleanas: filtrar sin escribir un solo bucle ---
v = np.array([3.2, 5.8, 1.1, 6.9, 4.0])
mask = v > 4.0            # [False True False True False]
print(v[mask])            # [5.8 6.9]
print(np.sum(v > 4.0))    # 2   -> cuenta cuántos cumplen
print(np.where(v > 4.0))  # posiciones donde se cumple`,
  ojo:'Cuidado con esto: B = A no copia el array, crea otro nombre para el mismo. Si modificas B, cambias A. Para copiar de verdad usa B = A.copy(). Este bug es silencioso y te puede arruinar un laboratorio entero sin dar error.'
 },
 {
  t:'Vectorización: pensar en arrays, no en elementos',
  h:`<p>Este es el cambio de mentalidad más importante del capítulo. En vez de recorrer elemento por elemento, aplicas la operación al array completo.</p>`,
  code:`import numpy as np

x = np.linspace(0, 2*np.pi, 1000)

# Forma lenta y larga
y1 = np.zeros(len(x))
for i in range(len(x)):
    y1[i] = np.sin(x[i]) ** 2

# Forma vectorizada: una línea, mucho más rápida
y2 = np.sin(x) ** 2

# Funciones que operan sobre todo el array
np.sum(y2), np.mean(y2), np.max(y2), np.min(y2)
np.argmax(y2)          # POSICIÓN del máximo, no el valor
np.abs(x - np.pi)      # valor absoluto elemento a elemento

# Constantes que vas a necesitar
np.pi, np.e, np.inf, np.nan`
 },
 {
  t:'Matplotlib: graficar resultados',
  h:`<p>Todo laboratorio te va a pedir un gráfico. Con este esqueleto cubres el 90 % de los casos.</p>`,
  code:`import numpy as np
import matplotlib.pyplot as plt

x  = np.linspace(0, 10, 200)
y1 = np.sin(x)
y2 = np.cos(x)

plt.figure(figsize=(8, 4))
plt.plot(x, y1, 'b-',  label='sin(x)', linewidth=2)
plt.plot(x, y2, 'r--', label='cos(x)')
plt.plot(x[::20], y1[::20], 'ko', markersize=4, label='muestras')

plt.xlabel('x')
plt.ylabel('f(x)')
plt.title('Funciones trigonométricas')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# Escala logarítmica: indispensable para graficar convergencia de error
# plt.loglog(h_valores, errores, 'o-')
# plt.semilogy(iteraciones, error, 'o-')`,
  ojo:'Cuando grafiques el error de un método en función del paso h, usa loglog. En esa escala una recta indica una ley de potencias, y la pendiente de esa recta es exactamente el orden del método. Es la forma estándar de demostrar que un método es de orden 1, 2 o 4.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Crea un array con 11 valores igualmente espaciados entre 0 y 1 (ambos incluidos). Después extrae solo los que sean mayores a 0,5 y calcula su promedio.',
    a:`<pre><code>import numpy as np

x = np.linspace(0, 1, 11)        # [0. 0.1 0.2 ... 1.]
grandes = x[x > 0.5]             # [0.6 0.7 0.8 0.9 1.]
print(grandes)
print(np.mean(grandes))          # 0.8</code></pre>
    Fíjate que <code>x > 0.5</code> devuelve un array de booleanos, y usarlo como índice extrae solo donde es True. Con <code>np.arange(0, 1, 0.1)</code> te habrían faltado el 1.0 y además arrastrarías error de redondeo en el paso — por eso linspace es mejor acá.`},
   {q:'¿Qué imprime este código y por qué?\n\na = np.array([1.0, 2.0, 3.0])\nb = a\nb[0] = 99\nprint(a)',
    a:`Imprime <code>[99. 2. 3.]</code>.<br><br>
    La línea <code>b = a</code> <b>no crea un array nuevo</b>: crea otro nombre que apunta al mismo bloque de memoria. Modificar b es modificar a.<br><br>
    Para tener una copia independiente:<br>
    <pre><code>b = a.copy()</code></pre>
    Esto vale para arrays y listas. Los tipos simples (int, float, str) sí se copian por valor, lo que hace la inconsistencia más confusa todavía.`},
   {q:'Escribe código vectorizado (sin bucles) que calcule la norma euclidiana de un vector v, y verifica el resultado contra np.linalg.norm.',
    a:`<pre><code>import numpy as np
v = np.array([3.0, 4.0, 12.0])

# A mano, vectorizado
norma = np.sqrt(np.sum(v**2))
print(norma)                    # 13.0

# Con la función de NumPy
print(np.linalg.norm(v))        # 13.0

print(np.isclose(norma, np.linalg.norm(v)))   # True</code></pre>
    <code>v**2</code> eleva cada elemento al cuadrado, <code>np.sum</code> los suma y <code>np.sqrt</code> saca la raíz. Cero bucles.<br><br>
    Ojo: en el laboratorio te van a pedir usar <code>np.linalg.norm</code> directamente, pero saber reconstruirla te sirve para entender qué está calculando — sobre todo cuando aparezcan otras normas (norma 1, norma infinito) en el tema de condicionamiento.`},
   {q:'Grafica f(x) = e^(−x) · sin(5x) entre 0 y 3, marcando además su valor máximo con un punto rojo.',
    a:`<pre><code>import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 3, 500)
f = np.exp(-x) * np.sin(5*x)

i = np.argmax(f)        # posición del máximo

plt.plot(x, f, 'b-', label='f(x)')
plt.plot(x[i], f[i], 'ro', markersize=8, label=f'máx en x={x[i]:.3f}')
plt.xlabel('x'); plt.ylabel('f(x)')
plt.legend(); plt.grid(True, alpha=0.3)
plt.show()</code></pre>
    La clave es <code>np.argmax</code>, que devuelve el <b>índice</b> del máximo, no el valor. Con ese índice sacas tanto la coordenada x como la y.<br><br>
    Nota: esto encuentra el máximo <b>de la muestra</b>, no el máximo real de la función. Si tomas pocos puntos, te vas a perder el verdadero. Encontrar el máximo real es justamente el tema del módulo VII de optimización.`}
  ]
 }
 ]
},

/* ===================== CAPÍTULO 3 ===================== */
{
 id:'cap3', ramo:'mn', tag:'Cap 3',
 titulo:'Programación con Python',
 bajada:'Funciones, condicionales y bucles: las piezas con las que vas a construir todos los algoritmos del curso.',
 min:55,
 secciones:[
 {
  t:'Funciones',
  h:`<p>Una función encapsula un cálculo para reutilizarlo. En este ramo vas a escribir funciones todo el rato: cada método numérico termina siendo una.</p>`,
  code:`def enfriamiento(T, k, Tamb):
    """Devuelve dT/dt según la ley de enfriamiento de Newton.

    T    : temperatura actual [°C]
    k    : constante de enfriamiento [1/min]
    Tamb : temperatura ambiente [°C]
    """
    return -k * (T - Tamb)

print(enfriamiento(80, 0.06, 20))    # -3.6

# --- Argumentos por defecto ---
def euler(f, y0, t0, tf, h=0.1):
    """Si no pasas h, usa 0.1."""
    ...

# --- Retorno múltiple (devuelve una tupla) ---
def estadisticas(v):
    return np.mean(v), np.std(v), np.max(v)

m, s, mx = estadisticas(np.array([1.0, 2.0, 3.0]))`,
  ojo:'El docstring entre triple comilla no es decoración. En una prueba de laboratorio donde no puedes usar IA, escribir qué hace cada función y qué significan sus argumentos te ordena la cabeza y te ayuda a no perderte. Además, con help(mi_funcion) lo puedes leer después.'
 },
 {
  t:'Funciones como argumento y lambdas',
  h:`<p>Acá está la idea que hace que todo SciPy funcione: <b>una función puede recibir otra función como argumento</b>. Por eso puedes escribir un solo método de Euler que sirva para cualquier EDO.</p>`,
  code:`import numpy as np

def euler(f, y0, t0, tf, h):
    """Resuelve dy/dt = f(t, y) por el método de Euler."""
    t = np.arange(t0, tf + h, h)
    y = np.zeros(len(t))
    y[0] = y0
    for i in range(len(t) - 1):
        y[i+1] = y[i] + f(t[i], y[i]) * h
    return t, y

# Ahora la misma rutina sirve para cualquier ecuación:
def cafe(t, T):
    return -0.06 * (T - 20)

t, T = euler(cafe, 80, 0, 60, 5)

# --- Lambda: función anónima de una línea ---
cuadrado = lambda x: x**2
t2, y2 = euler(lambda t, y: -2*y, 1, 0, 5, 0.1)`,
  ojo:'Este patrón es exactamente el que usa SciPy: scipy.integrate.solve_ivp(fun, ...) o scipy.optimize.root_scalar(f, ...) esperan que TÚ les pases la función. Si entiendes esto ahora, las 11 sesiones de laboratorio te van a costar la mitad.'
 },
 {
  t:'Condicionales',
  h:`<p>La indentación <b>es</b> la sintaxis en Python. No hay llaves ni <code>end</code>: los cuatro espacios definen qué pertenece a qué bloque.</p>`,
  code:`def clasificar(nota):
    if nota >= 5.5:
        return 'destacado'
    elif nota >= 4.0:
        return 'aprobado'
    else:
        return 'reprobado'

# --- Condiciones compuestas ---
if 0 < x < 10:              # Python permite encadenar, a diferencia de otros lenguajes
    print('en rango')

if (a > 0) and (b > 0):
    print('ambos positivos')

if not converge:
    print('no convergió')

# --- Operador ternario ---
signo = 'positivo' if x > 0 else 'no positivo'`
 },
 {
  t:'Bucles',
  h:`<p>Dos tipos, y la distinción importa mucho en métodos numéricos:</p>
  <ul>
  <li><code>for</code> — cuando sabes <b>de antemano</b> cuántas veces repetir</li>
  <li><code>while</code> — cuando repites <b>hasta que se cumpla una condición</b></li>
  </ul>
  <p>Los métodos de paso fijo usan <code>for</code>. Los métodos iterativos que buscan raíces o convergen a una tolerancia usan <code>while</code>.</p>`,
  code:`# --- for con range ---
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 10, 3):   # 2, 5, 8   (inicio, fin excluido, paso)
    print(i)

# --- Recorrer un array con su índice ---
v = np.array([3.0, 1.0, 4.0])
for i, valor in enumerate(v):
    print(f'posición {i}: {valor}')

# --- while con tolerancia: el patrón de todo método iterativo ---
x, tol, max_iter = 1.0, 1e-8, 100
iteracion = 0

while iteracion < max_iter:
    x_nuevo = np.cos(x)                  # iteración de punto fijo
    error = abs(x_nuevo - x)
    x = x_nuevo
    iteracion += 1
    if error < tol:
        break

print(f'x = {x:.10f} en {iteracion} iteraciones')`,
  ojo:'Nunca escribas un while sin un contador máximo de iteraciones. Si el método no converge —y a veces no converge— tu programa se cuelga para siempre. En una prueba de laboratorio con tiempo contado eso es fatal. El patrón "while con tope + break por tolerancia" es el estándar y lo vas a repetir en raíces, sistemas no lineales y optimización.'
 },
 {
  t:'Acumuladores y el patrón de iteración',
  h:`<p>Casi todo algoritmo numérico es una de estas tres formas. Reconócelas y la mitad del trabajo está hecho.</p>`,
  code:`import numpy as np

# 1) ACUMULAR: sumar contribuciones (integración numérica)
def trapecio(f, a, b, n):
    h = (b - a) / n
    suma = 0.5 * (f(a) + f(b))       # los extremos van con peso 1/2
    for i in range(1, n):
        suma += f(a + i*h)
    return suma * h

print(trapecio(lambda x: x**2, 0, 1, 100))   # ≈ 0.33335

# 2) ACTUALIZAR: avanzar paso a paso (EDOs)
#    y[i+1] = y[i] + algo   -> ya lo viste en Euler

# 3) REDUCIR EL INTERVALO: buscar dentro de un rango (bisección)
def biseccion(f, a, b, tol=1e-8, max_iter=100):
    if f(a) * f(b) > 0:
        raise ValueError('f(a) y f(b) deben tener signos opuestos')
    for _ in range(max_iter):
        c = (a + b) / 2
        if abs(f(c)) < tol or (b - a)/2 < tol:
            return c
        if f(a) * f(c) < 0:
            b = c
        else:
            a = c
    return c

raiz = biseccion(lambda x: x**2 - 2, 0, 2)
print(f'raíz = {raiz:.8f}')      # ≈ 1.41421356`,
  ojo:'Esa función de bisección es literalmente el contenido del módulo II, que ves el 21 de agosto. Si la entiendes ahora, llegas con ventaja: la idea es tan simple como partir el intervalo a la mitad y quedarte con el lado donde la función cambia de signo.'
 },
 {
  t:'Errores comunes y cómo depurar',
  h:`<p>Los que más te van a pasar, en orden de frecuencia:</p>
  <ul>
  <li><code>IndentationError</code> — mezclaste tabs con espacios, o desalineaste un bloque</li>
  <li><code>IndexError: index out of range</code> — accediste a <code>v[len(v)]</code>; el último es <code>v[len(v)-1]</code> o <code>v[-1]</code></li>
  <li><code>NameError</code> — usaste una variable antes de definirla, o corriste las celdas de Jupyter fuera de orden</li>
  <li><code>TypeError</code> — le pasaste una lista a algo que espera un array, o al revés</li>
  <li><code>ValueError: operands could not be broadcast</code> — arrays de formas incompatibles; revisa los <code>.shape</code></li>
  <li><b>Sin error pero resultado absurdo</b> — el peor. Casi siempre es un índice corrido en uno, o unidades mezcladas</li>
  </ul>`,
  code:`# Depuración sin debugger, que es lo que vas a tener en el lab:

# 1. Imprime formas antes de operar
print(A.shape, b.shape)

# 2. Imprime dentro del bucle, pero solo cada tanto
for i in range(1000):
    if i % 100 == 0:
        print(f'i={i}, x={x:.6f}, error={error:.2e}')

# 3. Verifica contra un caso que conoces de memoria
#    ¿tu integrador da 1/3 para x^2 entre 0 y 1? Si no, está malo.

# 4. Revisa los casos borde a mano
#    n=1, array vacío, a=b, f(a)=0 exactamente`,
  ojo:'La técnica más útil en una prueba: prueba tu código con un problema cuya respuesta ya sabes. Si tu método de integración no devuelve 0,5 para f(x)=x entre 0 y 1, no sigas avanzando — está malo y lo vas a arrastrar.'
 },
 {
  t:'De pseudocódigo a código',
  h:`<p>El profe evalúa teoría en los controles y ejecución en los laboratorios. El puente entre ambos es el pseudocódigo: escribir el algoritmo en palabras antes de programarlo.</p>
  <p>Ejemplo, el método de Newton-Raphson para encontrar raíces:</p>
  <pre class="pseudo">1. Partir de una estimación inicial x₀
2. Repetir hasta convergencia:
     a. Evaluar f(x) y f'(x)
     b. Si f'(x) ≈ 0, abortar (división por cero)
     c. x_nuevo = x − f(x)/f'(x)
     d. Si |x_nuevo − x| &lt; tolerancia, terminar
     e. x = x_nuevo
3. Devolver x</pre>
  <p>Traducirlo es casi mecánico:</p>`,
  code:`def newton(f, df, x0, tol=1e-10, max_iter=50):
    x = x0
    for i in range(max_iter):
        fx, dfx = f(x), df(x)
        if abs(dfx) < 1e-14:
            raise ValueError('derivada casi nula, el método falla acá')
        x_nuevo = x - fx/dfx
        if abs(x_nuevo - x) < tol:
            return x_nuevo, i+1
        x = x_nuevo
    raise RuntimeError(f'no convergió en {max_iter} iteraciones')

raiz, n = newton(lambda x: x**2 - 2,
                 lambda x: 2*x,
                 x0=1.0)
print(f'raíz = {raiz:.12f} en {n} iteraciones')   # 1.414213562373 en 5`,
  ojo:'Compara: bisección necesitó como 27 iteraciones para la misma raíz, Newton necesitó 5. Esa diferencia es la "velocidad de convergencia", y es uno de los cuatro resultados de aprendizaje declarados en tu syllabus. Newton converge cuadráticamente (el número de dígitos correctos se duplica en cada paso); bisección converge linealmente.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Escribe una función que reciba un array y devuelva cuántos elementos son mayores al promedio. Hazlo primero con un bucle y después vectorizado.',
    a:`<pre><code>import numpy as np

# Con bucle
def sobre_promedio_bucle(v):
    m = np.mean(v)
    cuenta = 0
    for x in v:
        if x > m:
            cuenta += 1
    return cuenta

# Vectorizado
def sobre_promedio(v):
    return np.sum(v > np.mean(v))

v = np.array([1.0, 5.0, 3.0, 9.0, 2.0])
print(sobre_promedio_bucle(v), sobre_promedio(v))   # 2 2</code></pre>
    En la versión vectorizada, <code>v > np.mean(v)</code> da un array de booleanos y <code>np.sum</code> los suma tratando True como 1. Cinco líneas se vuelven una.`},
   {q:'El método de bisección requiere que f(a) y f(b) tengan signos opuestos. Explica por qué, y qué pasa si no se cumple.',
    a:`El método se apoya en el <b>teorema del valor intermedio</b>: si f es continua en [a,b] y f(a)·f(b) &lt; 0, entonces existe al menos una raíz dentro del intervalo. Eso es lo que garantiza que al partir el intervalo a la mitad y quedarse con el lado donde persiste el cambio de signo, la raíz sigue estando adentro.<br><br>
    Si f(a) y f(b) tienen el <b>mismo</b> signo pueden pasar dos cosas: que no haya ninguna raíz en el intervalo, o que haya un número <b>par</b> de raíces. En ambos casos el método no tiene cómo orientarse y por eso hay que abortar de entrada.<br><br>
    Este es el precio de la bisección: es lentísima comparada con Newton, pero <b>siempre converge</b> si le das un intervalo válido. Newton es rapidísimo pero puede diverger si partes lejos o si la derivada se acerca a cero. Esa contraposición entre métodos cerrados (robustos, lentos) y abiertos (rápidos, frágiles) es exactamente lo que evalúan en el módulo II.`},
   {q:'Escribe una función trapecio_vectorizado(f, a, b, n) que calcule la misma integral que el ejemplo de arriba pero sin usar bucles.',
    a:`<pre><code>import numpy as np

def trapecio_vectorizado(f, a, b, n):
    x = np.linspace(a, b, n+1)      # n+1 puntos -> n trapecios
    y = f(x)                        # evalúa TODO de una vez
    h = (b - a) / n
    return h * (0.5*y[0] + np.sum(y[1:-1]) + 0.5*y[-1])

print(trapecio_vectorizado(lambda x: x**2, 0, 1, 100))   # 0.333350
print(trapecio_vectorizado(np.sin, 0, np.pi, 1000))      # 1.999998</code></pre>
    Dos detalles importantes:<br>
    • <code>y[1:-1]</code> son los puntos interiores, que van con peso completo; los extremos van con peso 1/2.<br>
    • <code>f(x)</code> con x array solo funciona si f está escrita vectorizada. Por eso <code>np.sin</code> anda directo, pero una función con <code>if</code> adentro se caería.<br><br>
    El valor exacto de ∫x² entre 0 y 1 es 1/3 = 0,3333... El error de 0,0000167 se debe a que aproximas la parábola con rectas. Al duplicar n el error cae a la cuarta parte: el trapecio es de <b>orden 2</b>.`},
   {q:'¿Por qué este código nunca termina, y cómo lo arreglas?\n\nx = 1.0\nwhile x != 0.0:\n    x = x - 0.1',
    a:`Por el error de punto flotante del capítulo 2. Restando 0,1 diez veces desde 1,0 <b>no</b> llegas exactamente a 0,0, porque 0,1 no es representable exacto en binario. Llegas a algo como 2,77e−17, que es distinto de cero, y el bucle sigue para siempre restando de a poquito.<br><br>
    Dos arreglos, ambos válidos:<br><br>
    <b>1. Comparar con tolerancia:</b>
    <pre><code>x = 1.0
while abs(x) > 1e-9:
    x = x - 0.1</code></pre>
    <b>2. Mejor todavía, iterar sobre enteros:</b>
    <pre><code>for i in range(10):
    x = 1.0 - 0.1*i</code></pre>
    La segunda además evita acumular error: cada valor se calcula desde cero en vez de arrastrar las diez restas anteriores.<br><br>
    <b>Regla que te va a servir todo el semestre:</b> nunca uses <code>==</code> ni <code>!=</code> como condición de término con floats. Siempre tolerancia, y siempre con tope de iteraciones.`}
  ]
 }
 ]
}

,

/* ===================== MICROECONOMÍA ===================== */
{
 id:'micro1', ramo:'mi', tag:'Unidad 1',
 titulo:'Introducción a la Economía',
 bajada:'Los ocho conceptos fundamentales que el profe dijo que debes dominar. NRC 591 y 3594.',
 min:70,
 secciones:[
 {
  t:'1 · Definición de mercado',
  h:`<p>Un <b>mercado</b> es el conjunto de compradores y vendedores que, a través de sus interacciones reales o potenciales, determinan el precio de un producto.</p>
  <p>Tres cosas que parecen obvias y en la prueba no lo son:</p>
  <ul>
  <li><b>No es un lugar físico.</b> Es una relación de intercambio. El mercado del dólar no está en ninguna parte y existe.</li>
  <li><b>"Potenciales" importa.</b> Un comprador que hoy no compra pero compraría a otro precio también forma parte del mercado. Por eso los precios reaccionan a gente que ni siquiera transó.</li>
  <li><b>La definición depende de dos fronteras:</b> la <i>extensión del producto</i> (¿el mercado es "bebidas" o "bebidas cola"?) y la <i>extensión geográfica</i> (¿Santiago o Chile?). Cambiar la frontera cambia quién es competencia.</li>
  </ul>
  <p>El criterio para trazar esas fronteras es la <b>sustituibilidad</b>: si al subir el precio de A la gente se cambia masivamente a B, entonces A y B están en el mismo mercado.</p>`,
  ojo:'Pregunta clásica de prueba: "¿el pan de una panadería de barrio compite con el de un supermercado a 20 km?". La respuesta depende de si los consumidores los consideran sustitutos, no de la distancia en sí. Argumenta desde la sustituibilidad y tienes el punto.'
 },
 {
  t:'2 · Mercado competitivo o de competencia perfecta',
  h:`<p>Es el modelo de referencia del curso: no describe la realidad, sino el caso ideal contra el cual se comparan los demás.</p>
  <p><b>Los cuatro supuestos:</b></p>
  <ol>
  <li><b>Muchos compradores y vendedores</b>, todos pequeños respecto al mercado</li>
  <li><b>Producto homogéneo</b>: el de un vendedor es indistinguible del de otro</li>
  <li><b>Información perfecta</b>: todos conocen precios y calidades</li>
  <li><b>Libre entrada y salida</b>: nadie tiene barreras para entrar o irse</li>
  </ol>
  <p>La consecuencia crítica de esos supuestos es que cada empresa es <b>tomadora de precios</b>: no puede influir en el precio, solo decide cuánto producir a ese precio dado.</p>
  <p>¿Por qué? Si sube su precio un peso, pierde <b>todos</b> sus clientes, porque el producto es idéntico al de los demás y todos lo saben. Y bajarlo no tiene sentido, porque puede vender todo lo que quiera al precio de mercado.</p>
  <p>Geométricamente: la empresa individual enfrenta una demanda <b>perfectamente elástica</b> (horizontal) al precio de mercado, aunque la demanda del mercado completo sí tenga pendiente negativa. Esos son dos gráficos distintos y confundirlos es un error típico.</p>`,
  ojo:'Que ningún supuesto se cumpla del todo en la vida real no invalida el modelo. Sirve como referencia: cuando estudies precio máximo o impuestos, la pérdida de eficiencia se mide justamente respecto a este caso ideal.'
 },
 {
  t:'3 · Demanda: movimientos sobre la curva vs desplazamientos',
  h:`<p>Este es <b>el</b> concepto donde más gente pierde puntos. Presta atención a la distinción.</p>
  <p>La <b>curva de demanda</b> relaciona el precio con la cantidad demandada, <i>manteniendo todo lo demás constante</i> (ceteris paribus). Tiene pendiente negativa: a mayor precio, menor cantidad.</p>
  <p class="fx">Q<sub>d</sub> = f( P ; ingreso, precios de otros bienes, gustos, expectativas, N° consumidores )</p>
  <p>Fíjate en el punto y coma. Lo que está antes del <i>;</i> genera movimientos <b>sobre</b> la curva. Lo que está después genera <b>desplazamientos</b> de la curva.</p>
  <table class="tb"><tr><th>Qué cambia</th><th>Qué pasa</th><th>Cómo se llama</th></tr>
  <tr><td>El precio del bien</td><td>Te mueves a otro punto de la <b>misma</b> curva</td><td>Cambio en la <b>cantidad demandada</b></td></tr>
  <tr><td>Cualquier otro determinante</td><td>La curva completa se corre</td><td>Cambio en la <b>demanda</b></td></tr></table>
  <p><b>Los otros determinantes, uno por uno:</b></p>
  <ul>
  <li><b>Ingreso:</b> si sube y la demanda aumenta, el bien es <i>normal</i>. Si sube y la demanda cae, es <i>inferior</i> (transporte público, marcas económicas).</li>
  <li><b>Precio de bienes relacionados:</b> si sube el precio del té y aumenta la demanda de café, son <i>sustitutos</i>. Si sube el precio de los autos y cae la demanda de bencina, son <i>complementarios</i>.</li>
  <li><b>Gustos y preferencias</b></li>
  <li><b>Expectativas:</b> si esperas que suba el precio mañana, compras más hoy.</li>
  <li><b>Número de consumidores</b></li>
  </ul>`,
  ojo:'La trampa clásica: "el precio del bien subió y por eso cayó la demanda". Está MAL dicho. Cayó la cantidad demandada. La demanda —la curva entera— no se movió. En una prueba esa precisión de lenguaje suele valer puntos.'
 },
 {
  t:'4 · Oferta: la misma lógica, al revés',
  h:`<p>La <b>curva de oferta</b> relaciona precio con cantidad ofrecida, ceteris paribus. Pendiente positiva: a mayor precio, más quieren producir los vendedores.</p>
  <p class="fx">Q<sub>s</sub> = f( P ; costos de insumos, tecnología, expectativas, N° vendedores )</p>
  <p>Vale exactamente la misma distinción: el precio del bien mueve <b>sobre</b> la curva; todo lo demás <b>desplaza</b> la curva.</p>
  <p><b>Determinantes que desplazan la oferta:</b></p>
  <ul>
  <li><b>Precio de los insumos:</b> si sube la mano de obra o la materia prima, producir cuesta más y la oferta se contrae (se corre a la izquierda).</li>
  <li><b>Tecnología:</b> una mejora abarata la producción y expande la oferta (a la derecha).</li>
  <li><b>Expectativas de precio futuro</b></li>
  <li><b>Número de vendedores:</b> entra un competidor nuevo, la oferta del mercado aumenta.</li>
  <li><b>Impuestos y subsidios a la producción</b></li>
  </ul>
  <p><b>Cómo dibujar los desplazamientos sin equivocarte:</b> piensa en <b>horizontal</b>, no en vertical. "La oferta aumenta" significa que a <i>cada precio</i> se ofrece más cantidad → la curva se corre hacia la <b>derecha</b>. Si piensas en vertical te confundes, porque una curva de oferta que se corre a la derecha se ve "más abajo".</p>`
 },
 {
  t:'5 · Equilibrio de mercado y estática comparativa',
  h:`<p>El <b>equilibrio</b> es el par (P*, Q*) donde la cantidad demandada iguala a la ofrecida. Gráficamente, la intersección.</p>
  <p class="fx">Q<sub>d</sub>(P*) = Q<sub>s</sub>(P*)</p>
  <p><b>Por qué el mercado tiende ahí solo:</b></p>
  <ul>
  <li>Si <b>P &gt; P*</b> hay <b>exceso de oferta</b> (excedente). Los vendedores acumulan stock y bajan precios.</li>
  <li>Si <b>P &lt; P*</b> hay <b>exceso de demanda</b> (escasez). Los compradores compiten y empujan el precio hacia arriba.</li>
  </ul>
  <p>La <b>estática comparativa</b> es comparar dos equilibrios: uno antes y otro después de un cambio. El procedimiento es siempre el mismo, cuatro pasos:</p>
  <ol>
  <li>¿Qué curva se afecta, oferta o demanda?</li>
  <li>¿Hacia dónde se desplaza?</li>
  <li>Encuentra el nuevo punto de intersección</li>
  <li>Compara P* y Q* antes y después</li>
  </ol>
  <p><b>Los cuatro casos simples:</b></p>
  <table class="tb"><tr><th>Cambio</th><th>P*</th><th>Q*</th></tr>
  <tr><td>Demanda aumenta</td><td>sube</td><td>sube</td></tr>
  <tr><td>Demanda disminuye</td><td>baja</td><td>baja</td></tr>
  <tr><td>Oferta aumenta</td><td>baja</td><td>sube</td></tr>
  <tr><td>Oferta disminuye</td><td>sube</td><td>baja</td></tr></table>`,
  ojo:'El caso que más cae en pruebas: se mueven las DOS curvas a la vez. Ahí uno de los dos efectos queda indeterminado. Ejemplo: si la demanda aumenta y la oferta también, Q* claramente sube, pero P* depende de cuál se movió más. La respuesta correcta es decir explícitamente "indeterminado, depende de las magnitudes relativas". Escribir eso vale más que inventar una dirección.'
 },
 {
  t:'6 · Elasticidad',
  h:`<p>La <b>elasticidad</b> mide cuánto reacciona una variable ante el cambio de otra, en términos porcentuales. Que sea en porcentaje es lo que la hace comparable entre bienes con unidades distintas.</p>
  <p class="fx">E<sub>p</sub> = (%Δ cantidad demandada) / (%Δ precio)</p>
  <p>Para la demanda siempre da negativa, así que casi siempre se habla de su valor absoluto.</p>
  <table class="tb"><tr><th>|E|</th><th>Se llama</th><th>Significa</th></tr>
  <tr><td>&gt; 1</td><td>Elástica</td><td>La cantidad reacciona más que proporcionalmente</td></tr>
  <tr><td>= 1</td><td>Unitaria</td><td>Reaccionan igual</td></tr>
  <tr><td>&lt; 1</td><td>Inelástica</td><td>La cantidad reacciona poco</td></tr>
  <tr><td>= 0</td><td>Perfectamente inelástica</td><td>Curva vertical</td></tr>
  <tr><td>= ∞</td><td>Perfectamente elástica</td><td>Curva horizontal</td></tr></table>
  <p><b>Qué determina que un bien sea elástico:</b> la existencia de sustitutos cercanos (el determinante más fuerte), si es un lujo o una necesidad, cuánto pesa en el presupuesto, y el horizonte de tiempo — todo es más elástico en el largo plazo porque hay tiempo de ajustarse.</p>
  <p><b>La relación con el ingreso total, que es lo que más preguntan:</b></p>
  <p class="fx">IT = P × Q</p>
  <ul>
  <li>Demanda <b>elástica</b>: si subes el precio, el ingreso total <b>cae</b> (pierdes más en cantidad de lo que ganas en precio)</li>
  <li>Demanda <b>inelástica</b>: si subes el precio, el ingreso total <b>sube</b></li>
  <li>Elasticidad <b>unitaria</b>: el ingreso total no cambia, está en su máximo</li>
  </ul>
  <p><b>Otras dos elasticidades:</b> la <i>elasticidad ingreso</i> (positiva = bien normal, negativa = inferior) y la <i>elasticidad cruzada</i> (positiva = sustitutos, negativa = complementarios).</p>`,
  ojo:'En una recta de demanda la elasticidad NO es constante: es elástica en el tramo de arriba, unitaria justo al medio, e inelástica abajo. La pendiente sí es constante, la elasticidad no. Pendiente y elasticidad son cosas distintas, y confundirlas es de los errores más caros del curso.'
 },
 {
  t:'7 · Excedente del consumidor y del productor',
  h:`<p>Son las medidas de <b>bienestar</b>: cuánto gana cada lado por poder transar.</p>
  <p><b>Excedente del consumidor (EC):</b> la diferencia entre lo máximo que estabas dispuesto a pagar y lo que efectivamente pagaste. En el gráfico, el área <b>bajo la curva de demanda y sobre el precio</b>.</p>
  <p><b>Excedente del productor (EP):</b> la diferencia entre lo que recibiste y lo mínimo que estabas dispuesto a aceptar. El área <b>sobre la curva de oferta y bajo el precio</b>.</p>
  <p class="fx">Excedente total = EC + EP</p>
  <p>Con curvas rectas, calcularlos es geometría de triángulos:</p>
  <p class="fx">EC = ½ × base × altura = ½ × Q* × (P<sub>máx</sub> − P*)</p>
  <p>donde P<sub>máx</sub> es el intercepto de la demanda con el eje vertical.</p>
  <p><b>Por qué importa:</b> el equilibrio competitivo <b>maximiza el excedente total</b>. Cualquier cosa que aleje al mercado de ese punto —un precio máximo, un impuesto— genera una <b>pérdida de eficiencia social</b> (o pérdida irrecuperable), que en el gráfico es el famoso triangulito que queda entre las curvas en la zona donde ya no hay transacciones.</p>`,
  ojo:'Este es el puente hacia el punto 8. Todo el análisis de intervención de mercado se reduce a: dibujar la intervención, marcar el nuevo EC y EP, y calcular el triángulo que se perdió. Si dominas calcular áreas acá, el punto 8 se vuelve mecánico.'
 },
 {
  t:'8 · Intervención de mercado',
  h:`<p>Cuatro instrumentos. En todos el procedimiento es el mismo: dibuja, identifica el desequilibrio, calcula quién gana y quién pierde.</p>
  <p><b>Precio máximo (techo)</b> — ej. control de arriendos</p>
  <ul>
  <li>Solo tiene efecto si se fija <b>bajo</b> el precio de equilibrio</li>
  <li>Genera <b>escasez</b>: la cantidad demandada supera a la ofrecida</li>
  <li>Los consumidores que <i>logran</i> comprar ganan; los que quedan fuera pierden</li>
  <li>Aparecen colas, listas de espera y mercados informales</li>
  </ul>
  <p><b>Precio mínimo (piso)</b> — ej. salario mínimo</p>
  <ul>
  <li>Solo tiene efecto si se fija <b>sobre</b> el equilibrio</li>
  <li>Genera <b>excedente</b>: se ofrece más de lo que se demanda</li>
  <li>En el mercado laboral ese excedente es desempleo</li>
  </ul>
  <p><b>Impuestos</b></p>
  <p>La clave del tema: <b>da lo mismo a quién se le cobre legalmente el impuesto</b>. El reparto real de la carga —la <i>incidencia</i>— lo determinan las elasticidades:</p>
  <p class="fx">El lado más inelástico soporta la mayor parte del impuesto</p>
  <p>La intuición: quien tiene menos alternativas no puede escapar. Por eso los impuestos al tabaco los paga casi enteramente el consumidor: su demanda es muy inelástica.</p>
  <p>Un impuesto genera además una <b>pérdida de eficiencia</b>, porque desaparecen transacciones que eran mutuamente beneficiosas. La recaudación del Estado es un rectángulo; la pérdida social es el triángulo que queda a su lado.</p>
  <p><b>Subsidios</b></p>
  <p>Es el espejo del impuesto: baja el precio que paga el consumidor, sube el que recibe el productor, y aumenta la cantidad transada. También genera pérdida de eficiencia, porque ahora se producen unidades cuyo costo supera lo que la gente realmente valora.</p>`,
  ojo:'La pregunta que más se repite: "¿quién paga realmente el impuesto?". La respuesta nunca es "el que dice la ley". Siempre argumenta desde las elasticidades relativas, y si te dan un caso concreto, identifica primero cuál lado tiene menos sustitutos.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'El precio del café sube. Explica qué pasa con: (a) la cantidad demandada de café, (b) la demanda de té, (c) la demanda de azúcar. Usa el lenguaje correcto en cada caso.',
    a:`<b>(a) Cantidad demandada de café:</b> disminuye. Es un <b>movimiento sobre</b> la curva de demanda del café, porque lo que cambió fue el precio del propio bien. La demanda de café no se movió.<br><br>
    <b>(b) Demanda de té:</b> aumenta, la curva se <b>desplaza a la derecha</b>. El té es <b>sustituto</b> del café: al encarecerse uno, la gente se cambia al otro. Acá sí cambió la demanda, porque lo que se movió fue el precio de <i>otro</i> bien.<br><br>
    <b>(c) Demanda de azúcar:</b> disminuye, se <b>desplaza a la izquierda</b>. El azúcar es <b>complementario</b> del café: se consumen juntos, así que menos café implica menos azúcar.<br><br>
    Nota que en (a) usamos "cantidad demandada" y en (b) y (c) "demanda". Esa distinción es exactamente lo que se está evaluando.`},
   {q:'Un mercado tiene demanda Qd = 100 − 2P y oferta Qs = 20 + 2P. Encuentra el equilibrio y calcula el excedente del consumidor.',
    a:`<b>Equilibrio:</b> igualamos<br>
    100 − 2P = 20 + 2P<br>
    80 = 4P → <b>P* = 20</b><br>
    Q* = 100 − 2(20) = <b>60</b><br><br>
    <b>Excedente del consumidor:</b> primero el precio máximo que alguien pagaría, o sea donde Qd = 0:<br>
    100 − 2P = 0 → P<sub>máx</sub> = 50<br><br>
    Es el triángulo entre 50 y 20, con base Q* = 60:<br>
    EC = ½ × 60 × (50 − 20) = ½ × 60 × 30 = <b>900</b><br><br>
    De paso, el excedente del productor: el precio mínimo al que ofrecerían algo es donde Qs = 0 → P = −10, que al ser negativo significa que ofrecen desde P = 0. Con Qs=20 en P=0:<br>
    EP = ½ × (60+20) × 20 = 800`},
   {q:'El gobierno fija un precio máximo de 15 en el mercado del ejercicio anterior. ¿Qué pasa?',
    a:`El techo está <b>bajo</b> el equilibrio (15 &lt; 20), así que <b>sí es vinculante</b> y tiene efecto.<br><br>
    <b>Al precio de 15:</b><br>
    Qd = 100 − 2(15) = 70<br>
    Qs = 20 + 2(15) = 50<br><br>
    <b>Escasez = 70 − 50 = 20 unidades.</b> Hay 20 unidades de demanda insatisfecha.<br><br>
    La cantidad efectivamente transada es <b>50</b>, no 70: el mercado queda limitado por el lado corto, que acá es la oferta. Nadie puede comprar lo que no se produjo.<br><br>
    <b>Quién gana y quién pierde:</b> los consumidores que logran comprar pagan menos y ganan. Los que quedan fuera —y antes sí compraban— pierden. Los productores pierden inequívocamente: venden menos y a menor precio. El excedente total cae, y esa caída es la pérdida de eficiencia.<br><br>
    Si el techo se hubiera fijado en 25, estaría <b>sobre</b> el equilibrio y no pasaría nada: el mercado seguiría transando en 20. Un precio máximo no vinculante es irrelevante.`},
   {q:'¿Por qué el impuesto al tabaco lo termina pagando casi todo el consumidor, aunque legalmente se le cobre a la empresa?',
    a:`Porque la <b>incidencia</b> del impuesto no la decide la ley, sino las <b>elasticidades relativas</b>. La regla es que el lado <b>más inelástico</b> soporta la mayor parte de la carga.<br><br>
    La demanda de tabaco es <b>muy inelástica</b>: es adictivo y no tiene sustitutos cercanos. Aunque suba el precio, los fumadores reducen poco su consumo. La oferta, en cambio, es relativamente elástica: las tabacaleras pueden ajustar producción, cambiar de mercado o dejar de producir.<br><br>
    Como el consumidor tiene menos escapatoria, la empresa puede traspasarle casi todo el impuesto vía precio sin perder ventas significativas.<br><br>
    <b>El caso extremo</b> ayuda a fijar la idea: con demanda perfectamente inelástica (vertical), el consumidor paga el <b>100 %</b> del impuesto. Con demanda perfectamente elástica (horizontal), lo paga entero el productor.<br><br>
    Esto además explica por qué los gobiernos gravan bienes inelásticos: recaudan mucho y la cantidad transada cae poco, lo que significa menor pérdida de eficiencia. El costo es que suele ser un impuesto regresivo.`}
  ]
 }
 ]
}

];
