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
 bajada:'Primera parte del Capítulo 2: qué es un proceso de conteo, las dos caras del proceso de Poisson y la distribución condicional de los tiempos.',
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
  t:'Distribución condicional de los tiempos',
  h:`<p>Un resultado que se ve raro pero es de los más elegantes del capítulo.</p>
  <p><b>Si sabes que ocurrió exactamente un evento en (0, t)</b>, entonces el instante en que ocurrió se distribuye <b>uniforme</b> en ese intervalo. No hay preferencia por ningún momento.</p>
  <p>Generalizando: dado que ocurrieron n eventos en (0, t), los instantes se distribuyen como n puntos uniformes independientes ordenados de menor a mayor (estadísticos de orden).</p>
  <p><b>Qué significa:</b> el proceso de Poisson reparte los eventos "sin memoria y sin preferencia". Es la formalización de que las llegadas son completamente aleatorias.</p>`
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

/* ---- ME · U2 (2.ª parte) DESCOMPOSICIÓN, SUMA Y CONDICIONAMIENTO ---- */
{
 id:'me-u2b', ramo:'me', tag:'Semanas 3 y 4', sem:3,
 titulo:'Descomposición, condicionamiento y suma',
 bajada:'Lo que se pasó en las semanas 3 y 4: separar procesos, condicionar en el total y juntarlos. Este es exactamente el alcance de la Prueba 1.',
 min:45,
 secciones:[
 {
  t:'Sí, la descomposición entra — y es lo que más se pregunta',
  h:`<p>Sí. En el Control 1 el techo fue descomposición; para la <b>Prueba 1</b> el techo es <b>suma</b>, que es donde quedó la cátedra al cerrar la semana 4. Mezcla y no homogéneo se ven en la semana 5, o sea <b>después</b> de la prueba: están en la guía de esa semana y no hay que estudiarlos ahora.</p>
  <p>Respuesta larga: no solo entra, es <b>el tema que más aparece</b> en los controles pasados. Míralo en los enunciados reales del archivo de Canvas:</p>
  <ul>
  <li><b>Centro de salud (Control 1, marzo 2025):</b> pacientes tipo 1 y tipo 2, y además Isapre o Fonasa. Es descomposición <i>doble</i>.</li>
  <li><b>Jugador de fútbol:</b> goles a tasa 1,5 por partido, clasificados por tipo.</li>
  <li><b>Prueba 1 de los trabajos:</b> "los trabajos que se terminan en menos de 1 hora" — eso es descomposición disfrazada de enunciado.</li>
  <li><b>El repaso de Prueba 1 del propio PPT:</b> solicitudes de crédito clasificadas por tipo de financiamiento <i>y</i> por resultado crediticio.</li>
  </ul>
  <p>La señal en el enunciado siempre es la misma: <b>"cada evento, de manera independiente, es de tipo A con probabilidad p"</b>. Cuando leas eso, ya sabes lo que viene.</p>`,
  ojo:'El PPT del capítulo 2 tiene esta estructura: proceso de conteo → proceso de Poisson → tiempo entre eventos → tiempo del k-ésimo evento → distribución condicional de los tiempos → descomposición → suma → mezcla → no homogéneo → repaso de Prueba 1. Para la Prueba 1 entra hasta suma. Mezcla y no homogéneo vienen en la semana 5, después de la prueba.'
 },
 {
  t:'Descomposición (thinning)',
  h:`<p>El montaje del profesor: a un proceso productivo llegan piezas según un Poisson de tasa λ. Con probabilidad <i>p</i> van a la máquina 1 y con 1−p a la máquina 2. La pregunta es qué son N₁(t) y N₂(t).</p>
  <p class="fx">N₁(t) ~ Poisson(λpt)   y   N₂(t) ~ Poisson(λ(1−p)t)</p>
  <p><b>Y son independientes entre sí</b>, aunque salgan del mismo proceso. Eso es lo que sorprende y lo que se pregunta.</p>
  <p><b>De dónde sale</b> — vale la pena seguir la idea, porque el profesor la desarrolla en pizarra y podría pedirla:</p>
  <p>Se condiciona en el total. Si en total llegaron m piezas, cuántas fueron a la máquina 1 es una <b>binomial(m, p)</b>. Entonces:</p>
  <p class="fx">P(N₁(t) = n) = Σ<sub>m≥n</sub> P(N₁(t) = n | N(t) = m) · P(N(t) = m)</p>
  <p>Reemplazas la binomial y la Poisson, ordenas los factoriales, y la suma que queda es <b>la serie exponencial</b> — se cierra en e<sup>(1−p)λt</sup>, que cancela parte del exponente y te deja exactamente una Poisson de parámetro λpt.</p>`,
  ojo:'La estructura del argumento es "condiciono en el total, uso binomial, sumo sobre todos los totales posibles". Ese esquema reaparece en la mezcla y en el condicionamiento del final. Si lo entiendes una vez, entiendes las tres.'
 },
 {
  t:'Suma (superposición) — cierre de la semana 4',
  h:`<p>Al revés: tienes N₁(t) y N₂(t) independientes con tasas λ₁ y λ₂, y los juntas en N(t) = N₁(t) + N₂(t). ¿Sigue siendo Poisson?</p>
  <p><b>Sí</b>, y la demostración del PPT es corta y bonita. Mira el primer tiempo entre eventos del proceso juntado: es el que llegue primero, o sea el <b>mínimo</b>:</p>
  <p class="fx">T₁ = mín(X₁, Y₁)</p>
  <p class="fx">P(T₁ &gt; x) = P(X₁ &gt; x)·P(Y₁ &gt; x) = e<sup>−λ₁x</sup>·e<sup>−λ₂x</sup> = e<sup>−(λ₁+λ₂)x</sup></p>
  <p>O sea T₁ es exponencial de tasa λ₁+λ₂. Lo mismo vale para T₂ y son independientes, así que el proceso juntado es Poisson:</p>
  <p class="fx">N(t) ~ Poisson((λ₁ + λ₂)t)</p>
  <p>Generalizando a k procesos, la tasa es la suma de las tasas. Y la probabilidad de que el próximo evento venga del proceso i:</p>
  <p class="fx">λ<sub>i</sub> / (λ₁ + … + λ<sub>k</sub>)</p>`,
  ojo:'Fíjate que "el mínimo de exponenciales independientes es exponencial con la suma de las tasas" es el mismo resultado que usaste en la P5 de la Ayudantía 1 con las pilas. No es un truco aparte: es literalmente por qué la superposición funciona.'
 },
 {
  t:'Condicionar en el total: la binomial con u/t',
  h:`<p>Este es el resultado que más se usa sin darse cuenta, y el PPT lo construye en dos pasos.</p>
  <p><b>Paso 1 — un solo evento.</b> Si sabes que en [0,t] ocurrió exactamente uno, el instante en que ocurrió es <b>uniforme</b>:</p>
  <p class="fx">P(S₁ &lt; x | N(t) = 1) = x / t</p>
  <p><b>Paso 2 — n eventos.</b> Dado N(t) = n, puedes imaginar los n instantes, <i>sin considerar su orden</i>, como n uniformes independientes en [0,t]. Entonces cada evento cae en [0,u] con probabilidad u/t, y contar cuántos caen ahí es contar éxitos:</p>
  <p class="fx">N(u) | N(t) = n  ~  Binomial( n , u/t )</p>
  <p class="fx">P(N(u) = k | N(t) = n) = C(n,k) (u/t)<sup>k</sup> (1 − u/t)<sup>n−k</sup></p>
  <p><b>Nota del profesor:</b> vale para cualquier intervalo de largo t y cualquier subintervalo de largo u contenido en él — no tiene que empezar en cero.</p>
  <p>Esto es exactamente lo que usaste en la Ayudantía 1: P1 b) con p = (2/3)/2 = 1/3, y P2 b) con p = 0,5/1 = 1/2. La razón de las duraciones <b>es</b> la probabilidad.</p>`,
  ojo:'Cuando el enunciado empieza con "sabiendo que llegaron n en tal periodo", la tasa λ deja de importar: se cancela. Si te ves reemplazando λ en un ejercicio de este tipo, algo se desvió.'
 },
 {
  t:'El ejercicio que el profesor resolvió en clase',
  h:`<p>El PPT trae dos ejercicios largos <b>con solución</b>. Son lo más cercano a lo que va a preguntar, porque los eligió él.</p>
  <p><b>1. Consolidación de aprendizajes — la cinta transportadora.</b> Bolígrafos a 5 por minuto y lápices a 130 por hora (ojo con las unidades). Cinco partes:</p>
  <label class="chk"><input type="checkbox" data-c="me.u2b.cinta.1"><span>En 3 minutos, probabilidad de que pasen <b>menos lápices que bolígrafos</b>.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.u2b.cinta.2"><span>Si en 8 minutos pasaron 30 productos, probabilidad de que al menos 20 hayan pasado en los primeros 5. <i>(Binomial con u/t.)</i></span></label>
  <label class="chk"><input type="checkbox" data-c="me.u2b.cinta.3"><span>Si en 5 minutos pasaron 10 productos, probabilidad de que al menos 2 fueran lápices. <i>(Mezcla.)</i></span></label>
  <label class="chk"><input type="checkbox" data-c="me.u2b.cinta.4"><span>Probabilidad de que pasen menos de 6 productos para obtener el <b>tercer bolígrafo</b>.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.u2b.cinta.5"><span>Probabilidad de que el primer bolígrafo llegue entre el segundo 20 y el segundo 40.</span></label>
  <p style="margin-top:14px">Este mismo enunciado apareció en la <b>Prueba 1 del 1 de septiembre de 2023</b>. No es casualidad: es el ejercicio que cierra el alcance de tu prueba.</p>
  <p><b>2. Repaso Prueba 1 — el concesionario automotriz.</b> <i>(Ojo: sus partes 4 y 5 usan condicionamiento avanzado y no homogéneo, que se ven en la semana 5. Haz solo las partes 1, 2 y 3.)</i> Dos canales de solicitudes (presencial y digital) como Poisson independientes, y cada solicitud clasificada por tipo de financiamiento <i>y</i> por resultado crediticio. Cinco partes:</p>
  <label class="chk"><input type="checkbox" data-c="me.u2b.conc.1"><span>Probabilidad de exactamente k solicitudes aprobadas en un mes. <i>(Suma, luego descomposición.)</i></span></label>
  <label class="chk"><input type="checkbox" data-c="me.u2b.conc.2"><span>Con 2 solicitudes presenciales en un día, probabilidad de al menos una leasing <b>y</b> al menos una aprobada.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.u2b.conc.3"><span>Probabilidad de que las tres primeras solicitudes del día sean, <b>en ese orden</b>, tres combinaciones dadas de canal, tipo y resultado.</span></label>
  <label class="chk"><input type="checkbox" data-c="me.u2b.conc.4"><span>Con 4 solicitudes digitales en el día, probabilidad de que la tercera llegue antes de las 13:00 y la cuarta antes de las 15:00. <i>(Condicionamiento con dos restricciones.)</i></span></label>
  <label class="chk"><input type="checkbox" data-c="me.u2b.conc.5"><span>Cyber Day: no homogéneo con λ(t) = 2t² + t + 1 entre 9:00 y 11:00. Si llegaron 3, probabilidad de que la segunda haya llegado en la primera media hora. <i>(Aquí se usa m(u)/m(t).)</i></span></label>`,
  ojo:'El ejercicio del concesionario recorre las cinco herramientas del capítulo en un solo enunciado: superposición, descomposición doble, orden de llegadas, condicionamiento binomial y no homogéneo. Si logras hacerlo entero sin mirar, estás listo para el control.'
 },
 {
  t:'Formulario de la semana',
  h:`<table class="tb"><tr><th>Situación</th><th>Resultado</th></tr>
  <tr><td>Separar por tipo (prob. p)</td><td>Poisson(λpt), independiente del complemento</td></tr>
  <tr><td>Juntar k procesos</td><td>Poisson((λ₁+…+λ<sub>k</sub>)t)</td></tr>
  <tr><td>¿De cuál viene el próximo?</td><td>λ<sub>i</sub> / Σλ<sub>j</sub></td></tr>
  <tr><td>Mínimo de exponenciales</td><td>Exponencial(Σλ<sub>j</sub>)</td></tr>
  <tr><td>Dado el total m, ¿cuántos del proceso i?</td><td>Binomial(m, λ<sub>i</sub>/Σλ<sub>j</sub>)</td></tr>
  <tr><td>Dado N(t)=n, ¿cuántos en [0,u]?</td><td>Binomial(n, u/t)</td></tr>
  <tr><td>Un solo evento en [0,t]</td><td>Uniforme en [0,t]</td></tr>
  <tr><td>Tasa variable</td><td>m(t) = ∫₀ᵗλ(s)ds; reemplaza λt por m(t)</td></tr>
  <tr><td>No homogéneo, dado N(t)=n</td><td>Binomial(n, m(u)/m(t))</td></tr>
  <tr><td>k-ésimo evento antes de u, dado n</td><td>Σ<sub>j≥k</sub> C(n,j)(m(u)/m(t))<sup>j</sup>(1−m(u)/m(t))<sup>n−j</sup></td></tr>
  </table>
  <p>Junta esta tabla con la de la guía de la semana 2 y tienes el formulario manuscrito completo para el Control 1.</p>`
 }
 ]
}
,

/* ---- ME · U2 (cierre) MEZCLA Y NO HOMOGÉNEO ---- */
{
 id:'me-u2c', ramo:'me', tag:'Semana 5', sem:5,
 titulo:'Mezcla y Poisson no homogéneo',
 bajada:'El cierre del Capítulo 2. Se ve DESPUÉS de la Prueba 1, así que no es materia de esa evaluación — pero sí de la Prueba 2 y del examen.',
 min:30,
 secciones:[
 {
  t:'Dónde encaja esto',
  h:`<p>Estas dos secciones cierran el Capítulo 2 y se pasan en la <b>semana 5</b>, después de la Prueba 1. O sea: <b>no entran en la Prueba 1</b>, que llega hasta suma.</p>
  <p>Vale la pena leerlas igual cuando las pasen, porque la observación final es la síntesis de todo el capítulo y reaparece más adelante.</p>`,
  ojo:'Si estás repasando para la Prueba 1, sáltate esta guía completa. Es de la semana siguiente.'
 },
 {
  t:'Mezcla: la suma mirada hacia atrás',
  h:`<p>Acá hay que tener cuidado con el nombre, porque "mezcla" en este curso significa algo <b>muy específico</b>: juntaste k procesos, observaste el total, y ahora quieres saber <b>cuántos venían de cada uno</b>.</p>
  <p>Si X(t) = Y₁(t) + … + Y<sub>k</sub>(t) y sabes que en total ocurrieron m eventos:</p>
  <p class="fx">Y<sub>i</sub>(t) | X(t) = m  ~  Binomial( m , λ<sub>i</sub> / Σλ<sub>j</sub> )</p>
  <p><b>La demostración</b> (el PPT la hace para k = 2) es directa: escribes la conjunta, usas independencia, reemplazas las tres Poisson, y los λt se cancelan dejando solo el cociente de tasas.</p>
  <p class="fx">P(X₁ = k | X = m) = [P(X₁ = k)·P(X₂ = m−k)] / P(X = m) = C(m,k) (λ₁/(λ₁+λ₂))<sup>k</sup> (λ₂/(λ₁+λ₂))<sup>m−k</sup></p>
  <p><b>Cómo reconocerla en el enunciado:</b> "si en 5 minutos pasaron 10 productos, ¿cuál es la probabilidad de que al menos 2 fueran lápices?". Te dan el total mezclado y preguntan por la composición.</p>`,
  ojo:'Descomposición y mezcla son la misma moneda. En la descomposición el enunciado te da la probabilidad p de clasificación. En la mezcla te da dos tasas y la p sale sola como λᵢ/Σλ. Si te confundes, pregúntate: ¿me dieron un porcentaje o me dieron dos tasas?'
 },
 {
  t:'Poisson no homogéneo, y la observación que cierra el capítulo',
  h:`
  <p>Con λ(t) variable aparece la intensidad acumulada m(t) = ∫₀ᵗ λ(s) ds, y todo lo de conteo se mantiene reemplazando λt por m(t).</p>
  <p>Pero el PPT termina con una <b>observación</b> que es la joya del capítulo y que generaliza la sección anterior. Para un proceso no homogéneo, condicionando en N(t) = n:</p>
  <p class="fx">P(N(u) = k | N(t) = n) = C(n,k) (m(u)/m(t))<sup>k</sup> (1 − m(u)/m(t))<sup>n−k</sup></p>
  <p>Y con eso se responde la pregunta por el k-ésimo evento:</p>
  <p class="fx">P(S<sub>k</sub> &lt; u | N(t) = n) = P(N(u) ≥ k | N(t) = n) = Σ<sub>j≥k</sub> C(n,j) (m(u)/m(t))<sup>j</sup> (1 − m(u)/m(t))<sup>n−j</sup></p>
  <p><b>Qué te dice:</b> en el caso homogéneo la probabilidad era la razón de <i>largos</i>, u/t. En el no homogéneo es la razón de <i>intensidades acumuladas</i>, m(u)/m(t). El tiempo deja de medirse en minutos y pasa a medirse en "eventos esperados".</p>`,
  ojo:'Fíjate que acá vuelven a aparecer juntas las dos ideas del curso: la equivalencia S_k < u ⟺ N(u) ≥ k, y el condicionamiento binomial. Es la síntesis del capítulo, y por eso el profesor la dejó al final del PPT justo antes del repaso de Prueba 1.'
 }
 ]
}


]);
