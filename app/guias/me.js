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

]);
