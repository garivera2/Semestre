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

]);
