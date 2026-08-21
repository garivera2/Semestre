/* ============================================================
   GUÍAS · MODELOS ESTOCÁSTICOS
   Material original escrito para Gabo siguiendo el temario del ramo.
   Para agregar una guía nueva: copia la estructura de una existente
   y agrégala al final del array, antes del ];
============================================================ */
window.GUIAS = (window.GUIAS || []).concat([

/* ---- ME · U1 REPASO DE PROBABILIDAD ---- */
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

/* ---- ME · U2 PROCESO DE POISSON ---- */
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
}
,

/* ---- ME · REPASO CONTROL 1 ---- */
{
 id:'me-repaso-c1', ramo:'me', tag:'Repaso · Control 1', sem:3,
 titulo:'Repaso para el Control 1',
 bajada:'Unidades 1 y 2. Qué entra, qué te da el formulario, el criterio para elegir modelo y la lista de ejercicios de Canvas con checklist.',
 min:25,
 secciones:[
 {
  t:'Qué entra y cuándo',
  h:`<p><b>Jueves 27 de agosto</b>, durante la cátedra (10:30, sala C-213). Entra la <b>Unidad 1</b> (repaso de probabilidad) y la <b>Unidad 2</b> (proceso de Poisson). Es individual.</p>
  <p>Pesa dentro del 15% que se reparten los cuatro controles, así que por sí solo no decide nada — pero seis días después viene la <b>Prueba 1 (mié 2 de septiembre)</b> con exactamente la misma materia y un 20%. Todo lo que estudies acá te sirve dos veces.</p>
  <p><b>Cómo se evalúa:</b> el profesor lo dijo explícito — no es memorizar fórmulas sueltas, es <b>reconocer la estructura del problema, elegir el modelo correcto y justificar los supuestos</b>. En las pautas de controles pasados hay puntaje asignado a frases como "por incrementos independientes" y "por incrementos estacionarios". Escribir la justificación <b>da puntos</b>.</p>`,
  ojo:'En las pautas viejas el desarrollo vale más que el número final. Si te equivocas en la aritmética pero el planteamiento y la justificación están bien, rescatas casi todo el puntaje. Al revés no.'
 },
 {
  t:'El criterio: cuándo exponencial directa y cuándo hay que pasar por Poisson',
  h:`<p>Esta es la duda que más cuesta y la que ordena el capítulo entero. La pregunta que hay que hacerse siempre es: <b>¿me están preguntando por una cantidad o por un tiempo?</b> Y si es por un tiempo, <b>¿hasta el evento número cuántos?</b></p>
  <table class="tb"><tr><th>La pregunta es…</th><th>Qué usas</th><th>Cómo</th></tr>
  <tr><td>"cuántos eventos en un periodo"</td><td><b>Poisson directo</b></td><td>N(t) ~ Poisson(λt)</td></tr>
  <tr><td>"cuánto tiempo hasta el <b>próximo</b>" (n = 1)</td><td><b>Exponencial directa</b></td><td>P(T &gt; t) = e<sup>−λt</sup></td></tr>
  <tr><td>"cuánto tiempo hasta el <b>n-ésimo</b>" (n ≥ 2)</td><td><b>Traduces a Poisson</b></td><td>S<sub>n</sub> es Gamma, y su acumulada no se integra a mano</td></tr>
  <tr><td>"dado que hubo n eventos en (0,t)…"</td><td><b>Binomial / Uniforme</b></td><td>cada evento cae uniforme en el intervalo</td></tr>
  <tr><td>"¿cuál de los dos ocurre primero?"</td><td><b>Carrera de exponenciales</b></td><td>λ<sub>1</sub>/(λ<sub>1</sub>+λ<sub>2</sub>)</td></tr>
  </table>
  <p><b>La regla en una línea:</b> la exponencial solo sabe responder por <b>el próximo</b> evento. Apenas te preguntan por el segundo, el tercero o el quinto, la exponencial sola ya no alcanza y hay que pasar por el conteo.</p>
  <p><b>El puente</b> — esta equivalencia es la que tienes que tener automática:</p>
  <p class="fx">S<sub>n</sub> &gt; t  ⟺  N(t) ≤ n − 1</p>
  <p class="fx">S<sub>n</sub> ≤ t  ⟺  N(t) ≥ n</p>
  <p>En palabras: <i>"el n-ésimo evento todavía no ocurre a tiempo t"</i> es lo mismo que <i>"hasta t van a lo más n−1 eventos"</i>. Son el mismo suceso mirado desde el tiempo o desde el conteo. Traducir de uno al otro convierte una integral fea en una suma de Poisson.</p>
  <p><b>Por qué es así.</b> El tiempo hasta el n-ésimo evento es S<sub>n</sub> = T₁ + … + T<sub>n</sub>, una suma de n exponenciales, que es Gamma(n, λ). Su acumulada no tiene forma cerrada simple. La de Poisson sí. Por eso nadie integra la Gamma: se traduce y se suma.</p>`,
  ojo:'Ojo con el caso n = 1: ahí las dos vías dan lo mismo, porque P(T₁ > t) = P(N(t) = 0) = e^(−λt). Por eso cuando el ejercicio pide "el próximo" puedes ir directo por exponencial y ahorrarte la traducción. La traducción es obligatoria recién desde el segundo evento.'
 },
 {
  t:'Cómo se ve el criterio en la Ayudantía 1',
  h:`<p>La ayudantía que ya hiciste es literalmente un entrenamiento de este criterio. Míralo así:</p>
  <ul>
  <li><b>P3 b)</b> "probabilidad de que el <b>primer</b> cliente llegue después de 3 minutos" → n = 1 → <b>exponencial directa</b>: e<sup>−0,5·3</sup> = 0,223</li>
  <li><b>P3 c)</b> "que el <b>segundo</b> cliente llegue antes de 4 minutos" → n = 2 → <b>hay que traducir</b>: P(S₂ ≤ 4) = P(N(4) ≥ 2) = 1 − e<sup>−2</sup>(1 + 2) = 0,594</li>
  <li><b>P4 b)</b> "que el <b>tercer</b> vehículo llegue después de 20 minutos" → n = 3 → <b>traducir</b>: P(S₃ &gt; 1/3) = P(N(1/3) ≤ 2) = 0,423</li>
  <li><b>P4 d)</b> "tiempo entre dos llegadas consecutivas mayor que 10 min" → es un tiempo entre eventos, o sea n = 1 → <b>exponencial directa</b>: e<sup>−1,5</sup> = 0,223</li>
  <li><b>P4 e) y P3 e)</b> "ya pasaron 10 minutos, ¿cuál es la probabilidad de que…" → <b>falta de memoria</b>: borras el tiempo transcurrido y aplicas exponencial directa</li>
  </ul>
  <p>Fíjate que las cuatro primeras son la <b>misma pregunta</b> con distinto n, y solo el n decide el camino.</p>`,
  ojo:'Errores que cometiste en tu desarrollo y conviene corregir antes del control: en P1 d) el producto da 0,00597 (no 0,00691); en P4 e) da 0,528 (no 0,0527, se te corrió la coma); en P4 la tasa es 9 vehículos por HORA, no por minuto (lo usaste bien, pero lo anotaste mal); y en P1 c) dejaste el planteamiento sin cerrar, da 0,161. El resto está correcto.'
 },
 {
  t:'Lo que te da el formulario (y lo que tienes que traer tú)',
  h:`<p>En Canvas está el <b>"Prueba 1 - Formulario"</b>, que es el que te van a pasar. Su índice trae:</p>
  <ul>
  <li><b>Distribuciones discretas:</b> binomial, geométrica, binomial negativa, Poisson, uniforme discreta</li>
  <li><b>Distribuciones continuas:</b> uniforme, exponencial y las demás</li>
  <li><b>Proceso de conteo</b> — la definición formal</li>
  <li><b>Proceso de Poisson</b> + un corolario de "resultado inverso"</li>
  <li><b>Proceso de Poisson no homogéneo</b></li>
  </ul>
  <p>O sea: <b>las fórmulas te las dan</b>. Ábrelo tú antes del control y confirma si trae explícitos la descomposición (thinning), la superposición y la carrera de exponenciales, porque en el índice no aparecen como definición propia — si no están, esos tres van de memoria.</p>
  <p><b>Lo que el formulario no te puede dar</b>, y es justo lo que se evalúa:</p>
  <ul>
  <li>El <b>criterio</b> de la sección anterior para elegir modelo</li>
  <li>Reconocer que un enunciado con "un porcentaje son de tipo 1" es <b>descomposición</b></li>
  <li>Reconocer que "¿cuál llega primero?" es <b>carrera de exponenciales</b></li>
  <li>Reconocer que "dado que llegaron n en el periodo" abre la puerta a la <b>binomial</b></li>
  <li>Saber <b>justificar</b> con incrementos independientes y estacionarios</li>
  </ul>`
 },
 {
  t:'Ejercicios · Guía Capítulo 2 (Poisson) — los que más rinden',
  h:`<p>Está en Canvas como <b>"Capítulo 2 - Ejercicios.pdf"</b>, subida el 19 de agosto y con solución incluida. Son 7 problemas y <b>los siete valen la pena</b>: es lo más parecido al control que vas a encontrar. Prioriza en este orden.</p>
  <label class="chk"><input type="checkbox" data-c="me.c1.g2.p1"><span><b>P2 · 1</b> — Distribución y esperanza condicionales de N(t). Es puro incrementos independientes. <i>Empieza por acá.</i></span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g2.p3"><span><b>P2 · 3</b> — Centro comercial: clientes clasificados por tipo. <b>Descomposición</b> pura.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g2.p6"><span><b>P2 · 6</b> — Dos líneas de transporte a Ciudad Empresarial. <b>Superposición</b> y carrera de exponenciales.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g2.p5"><span><b>P2 · 5</b> — Tubo fluorescente. Tiempos entre eventos y falta de memoria.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g2.p2"><span><b>P2 · 2</b> — El evento en el destino de vacaciones. Condicionamiento.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g2.p4"><span><b>P2 · 4</b> — Estudiantes inscritos en el curso. Mezcla de conteo y condicional.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g2.p7"><span><b>P2 · 7</b> — Fondo de inversión con N tipos de oportunidades. Descomposición múltiple, el más difícil.</span></label>`,
  ojo:'Hazlos tapando la solución. La guía trae el desarrollo completo abajo de cada uno, así que es muy fácil leerlo y creer que lo entendiste. Si te trancas más de diez minutos, mira solo la primera línea del desarrollo y sigue solo.'
 },
 {
  t:'Ejercicios · Guía Capítulo 1 (Probabilidad) — solo los que te sirven',
  h:`<p>Está como <b>"Capítulo 1 - Ejercicios.pdf"</b>. Son 27 problemas y <b>no todos apuntan a este curso</b>: los primeros son combinatoria y demostraciones de teoría de conjuntos, que en Modelos Estocásticos casi no aparecen. Sáltatelos y ve a los que sí caen.</p>
  <p><b>Prioridad alta</b> — condicional, Bayes y distribuciones:</p>
  <label class="chk"><input type="checkbox" data-c="me.c1.g1.b1"><span><b>C1 · 10, 11, 12</b> — Independencia y probabilidad condicional. Rápidos y te calibran.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g1.b2"><span><b>C1 · 14, 15</b> — Cajas con plumones y el test del virus. <b>Bayes clásico</b>: te dan el efecto, piden la causa. El 15 es el caso típico de test médico con falsos positivos.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g1.b3"><span><b>C1 · 17, 18, 19</b> — Binomial y Poisson aplicadas. El 19 (tornillos defectuosos) es la aproximación Poisson a la binomial.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.g1.b4"><span><b>C1 · 20, 21, 22, 23</b> — Densidades continuas, esperanza y varianza. El 22 (ampolletas del semáforo) es exponencial disfrazada.</span></label>
  <p><b>Prioridad media</b> — condicionamiento aplicado, buen entrenamiento de lectura de enunciado:</p>
  <label class="chk"><input type="checkbox" data-c="me.c1.g1.b5"><span><b>C1 · 13, 24, 25, 26, 27</b> — Tiros libres, micro o metro, la máquina del trabajador, la final de Champions, la transmisión de bits.</span></label>
  <p><b>Sáltate</b> los ejercicios 1 a 9 (conjuntos y combinatoria) salvo que quieras calentar, y el 16.</p>`
 },
 {
  t:'Ayudantías',
  h:`<p>Las dos están en Canvas con pauta.</p>
  <label class="chk"><input type="checkbox" data-c="me.c1.ay.0"><span><b>Ayudantía 0 + pauta</b> — repaso de probabilidad. Si la Unidad 1 la tienes floja, parte por acá.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.ay.1a"><span><b>Ayudantía 1 · corregir tus errores</b> — P1 c) y d), P4 e) y la tasa mal anotada de P4. Ya está identificado arriba.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.ay.1b"><span><b>Ayudantía 1 · P5 de nuevo</b> — el de las tres pilas. Mínimo y máximo de exponenciales, que es lo que menos se practica y sí aparece en pruebas.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.ay.1c"><span><b>Ayudantía 1 · contrastar con la pauta oficial</b> — Pauta_Ayudantia_1.pdf, sobre todo la P5 c) donde dudaste del sentido de la carrera de exponenciales.</span></label>`
 },
 {
  t:'Controles y pruebas pasadas del Capítulo 2 — el termómetro real',
  h:`<p>El archivo <b>"Capítulo 2 - Controles y Pruebas Pasadas.pdf"</b> (60 páginas, con solución) es lo más valioso que hay en Canvas para este control. Contiene ocho evaluaciones reales. Estas son, con lo que evalúa cada una:</p>
  <label class="chk"><input type="checkbox" data-c="me.c1.pp.1"><span><b>Control 1 · 23 de agosto de 2024</b> — procesadores y trabajos, 3 preguntas de 1 punto. <b>Es el control del año pasado en la misma fecha del semestre que el tuyo. Este es el más representativo: hazlo primero y cronometrado.</b></span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.pp.2"><span><b>Control 1 · 31 de marzo de 2025</b> — centro de salud con 3 médicos. Descomposición doble (tipo de paciente y previsión), carrera de exponenciales, tiempo hasta el 5.º evento y condicionamiento binomial. Cubre casi todo el capítulo en un solo enunciado.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.pp.3"><span><b>Control 1 · farmacia de turno y bomba de bencina</b> — el de la farmacia usa uniformidad condicional; el de la bomba, mínimo de exponenciales con operarios que salen de su puesto.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.pp.4"><span><b>Control · jugador de fútbol</b>, goles a tasa 1,5 por partido con descomposición por tipo de gol.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.pp.5"><span><b>Prueba 1 · trabajos que se terminan en menos de 1 hora</b> — seis partes (a–f) que recorren descomposición, tiempo hasta el n-ésimo, condicionamiento y mínimo de exponenciales. <b>La más completa de todas.</b></span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.pp.6"><span><b>Prueba 1 · 1 de septiembre de 2023</b> — cinta transportadora y clientes de tienda de esquí, 2 preguntas de 3 puntos.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.pp.7"><span><b>Prueba N.º 1 con pauta de puntaje detallada</b> — no la hagas: <b>léela</b>. Muestra exactamente cuántos puntos vale cada justificación y cómo redactar para no perderlos.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.c1.pp.8"><span><b>Correos del profesor</b> — bandeja de entrada, llegadas con tasa que cambia. Es el que más se parece a un <b>Poisson no homogéneo</b>.</span></label>`,
  ojo:'Los enunciados se repiten en estructura, no en historia. Siempre hay una tasa, una descomposición por tipo, una pregunta de "cuántos" y una de "cuánto tiempo hasta el n-ésimo". Si reconoces ese esqueleto, el enunciado nuevo deja de dar miedo.'
 },
 {
  t:'Plan de los 7 días',
  h:`<p>Hoy es viernes 21 y el control es el jueves 27: quedan seis días. Esto cabe sin apurarse.</p>
  <table class="tb"><tr><th>Día</th><th>Qué</th></tr>
  <tr><td><b>Vie 21</b></td><td>Corregir tus errores de la Ayudantía 1 y dejar el criterio exponencial/Poisson automático. Guía Capítulo 2, problemas 1 y 3.</td></tr>
  <tr><td><b>Sáb 22</b></td><td>Guía Capítulo 2, problemas 6 y 5. Repasar Bayes con los ejercicios 14 y 15 del Capítulo 1.</td></tr>
  <tr><td><b>Dom 23</b></td><td>Control 1 de agosto 2024 <b>cronometrado</b>, sin apuntes. Corregir con la pauta y anotar en qué te trancaste.</td></tr>
  <tr><td><b>Lun 24</b></td><td>Atacar justo eso en lo que te trancaste. Guía Capítulo 2, problemas 2 y 4.</td></tr>
  <tr><td><b>Mar 25</b></td><td>Control del centro de salud (marzo 2025) y el de la farmacia. Leer la pauta con puntaje.</td></tr>
  <tr><td><b>Mié 26</b></td><td>Ayudantía (15:30, H-012) y escribir tu <b>formulario a mano</b>. La tabla de la guía de la Unidad 2 es la base.</td></tr>
  <tr><td><b>Jue 27</b></td><td>Control, 10:30 en C-213.</td></tr>
  </table>
  <p>Si tienes que recortar, lo que no puede faltar es el <b>Control 1 de agosto 2024 cronometrado</b> y los <b>problemas 1, 3 y 6 de la Guía del Capítulo 2</b>.</p>`,
  ojo:'Escribir el formulario a mano el miércoles no es un trámite: es el repaso. Al decidir qué entra y qué no, te obligas a revisar todo el capítulo una vez más.'
 }
 ]
}


]);
