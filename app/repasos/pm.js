/* ============================================================
   REPASOS DE CONTROLES Y PRUEBAS · PM
   Sección aparte de las guías. Acá va, por cada evaluación:
     · qué materia entra y las fórmulas que hay que saber
     · el checklist de ejercicios de Canvas que conviene hacer
   Los ejercicios NO se resuelven acá — solo se listan cuáles hacer.

   ESTRUCTURA
   {
    id:'pm-c1',            // único
    ramo:'pm',
    eva:'Control 1',         // nombre de la evaluación
    fecha:'2026-08-27',      // AAAA-MM-DD, para la cuenta regresiva
    bajada:'Unidades 1 y 2 · durante la cátedra',
    resumen:[                // materia y fórmulas
      {t:'Qué entra', h:'<p>...</p>'},
      {t:'Formulario', h:'<table class="tb">...</table>'}
    ],
    ejercicios:[             // el checklist, agrupado por fuente
      {fuente:'Guía Capítulo 2 (Canvas)', items:[
        {x:'Problema 1 — llegadas a un servidor', por:'Poisson básico'},
        {x:'Problema 3 — tiempos entre eventos', por:'Exponencial directa'}
      ]}
    ]
   }
============================================================ */
window.REPASOS = (window.REPASOS || []).concat([

{
 id:'pm-c1', ramo:'pm',
 eva:'Control 1 · Programación Matemática',
 fecha:'2026-08-25',
 bajada:'Modelamiento, PL, resolución gráfica, dualidad y branch and bound · en la ayudantía, 13:30–15:20, CEN 101',
 resumen:[
 {
  t:'Qué entra',
  h:`<p>Cinco contenidos, confirmados por el profe:</p>
  <table class="tb"><tr><th>Tema</th><th>Guía donde está la materia</th></tr>
  <tr><td><b>Modelamiento</b></td><td>Modelamiento: los modelos clásicos</td></tr>
  <tr><td><b>Programación lineal</b></td><td>Programación lineal y simplex</td></tr>
  <tr><td><b>Resolución gráfica</b></td><td>Programación lineal y simplex</td></tr>
  <tr><td><b>Dualidad</b></td><td>Programación lineal y simplex</td></tr>
  <tr><td><b>Branch and Bound</b></td><td>Programación entera y branch and bound</td></tr>
  </table>
  <p><b>Cómo se ha preguntado antes</b>, mirando el Control 1 y la Prueba 1 del semestre pasado (mismo profe):</p>
  <ul>
  <li>Una pregunta de <b>modelamiento puro</b>, con tabla de datos — transporte o localización de plantas</li>
  <li>Una pregunta larga <b>encadenada</b> sobre un mismo enunciado: modelo → gráfico → dual, o modelo → relajado → B&amp;B</li>
  <li>Una pregunta <b>conceptual</b>: justificar con teoremas de dualidad, o decidir si hay que seguir ramificando</li>
  </ul>
  <p><b>Condiciones:</b> sin apuntes y sin artículos electrónicos. La tabla de correspondencia primal–dual viene de formulario al final de la prueba. Duración típica de un control del ramo: 80 a 100 minutos.</p>`
 },
 {
  t:'Formulario · Dualidad',
  h:`<p><b>Correspondencia primal–dual.</b> Se lee en los dos sentidos.</p>
  <table class="tb"><tr><th>Problema de <b>mín</b></th><th>Problema de <b>máx</b></th></tr>
  <tr><td>Restricción ≥</td><td>Variable ≥ 0</td></tr>
  <tr><td>Restricción ≤</td><td>Variable ≤ 0</td></tr>
  <tr><td>Restricción =</td><td>Variable irrestricta</td></tr>
  <tr><td>Variable ≥ 0</td><td>Restricción ≤</td></tr>
  <tr><td>Variable ≤ 0</td><td>Restricción ≥</td></tr>
  <tr><td>Variable irrestricta</td><td>Restricción =</td></tr>
  </table>
  <p>Además: coeficientes del objetivo ↔ lados derechos, y la matriz A se transpone.</p>
  <p><b>Los tres teoremas.</b></p>
  <ul>
  <li><b>Débil:</b> toda solución factible del dual acota al primal. Da una cota sin resolver.</li>
  <li><b>Fuerte:</b> en el óptimo, z* = w*. Si uno tiene óptimo finito, el otro también.</li>
  <li><b>Holgura complementaria:</b> es la que conecta las dos soluciones.</li>
  </ul>
  <p class="fx">x<sub>j</sub> · (holgura de la restricción dual j) = 0     π<sub>i</sub> · (holgura de la restricción primal i) = 0</p>
  <p><b>En palabras:</b> restricción con holgura → su variable dual vale 0. Variable dual positiva → su restricción está activa. Variable primal positiva → su restricción dual se cumple con igualdad.</p>
  <p><b>La receta de prueba:</b> te dan el óptimo primal, reemplazas en las ecuaciones de holgura complementaria, descartas las que no entregan información, y el sistema que queda te despeja las duales. π<sub>i</sub> es el <b>precio sombra</b> del recurso i.</p>`
 },
 {
  t:'Formulario · Modelamiento',
  h:`<p><b>Las cinco piezas que se puntúan por separado.</b> Escríbelas todas aunque una salga mal: conjuntos · variables (con unidad) · restricciones · naturaleza de las variables · función objetivo.</p>
  <p><b>Transporte.</b> x<sub>ij</sub> es lo que va del origen i al destino j.</p>
  <p class="fx">min ΣᵢΣⱼ c<sub>ij</sub>x<sub>ij</sub>   s.a.  Σⱼ x<sub>ij</sub> = a<sub>i</sub>,  Σᵢ x<sub>ij</sub> = b<sub>j</sub>,  x<sub>ij</sub> ≥ 0</p>
  <p>Con igualdades solo si está <b>balanceado</b>: Σ a<sub>i</sub> = Σ b<sub>j</sub>. Si no, van desigualdades o un nodo ficticio con costo cero.</p>
  <p><b>Dieta.</b> min c<sup>T</sup>x s.a. Ax ≥ b, x ≥ 0. Objetivo de mínimo, restricciones de ≥.</p>
  <p><b>Mochila.</b> max Σ v<sub>i</sub>x<sub>i</sub> s.a. Σ w<sub>i</sub>x<sub>i</sub> ≤ W. Binaria x<sub>i</sub> ∈ {0,1}; acotada 0 ≤ x<sub>i</sub> ≤ N<sub>i</sub> entera.</p>
  <p><b>Costo fijo / activación.</b> y<sub>i</sub> ∈ {0,1} más la restricción de enlace:</p>
  <p class="fx">x<sub>i</sub> ≤ M y<sub>i</sub>    (y<sub>i</sub>=0 ⟹ x<sub>i</sub>=0  ·  y<sub>i</sub>=1 ⟹ libre)</p>
  <p>M tiene que ser una cota superior válida de x<sub>i</sub>. En localización de plantas, M <b>es</b> la capacidad: Σᵢ x<sub>ij</sub> ≤ K y<sub>j</sub>.</p>
  <p><b>Restricciones en castellano → lineales.</b> Todo a la izquierda, constante a la derecha.</p>
  <table class="tb"><tr><th>Dice</th><th>Se escribe</th></tr>
  <tr><td>A es al menos el 80% del total</td><td>0,2 x<sub>A</sub> − 0,8 x<sub>B</sub> ≥ 0</td></tr>
  <tr><td>S no excede a F en más de 1</td><td>x<sub>S</sub> − x<sub>F</sub> ≤ 1</td></tr>
  <tr><td>S supera a F por al menos 1</td><td>x<sub>S</sub> − x<sub>F</sub> ≥ 1</td></tr>
  <tr><td>S no puede ser menor que F</td><td>x<sub>S</sub> − x<sub>F</sub> ≥ 0</td></tr>
  <tr><td>El consumo está entre 3 y 6</td><td>dos restricciones: ≥ 3 y ≤ 6</td></tr>
  <tr><td>Por cada A, al menos 2 de B</td><td>x<sub>B</sub> − 2x<sub>A</sub> ≥ 0</td></tr>
  </table>`
 },
 {
  t:'Formulario · PL, forma estándar y gráfico',
  h:`<p><b>Llevar a forma estándar</b> (max c<sup>T</sup>x s.a. Ax = b, x ≥ 0, b ≥ 0):</p>
  <ul>
  <li>≤ → suma una holgura</li>
  <li>≥ → resta un exceso y agrega una artificial</li>
  <li>min → multiplica el objetivo por −1 y maximiza</li>
  <li>variable libre → x = x⁺ − x⁻, ambas ≥ 0</li>
  <li>b negativo → multiplica esa restricción por −1</li>
  </ul>
  <p><b>Simplex.</b> Entra la de costo reducido más favorable. Sale por <b>cociente mínimo</b>, considerando <b>solo los coeficientes positivos</b> de la columna entrante. Pivotea. Para cuando ningún costo reducido mejora.</p>
  <p><b>Dos fases.</b> Fase 1 minimiza la suma de artificiales: si el mínimo llega a 0 hay punto factible; si es positivo, el problema es <b>infactible</b>. Fase 2 descarta las artificiales y recupera el objetivo original.</p>
  <p><b>Gráfico.</b> Región factible → vértices → evaluar el objetivo en cada uno. El teorema: si existe óptimo, hay un <b>vértice</b> óptimo.</p>
  <p>Si además piden curvas de nivel y gradiente: las curvas son las rectas c₁x + c₂y = α, y el <b>gradiente ∇z = (c₁, c₂)</b> apunta en la dirección de crecimiento, perpendicular a ellas.</p>
  <p><b>Los cuatro casos:</b> solución única · soluciones múltiples (objetivo paralelo a una restricción activa) · no acotada (todos los coeficientes de la columna entrante ≤ 0) · infactible.</p>`
 },
 {
  t:'Formulario · Branch and Bound',
  h:`<p><b>Relajación lineal:</b> se ignora la integralidad. Da una <b>cota superior</b> del óptimo entero cuando maximizas. En problemas <b>binarios</b> la relajación es x<sub>i</sub> ∈ [0,1] — hay que escribir explícitamente x<sub>i</sub> ≤ 1.</p>
  <p><b>El algoritmo que exige el profe.</b> Lista L de problemas pendientes, incumbente z̄ = −∞.</p>
  <ol>
  <li>Si L está vacía terminaste. Si no, saca un problema (P) de L.</li>
  <li>Resuelve la relajación de (P).</li>
  <li>Infactible → poda <b>por infactibilidad</b>.</li>
  <li>z′ ≤ z̄ → poda <b>por cota</b>.</li>
  <li>z′ &gt; z̄ y x′ entera → actualiza z̄ := z′ y x̄ := x′, poda <b>por integralidad</b>.</li>
  <li>z′ &gt; z̄ y x′ fraccionaria → ramifica en x<sub>k</sub> ≤ ⌊x′<sub>k</sub>⌋ y x<sub>k</sub> ≥ ⌊x′<sub>k</sub>⌋ + 1, y agrega ambos a L.</li>
  </ol>
  <p>En binarias las ramas se simplifican a <b>x<sub>k</sub> = 0</b> y <b>x<sub>k</sub> = 1</b>: fijas la variable y el subproblema queda más chico.</p>
  <p><b>Redondeo de la cota:</b> si todos los coeficientes del objetivo son enteros, una relajación de 40,9 tiene techo real 40. Sirve para podar antes — pero solo si <b>todos</b> los coeficientes son enteros.</p>
  <p><b>Siempre declara</b> el orden en que resuelves los subproblemas y el criterio con que cierras cada uno. Ahí está la mayor parte del puntaje, no en el número final.</p>`
 },
 {
  t:'Errores que cuestan puntos',
  h:`<ul>
  <li>Olvidar la <b>naturaleza de las variables</b> (≥ 0, entera, binaria). Es un ítem de puntaje propio en la pauta.</li>
  <li>Definir variables <b>sin unidad</b>. "x₁: autos BKN" está incompleto; va "cantidad de autos BKN producidos por día".</li>
  <li>Dejar <b>variables a los dos lados</b> de una restricción, o un cociente sin multiplicar cruzado.</li>
  <li>En el <b>cociente mínimo</b> de simplex, incluir coeficientes negativos.</li>
  <li>Escribir el dual por inercia sin mirar la naturaleza de las variables. Variable irrestricta → restricción dual con <b>igualdad</b>.</li>
  <li>Al relajar un problema binario, no escribir las restricciones x<sub>i</sub> ≤ 1.</li>
  <li>En B&amp;B, dar el número final sin decir <b>por qué</b> se cerró cada rama.</li>
  <li>Redondear la solución relajada y entregarla como óptimo entero. Nunca.</li>
  </ul>`
 },
 {
  t:'Plan día por día',
  h:`<table class="tb"><tr><th>Día</th><th>Qué hacer</th></tr>
  <tr><td><b>Jue 20</b></td><td>Ayudantía 1 completa. Parte por 1, 2 y 4; el 3 (simplex) al final</td></tr>
  <tr><td><b>Vie 21</b></td><td>Ayudantía 2: ejercicios 1, 3 y 4. Repasa la guía de B&amp;B antes del 1</td></tr>
  <tr><td><b>Sáb 22</b></td><td>Control 1 de 2026-10 completo, cerrado y cronometrado en 80 min. Corregir después con la pauta</td></tr>
  <tr><td><b>Dom 23</b></td><td>Prueba 1 de 2026-10, P1 y P2. Después, Ayudantía 2 ejercicio 2 (el modelo grande)</td></tr>
  <tr><td><b>Lun 24</b></td><td>Control 2 P3 y repaso de errores. Nada nuevo</td></tr>
  <tr><td><b>Mar 25</b></td><td>Control, 13:30 en CEN 101</td></tr>
  </table>
  <p><b>Regla del último día:</b> no aprendas materia nueva el lunes. Rehaz lo que falló y repasa la tabla primal–dual y los tres criterios de poda hasta que salgan solos.</p>`
 }
 ],
 ejercicios:[
  {fuente:'Ayudantía 1 · 11 de agosto (Canvas, con pauta)', items:[
   {x:'Ej. 1 — Productos A y B: modelo, dual, cuál vender, gráfico', por:'Trae la restricción de porcentaje sobre el total, el error más clásico'},
   {x:'Ej. 2 — Siderúrgica Huachipato: modelo, dual, gráfico', por:'Capacidad compartida entre dos productos. Gráfico limpio'},
   {x:'Ej. 3a — Pasar a forma estándar y resolver con Simplex Fase II', por:'Mecánica del tableau: acá se pierde por aritmética, no por concepto'},
   {x:'Ej. 3b — Simplex con tres variables', por:'Lo mismo pero sin poder apoyarte en el gráfico'},
   {x:'Ej. 4 — Florista: modelo, dual y holgura complementaria dado el óptimo primal', por:'El más rentable de todos. Es el formato exacto en que se pregunta dualidad'}
  ]},
  {fuente:'Ayudantía 2 · 18 de agosto (Canvas, pauta aún no publicada)', items:[
   {x:'Ej. 1 — B&B: max 7x₁ + 9x₂ con tres restricciones, x ∈ ℕ', por:'El árbol completo. Es el ejercicio de B&B más probable del control'},
   {x:'Ej. 2 — Micros y contaminantes: modelo lineal entero mixto', por:'Costo fijo, big-M y subconjuntos por empresa. Difícil, pero ahí vive el puntaje de modelamiento'},
   {x:'Ej. 3 — Dual, justificar óptimo finito y holgura complementaria', por:'Las tres preguntas de dualidad que existen, en un solo ejercicio'},
   {x:'Ej. 4 — CoffeeCraft: modelo, gráfico y linealizar tres restricciones', por:'La parte 3 es puro entrenamiento de traducción castellano → restricción'}
  ]},
  {fuente:'Control 1 de 2026-10 (Canvas · Evaluaciones y Pautas)', items:[
   {x:'P1 — Exportadora de fruta: modelo de redes / transporte con tabla de datos', por:'Modelamiento puro. Es el formato típico de primera pregunta'},
   {x:'P2 — Autos BKN y NORMAL: modelo, gráfico, dual y verificación del óptimo', por:'La pregunta encadenada clásica. Hazlo cronometrado'},
   {x:'Ojo: la pauta del P2 trae un error de tipeo en holgura complementaria', por:'Mezcla números de otro problema. Lo correcto es π₁ = 5/2, π₂ = 1/4, w* = 23,75'}
  ]},
  {fuente:'Prueba 1 de 2026-10 (Canvas · Evaluaciones y Pautas)', items:[
   {x:'P1 — BKN/NORMAL enteros: modelo entero, relajado, gráfico con curvas de nivel y gradiente, y B&B completo', por:'El ejercicio más completo que existe para este control'},
   {x:'P2 — Entera binaria: relajado, holgura complementaria y B&B con ramas 0/1', por:'Junta dualidad con B&B. Muy preguntable'},
   {x:'P3 — Localización de plantas: modelo lineal entero mixto', por:'Mismo patrón que la Ayudantía 2 ej. 2. Prioridad media'},
   {x:'Leer el Algoritmo 1 al final de la prueba', por:'Es el pseudocódigo de B&B que el profe exige seguir y cómo quiere ver el árbol'}
  ]},
  {fuente:'Control 2 de 2026-10 (Canvas · solo el P3)', items:[
   {x:'P3 — Dos árboles de B&B a medio hacer: ¿hay que seguir ramificando?', por:'La pregunta conceptual de poda en estado puro, con redondeo de cota'}
  ]}
 ]
}
,

{
 id:'pm-p1', ramo:'pm',
 eva:'Prueba 1 · Programación Matemática',
 fecha:'2026-09-07',
 bajada:'Modelamiento con variables binarias y mixtas, programación entera, B&B, dualidad y simplex',
 resumen:[
 {
  t:'Qué entra',
  h:`<p>El alcance se lee de lo que el profe subió a Canvas después del Control 1: <b>tres guías nuevas</b> (Modelamiento con Variables Binarias, Modelamiento con Variables Mixtas, y Guía B&amp;B) más la <b>Ayudantía 3</b> del 1 de septiembre.</p>
  <table class="tb"><tr><th>Tema</th><th>De dónde sale</th></tr>
  <tr><td><b>Modelamiento con variables binarias</b></td><td>Guía 1.2 del profe · restricciones lógicas</td></tr>
  <tr><td><b>Modelamiento con variables mixtas</b></td><td>Guía 1.3 · localización, costo fijo, transporte, calderas</td></tr>
  <tr><td><b>Programación entera y relajación</b></td><td>Ayudantía 3 ej. 3</td></tr>
  <tr><td><b>Branch &amp; Bound con cotas</b></td><td>Guía B&amp;B · Ayudantía 3 ej. 2</td></tr>
  <tr><td><b>Dualidad y holgura complementaria</b></td><td>Ayudantía 3 ej. 3 b) y c)</td></tr>
  <tr><td><b>Simplex</b></td><td>Ayudantía 3 ej. 3 f) — pide resolver por Simplex desde el origen</td></tr>
  <tr><td><b>Resolución gráfica</b></td><td>Ayudantía 3 ej. 3 e)</td></tr>
  </table>
  <p><b>Simplex entra.</b> No hay ambigüedad esta vez: la Ayudantía 3 lo pide explícito, con forma estándar y partiendo del origen.</p>
  <p><b>La pregunta larga tipo</b> es la del ejercicio 3 de la Ayudantía 3: un mismo problema entero mixto que se va encadenando — relajado → dual → holgura complementaria → ramificar → gráfico en una rama → simplex en la otra. Si entiendes ese ejercicio completo, entiendes la prueba.</p>`
 },
 {
  t:'Formulario · Restricciones lógicas con binarias',
  h:`<p>Esto es lo nuevo del Control 1 para acá, y es donde se juega el modelamiento. Con y binarias:</p>
  <table class="tb"><tr><th>El enunciado dice</th><th>Se escribe</th></tr>
  <tr><td>Exactamente uno de los j</td><td>Σⱼ y<sub>j</sub> = 1</td></tr>
  <tr><td>A lo más uno</td><td>Σⱼ y<sub>j</sub> ≤ 1</td></tr>
  <tr><td>Al menos uno</td><td>Σⱼ y<sub>j</sub> ≥ 1</td></tr>
  <tr><td>A lo más k de n</td><td>Σⱼ y<sub>j</sub> ≤ k</td></tr>
  <tr><td><b>A y B no pueden ir juntos</b></td><td>y<sub>A</sub> + y<sub>B</sub> ≤ 1</td></tr>
  <tr><td><b>Si A entonces B</b></td><td>y<sub>A</sub> ≤ y<sub>B</sub></td></tr>
  <tr><td><b>A y B van juntos o ninguno</b></td><td>y<sub>A</sub> = y<sub>B</sub></td></tr>
  <tr><td>Si A entonces NO B</td><td>y<sub>A</sub> + y<sub>B</sub> ≤ 1</td></tr>
  <tr><td>x solo puede ser positiva si y = 1</td><td>x ≤ M y</td></tr>
  <tr><td>Si y = 1, x tiene que ser al menos m</td><td>x ≥ m y</td></tr>
  <tr><td>Producto de binarias z = y₁·y₂</td><td>z ≤ y₁ · z ≤ y₂ · z ≥ y₁ + y₂ − 1</td></tr>
  </table>
  <p><b>Disyunción — "se cumple una restricción o la otra":</b></p>
  <p class="fx">g₁(x) ≤ b₁ + M(1 − y)     g₂(x) ≤ b₂ + M y</p>
  <p>Si y = 1 manda la primera y la segunda se relaja; si y = 0, al revés.</p>
  <p><b>En problemas de asignación</b> (equipos ↔ pedidos, plantas ↔ ciudades), con y<sub>ij</sub> = 1 si el recurso i atiende al trabajo j:</p>
  <ul>
  <li><b>Cada trabajo se atiende una vez:</b> Σᵢ y<sub>ij</sub> = 1 ∀j</li>
  <li><b>Tope de trabajos por recurso:</b> Σⱼ y<sub>ij</sub> ≤ L<sub>i</sub> ∀i</li>
  <li><b>p y q por recursos distintos:</b> y<sub>ip</sub> + y<sub>iq</sub> ≤ 1 ∀i</li>
  <li><b>r y s por el mismo recurso:</b> y<sub>ir</sub> = y<sub>is</sub> ∀i</li>
  <li><b>Capacidad:</b> Σⱼ R<sub>j</sub> y<sub>ij</sub> ≤ V<sub>i</sub> ∀i</li>
  </ul>`,
  ojo:'Las dos que más se confunden son "p y q distintos" (y_ip + y_iq ≤ 1, para CADA i) y "r y s iguales" (y_ir = y_is, para CADA i). Fíjate que van con ∀i — es una restricción por cada recurso, no una sola.'
 },
 {
  t:'Formulario · Variables mixtas y costo fijo',
  h:`<p>Un modelo <b>mixto</b> tiene variables continuas y binarias juntas. El patrón es siempre el mismo: la continua dice <b>cuánto</b>, la binaria dice <b>si se activa</b>, y una restricción de enlace las conecta.</p>
  <p class="fx">x<sub>ij</sub> ≤ M y<sub>j</sub>    o mejor    Σᵢ x<sub>ij</sub> ≤ K y<sub>j</sub></p>
  <p><b>Localización con costo fijo</b> (bodegas, plantas, centros):</p>
  <ul>
  <li>y<sub>j</sub> ∈ {0,1}: se abre la bodega j</li>
  <li>x<sub>ij</sub> ≥ 0: unidades que van de j a i</li>
  <li><b>Objetivo:</b> min Σ t<sub>ij</sub> x<sub>ij</sub> + Σ F<sub>j</sub> y<sub>j</sub></li>
  <li><b>Demanda:</b> Σⱼ x<sub>ij</sub> = d<sub>i</sub> ∀i</li>
  <li><b>Capacidad + enlace en una:</b> Σᵢ x<sub>ij</sub> ≤ K y<sub>j</sub> ∀j</li>
  </ul>
  <p><b>Elige M con criterio.</b> Si tienes una capacidad real, úsala como M. Un M inventado enorme es correcto pero se resuelve peor, y si el M es muy chico cortas soluciones factibles y el modelo queda mal.</p>
  <p><b>Cuando un servicio se ofrece "solo si algo no pasó"</b> (por ejemplo: el equipo M puede hacer un servicio externo solo si no fue asignado a ningún pedido), necesitas una binaria de activación w y enlazarla al revés:</p>
  <p class="fx">w ≤ 1 − y<sub>Mj</sub>   ∀j       (si el equipo M toma cualquier pedido, w = 0)</p>
  <p>Y si además hay que <b>elegir un destino entre varios</b>, va una binaria por destino, que suman a lo que se activó:</p>
  <p class="fx">Σ<sub>d</sub> z<sub>d</sub> = w        y = Σ<sub>d</sub> E<sub>d</sub> z<sub>d</sub></p>`
 },
 {
  t:'Formulario · Branch and Bound con cotas',
  h:`<p><b>Relajación:</b> las variables enteras pasan a continuas (x ≥ 0), las binarias pasan a x ∈ [0,1] — hay que escribir explícitamente x ≤ 1.</p>
  <p><b>Las dos cotas.</b> En un problema de <b>máximo</b>:</p>
  <ul>
  <li><b>Cota superior:</b> el valor de la relajación. Ninguna solución entera puede pasarlo.</li>
  <li><b>Cota inferior:</b> la incumbente z̄, la mejor solución entera encontrada. Parte en <b>−∞</b>.</li>
  </ul>
  <p>En un problema de <b>mínimo</b> se invierten: la relajación es cota <b>inferior</b> y la incumbente parte en <b>+∞</b>. El profe subió el pseudocódigo en las dos versiones — fíjate cuál te toca antes de escribir el criterio de poda.</p>
  <p><b>El algoritmo.</b> Lista L de pendientes, incumbente z̄.</p>
  <ol>
  <li>L vacía → terminaste. Si no, saca (P) de L.</li>
  <li>Resuelve la relajación de (P).</li>
  <li>Infactible → <b>poda por infactibilidad</b>.</li>
  <li>z′ no mejora a z̄ → <b>poda por cota</b>.</li>
  <li>z′ mejora y x′ entera → actualiza z̄ := z′, <b>poda por integralidad</b>.</li>
  <li>z′ mejora y x′ fraccionaria → ramifica en x<sub>k</sub> ≤ ⌊x′<sub>k</sub>⌋ y x<sub>k</sub> ≥ ⌊x′<sub>k</sub>⌋ + 1.</li>
  </ol>
  <p><b>Piso y piso más uno</b>, nunca redondeo al más cercano. En binarias las ramas se simplifican a x<sub>k</sub> = 0 y x<sub>k</sub> = 1.</p>
  <p><b>Redondeo de la cota:</b> si todos los coeficientes del objetivo son enteros, una relajación de 40,9 tiene techo real 40. Sirve para podar antes — <b>pero la Ayudantía 3 dice explícitamente "no utilizar técnicas de acotamiento"</b> en su ejercicio 2. Lee el enunciado antes de usarlo.</p>`,
  ojo:'Los tres errores que ya te costaron puntos: (1) evaluar solo el primer vértice que encuentras en lugar de todos; (2) proponer un punto entero en vez de resolver la relajación del nodo; (3) olvidar que al agregar un corte aparecen vértices nuevos, sobre todo donde se cruzan los dos cortes de la ramificación.'
 },
 {
  t:'Formulario · Dualidad, holgura complementaria y simplex',
  h:`<p><b>Correspondencia primal–dual.</b> Viene de formulario, pero tenla clara.</p>
  <table class="tb"><tr><th>Problema de <b>mín</b></th><th>Problema de <b>máx</b></th></tr>
  <tr><td>Restricción ≥</td><td>Variable ≥ 0</td></tr>
  <tr><td>Restricción ≤</td><td>Variable ≤ 0</td></tr>
  <tr><td>Restricción =</td><td>Variable irrestricta</td></tr>
  <tr><td>Variable ≥ 0</td><td>Restricción ≤</td></tr>
  <tr><td>Variable ≤ 0</td><td>Restricción ≥</td></tr>
  <tr><td>Variable irrestricta</td><td>Restricción =</td></tr>
  </table>
  <p><b>Ojo con las cotas superiores.</b> Si el relajado tiene x<sub>j</sub> ≤ 1, esa es una <b>restricción más</b> y genera <b>su propia variable dual</b>. Un problema binario de 3 variables con 2 restricciones tiene <b>5 variables duales</b>, no 2.</p>
  <p><b>Qué ecuación de holgura complementaria puedes usar:</b></p>
  <table class="tb"><tr><th>Observas</th><th>Concluyes</th><th>¿Sirve?</th></tr>
  <tr><td>Restricción primal con holgura</td><td>y<sub>i</sub> = 0</td><td>sí</td></tr>
  <tr><td>Restricción primal activa</td><td>nada</td><td>no</td></tr>
  <tr><td>x<sub>j</sub> &gt; 0</td><td>restricción dual j con igualdad</td><td>sí</td></tr>
  <tr><td>x<sub>j</sub> = 0</td><td>nada</td><td>no</td></tr>
  </table>
  <p><b>Chequeo gratis:</b> al final, w* tiene que dar igual a z*. Y todas las duales ≥ 0 si el primal es máximo con ≤.</p>
  <p><b>Forma estándar para simplex:</b> ≤ suma holgura · ≥ resta exceso y suma artificial · min se multiplica por −1 · variable libre x = x⁺ − x⁻ · b negativo multiplica la fila por −1.</p>
  <p><b>Simplex:</b> entra la de costo reducido más favorable; sale por <b>cociente mínimo solo con coeficientes positivos</b>; pivotea; para cuando ningún costo reducido mejora.</p>`
 },
 {
  t:'Errores que cuestan puntos',
  h:`<ul>
  <li>Olvidar la <b>naturaleza de las variables</b> — y ∈ {0,1}, x ∈ ℤ, x ≥ 0. Es ítem de puntaje propio.</li>
  <li>Definir variables <b>sin unidad ni índices</b>.</li>
  <li>Meter como variable algo que es una <b>expresión</b> (el consumo de un recurso, el costo de un tramo).</li>
  <li>Escribir la restricción de enlace <b>sin la binaria</b>, o con un M sin justificar.</li>
  <li>En "p y q distintos" / "r y s iguales", olvidar el <b>∀i</b>.</li>
  <li>Al relajar un binario, <b>no escribir x ≤ 1</b> — y después faltarte variables duales.</li>
  <li>En holgura complementaria, usar la restricción dual de una variable que vale <b>cero</b>.</li>
  <li>En el gráfico, <b>evaluar un solo vértice</b> en vez de todos.</li>
  <li>En B&amp;B, dar el número final sin decir <b>por qué</b> se cerró cada rama, ni el <b>orden</b>.</li>
  </ul>`
 },
 {
  t:'Plan hasta el lunes',
  h:`<table class="tb"><tr><th>Día</th><th>Qué hacer</th></tr>
  <tr><td><b>Vie 4</b></td><td>Ayudantía 3 ejercicio 3 completo, de la a) a la f). Es el mapa de la prueba entera</td></tr>
  <tr><td><b>Sáb 5</b></td><td>Guía 1.2 (Binarias) completa. Es corta y es puro entrenamiento de restricciones lógicas</td></tr>
  <tr><td><b>Dom 6</b></td><td>Guía 1.3 (Mixtas): los de bodegas/localización y el de calderas. Después Ayudantía 3 ejercicio 1 (catering)</td></tr>
  <tr><td><b>Lun 7</b></td><td>Solo repaso de errores. Tabla de restricciones lógicas y los tres criterios de poda</td></tr>
  </table>
  <p><b>Si te queda poco tiempo</b>, el orden de rentabilidad es: ejercicio 3 de la Ayudantía 3 → Guía 1.2 → P2 de la Prueba 1 de 2026-10 → resto.</p>`
 }
 ],
 ejercicios:[
  {fuente:'Ayudantía 3 · 1 de septiembre (Canvas, sin pauta aún)', items:[
   {x:'Ej. 3 completo — PE mixto: relajado, dual, holgura complementaria, ramificar en x₃, gráfico en P₁, simplex en P₂', por:'PRIORIDAD MÁXIMA. Encadena los seis temas de la prueba en un solo ejercicio'},
   {x:'Ej. 2 — B&B de max 7x₁ + 9x₂ con cotas superiores e inferiores', por:'El mismo de la Ayudantía 2, ahora pidiendo las dos cotas explícitas. Ojo: dice NO usar acotamiento'},
   {x:'Ej. 1 — Catering: equipos, pedidos, turnos y servicio externo', por:'Modelamiento mixto con restricciones lógicas. Es el más difícil y el más parecido a una P1 de modelamiento'}
  ]},
  {fuente:'Guías nuevas del profe (Canvas · módulo Guias)', items:[
   {x:'Guía 1.2 Modelamiento con Variables Binarias', por:'Corta, 2 páginas. Entrenamiento directo de restricciones lógicas'},
   {x:'Guía 1.3 Modelamiento con Variables Mixtas — bodegas y localización', por:'Costo fijo + transporte. El patrón más preguntado de modelamiento mixto'},
   {x:'Guía 1.3 — el de calderas y turbinas (vapor)', por:'Mixto con restricciones de balance. Distinto a los de localización'},
   {x:'Guía 12 B&B', por:'La guía del profe sobre el método, con su propio pseudocódigo'}
  ]},
  {fuente:'Prueba 1 de 2026-10 (Canvas · Evaluaciones y Pautas 2026-10)', items:[
   {x:'P1 — BKN/NORMAL enteros: modelo, relajado, gráfico con curvas de nivel y gradiente, B&B', por:'Ya lo hiciste. Rehaz solo el árbol, sin mirar'},
   {x:'P2 — Entera binaria: relajado, holgura complementaria y B&B con ramas 0/1', por:'Ya lo hiciste y te costó. Rehazlo entero, es el más parecido al ej. 3 de la Ayudantía 3'},
   {x:'P3 — Localización de plantas: modelo lineal entero mixto', por:'Mismo patrón que la Guía 1.3. Hazlo si te queda tiempo'}
  ]},
  {fuente:'Tu Control 1 (Canvas · Pauta y notas ya publicadas)', items:[
   {x:'Comparar tu control contra la pauta publicada de este semestre', por:'Ver exactamente dónde perdiste puntos antes de repetir el error el lunes'}
  ]}
 ]
}

]);
