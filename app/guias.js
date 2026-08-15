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
 id:'cap1', ramo:'mn', tag:'Semana 1', sem:1,
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
 id:'cap2', ramo:'mn', tag:'Semana 2', sem:2,
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
 id:'cap3', ramo:'mn', tag:'Semana 3', sem:3,
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
 id:'micro1', ramo:'mi', tag:'Unidad 1', sem:2,
 titulo:'Introducción a la Economía',
 bajada:'Los ocho conceptos base que el profe dijo que debes dominar antes de entrar a Teoría del Consumidor. NRC 591 y 3594.',
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
,

/* ===================== BD · ENTIDAD-RELACIÓN ===================== */
{
 id:'bd-er', ramo:'bd', tag:'Semana 2', sem:2,
 titulo:'Entidad-Relación',
 bajada:'Lo que necesitas para BD-ER-1 y BD-ER-2. Basado en el handout ER-1 del profe Recabarren.',
 min:50,
 secciones:[
 {
  t:'Para qué sirve modelar antes de programar',
  h:`<p>Antes de crear una base de datos hay que <b>diseñarla</b>. El handout lo dice directo: la etapa de diseño te permite expresar con claridad qué quieres registrar, y además evaluar si tu solución es buena antes de haber escrito una sola línea de SQL.</p>
  <p>El curso plantea tres niveles, y conviene tenerlos separados en la cabeza:</p>
  <table class="tb"><tr><th>Nivel</th><th>Qué haces</th></tr>
  <tr><td><b>Modelo conceptual</b></td><td>Estudias el dominio, defines los límites del sistema y expresas los elementos y sus relaciones de forma sencilla. <b>Acá vive el diagrama ER.</b></td></tr>
  <tr><td><b>Modelo lógico</b></td><td>Traduces eso a algo que un motor de base de datos pueda soportar (tablas). Es el modelo relacional, la semana siguiente.</td></tr>
  <tr><td><b>Modelo físico</b></td><td>Lo implementas en el motor elegido, con PostgreSQL.</td></tr></table>
  <p>Un diagrama ER se lee de un vistazo, permite ver todas las relaciones a la vez, y facilita la construcción posterior. Esa es la justificación completa de por qué existe.</p>`,
  ojo:'Que tu C1 sea de Modelación no es casualidad: el 3 de septiembre te van a pedir exactamente esto, con fase individual donde cada uno propone su propio modelo. O sea, esta unidad no se agota en la tarea de esta semana.'
 },
 {
  t:'Entidades',
  h:`<p>Una <b>entidad</b> es un objeto o concepto del mundo real del que quieres guardar información y que se puede distinguir de los demás. Alumno, Curso, Vehículo, Venta.</p>
  <p>Distingue dos cosas que se confunden:</p>
  <ul>
  <li><b>Tipo de entidad:</b> la categoría. "Alumno". Es lo que dibujas en el diagrama, como un rectángulo.</li>
  <li><b>Instancia:</b> un caso concreto. "Gabriel Rivera, RUT 12.345.678-9".</li>
  </ul>
  <p>En el diagrama solo aparecen los tipos, nunca las instancias.</p>
  <p><b>Cómo las detectas en un enunciado:</b> suelen ser <b>sustantivos</b> sobre los que el texto da varios datos. Si de algo solo se menciona un dato suelto, probablemente sea un atributo, no una entidad.</p>
  <p><b>Entidad débil.</b> Es una entidad que <b>no puede identificarse por sí sola</b>: necesita a otra para tener sentido. El ejemplo típico es un ítem de una boleta — la línea "2 unidades de producto X" no existe sin la boleta a la que pertenece. Se dibuja con doble rectángulo, y su vínculo con la entidad fuerte también va reforzado.</p>`,
  ojo:'Regla práctica para entidad débil: si al borrar la entidad fuerte la otra queda sin sentido, es débil. Una boleta sin sus líneas es una boleta vacía; una línea sin boleta no es nada.'
 },
 {
  t:'Atributos',
  h:`<p>Los <b>atributos</b> son las propiedades que describen una entidad. Nombre, fecha de nacimiento, precio.</p>
  <p>El handout distingue cuatro tipos, y estos sí caen en evaluaciones:</p>
  <table class="tb"><tr><th>Tipo</th><th>Qué es</th><th>Ejemplo</th></tr>
  <tr><td><b>Simple</b></td><td>Un valor indivisible</td><td>edad</td></tr>
  <tr><td><b>Compuesto</b></td><td>Se puede descomponer en partes</td><td>dirección → calle, número, comuna</td></tr>
  <tr><td><b>Multivaluado</b></td><td>Puede tener varios valores a la vez</td><td>teléfonos de un cliente</td></tr>
  <tr><td><b>Derivado</b></td><td>Se calcula a partir de otro, no se guarda</td><td>edad, derivada de la fecha de nacimiento</td></tr></table>
  <p><b>El identificador (clave).</b> Es el atributo —o combinación— que distingue una instancia de otra sin ambigüedad. RUT para una persona, patente para un vehículo. Se subraya en el diagrama.</p>
  <p>Un identificador tiene que cumplir dos cosas: ser <b>único</b> y <b>no cambiar</b>. Por eso el nombre no sirve como clave aunque parezca cómodo: hay repetidos y la gente se cambia el nombre.</p>`,
  ojo:'El atributo derivado es el que más se olvida. Si guardas la edad en vez de la fecha de nacimiento, tu base queda desactualizada mañana. Guarda siempre el dato fuente y calcula lo derivado al consultar.'
 },
 {
  t:'Vínculos y cardinalidad',
  h:`<p>Un <b>vínculo</b> (tu profe usa esa palabra; en otros textos verás "relación" o "interrelación") es una asociación entre entidades. Se dibuja como un rombo y se nombra con un <b>verbo</b>: un Alumno <i>cursa</i> un Ramo.</p>
  <p><b>La cardinalidad</b> responde: ¿cuántas instancias de A se pueden asociar con cuántas de B?</p>
  <table class="tb"><tr><th>Tipo</th><th>Se lee</th><th>Ejemplo</th></tr>
  <tr><td><b>1:1</b></td><td>uno a uno</td><td>Persona ↔ Pasaporte</td></tr>
  <tr><td><b>1:N</b></td><td>uno a muchos</td><td>Profesor dicta muchos Ramos</td></tr>
  <tr><td><b>N:M</b></td><td>muchos a muchos</td><td>Alumno cursa muchos Ramos, cada Ramo tiene muchos Alumnos</td></tr></table>
  <p><b>Cómo la determinas sin equivocarte:</b> hazte la pregunta en las <b>dos direcciones</b>, una a la vez, y en singular.</p>
  <ul>
  <li>"Un alumno, ¿cuántos ramos puede cursar?" → varios</li>
  <li>"Un ramo, ¿cuántos alumnos puede tener?" → varios</li>
  <li>Ambas dan varios → <b>N:M</b></li>
  </ul>
  <p>Si una da "uno" y la otra "varios", es 1:N. Si ambas dan "uno", es 1:1.</p>
  <p><b>La participación</b> es la otra mitad, y es la que más se olvida. Responde: ¿es <b>obligatorio</b> que una instancia participe del vínculo?</p>
  <ul>
  <li><b>Total (obligatoria):</b> toda instancia debe participar. Toda venta tiene que tener un cliente. Se dibuja con línea doble.</li>
  <li><b>Parcial (opcional):</b> puede no participar. Un cliente puede no haber comprado nunca. Línea simple.</li>
  </ul>`,
  ojo:'Cardinalidad y participación son preguntas distintas. La cardinalidad dice "cuántos", la participación dice "si es obligatorio". Un vínculo 1:N puede tener participación total de un lado y parcial del otro. Contestar solo una de las dos es media respuesta.'
 },
 {
  t:'De un enunciado al diagrama',
  h:`<p>El proceso que da el handout: estudiar el dominio → definir los límites del sistema → expresar los elementos y sus relaciones. En la práctica es esto:</p>
  <ol>
  <li><b>Subraya los sustantivos.</b> Candidatos a entidad.</li>
  <li><b>Subraya los verbos que conectan sustantivos.</b> Candidatos a vínculo.</li>
  <li><b>Descarta.</b> Un sustantivo del que solo se dice un dato es atributo, no entidad.</li>
  <li><b>Asigna atributos</b> a cada entidad y decide el identificador.</li>
  <li><b>Para cada vínculo, pregunta en las dos direcciones</b> y anota la cardinalidad.</li>
  <li><b>Para cada lado, pregunta si es obligatorio</b> y anota la participación.</li>
  <li><b>Revisa las débiles:</b> ¿alguna entidad no se identifica sola?</li>
  </ol>
  <p><b>Ejemplo trabajado.</b> "Una automotora vende vehículos. De cada vehículo se registra su patente, marca, modelo y año. Los clientes tienen RUT, nombre y varios teléfonos. Un cliente puede comprar varios vehículos, pero cada vehículo se vende una sola vez. De cada venta se registra la fecha y el monto."</p>
  <ul>
  <li><b>Entidades:</b> Vehículo (patente, marca, modelo, año), Cliente (RUT, nombre, teléfonos)</li>
  <li><b>Teléfonos</b> es atributo <b>multivaluado</b> de Cliente — dice "varios"</li>
  <li><b>Vínculo:</b> Compra, con atributos propios (fecha, monto). Que el vínculo tenga atributos es normal y hay que dibujarlos colgando del rombo</li>
  <li><b>Cardinalidad:</b> un cliente compra varios vehículos → varios. Un vehículo es comprado por → uno solo ("se vende una sola vez"). Entonces <b>1:N</b></li>
  <li><b>Participación:</b> todo vehículo vendido tiene cliente → total del lado Vehículo. Un cliente registrado puede no haber comprado aún → parcial del lado Cliente</li>
  </ul>`,
  ojo:'La herramienta que usan es yEd Graph Editor, online y gratis. Bájala antes de sentarte a hacer la tarea, no mientras. Y practica dibujando el ejemplo de arriba: si te sale en menos de 10 minutos, estás listo.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'"Una biblioteca presta libros a socios. De cada libro se guarda ISBN, título y autor. De cada socio, su número de socio y nombre. Un socio puede tener varios préstamos y un libro puede prestarse muchas veces a lo largo del tiempo. De cada préstamo se registra la fecha de salida y la de devolución." Identifica entidades, vínculo, cardinalidad y participación.',
    a:`<b>Entidades:</b><br>
    • <b>Libro</b> — identificador ISBN, atributos título y autor<br>
    • <b>Socio</b> — identificador número de socio, atributo nombre<br><br>
    <b>Vínculo:</b> Préstamo, con atributos propios <i>fecha de salida</i> y <i>fecha de devolución</i>.<br><br>
    <b>Cardinalidad:</b> pregunta en ambas direcciones.<br>
    • Un socio, ¿cuántos libros puede pedir? → varios<br>
    • Un libro, ¿a cuántos socios se puede prestar? → varios (a lo largo del tiempo)<br>
    → <b>N:M</b><br><br>
    <b>Participación:</b> ambas parciales. Un socio recién inscrito puede no haber pedido nada, y un libro nuevo puede no haberse prestado nunca.<br><br>
    <b>El detalle fino:</b> si un mismo socio puede pedir el mismo libro <b>más de una vez</b> en fechas distintas, la fecha de salida pasa a ser parte del identificador del préstamo. Si no lo modelas así, el segundo préstamo pisa al primero. Ese matiz es exactamente el tipo de cosa que distingue un 5 de un 7.`},
   {q:'¿Cuándo un atributo debería convertirse en entidad? Da un criterio, no un ejemplo.',
    a:`Tres señales, cualquiera basta:<br><br>
    <b>1. Tiene atributos propios.</b> Si de "marca" solo guardas el nombre, es atributo. Si además necesitas su país de origen y su representante en Chile, ya es entidad.<br><br>
    <b>2. Se repite en muchas instancias.</b> Si mil vehículos dicen "Toyota", estás guardando ese texto mil veces. Eso es redundancia, y trae los problemas que verás en Formas Normales: si se escribe mal en una, tu base queda inconsistente.<br><br>
    <b>3. Se relaciona con otras entidades.</b> Si "marca" tiene que conectarse con "proveedor", necesita ser entidad para poder participar en un vínculo. Los atributos no se vinculan.<br><br>
    Este criterio es la puerta de entrada a la normalización, que es la unidad de la semana siguiente.`},
   {q:'¿Por qué un vínculo N:M no se puede implementar directamente como tabla, y qué se hace?',
    a:`Porque una tabla relacional guarda <b>un valor por celda</b>. Si un alumno cursa cinco ramos, no puedes meter cinco códigos en una sola celda de la tabla Alumno — eso viola la primera forma normal.<br><br>
    <b>La solución:</b> el vínculo N:M se convierte en una <b>tabla propia</b>, a veces llamada tabla intermedia o de asociación. Contiene:<br>
    • la clave del alumno<br>
    • la clave del ramo<br>
    • los atributos propios del vínculo (nota, semestre)<br><br>
    Su clave primaria es la <b>combinación</b> de ambas claves foráneas.<br><br>
    Fíjate que esto ya es traducir del modelo conceptual al lógico, que es el tema de MR-1 y MR-2. Por eso ER no es un ejercicio aislado: lo que dibujes acá determina las tablas que vas a escribir la próxima semana.`}
  ]
 }
 ]
},

/* ===================== MN · ERROR NUMÉRICO ===================== */
{
 id:'mn-error', ramo:'mn', tag:'Semana 1', sem:1,
 titulo:'Error numérico',
 bajada:'Capítulo 4 del libro guía. Fue la primera clase y es la base de todo el resto del curso.',
 min:35,
 secciones:[
 {
  t:'Los dos errores que existen',
  h:`<p>Todo resultado numérico carga dos errores de naturaleza distinta. Distinguirlos es lo que te van a preguntar.</p>
  <p><b>Error de truncamiento.</b> Viene de que reemplazaste un proceso infinito por uno finito. Cuando cortas una serie de Taylor, cuando usas una recta para aproximar una curva, cuando das pasos de tamaño h en vez de infinitesimales. <b>Es culpa del método</b>, no del computador.</p>
  <p><b>Error de redondeo.</b> Viene de que el computador guarda los números con una cantidad finita de dígitos. Ya lo viste con 0.1 + 0.2 ≠ 0.3. <b>Es culpa de la máquina</b>, no del método.</p>
  <p>Y acá está el punto clave del capítulo: <b>tiran en direcciones opuestas</b>.</p>
  <p class="fx">h ↓ → truncamiento ↓ pero redondeo ↑</p>
  <p>Si achicas el paso, aproximas mejor pero haces más operaciones y acumulas más redondeo. Existe un <b>h óptimo</b>, y pasado ese punto achicar más <b>empeora</b> el resultado. Eso es contraintuitivo y por eso se pregunta.</p>`
 },
 {
  t:'Cómo se mide el error',
  h:`<p>Tres medidas, y hay que saber cuándo usar cada una:</p>
  <p class="fx">Error absoluto = | valor exacto − aproximado |</p>
  <p class="fx">Error relativo = error absoluto / | valor exacto |</p>
  <p>El absoluto está en las unidades del problema (0,368 kg de sal). El relativo es adimensional y se expresa en porcentaje (6,7 %).</p>
  <p><b>Cuál importa:</b> casi siempre el relativo. Un error de 1 metro es despreciable midiendo una carretera y catastrófico fabricando una pieza. El absoluto solo, sin contexto, no dice nada.</p>
  <p><b>El problema práctico:</b> si no conoces el valor exacto —que es el caso normal— no puedes calcular ninguno de los dos. Ahí se usa el <b>error relativo aproximado</b>, comparando dos iteraciones sucesivas:</p>
  <p class="fx">ε<sub>a</sub> = | (actual − anterior) / actual |</p>
  <p>Ese es el criterio de parada de todo método iterativo: sigues iterando hasta que ε<sub>a</sub> baje de una tolerancia.</p>`,
  ojo:'Este es el puente con lo que ya programaste. El "while con tolerancia" que viste en el Cap 3 usa exactamente esta fórmula. No es teoría suelta: es la línea de código que decide cuándo parar.'
 },
 {
  t:'Precisión finita en la práctica',
  h:`<p>Un <code>float</code> de 64 bits guarda unos 15 a 16 dígitos decimales significativos. Todo lo que pase de ahí se pierde.</p>
  <p><b>El epsilon de máquina</b> es el número más chico que sumado a 1 da algo distinto de 1. En Python vale aproximadamente 2,22 × 10⁻¹⁶.</p>
  <p><b>Los dos desastres clásicos:</b></p>
  <p><b>1. Cancelación catastrófica.</b> Restar dos números casi iguales destruye los dígitos significativos. Si tienes 1,0000001 − 1,0000000, los primeros siete dígitos se cancelan y te quedas con la basura del final. Por eso fórmulas algebraicamente equivalentes pueden dar resultados muy distintos en el computador.</p>
  <p><b>2. Sumar números de escalas muy distintas.</b> Si sumas 10⁸ + 10⁻⁸, el segundo simplemente desaparece: no hay dígitos disponibles para representarlo.</p>`,
  code:`import numpy as np

# Epsilon de máquina
print(np.finfo(float).eps)        # 2.220446049250313e-16
print(1.0 + np.finfo(float).eps/2 == 1.0)   # True: se perdió

# Cancelación catastrófica
a = 1.0000000000000002
b = 1.0000000000000000
print(a - b)                      # 2.220446049250313e-16, casi puro ruido

# Sumar escalas distintas
print(1e16 + 1.0 - 1e16)          # 0.0  <- el 1 desapareció
print(1e16 - 1e16 + 1.0)          # 1.0  <- mismo cálculo, otro orden

# NUNCA compares floats con ==
print(np.isclose(0.1 + 0.2, 0.3))  # True`,
  ojo:'Fíjate en las dos últimas sumas: es la misma operación matemática con distinto orden y dan resultados diferentes. En aritmética de punto flotante la suma NO es asociativa. Es el tipo de resultado que parece un bug y es física del computador.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Aproximaste un valor y te dio 5,12 cuando el exacto era 5,4881. Calcula error absoluto y relativo, y di cuál reportarías.',
    a:`<b>Error absoluto:</b> |5,4881 − 5,12| = <b>0,3681</b><br>
    <b>Error relativo:</b> 0,3681 / 5,4881 = 0,0671 = <b>6,71 %</b><br><br>
    Reportarías el <b>relativo</b>, porque es el único que permite juzgar si es aceptable. Un 6,7 % de error es mucho para un cálculo de ingeniería; normalmente se busca menos del 1 %.<br><br>
    El absoluto solo tiene sentido si el lector conoce la escala del problema. "0,37 kg de error" no dice nada si no sabes si el estanque tenía 5 kg o 5 toneladas.`},
   {q:'Si al reducir h a la mitad el error también se reduce a la mitad, ¿de qué orden es el método? ¿Y si se redujera a la cuarta parte?',
    a:`<b>Primer orden</b>, o sea O(h).<br><br>
    El razonamiento: si error ≈ C·hⁿ, entonces al pasar de h a h/2 el error nuevo es C·(h/2)ⁿ = C·hⁿ/2ⁿ. O sea, el error se divide por 2ⁿ.<br>
    • Se divide por 2 → 2ⁿ = 2 → <b>n = 1</b><br>
    • Se divide por 4 → 2ⁿ = 4 → <b>n = 2</b>, segundo orden<br>
    • Se divide por 16 → n = 4, cuarto orden (los métodos Runge-Kutta clásicos)<br><br>
    <b>Cómo se verifica en la práctica:</b> graficas el error contra h en escala <b>loglog</b>. Sale una recta, y la <b>pendiente de esa recta es n</b>. Es la forma estándar de demostrar experimentalmente el orden de un método, y te la van a pedir en laboratorio.<br><br>
    Euler, que ya programaste, es de primer orden. Por eso al bajar h de 20 a 5 (cuatro veces menos) el error bajó cuatro veces, no dieciséis.`},
   {q:'¿Por qué achicar h indefinidamente no lleva al resultado exacto?',
    a:`Porque los dos errores se mueven en direcciones opuestas.<br><br>
    <b>El truncamiento baja</b> al achicar h: aproximas mejor la curva.<br>
    <b>El redondeo sube</b> al achicar h: haces muchas más operaciones y cada una arrastra su errorcito. Además, con h muy chico las diferencias que calculas se vuelven tan pequeñas que caen en la zona de cancelación catastrófica.<br><br>
    La suma de ambos tiene forma de U: baja, toca un mínimo, y vuelve a subir. Ese mínimo es el <b>h óptimo</b>. Pasado ese punto, seguir achicando el paso <b>empeora</b> el resultado y encima cuesta más tiempo de cómputo.<br><br>
    Es probablemente el resultado más contraintuitivo del capítulo, y por eso mismo el más preguntado.`}
  ]
 }
 ]
},

/* ===================== BD · MODELO RELACIONAL ===================== */
{
 id:'bd-mr', ramo:'bd', tag:'Semana 3', sem:3,
 titulo:'Modelo Relacional',
 bajada:'Cómo pasar del diagrama ER a tablas reales. Para BD-MR-1 y BD-MR-2.',
 min:45,
 secciones:[
 {
  t:'El vocabulario formal',
  h:`<p>El modelo relacional es el <b>modelo lógico</b>: lo que un motor de base de datos puede realmente ejecutar. Tiene su propio vocabulario y en pruebas se exige usarlo bien.</p>
  <table class="tb"><tr><th>Término formal</th><th>En la práctica</th></tr>
  <tr><td><b>Relación</b></td><td>Una tabla</td></tr>
  <tr><td><b>Tupla</b></td><td>Una fila</td></tr>
  <tr><td><b>Atributo</b></td><td>Una columna</td></tr>
  <tr><td><b>Dominio</b></td><td>El conjunto de valores válidos de un atributo</td></tr>
  <tr><td><b>Grado</b></td><td>Cantidad de atributos</td></tr>
  <tr><td><b>Cardinalidad</b></td><td>Cantidad de tuplas</td></tr></table>
  <p>Ojo con "relación": en el modelo relacional significa <b>tabla</b>, no vínculo. Es una fuente de confusión permanente, y es parte de por qué tu profe usa "vínculo" en el diagrama ER.</p>
  <p>La notación de un esquema es: <span class="fx-i">Alumno(<u>rut</u>, nombre, email)</span>, con la clave primaria subrayada.</p>`
 },
 {
  t:'Claves',
  h:`<p>El handout MR-1 gira casi entero en torno a esto: hay 22 menciones a "Clave".</p>
  <ul>
  <li><b>Superclave:</b> cualquier conjunto de atributos que identifica una tupla de forma única. Puede tener atributos de sobra.</li>
  <li><b>Clave candidata:</b> una superclave <b>mínima</b> — si le quitas cualquier atributo, deja de identificar.</li>
  <li><b>Clave primaria:</b> la candidata que eliges como identificador oficial. No admite nulos y no debería cambiar.</li>
  <li><b>Clave foránea:</b> un atributo que apunta a la clave primaria de otra tabla. Es lo que materializa los vínculos.</li>
  </ul>
  <p><b>Las dos reglas de integridad:</b></p>
  <p><b>1. Integridad de entidad.</b> La clave primaria no puede ser nula. Si lo fuera, no podrías distinguir esa tupla.</p>
  <p><b>2. Integridad referencial.</b> Toda clave foránea debe apuntar a una tupla que <b>existe</b>, o ser nula. No puedes tener una venta cuyo cliente no está en la tabla Cliente.</p>`,
  ojo:'La integridad referencial es lo que impide dejar datos huérfanos, y es la razón por la que el motor te va a rechazar un DELETE de un cliente que tiene ventas asociadas. No es un error tuyo: es la base protegiéndose.'
 },
 {
  t:'Traducir ER a tablas: las reglas',
  h:`<p>Esto es mecánico una vez que sabes las reglas. Son cuatro casos.</p>
  <p><b>1. Cada entidad fuerte → una tabla.</b> Sus atributos simples son las columnas. Su identificador es la clave primaria.</p>
  <p><b>2. Vínculo 1:N → clave foránea en el lado N.</b> No se crea tabla nueva. Si un Profesor dicta muchos Ramos, la tabla Ramo lleva la columna <code>rut_profesor</code>.</p>
  <p><b>3. Vínculo N:M → tabla nueva.</b> Contiene las claves de ambos lados más los atributos propios del vínculo. La clave primaria es la combinación de ambas.</p>
  <p><b>4. Vínculo 1:1 → clave foránea en cualquiera de los dos</b>, preferentemente en el lado de participación total.</p>
  <p><b>Los atributos especiales:</b></p>
  <ul>
  <li><b>Compuesto:</b> se descompone en sus partes. Dirección se vuelve calle, número, comuna.</li>
  <li><b>Multivaluado:</b> se va a una <b>tabla aparte</b>, con la clave de la entidad original. Los teléfonos de un cliente son una tabla Telefono(rut_cliente, numero).</li>
  <li><b>Derivado:</b> no se guarda. Se calcula al consultar.</li>
  </ul>
  <p><b>5. Entidad débil → tabla</b> cuya clave primaria es la combinación de su identificador parcial más la clave de la entidad fuerte.</p>`,
  ojo:'La regla 2 es la que más se equivoca: la clave foránea va SIEMPRE en el lado "muchos". Si la pusieras en el lado "uno", tendrías que guardar varios valores en una celda, que es justo lo que el modelo relacional no permite.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Traduce a tablas: Cliente(RUT, nombre, teléfonos múltiples) y Vehículo(patente, marca), vinculados por Compra 1:N con atributos fecha y monto.',
    a:`<b>Cliente</b>(<u>rut</u>, nombre)<br>
    <b>Telefono</b>(<u>rut_cliente</u>, <u>numero</u>) — clave foránea rut_cliente → Cliente<br>
    <b>Vehiculo</b>(<u>patente</u>, marca, rut_cliente, fecha_compra, monto)<br><br>
    <b>Por qué queda así:</b><br>
    • Teléfonos es multivaluado → tabla propia. Su clave primaria es la combinación rut + número, porque un cliente puede tener varios y un número podría repetirse entre clientes.<br>
    • La compra es 1:N (un cliente compra varios vehículos, cada vehículo se vende una vez) → clave foránea en el lado N, que es Vehículo.<br>
    • Los atributos del vínculo (fecha, monto) <b>viajan junto con la clave foránea</b>, a la misma tabla. Eso es lo que más se olvida: no crean tabla propia en un 1:N.<br><br>
    Si la compra fuera N:M, en cambio, sí habría una tabla Compra(<u>rut_cliente</u>, <u>patente</u>, fecha, monto).`},
   {q:'¿Cuál es la diferencia entre clave candidata y clave primaria? ¿Puede una tabla tener varias primarias?',
    a:`Una <b>clave candidata</b> es cualquier conjunto mínimo de atributos que identifica de forma única. Una tabla puede tener <b>varias</b>.<br><br>
    Ejemplo: en una tabla Alumno, tanto el <i>RUT</i> como el <i>número de matrícula</i> identifican únicamente. Ambas son candidatas.<br><br>
    La <b>clave primaria</b> es la que <b>eliges</b> entre las candidatas para que sea el identificador oficial. Solo puede haber <b>una</b> por tabla. Las otras candidatas quedan como claves alternativas y se marcan como UNIQUE.<br><br>
    <b>Criterios para elegir:</b> la más estable (que no cambie), la más corta, y la que no admita nulos. Entre RUT y matrícula suele preferirse la matrícula, porque es interna a la institución y no depende de un dato externo.<br><br>
    "Mínima" es la palabra clave de candidata: {RUT, nombre} identifica única, pero no es candidata porque le sobra el nombre — el RUT solo ya basta.`}
  ]
 }
 ]
},

/* ===================== BD · FORMAS NORMALES ===================== */
{
 id:'bd-fn', ramo:'bd', tag:'Semana 3', sem:3,
 titulo:'Formas Normales',
 bajada:'Dependencias funcionales, anomalías y cómo llegar a 3FN. Para BD-FN-1.',
 min:45,
 secciones:[
 {
  t:'El problema: anomalías',
  h:`<p>La normalización existe para resolver un problema concreto: cuando guardas datos repetidos, la base se corrompe sola. Los handouts NZ hablan de <b>anomalías</b> y hay tres.</p>
  <p>Imagina una única tabla con alumno, ramo y profesor:</p>
  <table class="tb"><tr><th>rut</th><th>nombre</th><th>ramo</th><th>profesor</th></tr>
  <tr><td>111</td><td>Ana</td><td>BD</td><td>Díaz</td></tr>
  <tr><td>111</td><td>Ana</td><td>MN</td><td>Hernández</td></tr>
  <tr><td>222</td><td>Luis</td><td>BD</td><td>Díaz</td></tr></table>
  <ul>
  <li><b>Anomalía de inserción:</b> no puedes registrar un ramo nuevo que todavía no tiene alumnos inscritos, porque la clave necesita un rut.</li>
  <li><b>Anomalía de eliminación:</b> si borras a Luis, y era el único de BD... perderías también quién dicta BD.</li>
  <li><b>Anomalía de actualización:</b> si el profesor de BD cambia, tienes que modificarlo en <b>todas</b> las filas. Si se te escapa una, la base queda inconsistente y ya no sabes cuál es la verdad.</li>
  </ul>
  <p>La causa raíz de las tres es la misma: <b>redundancia</b>. El mismo hecho guardado en varios lugares.</p>`
 },
 {
  t:'Dependencias funcionales',
  h:`<p>Es la herramienta formal para detectar redundancia. Se escribe:</p>
  <p class="fx">A → B</p>
  <p>y se lee "A determina B": si conoces el valor de A, el de B queda determinado sin ambigüedad. Nunca vas a encontrar dos filas con el mismo A y distinto B.</p>
  <p>En el ejemplo de arriba: <span class="fx-i">rut → nombre</span> (un RUT determina un solo nombre) y <span class="fx-i">ramo → profesor</span>.</p>
  <p><b>Los tipos que hay que distinguir:</b></p>
  <ul>
  <li><b>Dependencia total:</b> B depende de <b>toda</b> la clave compuesta.</li>
  <li><b>Dependencia parcial:</b> B depende de <b>una parte</b> de la clave compuesta. Es lo que rompe la 2FN.</li>
  <li><b>Dependencia transitiva:</b> A → B y B → C, entonces A → C indirectamente. C no depende de la clave directamente sino a través de B. Es lo que rompe la 3FN.</li>
  </ul>`,
  ojo:'Las dependencias funcionales no se deducen de los datos que ves, sino de las REGLAS del negocio. Que en tus tres filas ningún nombre se repita no prueba que rut → nombre; lo prueba el hecho de que un RUT pertenece a una sola persona. Confundir esto es un error clásico.'
 },
 {
  t:'Las tres formas normales',
  h:`<p>Son acumulativas: para estar en 3FN tienes que cumplir también 1FN y 2FN.</p>
  <p><b>1FN — valores atómicos</b></p>
  <p>Cada celda contiene un solo valor. Nada de "1234567, 8765432" en la columna teléfono, ni columnas repetidas tipo telefono1, telefono2, telefono3.</p>
  <p><i>Se arregla:</i> sacando lo multivaluado a una tabla aparte.</p>
  <p><b>2FN — sin dependencias parciales</b></p>
  <p>Todo atributo que no es clave depende de la clave <b>completa</b>, no de una parte.</p>
  <p>Solo puede fallar si la clave primaria es <b>compuesta</b>. Con clave simple, 1FN implica 2FN automáticamente.</p>
  <p><i>Ejemplo:</i> en Inscripcion(<u>rut</u>, <u>ramo</u>, nota, nombre_alumno), el nombre depende solo del rut, no de la combinación. Dependencia parcial.</p>
  <p><i>Se arregla:</i> separando lo que depende de cada parte en su propia tabla.</p>
  <p><b>3FN — sin dependencias transitivas</b></p>
  <p>Ningún atributo no-clave depende de otro atributo no-clave.</p>
  <p><i>Ejemplo:</i> en Alumno(<u>rut</u>, nombre, cod_carrera, nombre_carrera), el nombre de la carrera depende de cod_carrera, que no es clave. Transitiva.</p>
  <p><i>Se arregla:</i> sacando esos atributos a su propia tabla.</p>
  <p><b>BCNF</b> es una versión más estricta de la 3FN: exige que <b>todo</b> determinante sea una superclave. Aparece en NZ-2 y solo se distingue de la 3FN en casos con múltiples claves candidatas superpuestas.</p>`
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'La tabla Venta(<u>nro_boleta</u>, <u>cod_producto</u>, cantidad, nombre_producto, precio_unitario, rut_cliente, nombre_cliente) ¿en qué forma normal está y cómo la normalizas?',
    a:`<b>Está en 1FN</b> (los valores son atómicos) pero <b>no en 2FN</b>.<br><br>
    La clave es compuesta: {nro_boleta, cod_producto}. Y hay dependencias parciales:<br>
    • cod_producto → nombre_producto, precio_unitario<br>
    • nro_boleta → rut_cliente, nombre_cliente<br><br>
    Ninguno de esos depende de la clave completa. Además hay una <b>transitiva</b>: rut_cliente → nombre_cliente, y rut_cliente no es clave.<br><br>
    <b>Normalizada a 3FN:</b><br>
    <b>Producto</b>(<u>cod_producto</u>, nombre_producto, precio_unitario)<br>
    <b>Cliente</b>(<u>rut_cliente</u>, nombre_cliente)<br>
    <b>Boleta</b>(<u>nro_boleta</u>, rut_cliente) — FK a Cliente<br>
    <b>DetalleVenta</b>(<u>nro_boleta</u>, <u>cod_producto</u>, cantidad) — FK a ambas<br><br>
    Ahora el precio de un producto vive en <b>un solo lugar</b>. Cambiarlo es una operación, no mil.<br><br>
    <b>Nota de diseño real:</b> en una boleta normalmente se guarda el precio <i>al momento de la venta</i> dentro de DetalleVenta, porque los precios cambian y la boleta histórica no debe alterarse. Eso es desnormalización deliberada y justificada — distinto de no saber normalizar.`},
   {q:'¿Por qué una tabla con clave primaria simple que está en 1FN siempre está en 2FN?',
    a:`Porque la 2FN prohíbe las <b>dependencias parciales</b>, y una dependencia parcial es aquella en que un atributo depende de <b>una parte</b> de la clave.<br><br>
    Si la clave tiene un solo atributo, <b>no tiene partes</b>. No existe un subconjunto propio no vacío del cual algo pueda depender parcialmente. Por lo tanto la violación es imposible por construcción.<br><br>
    <b>La consecuencia práctica:</b> cuando revises 2FN, lo primero que miras es si la clave es compuesta. Si no lo es, saltas directo a revisar 3FN y te ahorras la mitad del trabajo.<br><br>
    Esta es una pregunta de razonamiento, no de memoria: te están evaluando si entendiste la definición o si te la aprendiste.`}
  ]
 }
 ]
}
,

/* ===================== ME · U1 REPASO DE PROBABILIDAD ===================== */
{
 id:'me-u1', ramo:'me', tag:'Semana 1', sem:1,
 titulo:'Repaso de probabilidad',
 bajada:'Capítulo 1. La base sobre la que se monta todo el resto del curso. Formulario y conceptos, sin ejercicios.',
 min:35,
 secciones:[
 {
  t:'Lo esencial en una hoja',
  h:`<p>El profe da esto por sabido desde la segunda semana. Si algo de acá no te sale automático, ese es tu punto débil.</p>
  <p><b>Probabilidad condicional</b></p>
  <p class="fx">P(A | B) = P(A ∩ B) / P(B),  con P(B) &gt; 0</p>
  <p><b>Independencia.</b> A y B son independientes si P(A ∩ B) = P(A)·P(B), lo que equivale a P(A|B) = P(A). Saber que ocurrió B no cambia nada sobre A.</p>
  <p><b>Probabilidad total</b> — cuando el espacio se parte en casos excluyentes B₁…Bₙ:</p>
  <p class="fx">P(A) = Σ P(A | B<sub>i</sub>) · P(B<sub>i</sub>)</p>
  <p><b>Bayes</b> — invierte el condicionamiento:</p>
  <p class="fx">P(B<sub>i</sub> | A) = P(A | B<sub>i</sub>) P(B<sub>i</sub>) / Σ P(A | B<sub>j</sub>) P(B<sub>j</sub>)</p>`,
  ojo:'Bayes se usa cuando te dan el efecto y te preguntan por la causa. "Salió positivo el test, ¿cuál es la probabilidad de que esté enfermo?" — te dieron P(positivo|enfermo) y quieren P(enfermo|positivo). Reconocer esa inversión es la mitad del ejercicio.'
 },
 {
  t:'Esperanza y varianza',
  h:`<p class="fx">E[X] = Σ x·p(x)   (discreta)   ó   ∫ x·f(x) dx   (continua)</p>
  <p class="fx">Var(X) = E[X²] − (E[X])²</p>
  <p><b>Propiedades que vas a usar sin parar:</b></p>
  <ul>
  <li>E[aX + b] = a·E[X] + b — la esperanza es <b>lineal siempre</b>, haya o no independencia</li>
  <li>Var(aX + b) = a²·Var(X) — la constante b no afecta la dispersión, y la a va al cuadrado</li>
  <li>E[X + Y] = E[X] + E[Y] — <b>siempre</b>, incluso si dependen</li>
  <li>Var(X + Y) = Var(X) + Var(Y) — <b>solo si son independientes</b></li>
  </ul>
  <p><b>Esperanza condicional</b>, que es la herramienta más potente del curso:</p>
  <p class="fx">E[X] = E[ E[X | Y] ]</p>
  <p>Se llama ley de esperanzas iteradas. Sirve para calcular esperanzas difíciles condicionando en algo que las vuelve fáciles. Vuelve a aparecer en Markov.</p>`,
  ojo:'La asimetría entre esperanza y varianza es lo que más se equivoca: la esperanza de una suma siempre se suma, la varianza solo si hay independencia. Si no lo son, aparece un término de covarianza.'
 },
 {
  t:'Distribuciones que necesitas de memoria',
  h:`<table class="tb"><tr><th>Distribución</th><th>Modela</th><th>E[X]</th><th>Var(X)</th></tr>
  <tr><td><b>Bernoulli(p)</b></td><td>Un intento: éxito o fracaso</td><td>p</td><td>p(1−p)</td></tr>
  <tr><td><b>Binomial(n,p)</b></td><td>Éxitos en n intentos</td><td>np</td><td>np(1−p)</td></tr>
  <tr><td><b>Geométrica(p)</b></td><td>Intentos hasta el primer éxito</td><td>1/p</td><td>(1−p)/p²</td></tr>
  <tr><td><b>Poisson(λ)</b></td><td>Eventos en un intervalo fijo</td><td>λ</td><td>λ</td></tr>
  <tr><td><b>Exponencial(λ)</b></td><td>Tiempo hasta el próximo evento</td><td>1/λ</td><td>1/λ²</td></tr>
  <tr><td><b>Uniforme(a,b)</b></td><td>Igual chance en un rango</td><td>(a+b)/2</td><td>(b−a)²/12</td></tr>
  <tr><td><b>Normal(μ,σ²)</b></td><td>Suma de muchos efectos chicos</td><td>μ</td><td>σ²</td></tr></table>
  <p>Fíjate en el par que domina el curso: <b>Poisson cuenta eventos</b> en un periodo, <b>Exponencial mide el tiempo</b> hasta que ocurre uno. Son dos caras del mismo proceso, y esa dualidad es exactamente el Capítulo 2.</p>
  <p>Y en Poisson pasa algo poco común: <b>la media y la varianza son iguales</b>, ambas λ. Es un chequeo rápido de que estás usando la distribución correcta.</p>`
 },
 {
  t:'La propiedad sin memoria',
  h:`<p>Es la propiedad más importante del curso y por eso conviene entenderla ahora y no cuando aparezca.</p>
  <p class="fx">P(X &gt; s + t | X &gt; s) = P(X &gt; t)</p>
  <p>En palabras: si llevas <i>s</i> minutos esperando, la probabilidad de esperar <i>t</i> minutos más es la misma que si recién hubieras llegado. <b>El sistema no recuerda cuánto llevas esperando.</b></p>
  <p>La <b>exponencial</b> es la única distribución continua con esta propiedad, y la <b>geométrica</b> la única discreta.</p>
  <p><b>Por qué importa:</b> es lo que hace que las cadenas de Markov funcionen. Si el tiempo que llevas en un estado no afecta cuándo saldrás, entonces basta con saber dónde estás ahora — no necesitas la historia. Eso es literalmente la propiedad de Markov.</p>`,
  ojo:'Es contraintuitivo y hay que aceptarlo: una ampolleta exponencial que lleva 1000 horas encendida tiene la misma expectativa de vida restante que una nueva. Por eso la exponencial modela mal el desgaste y bien las llegadas aleatorias.'
 }
 ]
},

/* ===================== ME · U2 PROCESO DE POISSON ===================== */
{
 id:'me-u2', ramo:'me', tag:'Semana 2', sem:2,
 titulo:'Proceso de Poisson',
 bajada:'Capítulo 2, la materia que acabas de ver. Conteo, tiempos entre eventos, descomposición, suma y caso no homogéneo.',
 min:55,
 secciones:[
 {
  t:'Proceso de conteo',
  h:`<p>Un <b>proceso de conteo</b> {N(t), t ≥ 0} cuenta cuántos eventos ocurrieron hasta el instante t. Cumple cuatro cosas por definición: N(t) ≥ 0, toma valores enteros, es no decreciente, y N(t) − N(s) es el número de eventos en el intervalo (s, t].</p>
  <p><b>Las dos propiedades que definen todo:</b></p>
  <ul>
  <li><b>Incrementos independientes:</b> lo que pasa en intervalos que no se solapan es independiente. Que hayan llegado 10 clientes entre las 9 y las 10 no dice nada sobre cuántos llegarán entre las 11 y las 12.</li>
  <li><b>Incrementos estacionarios:</b> la distribución del número de eventos depende solo del <b>largo</b> del intervalo, no de dónde empieza. Entre las 9 y las 10 se distribuye igual que entre las 15 y las 16.</li>
  </ul>
  <p>Cuando un proceso de conteo cumple ambas y los eventos llegan a tasa constante λ, tienes un <b>proceso de Poisson homogéneo</b>.</p>`
 },
 {
  t:'Las dos caras del proceso',
  h:`<p>Acá está la distinción que mencionaste y que es el corazón del capítulo. El mismo proceso se mira de dos formas:</p>
  <p><b>1. Cuántos eventos en un periodo</b> → Poisson</p>
  <p class="fx">N(t) ~ Poisson(λt)</p>
  <p class="fx">P(N(t) = n) = e<sup>−λt</sup> (λt)<sup>n</sup> / n!</p>
  <p>Con E[N(t)] = λt y Var(N(t)) = λt.</p>
  <p><b>2. Cuánto tiempo hasta el próximo evento</b> → Exponencial</p>
  <p>Los tiempos entre eventos T₁, T₂, T₃… son independientes y todos:</p>
  <p class="fx">T<sub>i</sub> ~ Exponencial(λ),  E[T<sub>i</sub>] = 1/λ</p>
  <p><b>El puente entre las dos:</b></p>
  <p class="fx">P(T₁ &gt; t) = P(N(t) = 0) = e<sup>−λt</sup></p>
  <p>"El primer evento tarda más de t" es exactamente lo mismo que "no hubo eventos hasta t". Esa igualdad es la que conecta ambas visiones, y es una demostración que puede caer.</p>
  <p><b>3. Tiempo hasta el n-ésimo evento</b> → Gamma / Erlang</p>
  <p class="fx">S<sub>n</sub> = T₁ + … + T<sub>n</sub> ~ Gamma(n, λ),  E[S<sub>n</sub>] = n/λ</p>`,
  ojo:'La regla para saber qué usar: si la pregunta empieza con "cuántos" y menciona un periodo, es Poisson. Si empieza con "cuánto tiempo" o "cuál es la probabilidad de que pase más de X minutos", es exponencial. Y si dice "hasta el tercer cliente", es Gamma.'
 },
 {
  t:'Descomposición, suma y mezcla',
  h:`<p>Tres operaciones que aparecen en casi toda prueba.</p>
  <p><b>Descomposición (thinning).</b> Si cada evento de un Poisson(λ) se clasifica como tipo A con probabilidad p, y tipo B con probabilidad 1−p, entonces:</p>
  <p class="fx">N<sub>A</sub>(t) ~ Poisson(λp)  y  N<sub>B</sub>(t) ~ Poisson(λ(1−p))</p>
  <p>Y lo notable: <b>son independientes entre sí</b>. Eso es lo que sorprende, porque vienen del mismo proceso original.</p>
  <p><b>Suma (superposición).</b> Si juntas dos procesos independientes:</p>
  <p class="fx">N₁ ~ Poisson(λ₁),  N₂ ~ Poisson(λ₂)  ⟹  N₁ + N₂ ~ Poisson(λ₁ + λ₂)</p>
  <p>Y la probabilidad de que el próximo evento venga del proceso 1 es λ₁/(λ₁+λ₂).</p>
  <p><b>Mezcla.</b> Cuando la tasa misma es aleatoria, se condiciona en ella y se aplica la ley de esperanzas iteradas del capítulo anterior.</p>`,
  ojo:'Descomposición y suma son la razón de que Poisson sea tan usado: puedes separar y juntar procesos libremente sin salirte de la familia. Ninguna otra distribución de conteo se comporta tan bien, y por eso se modela con Poisson aunque la realidad sea más sucia.'
 },
 {
  t:'Distribución condicional de los tiempos',
  h:`<p>Un resultado que se ve raro pero es de los más elegantes del capítulo.</p>
  <p><b>Si sabes que ocurrió exactamente un evento en (0, t)</b>, entonces el instante en que ocurrió se distribuye <b>uniforme</b> en ese intervalo. No hay preferencia por ningún momento.</p>
  <p>Generalizando: dado que ocurrieron n eventos en (0, t), los instantes se distribuyen como n puntos uniformes independientes ordenados de menor a mayor (estadísticos de orden).</p>
  <p><b>Qué significa:</b> el proceso de Poisson reparte los eventos "sin memoria y sin preferencia". Es la formalización de que las llegadas son completamente aleatorias.</p>`
 },
 {
  t:'Proceso de Poisson no homogéneo',
  h:`<p>Se relaja el supuesto de tasa constante: ahora λ(t) varía con el tiempo. Modela cosas reales, como que a un local llegue más gente al mediodía que a las 4 de la tarde.</p>
  <p>Aparece la <b>función de intensidad acumulada</b>:</p>
  <p class="fx">m(t) = ∫₀ᵗ λ(u) du</p>
  <p>Y el conteo pasa a ser:</p>
  <p class="fx">N(t) ~ Poisson( m(t) )</p>
  <p class="fx">N(t) − N(s) ~ Poisson( m(t) − m(s) )</p>
  <p><b>Lo que se pierde:</b> los incrementos estacionarios. Ya no da lo mismo dónde empieza el intervalo, solo su largo. Los incrementos <b>independientes</b> sí se mantienen.</p>
  <p><b>Y ojo con los tiempos entre eventos:</b> dejan de ser exponenciales idénticamente distribuidos. Esa es la diferencia práctica más grande con el caso homogéneo.</p>`,
  ojo:'Regla mecánica para resolver: donde en el caso homogéneo escribías λt, en el no homogéneo escribes m(t) = ∫λ(u)du. Todo lo demás de las fórmulas de conteo se mantiene igual. Con eso resuelves la mayoría de los ejercicios.'
 },
 {
  t:'Formulario',
  h:`<table class="tb"><tr><th>Qué necesito</th><th>Fórmula</th></tr>
  <tr><td>n eventos en tiempo t</td><td>e<sup>−λt</sup>(λt)<sup>n</sup>/n!</td></tr>
  <tr><td>Ningún evento hasta t</td><td>e<sup>−λt</sup></td></tr>
  <tr><td>Esperar más de t</td><td>P(T &gt; t) = e<sup>−λt</sup></td></tr>
  <tr><td>Esperar menos de t</td><td>P(T ≤ t) = 1 − e<sup>−λt</sup></td></tr>
  <tr><td>Tiempo medio entre eventos</td><td>1/λ</td></tr>
  <tr><td>Tiempo medio hasta el n-ésimo</td><td>n/λ</td></tr>
  <tr><td>Eventos esperados en t</td><td>λt</td></tr>
  <tr><td>Separar por tipo (prob. p)</td><td>Poisson(λp), independiente del resto</td></tr>
  <tr><td>Juntar dos procesos</td><td>Poisson(λ₁+λ₂)</td></tr>
  <tr><td>¿De cuál viene el próximo?</td><td>λ₁/(λ₁+λ₂)</td></tr>
  <tr><td>Tasa variable</td><td>reemplaza λt por ∫₀ᵗλ(u)du</td></tr></table>
  <p>Esta tabla es básicamente lo que querrías tener en tu formulario manuscrito para el Control 1 y la Prueba 1.</p>`
 }
 ]
},

/* ===================== MI · TEORÍA DEL CONSUMIDOR ===================== */
{
 id:'mi-u1', ramo:'mi', tag:'Semana 1-2', sem:2,
 titulo:'Teoría del Consumidor',
 bajada:'Unidades I.1, I.2 y I.3: preferencias, maximización de utilidad y funciones de demanda.',
 min:60,
 secciones:[
 {
  t:'I.1 · Axiomas de preferencia',
  h:`<p>Todo parte de una pregunta simple: ¿cómo se representa matemáticamente que alguien prefiere una cosa sobre otra?</p>
  <p>Se escribe <b>A ≿ B</b> ("A es al menos tan preferido como B"). Para que esas preferencias se puedan modelar, se exigen axiomas:</p>
  <ul>
  <li><b>Completitud:</b> dadas dos canastas cualesquiera, el consumidor siempre puede decidir. Nunca responde "no sé".</li>
  <li><b>Transitividad:</b> si A ≿ B y B ≿ C, entonces A ≿ C. Es lo que evita preferencias circulares.</li>
  <li><b>Reflexividad:</b> A ≿ A.</li>
  <li><b>Continuidad:</b> cambios pequeños en la canasta no producen saltos bruscos en las preferencias.</li>
  <li><b>No saciedad (más es mejor):</b> más cantidad siempre se prefiere.</li>
  <li><b>Convexidad:</b> se prefieren las combinaciones equilibradas a los extremos.</li>
  </ul>
  <p><b>Para qué sirven:</b> si se cumplen completitud, transitividad y continuidad, se puede demostrar que existe una <b>función de utilidad</b> U(x) que representa esas preferencias. Ese es el puente entre "me gusta más" y las matemáticas.</p>`,
  ojo:'La utilidad es ORDINAL, no cardinal. U=10 y U=20 solo significan que la segunda se prefiere, no que sea el doble de buena. Por eso cualquier transformación monótona creciente de U representa las mismas preferencias — y esa propiedad se usa para simplificar problemas, por ejemplo tomando logaritmo a una Cobb-Douglas.'
 },
 {
  t:'I.1 · Curvas de indiferencia y TMS',
  h:`<p>Una <b>curva de indiferencia</b> une todas las canastas que dan la misma utilidad. El consumidor es indiferente entre cualquier punto de ella.</p>
  <p><b>Propiedades:</b> tienen pendiente negativa, nunca se cruzan (se violaría transitividad), las más alejadas del origen dan mayor utilidad, y son convexas hacia el origen.</p>
  <p>La <b>Tasa Marginal de Sustitución</b> es la pendiente de esa curva:</p>
  <p class="fx">TMS = − dx₂/dx₁ = UMg₁ / UMg₂</p>
  <p>Se lee: cuántas unidades del bien 2 estás dispuesto a resignar por una unidad más del bien 1, manteniendo la misma utilidad.</p>
  <p>La TMS <b>decreciente</b> es la traducción matemática de la convexidad: mientras más tengas del bien 1, menos del bien 2 estás dispuesto a sacrificar por otra unidad más.</p>`
 },
 {
  t:'I.2 · Restricción presupuestaria',
  h:`<p>Las preferencias dicen qué quieres; el presupuesto dice qué puedes.</p>
  <p class="fx">p₁x₁ + p₂x₂ ≤ m</p>
  <p>La recta presupuestaria es la frontera, cuando gastas todo. Su <b>pendiente es −p₁/p₂</b>: el precio relativo, o sea a cuántas unidades del bien 2 tienes que renunciar en el mercado para conseguir una del bien 1.</p>
  <p><b>Cómo se mueve:</b></p>
  <ul>
  <li>Si sube el <b>ingreso</b> m → se desplaza paralela hacia afuera, sin cambiar pendiente</li>
  <li>Si sube <b>p₁</b> → rota hacia adentro pivoteando sobre el eje del bien 2</li>
  <li>Si suben <b>ambos precios y el ingreso</b> en la misma proporción → <b>no cambia nada</b></li>
  </ul>
  <p>Ese último punto es importante: la demanda depende de precios <b>relativos</b> e ingreso real, no de valores nominales. Es lo que se llama ausencia de ilusión monetaria.</p>`
 },
 {
  t:'I.2 · El problema de optimización',
  h:`<p>Acá se juntan las dos mitades. El consumidor resuelve:</p>
  <p class="fx">max U(x₁, x₂)  sujeto a  p₁x₁ + p₂x₂ = m</p>
  <p><b>La condición de óptimo:</b></p>
  <p class="fx">TMS = p₁/p₂   ⟺   UMg₁/p₁ = UMg₂/p₂</p>
  <p>La segunda forma es la más intuitiva: en el óptimo, <b>el último peso gastado en cada bien rinde la misma utilidad</b>. Si un bien rindiera más por peso, convendría reasignar gasto hacia él — y entonces no estabas en el óptimo.</p>
  <p>Geométricamente: el punto donde la curva de indiferencia más alta alcanzable es <b>tangente</b> a la recta presupuestaria.</p>
  <p><b>Método de resolución.</b> Se usa Lagrange:</p>
  <p class="fx">ℒ = U(x₁,x₂) + λ(m − p₁x₁ − p₂x₂)</p>
  <p>Derivas respecto a x₁, x₂ y λ, igualas a cero, y resuelves el sistema. El multiplicador λ tiene interpretación: es la <b>utilidad marginal del ingreso</b>, cuánto sube tu utilidad si te dan un peso más.</p>
  <p><b>Soluciones de esquina:</b> si los bienes son sustitutos perfectos o las preferencias no son convexas, el óptimo puede estar en un extremo y ahí la tangencia no se cumple. Hay que revisarlo, no asumirlo.</p>`,
  ojo:'La función de utilidad indirecta V(p₁,p₂,m) es la utilidad máxima alcanzable dados precios e ingreso. O sea, tomas la solución del problema y la reemplazas de vuelta en U. Sirve para analizar bienestar sin volver a optimizar cada vez.'
 },
 {
  t:'I.3 · Funciones de demanda',
  h:`<p>Al resolver el problema de optimización para <b>cualquier</b> combinación de precios e ingreso, obtienes las <b>funciones de demanda marshallianas</b>:</p>
  <p class="fx">x₁* = x₁(p₁, p₂, m),   x₂* = x₂(p₁, p₂, m)</p>
  <p>Y ahora la parte que evalúan: qué pasa cuando cambia cada variable.</p>
  <p><b>Cambios en el ingreso</b> — curva de Engel</p>
  <ul>
  <li>Si la demanda <b>sube</b> con el ingreso → bien <b>normal</b></li>
  <li>Si <b>baja</b> → bien <b>inferior</b></li>
  <li>Si sube más que proporcionalmente → bien de <b>lujo</b></li>
  </ul>
  <p><b>Cambios en el precio propio</b> — de acá sale la curva de demanda. El efecto total se descompone en dos:</p>
  <ul>
  <li><b>Efecto sustitución:</b> el bien se encareció respecto al otro, así que te cambias. <b>Siempre</b> es negativo — sube el precio, baja la cantidad.</li>
  <li><b>Efecto ingreso:</b> tu poder adquisitivo cayó. El signo <b>depende</b>: negativo si es bien normal, positivo si es inferior.</li>
  </ul>
  <p>Cuando el bien es inferior y el efecto ingreso supera al de sustitución, aparece el <b>bien Giffen</b>: sube el precio y aumenta la cantidad demandada. Es raro en la práctica, pero es la excepción teórica que siempre preguntan.</p>
  <p><b>Cambios en el precio cruzado</b></p>
  <ul>
  <li>Si sube p₂ y aumenta x₁ → <b>sustitutos</b></li>
  <li>Si sube p₂ y disminuye x₁ → <b>complementarios</b></li>
  </ul>
  <p><b>Demanda de mercado.</b> Es la suma <b>horizontal</b> de las demandas individuales: para cada precio, sumas las cantidades que demanda cada consumidor. Horizontal, no vertical — ese detalle se equivoca seguido.</p>`
 }
 ]
},

/* ===================== PM · OPTIMIZACIÓN LINEAL ===================== */
{
 id:'pm-u1', ramo:'pm', tag:'Semana 1-2', sem:2,
 titulo:'Programación lineal y simplex',
 bajada:'Resumen corto: modelamiento, simplex, dos fases, dualidad y holgura complementaria. Para el Control 1.',
 min:30,
 secciones:[
 {
  t:'Modelamiento y forma estándar',
  h:`<p>Todo problema de programación lineal tiene tres piezas: <b>variables de decisión</b> (qué eliges), <b>función objetivo</b> (qué maximizas o minimizas) y <b>restricciones</b> (qué te limita).</p>
  <p>La <b>forma estándar</b> que necesita simplex:</p>
  <p class="fx">max c<sup>T</sup>x  s.a.  Ax = b,  x ≥ 0,  b ≥ 0</p>
  <p><b>Cómo llevar cualquier problema ahí:</b></p>
  <ul>
  <li><b>≤</b> → suma una variable de <b>holgura</b>: 3x₁ + 2x₂ ≤ 12 pasa a 3x₁ + 2x₂ + s = 12</li>
  <li><b>≥</b> → resta una variable de <b>exceso</b> y agrega una <b>artificial</b></li>
  <li><b>min</b> → multiplica el objetivo por −1 y maximiza</li>
  <li><b>Variable libre</b> → escríbela como x = x⁺ − x⁻ con ambas ≥ 0</li>
  <li><b>b negativo</b> → multiplica esa restricción por −1 (y da vuelta la desigualdad)</li>
  </ul>`
 },
 {
  t:'Solución gráfica y el teorema clave',
  h:`<p>Con dos variables se resuelve dibujando: grafica las restricciones, identifica la región factible, y evalúa el objetivo en los vértices.</p>
  <p><b>El teorema fundamental:</b> si existe solución óptima, entonces hay al menos un <b>vértice</b> de la región factible que es óptimo.</p>
  <p>Eso es lo que hace viable a simplex: en vez de revisar infinitos puntos, basta con recorrer vértices, que son finitos.</p>
  <p><b>Los cuatro casos posibles:</b> solución única (un vértice), soluciones múltiples (el objetivo es paralelo a una restricción activa), no acotada (la región se extiende infinitamente en la dirección de mejora), o infactible (no hay región).</p>`
 },
 {
  t:'Simplex',
  h:`<p>La idea: partir de un vértice factible y moverse a un vértice vecino que mejore el objetivo, hasta que ninguno mejore.</p>
  <p><b>El ciclo, en cuatro pasos:</b></p>
  <ol>
  <li><b>Variable de entrada:</b> la de costo reducido más favorable. En maximización, la más negativa de la fila objetivo.</li>
  <li><b>Variable de salida:</b> criterio del cociente mínimo. Divides b<sub>i</sub> por el coeficiente de la columna entrante, solo para los coeficientes <b>positivos</b>, y sale la fila con el cociente más chico.</li>
  <li><b>Pivoteo:</b> operaciones de fila para dejar la columna entrante como columna identidad.</li>
  <li><b>Criterio de parada:</b> cuando ningún costo reducido mejora, estás en el óptimo.</li>
  </ol>
  <p><b>Casos especiales que reconocer:</b> si todos los coeficientes de la columna entrante son ≤ 0, el problema es <b>no acotado</b>. Si en el óptimo una variable no básica tiene costo reducido cero, hay <b>soluciones múltiples</b>. Si una variable básica vale cero, la solución es <b>degenerada</b> y puede haber ciclado.</p>`,
  ojo:'El criterio del cociente mínimo solo considera coeficientes positivos. Incluir los negativos es el error más común y te lleva fuera de la región factible.'
 },
 {
  t:'Método de dos fases',
  h:`<p>Simplex necesita partir de una solución básica factible. Cuando hay restricciones de tipo ≥ o =, la base obvia no sirve, y ahí entra el método de dos fases.</p>
  <p><b>Fase 1.</b> Agregas variables artificiales y minimizas su suma. Si el mínimo llega a <b>cero</b>, encontraste un punto factible y las artificiales salieron de la base. Si el mínimo es <b>positivo</b>, el problema original es <b>infactible</b> — no hay nada más que hacer.</p>
  <p><b>Fase 2.</b> Descartas las artificiales, recuperas el objetivo original y corres simplex normal desde el vértice que encontraste.</p>
  <p>La alternativa es el <b>método de la Gran M</b>, que penaliza las artificiales con un coeficiente enorme en el objetivo. Mismo resultado, en una sola pasada, pero numéricamente más frágil.</p>`
 },
 {
  t:'Dualidad y holgura complementaria',
  h:`<p>Todo problema (el <b>primal</b>) tiene asociado otro (el <b>dual</b>). Si el primal maximiza con restricciones ≤, el dual minimiza con restricciones ≥, y los roles se invierten: las restricciones del primal se vuelven variables del dual.</p>
  <p><b>Los tres teoremas:</b></p>
  <ul>
  <li><b>Dualidad débil:</b> cualquier solución factible del dual acota superiormente al primal. Te da una cota sin resolver.</li>
  <li><b>Dualidad fuerte:</b> en el óptimo, ambos valores son <b>iguales</b>.</li>
  <li><b>Holgura complementaria:</b> la condición que las conecta.</li>
  </ul>
  <p class="fx">x<sub>j</sub> · (costo reducido<sub>j</sub>) = 0   y   y<sub>i</sub> · (holgura<sub>i</sub>) = 0</p>
  <p><b>Qué significa en palabras</b>, que es como conviene recordarlo:</p>
  <ul>
  <li>Si una <b>restricción no está activa</b> (le sobra holgura), su variable dual vale <b>cero</b>. Un recurso que sobra no vale nada.</li>
  <li>Si una <b>variable dual es positiva</b>, su restricción está <b>activa</b>. El recurso se agotó y por eso tiene valor.</li>
  <li>Si una <b>variable primal es positiva</b>, la restricción dual asociada se cumple con igualdad.</li>
  </ul>
  <p><b>La interpretación económica</b> es lo que hace útil todo esto: la variable dual y<sub>i</sub> es el <b>precio sombra</b> del recurso i — cuánto mejoraría el objetivo si tuvieras una unidad más de ese recurso.</p>`,
  ojo:'La holgura complementaria sirve para verificar optimalidad sin resolver el dual completo: si tienes una solución primal candidata, las condiciones te dicen qué restricciones duales deben cumplirse con igualdad, y de ahí despejas las duales. Es una pregunta de prueba muy frecuente.'
 }
 ]
},

/* ===================== MN · LABORATORIO 1 ===================== */
{
 id:'mn-lab1', ramo:'mn', tag:'Laboratorio', sem:2,
 titulo:'Laboratorio 1 · Serie de Taylor',
 bajada:'Lo que pide la ayudantía 1: expansiones de Taylor, orden del error y convergencia.',
 min:40,
 secciones:[
 {
  t:'Qué te van a pedir',
  h:`<p>El notebook de la ayudantía 1 tiene dos partes:</p>
  <p><b>Parte 1 — dos problemas del capítulo 4:</b></p>
  <ul>
  <li><b>Problema 1:</b> expandir f(x) = ln(x) en serie de Taylor alrededor de x₀ = 1, de orden 0 a 4, para predecir f(2). Calcular el error relativo porcentual de cada orden.</li>
  <li><b>Problema 2:</b> determinar gráficamente qué orden de la serie de Maclaurin de sin(x) se necesita para bajar de una tolerancia dada.</li>
  </ul>
  <p><b>Parte 2 — ejemplo guiado</b> de convergencia de la serie de e<sup>x</sup>: construirla término a término, graficar contra la función exacta, y medir el error en un punto fijo x* = 2 en función del número de términos.</p>`
 },
 {
  t:'La serie de Taylor, lo mínimo',
  h:`<p class="fx">f(x) ≈ Σ<sub>k=0</sub><sup>n</sup> f<sup>(k)</sup>(x₀)/k! · (x − x₀)<sup>k</sup></p>
  <p>Cada término agrega una derivada más y mejora la aproximación. El <b>resto</b> —lo que botas— es:</p>
  <p class="fx">R<sub>n</sub> = f<sup>(n+1)</sup>(ξ)/(n+1)! · (x − x₀)<sup>n+1</sup> = O(h<sup>n+1</sup>)</p>
  <p>Ese O(h<sup>n+1</sup>) es el <b>error de truncamiento</b>, y de ahí sale todo lo que hablamos sobre el orden de los métodos.</p>
  <p><b>Las tres que te conviene tener en la cabeza:</b></p>
  <p class="fx">e<sup>x</sup> = 1 + x + x²/2! + x³/3! + …</p>
  <p class="fx">sin(x) = x − x³/3! + x⁵/5! − …</p>
  <p class="fx">ln(x) alrededor de 1: (x−1) − (x−1)²/2 + (x−1)³/3 − …</p>`
 },
 {
  t:'Cómo resolverlo en Python',
  h:`<p>El patrón para el problema 1: acumulas términos y mides el error en cada orden.</p>`,
  code:`import numpy as np

x0, x = 1.0, 2.0
exacto = np.log(x)          # ln(2) = 0.693147...

# Términos de la serie de ln(x) en torno a x0=1:
#   término k = (-1)^(k+1) * (x-x0)^k / k
aprox = 0.0
print(f'{"orden":>6} {"aprox":>12} {"error %":>12}')
print('-'*32)
for k in range(0, 5):
    if k > 0:
        aprox += ((-1)**(k+1)) * (x - x0)**k / k
    err = abs((exacto - aprox) / exacto) * 100
    print(f'{k:>6d} {aprox:>12.6f} {err:>12.4f}')`,
  ojo:'Ojo con este caso: la serie de ln(x) en torno a 1 converge solo para 0 < x ≤ 2, y x=2 está justo en el borde del radio de convergencia. Por eso el error baja lentísimo, muy distinto de lo que verás con e^x en la parte 2. Si notas esa diferencia y la comentas, estás demostrando que entendiste y no solo programaste.'
 },
 {
  t:'La parte 2 y el gráfico del error',
  h:`<p>Para e<sup>x</sup> el comportamiento es el opuesto: cada término divide el error por un factorial, así que converge muy rápido.</p>
  <p>El gráfico que te van a pedir es <b>error contra número de términos</b>, y va en escala <b>semilogarítmica</b> en el eje del error, porque cae varios órdenes de magnitud.</p>`,
  code:`import numpy as np
import matplotlib.pyplot as plt
from math import factorial

xs = 2.0
exacto = np.exp(xs)

Ns, errores = [], []
S = 0.0
for N in range(0, 15):
    S += xs**N / factorial(N)
    Ns.append(N+1)
    errores.append(abs(exacto - S))

plt.semilogy(Ns, errores, 'o-')
plt.xlabel('número de términos')
plt.ylabel('error absoluto')
plt.grid(True, which='both', alpha=0.3)
plt.show()`,
  ojo:'Fíjate en algo al final de ese gráfico: en algún punto el error deja de bajar y se aplana cerca de 1e-16. Ahí ya no manda el truncamiento sino el error de redondeo — llegaste al límite de precisión del float. Es exactamente la curva en U del capítulo 4, vista con tus propios números.'
 }
 ]
}
,

/* ===================== MN · MÓDULO I ÁLGEBRA LINEAL ===================== */
{
 id:'mn-lineal', ramo:'mn', tag:'Clase 2', sem:2,
 titulo:'Sistemas de ecuaciones lineales',
 bajada:'Capítulos 8, 9, 10 y 11. Eliminación gaussiana, normas, condicionamiento y factorización LU, con el ejemplo que pasó el profe en clase.',
 min:55,
 secciones:[
 {
  t:'Los tres métodos y por qué solo uno sirve',
  h:`<p>Para resolver <b>Ax = b</b> el profe partió comparando tres caminos:</p>
  <table class="tb"><tr><th>Método</th><th>Veredicto</th></tr>
  <tr><td><b>Gráfico</b></td><td>Aproximado y limitado a 3 dimensiones. Sirve para entender, no para calcular.</td></tr>
  <tr><td><b>Regla de Cramer</b></td><td>Exacto pero <b>ineficiente</b>. Requiere calcular determinantes por expansión de cofactores, que cuesta <b>O(n!)</b>. Con n=20 es inviable.</td></tr>
  <tr><td><b>Eliminación gaussiana</b></td><td><b>El que se usa.</b> Cuesta O(n³) y es exacto salvo redondeo.</td></tr>
  </table>
  <p>La diferencia entre O(n!) y O(n³) no es un detalle: para n=15, Cramer necesita del orden de 10¹² operaciones y Gauss unas 3.400. Ese salto es la razón de existir del método.</p>
  <p>Y el criterio de existencia: <b>el sistema tiene solución única si y solo si det(A) ≠ 0</b>.</p>`
 },
 {
  t:'Eliminación gaussiana',
  h:`<p>Dos etapas, y hay que tener claras las dos:</p>
  <p><b>1. Eliminación hacia adelante.</b> Transformas el sistema original en uno <b>triangular superior</b>, usando operaciones de fila que no cambian la solución. Trabajas sobre la matriz aumentada [A | b] hasta llegar a [U | c].</p>
  <p>El factor que usas en cada paso es:</p>
  <p class="fx">f<sub>ik</sub> = a<sub>ik</sub> / a<sub>kk</sub>,  fila<sub>i</sub> ← fila<sub>i</sub> − f<sub>ik</sub> · fila<sub>k</sub></p>
  <p>donde a<sub>kk</sub> es el <b>pivote</b>.</p>
  <p><b>2. Sustitución hacia atrás.</b> Con el sistema triangular, despejas desde la última ecuación hacia arriba:</p>
  <p class="fx">x<sub>i</sub> = ( c<sub>i</sub> − Σ<sub>j&gt;i</sub> u<sub>ij</sub> x<sub>j</sub> ) / u<sub>ii</sub></p>
  <p><b>El problema del método "naive":</b> si algún pivote resulta cero, divides por cero y todo se cae. Y si el pivote es <b>muy pequeño</b>, sin ser cero, los factores se disparan y amplificas el error de redondeo.</p>
  <p><b>La solución: pivoteo parcial.</b> Antes de cada eliminación, intercambias filas para que el pivote sea el elemento de mayor valor absoluto de esa columna. No cambia la solución y mejora muchísimo la estabilidad numérica.</p>`,
  ojo:'La complejidad O(n³) sale de contar: son n pasos de eliminación, cada uno sobre una submatriz de tamaño decreciente. La sustitución hacia atrás es solo O(n²), o sea despreciable al lado. Cuando te pregunten por el costo del método, el que manda es el n³ de la eliminación.'
 },
 {
  t:'Normas matriciales',
  h:`<p>Una <b>norma</b> mide el "tamaño" de una matriz — cuánto amplifica como operador lineal. Las que pasó el profe:</p>
  <table class="tb"><tr><th>Norma</th><th>Notación</th><th>Cómo se calcula</th></tr>
  <tr><td><b>Frobenius</b></td><td>‖A‖<sub>f</sub></td><td>Raíz de la suma de todos los elementos al cuadrado</td></tr>
  <tr><td><b>Suma en fila</b></td><td>‖A‖<sub>∞</sub></td><td>La mayor suma de valores absolutos de una fila</td></tr>
  <tr><td><b>Suma en columna</b></td><td>‖A‖<sub>1</sub></td><td>La mayor suma de valores absolutos de una columna</td></tr>
  <tr><td><b>Espectral</b></td><td>‖A‖<sub>2</sub></td><td>Raíz del mayor valor propio de A<sup>T</sup>A</td></tr>
  </table>
  <p>Las de fila y columna son las más rápidas de calcular a mano, y por eso son las que te van a pedir en prueba.</p>`
 },
 {
  t:'Número de condición: la idea clave del módulo',
  h:`<p class="fx">cond(A) = ‖A‖ · ‖A<sup>−1</sup>‖</p>
  <p>Mide qué tan sensible es la solución a pequeñas perturbaciones en los datos. Es la traducción, en álgebra lineal, del concepto de error del capítulo 4.</p>
  <ul>
  <li><b>cond(A) ≈ 1</b> → matriz bien condicionada. Un error chico en los datos produce un error chico en la solución.</li>
  <li><b>cond(A) grande</b> → <b>mal condicionada</b>. Un error mínimo en b puede producir una solución completamente distinta.</li>
  </ul>
  <p><b>Y acá está la fórmula que hay que saber</b>, que es lo que pedía el ejercicio de la clase:</p>
  <p class="fx">cifras significativas perdidas ≈ log<sub>10</sub>( cond(A) )</p>
  <p>Si trabajas con 4 cifras significativas y pierdes 3, te queda <b>una sola cifra confiable</b>. Ese es el resultado que importa: no es que el método falle, es que el problema mismo es sensible.</p>`,
  ojo:'Una matriz mal condicionada no se arregla con un mejor algoritmo. El problema está en la matriz, no en el método. Lo único que puedes hacer es trabajar con más precisión, reformular el problema, o aceptar que el resultado tiene pocas cifras confiables.'
 },
 {
  t:'El ejemplo de la clase, paso a paso',
  h:`<p>Este es el que proyectó el profe. Vale la pena que lo sepas hacer completo, porque tiene todos los conceptos del módulo juntos.</p>
  <p class="fx">A = [60 30 20 ; 50 40 30 ; 40 45 36],  b = [340, 370, 372]<sup>T</sup></p>
  <p><b>Paso 1 — la inversa</b> (dato de la lámina):</p>
  <p class="fx">A<sup>−1</sup> = [0,225 −0,45 0,25 ; −1,5 3,4 −2,0 ; 1,625 −3,75 2,25]</p>
  <p><b>Paso 2 — las normas.</b> Suma en columna de A: las columnas suman 150, 115 y 86 → ‖A‖₁ = <b>150,0</b>. Frobenius: ‖A‖<sub>f</sub> = <b>121,7</b>.</p>
  <p>Suma en columna de A⁻¹: 3,35 · 7,60 · 4,50 → ‖A⁻¹‖₁ = <b>7,60</b>.</p>
  <p><b>Paso 3 — condición y cifras perdidas.</b></p>
  <p class="fx">cond(A) ≈ 925 a 1.140  según la norma que uses</p>
  <p class="fx">c = log<sub>10</sub>(cond) ≈ 2,97 a 3,06  →  <b>se pierden 3 cifras</b></p>
  <p>Trabajando con 4 cifras significativas, te queda solo 1 confiable.</p>
  <p><b>Paso 4 — factorización LU y solución.</b></p>
  <p class="fx">L = [1 0 0 ; 0,8333 1 0 ; 0,6667 1,667 1]</p>
  <p class="fx">U = [60 30 20 ; 0 15 13,33 ; 0 0 0,4444]</p>
  <p>Sustitución hacia adelante Lc = b da <b>c = [340 · 86,67 · 0,8889]</b>, y hacia atrás Ux = c da:</p>
  <p class="fx">x = [3, 4, 2]</p>`,
  ojo:'Un detalle sobre la lámina: el 925,2 sale de combinar la norma Frobenius de A con la suma en columna de A⁻¹. Si usas la MISMA norma en ambas, te da 769 con Frobenius o 1.140 con suma en columna. La conclusión no cambia — en los tres casos se pierden 3 cifras — pero si en la prueba te piden "la norma más desfavorable", lo correcto es usar la misma norma arriba y abajo y quedarte con el cond más grande.'
 },
 {
  t:'Factorización LU',
  h:`<p>Descompones la matriz en dos triangulares:</p>
  <p class="fx">A = L · U</p>
  <p>con <b>L triangular inferior</b> (unos en la diagonal, y debajo los factores de eliminación que ya calculaste) y <b>U triangular superior</b> (el resultado de la eliminación hacia adelante).</p>
  <p><b>Lo importante es para qué sirve</b>, que es lo que anotaste en clase: permite resolver <b>Ax = b para distintos b sin repetir la eliminación</b>.</p>
  <p>El proceso queda en dos sustituciones, ambas O(n²):</p>
  <ol>
  <li>Resolver <b>Lc = b</b> hacia adelante</li>
  <li>Resolver <b>Ux = c</b> hacia atrás</li>
  </ol>
  <p><b>Por qué importa:</b> la eliminación cuesta O(n³) y se hace <b>una sola vez</b>. Cada b nuevo cuesta O(n²). Si tienes que resolver el mismo sistema con 100 lados derechos distintos, LU es órdenes de magnitud más barato que repetir Gauss 100 veces.</p>
  <p><b>Y la matriz inversa:</b> calcularla equivale a resolver n sistemas, uno por cada columna de la identidad. Por eso <b>nunca se calcula la inversa para resolver un sistema</b> — es más caro y numéricamente peor que hacer LU directo. La inversa solo se usa para analizar, como acá para el número de condición.</p>`
 },
 {
  t:'Cómo se hace en Python',
  h:`<p>Las funciones que vas a necesitar en el laboratorio:</p>`,
  code:`import numpy as np
from scipy.linalg import lu, solve, det, norm, inv

A = np.array([[60., 30., 20.],
              [50., 40., 30.],
              [40., 45., 36.]])
b = np.array([340., 370., 372.])

# --- Resolver el sistema (esto es lo que se usa en la práctica) ---
x = np.linalg.solve(A, b)
print(x)                         # [3. 4. 2.]

# --- Determinante e inversa ---
print(np.linalg.det(A))          # 400.0
print(np.linalg.inv(A))

# --- Normas ---
print(np.linalg.norm(A, 'fro'))  # Frobenius     121.74
print(np.linalg.norm(A, np.inf)) # suma en fila   121.0
print(np.linalg.norm(A, 1))      # suma en columna 150.0

# --- Número de condición y cifras perdidas ---
c = np.linalg.cond(A, 1)
print(c, np.log10(c))            # cifras significativas que se pierden

# --- Factorización LU ---
P, L, U = lu(A)
print(L); print(U)`,
  ojo:'Nunca uses inv(A) @ b para resolver un sistema, aunque matemáticamente sea correcto. np.linalg.solve es más rápido y numéricamente más estable, porque internamente hace LU con pivoteo en vez de calcular la inversa completa. Es el tipo de decisión que evalúan en laboratorio.'
 }
 ]
}

];
