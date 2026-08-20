/* ============================================================
   GUÍAS · PROGRAMACIÓN MATEMÁTICA
   Material original escrito para Gabo siguiendo el temario del ramo.
   Para agregar una guía nueva: copia la estructura de una existente
   y agrégala al final del array, antes del ];
============================================================ */
window.GUIAS = (window.GUIAS || []).concat([

/* ---- PM · OPTIMIZACIÓN LINEAL ---- */
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
 },
 {
  t:'Tabla de correspondencia primal-dual',
  h:`<p>Construir el dual es mecánico si te acuerdas de la tabla. Es la misma que viene de formulario al final de las pruebas del ramo, y se lee en los dos sentidos.</p>
  <table class="tb"><tr><th>Problema de <b>mín</b></th><th>Problema de <b>máx</b></th></tr>
  <tr><td>Restricción ≥</td><td>Variable ≥ 0</td></tr>
  <tr><td>Restricción ≤</td><td>Variable ≤ 0</td></tr>
  <tr><td>Restricción =</td><td>Variable irrestricta</td></tr>
  <tr><td>Variable ≥ 0</td><td>Restricción ≤</td></tr>
  <tr><td>Variable ≤ 0</td><td>Restricción ≥</td></tr>
  <tr><td>Variable irrestricta</td><td>Restricción =</td></tr>
  </table>
  <p><b>Lo que siempre cambia de lugar:</b> los coeficientes del objetivo del primal pasan a ser los lados derechos del dual, los lados derechos pasan a ser los coeficientes del objetivo, y la matriz A se transpone. Si el primal maximiza, el dual minimiza.</p>
  <p><b>Receta de tres pasos</b>, que es como conviene hacerlo en la prueba:</p>
  <ol>
  <li>Escribe el primal ordenado y ponle nombre a cada restricción (π₁, π₂, …). Esas son tus variables duales.</li>
  <li>Cuenta: una variable dual por cada restricción del primal, y una restricción dual por cada variable del primal. Si no te calzan los números, algo está mal antes de seguir.</li>
  <li>Aplica la tabla para los signos. No de memoria — léela.</li>
  </ol>`,
  ojo:'El error caro es copiar la forma "max con ≤ / min con ≥" sin mirar la naturaleza de las variables. Si una variable del primal es irrestricta, su restricción dual es una IGUALDAD; si te la saltas, todo lo que venga después queda mal.'
 }
 ]
},

/* ---- PM · PROGRAMACIÓN ENTERA ---- */
{
 id:'pm-entera', ramo:'pm', tag:'Semana 3', sem:3,
 titulo:'Programación entera y branch and bound',
 bajada:'Cuando las variables tienen que ser enteras: relajación lineal y ramificación. Materia del Control 1.',
 min:30,
 secciones:[
 {
  t:'El problema y por qué no basta con redondear',
  h:`<p>Muchas variables no admiten decimales: número de camiones, de personas, de máquinas. Y las variables <b>binarias</b> (0 o 1) modelan decisiones de sí/no — abrir o no una planta, elegir o no un proyecto.</p>
  <p>Eso da un <b>problema de programación entera</b> (PLE): igual que un PL, pero con la restricción extra de que ciertas variables sean enteras.</p>
  <p><b>La tentación es resolver el PL normal y redondear. No funciona</b>, por dos razones:</p>
  <ul>
  <li><b>Puede quedar infactible.</b> Si la solución relajada es x = 4,7 y la restricción es x ≤ 4,7, redondear hacia arriba te saca de la región factible.</li>
  <li><b>Puede quedar lejos del óptimo.</b> El verdadero óptimo entero puede estar en un punto completamente distinto, no en el vecino del fraccionario.</li>
  </ul>
  <p>Por eso hace falta un método propio.</p>
  <p><b>Y ojo con algo importante:</b> agregar la restricción de integralidad hace el problema <b>mucho más difícil</b>. El PL se resuelve en tiempo polinomial; el entero es NP-difícil. No es un detalle menor, es un salto de categoría.</p>`
 },
 {
  t:'Relajación lineal',
  h:`<p>La <b>relajación lineal</b> consiste en resolver el problema <b>ignorando la restricción de que las variables sean enteras</b>. Queda un PL común que resuelves con simplex.</p>
  <p>Y acá está lo clave: <b>la relajación te da una cota</b>.</p>
  <p class="fx">En maximización:  valor de la relajación ≥ óptimo entero</p>
  <p><b>Por qué:</b> la región factible del problema relajado <b>contiene</b> a la del entero — los puntos enteros son un subconjunto de todos los puntos. Si optimizas sobre un conjunto más grande, no puedes obtener menos.</p>
  <p><b>Dos casos al resolverla:</b></p>
  <ul>
  <li>Si la solución sale <b>entera por casualidad</b> → ya terminaste, ese es el óptimo del problema entero</li>
  <li>Si sale <b>fraccionaria</b> → tienes una cota superior y hay que ramificar</li>
  </ul>`,
  ojo:'Esa cota es lo que hace eficiente a branch and bound. Sin ella tendrías que revisar todas las combinaciones enteras posibles, que crecen exponencialmente. La cota te permite descartar ramas completas sin explorarlas.'
 },
 {
  t:'Branch and bound',
  h:`<p>El método construye un <b>árbol</b>: cada nodo es un subproblema con restricciones extra.</p>
  <p><b>Ramificar (branch).</b> Tomas una variable que salió fraccionaria, digamos x = 4,7, y creas <b>dos subproblemas</b>:</p>
  <p class="fx">Rama izquierda: x ≤ 4    ·    Rama derecha: x ≥ 5</p>
  <p>Fíjate que ninguna solución entera se pierde: todo entero cumple una u otra. Lo que sí eliminas es el pedazo fraccionario entre 4 y 5, que es justo lo que estorbaba.</p>
  <p><b>Acotar (bound).</b> Vas guardando la <b>mejor solución entera encontrada hasta ahora</b>, llamada incumbente. Ese valor es tu cota inferior en maximización.</p>
  <p><b>Podar.</b> Un nodo se descarta sin seguir explorándolo por tres motivos:</p>
  <table class="tb"><tr><th>Motivo</th><th>Qué pasó</th></tr>
  <tr><td><b>Por infactibilidad</b></td><td>El subproblema no tiene solución</td></tr>
  <tr><td><b>Por integralidad</b></td><td>La solución salió entera. Si es mejor que la incumbente, la reemplaza</td></tr>
  <tr><td><b>Por cota</b></td><td>La relajación del nodo es <b>peor</b> que la incumbente. Ninguna solución de esa rama puede superarla, así que no vale la pena mirarla</td></tr>
  </table>
  <p>El algoritmo termina cuando <b>no quedan nodos activos</b>. La incumbente final es el óptimo entero.</p>`,
  ojo:'La poda por cota es el corazón del método y la que más se pregunta. La justificación: si en el mejor de los casos esa rama da 18 y ya tienes una solución entera de 20, no hay nada que buscar ahí. Descartas todo el subárbol de un viaje.'
 },
 {
  t:'Ejemplo mínimo',
  h:`<p>Supón que maximizas y la relajación en la raíz da <b>z = 23,5</b> con x₁ = 4,7.</p>
  <ol>
  <li><b>Raíz:</b> z = 23,5, fraccionaria. Como el objetivo tiene coeficientes enteros, ya sabes que el óptimo entero es <b>a lo más 23</b></li>
  <li><b>Ramificas</b> en x₁ ≤ 4 y x₁ ≥ 5</li>
  <li><b>Nodo x₁ ≤ 4:</b> da z = 21 con solución entera → se vuelve la <b>incumbente</b>. Cota inferior = 21</li>
  <li><b>Nodo x₁ ≥ 5:</b> la relajación da z = 20,8. Como 20,8 &lt; 21, <b>se poda por cota</b> — ninguna solución entera de esa rama puede superar 21</li>
  <li><b>No quedan nodos.</b> El óptimo entero es <b>z = 21</b></li>
  </ol>
  <p>Fíjate que nunca exploraste el subárbol de la derecha. Esa es toda la gracia del método.</p>`,
  ojo:'Truco útil cuando los coeficientes del objetivo son enteros: si la relajación da 23,5, puedes redondear la cota a 23 inmediatamente. Se llama redondeo de la cota y a veces te permite podar antes.'
 },
 {
  t:'El algoritmo formal, tal como lo exige el profe',
  h:`<p>En la prueba no basta con llegar al número. Piden <b>seguir el algoritmo</b>, <b>indicar el orden en que resuelves los subproblemas</b> y <b>declarar el criterio con que podas</b> cada nodo. Conviene tenerlo como receta.</p>
  <p>Se trabaja con una <b>lista L de problemas pendientes</b> y con la <b>incumbente</b> z̄, que parte en −∞ si maximizas.</p>
  <ol>
  <li>Si L está vacía, terminaste: x̄ es el óptimo. Si no, saca un problema (P) de L.</li>
  <li>Resuelve la <b>relajación</b> de (P).</li>
  <li>Si (P) es <b>infactible</b> → elimínalo de L y vuelve al paso 1. <i>(poda por infactibilidad)</i></li>
  <li>Si su valor z′ <b>no supera</b> la incumbente (z′ ≤ z̄) → elimínalo y vuelve al paso 1. <i>(poda por cota)</i></li>
  <li>Si z′ &gt; z̄ y la solución x′ es <b>entera</b> → actualiza z̄ := z′ y x̄ := x′, elimínalo y vuelve al paso 1. <i>(poda por integralidad)</i></li>
  <li>Si z′ &gt; z̄ pero x′ <b>no</b> es entera → elige una variable x<sub>k</sub> fraccionaria y ramifica en dos: <b>(P⁻)</b> agregando x<sub>k</sub> ≤ ⌊x′<sub>k</sub>⌋ y <b>(P⁺)</b> agregando x<sub>k</sub> ≥ ⌊x′<sub>k</sub>⌋ + 1. Agrega ambos a L y vuelve al paso 1.</li>
  </ol>
  <p>Fíjate en algo que se pregunta: <b>el árbol depende del orden</b> en que sacas problemas de L. Por eso te piden declararlo — dos árboles distintos pueden ser los dos correctos.</p>`,
  ojo:'Anota al lado de cada nodo tres cosas: el valor de la relajación, si la solución es entera o no, y por qué lo cerraste. La mayor parte del puntaje está en la justificación, no en el número final.'
 },
 {
  t:'Ramificar cuando las variables son binarias',
  h:`<p>Si x<sub>i</sub> ∈ {0,1} y la relajación te deja x<sub>i</sub> = 0,5, las ramas son x<sub>i</sub> ≤ 0 y x<sub>i</sub> ≥ 1. Pero como además x<sub>i</sub> ≥ 0 y x<sub>i</sub> ≤ 1, se simplifican solas:</p>
  <p class="fx">rama izquierda: x<sub>i</sub> = 0    ·    rama derecha: x<sub>i</sub> = 1</p>
  <p>Y eso es cómodo: fijas la variable, la reemplazas en el modelo, y el subproblema queda con una variable menos y más fácil de resolver.</p>
  <p><b>Ojo con la relajación de un problema binario.</b> No es "x<sub>i</sub> entero" sino <b>x<sub>i</sub> ∈ [0,1]</b>: hay que escribir explícitamente las restricciones x<sub>i</sub> ≤ 1 (y x<sub>i</sub> ≥ 0) en el problema relajado. Es el paso que más se olvida y suele valer puntaje propio.</p>`
 },
 {
  t:'Cuándo NO hace falta seguir ramificando',
  h:`<p>Pregunta clásica de control: te muestran dos nodos de un árbol a medio hacer y te preguntan si hay que seguir ramificando. La respuesta sale de dos observaciones.</p>
  <p><b>1.</b> Si la solución del nodo <b>ya es entera</b>, no se ramifica. Ese nodo está resuelto; solo se compara con la incumbente.</p>
  <p><b>2.</b> Si los <b>coeficientes del objetivo son enteros</b>, el valor óptimo entero también lo es, y puedes <b>bajar la cota al entero inferior</b>: si la relajación da z = 40,9, ninguna solución entera de esa rama pasa de <b>40</b>.</p>
  <p>Combinando: si un nodo ya te dio solución entera con z = 40 y su hermano tiene relajación z = 40,9, el techo real del hermano es 40 — <b>no mejora</b> lo que ya tienes, así que se poda sin explorar.</p>
  <p>El matiz: si el techo redondeado <b>empata</b> con la incumbente puedes podar igual (encontrarías otra solución del mismo valor, no una mejor). Si el techo redondeado es <b>mayor</b>, hay que seguir.</p>`,
  ojo:'Este redondeo de la cota solo vale si TODOS los coeficientes de la función objetivo son enteros. Si hay un 4,5 dando vueltas, el óptimo puede ser fraccionario y la cota no se puede bajar.'
 }
 ]
},

/* ---- PM · MODELAMIENTO ---- */
{
 id:'pm-modelos', ramo:'pm', tag:'Semana 2', sem:2,
 titulo:'Modelamiento: los modelos clásicos',
 bajada:'Dieta, transporte, mochila, costo fijo y localización, más las restricciones que hay que linealizar. Es siempre la primera pregunta del Control 1.',
 min:35,
 secciones:[
 {
  t:'Cómo se arma un modelo sin perder puntos',
  h:`<p>En las pautas del ramo el puntaje de una pregunta de modelamiento viene <b>desglosado por pieza</b>: conjuntos, variables, restricciones, naturaleza de las variables, función objetivo. Se reparte incluso si el modelo final no queda perfecto. Así que escribe siempre las cinco, aunque una te salga mal.</p>
  <ol>
  <li><b>Conjuntos.</b> Defínelos con nombre: P = {plantas}, D = {destinos}. Suena obvio y vale medio punto.</li>
  <li><b>Variables de decisión.</b> Con unidad y con índices: "x<sub>ij</sub> := cantidad de fruta, en decenas de miles, que va de la ciudad i a la ciudad j". Sin unidad no es una variable, es una letra.</li>
  <li><b>Restricciones.</b> Una por cada limitación del enunciado. Léelo dos veces y subraya cada frase que impone un límite.</li>
  <li><b>Naturaleza de las variables.</b> x ≥ 0, entera, binaria. Es su propio ítem de puntaje y es lo que más se olvida.</li>
  <li><b>Función objetivo.</b> Con el sentido correcto (min costo / max utilidad).</li>
  </ol>`,
  ojo:'Si el enunciado te da una tabla con datos concretos (costos, demandas, capacidades), puedes escribir el modelo con sumatorias y conjuntos o expandido restricción por restricción. Las dos formas dan puntaje completo. Con pocos índices, expandido es más rápido y se equivoca menos.'
 },
 {
  t:'Dieta y transporte',
  h:`<p><b>Dieta.</b> El arquetipo de minimizar costo cumpliendo mínimos.</p>
  <p class="fx">min c<sup>T</sup>x   s.a.  Ax ≥ b,  x ≥ 0</p>
  <ul>
  <li>x<sub>j</sub>: cantidad del alimento j a consumir</li>
  <li>c<sub>j</sub>: costo unitario del alimento j</li>
  <li>b<sub>i</sub>: cantidad mínima a consumir del nutriente i</li>
  <li>a<sub>ij</sub>: cantidad del nutriente i que aporta el alimento j</li>
  </ul>
  <p>Lo característico: objetivo de <b>mínimo</b> y restricciones de <b>≥</b>. Si además hay máximos permitidos, se agregan restricciones ≤ con otro lado derecho.</p>
  <p><b>Transporte.</b> Llevar producto de orígenes a destinos al menor costo.</p>
  <ul>
  <li>x<sub>ij</sub>: unidades enviadas del origen i al destino j</li>
  <li>c<sub>ij</sub>: costo unitario de transportar de i a j</li>
  <li>a<sub>i</sub>: cantidad disponible (recolectada, producida) en el origen i</li>
  <li>b<sub>j</sub>: cantidad demandada en el destino j</li>
  </ul>
  <p class="fx">min ΣᵢΣⱼ c<sub>ij</sub> x<sub>ij</sub></p>
  <p><b>Con oferta fija y demanda fija</b> las restricciones van con igualdad:</p>
  <p class="fx">Σⱼ x<sub>ij</sub> = a<sub>i</sub>  (∀i)     Σᵢ x<sub>ij</sub> = b<sub>j</sub>  (∀j)</p>
  <p>Y ahí viene el detalle que se pregunta: <b>eso solo es factible si Σ a<sub>i</sub> = Σ b<sub>j</sub></b>, o sea si la oferta total iguala a la demanda total. Es el <b>problema balanceado</b>.</p>`,
  ojo:'Si el problema NO está balanceado, no fuerces las igualdades. Con oferta mayor que la demanda usas Σⱼ x<sub>ij</sub> ≤ a<sub>i</sub> y Σᵢ x<sub>ij</sub> = b<sub>j</sub>; al revés, se invierte. La otra salida clásica es agregar un origen o destino ficticio con costo cero que absorba la diferencia.'
 },
 {
  t:'Mochila: binaria, entera y acotada',
  h:`<p>Mochila de capacidad W. Hay N objetos; el objeto i pesa w<sub>i</sub> y vale v<sub>i</sub>. Se trata de elegir qué llevar.</p>
  <p><b>Versión binaria</b> — existe solo un objeto de cada tipo:</p>
  <p class="fx">x<sub>i</sub> = 1 si el objeto i se agrega a la mochila, 0 si no</p>
  <p class="fx">max Σ v<sub>i</sub> x<sub>i</sub>   s.a.  Σ w<sub>i</sub> x<sub>i</sub> ≤ W,  x<sub>i</sub> ∈ {0,1}</p>
  <p><b>Versión acotada</b> — dispones de N<sub>i</sub> objetos del tipo i. Entonces x<sub>i</sub> deja de ser binaria y pasa a ser entera con cota:</p>
  <p class="fx">x<sub>i</sub> ∈ {0, 1, …, N<sub>i</sub>}   o equivalentemente   0 ≤ x<sub>i</sub> ≤ N<sub>i</sub>,  x<sub>i</sub> ∈ ℤ</p>
  <p>Es el caso de llevar varias unidades de lo mismo: en vez de una botella puedes llevar la caja.</p>
  <p><b>Versión continua</b> — si el objeto es divisible (arena, líquido), x<sub>i</sub> ∈ [0, N<sub>i</sub>] y el problema deja de ser entero: se resuelve como PL.</p>`,
  ojo:'La estructura de mochila aparece disfrazada todo el tiempo: elegir proyectos con un presupuesto, asignar horas de máquina, seleccionar cargas. Si ves "elegir un subconjunto sujeto a una capacidad", es mochila.'
 },
 {
  t:'Costo fijo: la variable de activación y el big-M',
  h:`<p>Este es el truco de modelamiento que más se pregunta, porque es el que convierte un problema lineal en uno <b>lineal entero mixto</b>.</p>
  <p><b>La situación:</b> producir el producto i tiene un costo variable c<sub>i</sub> por unidad, pero además, <b>si produces aunque sea una unidad</b>, pagas un costo fijo C<sub>i</sub> (habilitar la línea, arrendar la máquina, construir la planta). Si no produces nada, no pagas nada.</p>
  <p>Eso no es lineal, porque el costo salta en cero. La solución es agregar una <b>variable binaria de activación</b>:</p>
  <p class="fx">y<sub>i</sub> = 1 si se produce el producto i, 0 si no</p>
  <p class="fx">min Σ c<sub>i</sub> x<sub>i</sub> + Σ C<sub>i</sub> y<sub>i</sub>   s.a.  Ax ≥ b,  x<sub>i</sub> ≤ M y<sub>i</sub>,  x<sub>i</sub> ≥ 0,  y<sub>i</sub> ∈ {0,1}</p>
  <p><b>La restricción de enlace x<sub>i</sub> ≤ M y<sub>i</sub> es toda la gracia.</b> Léela en los dos casos:</p>
  <ul>
  <li>Si y<sub>i</sub> = 0 → x<sub>i</sub> ≤ 0, y como x<sub>i</sub> ≥ 0, queda x<sub>i</sub> = 0. <b>No activaste, no puedes producir.</b></li>
  <li>Si y<sub>i</sub> = 1 → x<sub>i</sub> ≤ M, que con M suficientemente grande no restringe nada. <b>Activaste, produce libremente</b> (y ya pagaste C<sub>i</sub>).</li>
  </ul>
  <p><b>Cómo elegir M.</b> Tiene que ser una cota superior válida de x<sub>i</sub>: la capacidad máxima, la demanda total, lo que el enunciado permita. Si M es muy chico, cortas soluciones factibles y el modelo queda mal. Si es enorme, el modelo es correcto pero se resuelve mal numéricamente.</p>`,
  ojo:'Que el modelo minimice es lo que garantiza que y<sub>i</sub> no se prenda porque sí: prender cuesta C<sub>i</sub>. Si el problema fuera de maximizar un beneficio y el costo fijo entrara restando, pasa lo mismo. Pero si el costo fijo no aparece en el objetivo, nada impide que y<sub>i</sub> = 1 gratis, y ahí necesitas la restricción en el otro sentido también.'
 },
 {
  t:'Localización de plantas: el modelo mixto de prueba',
  h:`<p>Es el costo fijo llevado a su forma de pregunta larga, y salió tal cual en la Prueba 1 del semestre pasado.</p>
  <p><b>Situación:</b> hay J localizaciones posibles para construir plantas, cada una con capacidad K y un costo de inversión F. Hay I ciudades con demanda d<sub>i</sub>. Vender a la ciudad i una unidad producida en la planta j deja un beneficio c<sub>ij</sub>.</p>
  <p><b>Variables — y acá está la clave: son de dos tipos.</b></p>
  <ul>
  <li>x<sub>ij</sub> ≥ 0: cantidad producida en j y vendida a la ciudad i <i>(continua)</i></li>
  <li>y<sub>j</sub> ∈ {0,1}: 1 si se construye una planta en j <i>(binaria)</i></li>
  </ul>
  <p>Por eso se llama <b>lineal entero mixto</b>: conviven variables continuas y binarias.</p>
  <p class="fx">max Σᵢ Σⱼ c<sub>ij</sub> x<sub>ij</sub> − Σⱼ F y<sub>j</sub></p>
  <p><b>Restricciones:</b></p>
  <ul>
  <li><b>Demanda:</b> Σⱼ x<sub>ij</sub> = d<sub>i</sub> para cada ciudad i</li>
  <li><b>Capacidad y enlace, en una sola:</b> Σᵢ x<sub>ij</sub> ≤ K y<sub>j</sub> para cada localización j</li>
  <li>y<sub>j</sub> ∈ {0,1},  x<sub>ij</sub> ≥ 0</li>
  </ul>
  <p>Mira la segunda: hace <b>dos cosas al mismo tiempo</b>. Si y<sub>j</sub> = 1 limita la producción a la capacidad K; si y<sub>j</sub> = 0 obliga a que no salga nada de esa localización. Es el big-M donde M es la capacidad real, no un número inventado.</p>`,
  ojo:'Cuando el enunciado agrega "cada empresa k puede gastar a lo más M<sub>k</sub> en inversiones", eso es una restricción presupuestaria sobre los costos fijos solamente: Σ<sub>j∈S<sub>k</sub></sub> F<sub>j</sub> y<sub>j</sub> ≤ M<sub>k</sub>. Ojo con no meter los costos variables ahí si el enunciado dice que el tope aplica solo a la inversión.'
 },
 {
  t:'Restricciones que se ven raras y hay que linealizar',
  h:`<p>Acá se pierden más puntos que en todo lo demás. El enunciado dice algo en castellano y hay que dejarlo con <b>lado izquierdo lineal y lado derecho constante</b>.</p>
  <p><b>1. Porcentajes sobre el total.</b> "Las ventas de A son al menos el 80% de las ventas totales de A y B."</p>
  <p class="fx">x<sub>A</sub> ≥ 0,8 (x<sub>A</sub> + x<sub>B</sub>)  →  0,2 x<sub>A</sub> − 0,8 x<sub>B</sub> ≥ 0</p>
  <p>El error clásico es escribir x<sub>A</sub> ≥ 0,8 sin más, o dejar variables a la derecha. <b>Pasa todo a la izquierda y deja un cero (o una constante) a la derecha.</b></p>
  <p><b>2. Una demanda que supera a otra por a lo más una cantidad.</b> "La demanda de S no puede exceder a la de F en más de una tonelada."</p>
  <p class="fx">x<sub>S</sub> − x<sub>F</sub> ≤ 1</p>
  <p>Y la versión "supera a la otra por al menos una tonelada" es x<sub>S</sub> − x<sub>F</sub> ≥ 1. Cuidado con el sentido: "no puede exceder en más de" es ≤, "supera por al menos" es ≥.</p>
  <p><b>3. Una no puede ser menor que la otra.</b> "La demanda de S no puede ser menor que la de F."</p>
  <p class="fx">x<sub>S</sub> ≥ x<sub>F</sub>  →  x<sub>S</sub> − x<sub>F</sub> ≥ 0</p>
  <p><b>4. Cotas dobles.</b> "El consumo diario de grano B es como mucho 6 y por lo menos 3." Son <b>dos restricciones</b>, y sobre la expresión del consumo, no sobre una variable:</p>
  <p class="fx">Σ (grano B por unidad) x ≤ 6     Σ (grano B por unidad) x ≥ 3</p>
  <p><b>5. Razones o proporciones entre variables.</b> "Por cada unidad de A hay que producir al menos 2 de B."</p>
  <p class="fx">x<sub>B</sub> ≥ 2 x<sub>A</sub>  →  x<sub>B</sub> − 2 x<sub>A</sub> ≥ 0</p>
  <p>Si viene como cociente, x<sub>B</sub>/x<sub>A</sub> ≥ 2, <b>multiplica cruzado</b> — un cociente de variables no es lineal y no se puede dejar así.</p>`,
  ojo:'Antes de entregar, revisa que ninguna restricción tenga variables a los dos lados, ni cocientes, ni productos de variables. Si algo de eso quedó, no es un modelo lineal y ahí se cae el puntaje entero de la pregunta.'
 }
 ]
},

/* ---- PM · REPASO CONTROL 1 ---- */
{
 id:'pm-c1', ramo:'pm', tag:'Control 1',  sem:4,
 titulo:'Repaso Control 1 — plan y checklist',
 bajada:'Martes 25 de agosto, en la ayudantía. Qué entra, de dónde sale cada tema y qué ejercicios hacer, ordenados por prioridad.',
 min:20,
 secciones:[
 {
  t:'Qué entra y de dónde viene',
  h:`<p><b>Control 1 · martes 25 de agosto · ayudantía, 13:30–15:20, CEN 101.</b> Los controles del ramo duran entre 80 y 100 minutos.</p>
  <p>Los contenidos son cinco:</p>
  <table class="tb"><tr><th>Tema</th><th>Dónde se vio</th><th>Guía</th></tr>
  <tr><td>Modelamiento</td><td>Clases 1–2: dieta, transporte, mochila, costo fijo</td><td>Modelamiento: los modelos clásicos</td></tr>
  <tr><td>Programación lineal</td><td>Forma estándar y simplex</td><td>Programación lineal y simplex</td></tr>
  <tr><td>Resolución gráfica</td><td>Región factible, vértices, curvas de nivel, gradiente</td><td>Programación lineal y simplex</td></tr>
  <tr><td>Dualidad</td><td>Dual, teoremas, holgura complementaria</td><td>Programación lineal y simplex</td></tr>
  <tr><td>Branch and Bound</td><td>Clase 3: relajación, ramificación, poda</td><td>Programación entera y branch and bound</td></tr>
  </table>
  <p><b>Cómo se ha visto en las pruebas anteriores</b>, que es la mejor señal de qué esperar:</p>
  <ul>
  <li>Una pregunta de <b>modelamiento puro</b>, con tabla de datos (transporte o localización)</li>
  <li>Una pregunta larga encadenada: <b>modelo → gráfico → dual o B&amp;B</b> sobre el mismo enunciado</li>
  <li>Una pregunta <b>conceptual</b> de dualidad o de criterios de poda, sin cálculo pesado</li>
  </ul>
  <p><b>Sin apuntes y sin artículos electrónicos.</b> La tabla de correspondencia primal–dual viene de formulario al final.</p>`
 },
 {
  t:'Ayudantía 1 (11 de agosto) — prioridad alta',
  h:`<p>Es la más cercana al control en formato y dificultad. En Canvas, módulo <i>Ayudantías 2026-20</i>, con enunciado y pauta.</p>
  <table class="tb"><tr><th>Ej.</th><th>De qué es</th><th>Por qué hacerlo</th></tr>
  <tr><td><b>1</b></td><td>Productos A y B: modelo, dual, cuál vender, gráfico</td><td>Trae la restricción de porcentaje ("al menos el 80% del total"), que es el error clásico</td></tr>
  <tr><td><b>2</b></td><td>Siderúrgica Huachipato: modelo, dual, gráfico</td><td>Capacidad compartida entre dos productos. Modelo corto, gráfico limpio</td></tr>
  <tr><td><b>3a</b></td><td>Pasar a forma estándar y resolver con Simplex Fase II</td><td>La mecánica del tableau. Hazlo aunque te la sepas: se pierde por aritmética, no por concepto</td></tr>
  <tr><td><b>3b</b></td><td>Simplex con tres variables</td><td>Igual que el anterior pero sin poder apoyarte en el gráfico</td></tr>
  <tr><td><b>4</b></td><td>Florista: modelo, dual y holgura complementaria dado el óptimo primal</td><td><b>El más rentable de todos.</b> Es exactamente el formato en que se pregunta dualidad</td></tr>
  </table>`,
  ej:[]
 },
 {
  t:'Ayudantía 2 (18 de agosto) — prioridad alta',
  h:`<p>La de esta semana, y la que más se parece a lo que viene. El enunciado está en Canvas; la pauta todavía no se publica.</p>
  <table class="tb"><tr><th>Ej.</th><th>De qué es</th><th>Por qué hacerlo</th></tr>
  <tr><td><b>1</b></td><td>B&amp;B: max 7x₁ + 9x₂ con tres restricciones, x ∈ ℕ</td><td>El árbol completo. Es el ejercicio de B&amp;B más probable del control</td></tr>
  <tr><td><b>2</b></td><td>Micros y contaminantes: modelo lineal mixto grande</td><td>Costo fijo, big-M, subconjuntos por empresa, tramos de costo. Difícil, pero es donde vive el puntaje de modelamiento</td></tr>
  <tr><td><b>3</b></td><td>Dualidad: escribir el dual, justificar óptimo finito, holgura complementaria</td><td>Las tres preguntas de dualidad que existen, en un solo ejercicio</td></tr>
  <tr><td><b>4</b></td><td>CoffeeCraft: modelo, gráfico y linealizar tres restricciones en palabras</td><td>La parte (3) es puro entrenamiento de traducción castellano → restricción</td></tr>
  </table>`,
  ej:[]
 },
 {
  t:'Control 1 de 2026-10 (pauta en Canvas) — prioridad alta',
  h:`<p>El control del semestre pasado, mismo profesor. Módulo <i>Evaluaciones y Pautas 2026-10</i>. Hazlo cerrado, con tiempo, antes de mirar la pauta.</p>
  <table class="tb"><tr><th>Ej.</th><th>De qué es</th></tr>
  <tr><td><b>P1</b></td><td>Exportadora de fruta: modelo de redes / transporte con tabla de costos, ofertas y demandas. Piden representarlo como red y escribir el modelo</td></tr>
  <tr><td><b>P2</b></td><td>Autos BKN y NORMAL: modelo de PL con dos variables, resolución gráfica, dual, y verificar el óptimo con los teoremas de dualidad</td></tr>
  </table>
  <p><b>Ojo:</b> la pauta de P2 arrastra un error de tipeo en la parte de holgura complementaria (aparecen números de otro problema). El resultado correcto es π₁ = 5/2, π₂ = 1/4, con w* = 23,75. Si te da distinto, revisa tú, no la pauta.</p>`,
  ej:[]
 },
 {
  t:'Prueba 1 de 2026-10 (pauta en Canvas) — prioridad media-alta',
  h:`<p>Es más larga que un control (150 min) y cubre B&amp;B a fondo. No la hagas entera de una: toma las partes.</p>
  <table class="tb"><tr><th>Ej.</th><th>De qué es</th><th>Prioridad</th></tr>
  <tr><td><b>P1</b></td><td>Mismos autos BKN/NORMAL pero <b>enteros</b>: modelo entero, relajado, gráfico con curvas de nivel y gradiente, y B&amp;B completo</td><td><b>Alta.</b> Es el ejercicio más completo que hay</td></tr>
  <tr><td><b>P2</b></td><td>Programación entera <b>binaria</b>: escribir el relajado, usar holgura complementaria para verificar una solución, y B&amp;B con ramas x<sub>i</sub> = 0 / x<sub>i</sub> = 1</td><td><b>Alta.</b> Junta dualidad con B&amp;B</td></tr>
  <tr><td><b>P3</b></td><td>Localización de plantas: modelo lineal entero mixto con costo fijo</td><td>Media. Modelamiento largo, mismo patrón que la Ayudantía 2 P2</td></tr>
  </table>
  <p>Al final de esa prueba viene el <b>Algoritmo 1</b>, el pseudocódigo de B&amp;B que el profe exige seguir. Léelo aunque no hagas los ejercicios: es la forma en que quiere que presentes el árbol.</p>`,
  ej:[]
 },
 {
  t:'Control 2 de 2026-10, solo P3 — prioridad media',
  h:`<p>Ese control es de optimización sin restricciones (gradiente, Hessiana, coercividad), materia que <b>no entra</b> en este control. Pero su <b>P3 sí</b>.</p>
  <p>P3 muestra dos árboles de B&amp;B a medio construir y pregunta si hace falta seguir ramificando en cada nodo, con justificación. Es la pregunta conceptual de B&amp;B en estado puro, y entrena el redondeo de la cota cuando los coeficientes del objetivo son enteros.</p>
  <p>Los demás ejercicios de ese control, y los Controles 3, Pruebas 2 y 3 y las recuperativas, son de optimización no lineal, KKT y programación dinámica. <b>Guárdalos para más adelante</b>, no gastes tiempo ahí ahora.</p>`,
  ej:[]
 },
 {
  t:'Plan para los días que quedan',
  h:`<p>Quedan cinco días. El orden importa: primero lo que más rinde por hora.</p>
  <table class="tb"><tr><th>Día</th><th>Qué</th></tr>
  <tr><td><b>Jue 20</b></td><td>Ayudantía 1 completa (1, 2, 4 primero; el 3 al final). Si algo no sale, anótalo y lo vemos</td></tr>
  <tr><td><b>Vie 21</b></td><td>Ayudantía 2, ejercicios 1, 3 y 4. Repasar la guía de B&amp;B antes del ejercicio 1</td></tr>
  <tr><td><b>Sáb 22</b></td><td>Control 1 de 2026-10 completo, cerrado y cronometrado (80 min). Corregir con la pauta después</td></tr>
  <tr><td><b>Dom 23</b></td><td>Prueba 1 de 2026-10, P1 y P2. Ayudantía 2 ejercicio 2 (el modelo grande)</td></tr>
  <tr><td><b>Lun 24</b></td><td>Control 2 P3 y repaso de errores. Nada nuevo: solo lo que fallaste</td></tr>
  </table>
  <p><b>La regla del último día:</b> no aprendas materia nueva el lunes. Rehaz lo que te salió mal y repasa la tabla primal–dual y los tres criterios de poda hasta que salgan solos.</p>`,
  ej:[]
 }
 ]
}

]);
