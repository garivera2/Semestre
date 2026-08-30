/* ============================================================
   REPASOS DE CONTROLES Y PRUEBAS · ME
   Sección aparte de las guías. Acá va, por cada evaluación:
     · qué materia entra y las fórmulas que hay que saber
     · el checklist de ejercicios de Canvas que conviene hacer
   Los ejercicios NO se resuelven acá — solo se listan cuáles hacer.

   ESTRUCTURA
   {
    id:'me-c1',            // único
    ramo:'me',
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
 id:'me-c1', ramo:'me', eva:'Control 1', fecha:'2026-08-27',
 bajada:'Unidad 1 y Unidad 2 hasta descomposición · 10:30 a 11:20 · sin calculadora',
 resumen:[
  {
   t:'Logística: lo que hay que llevar y saber antes de entrar',
   h:`<p>Del anuncio de Canvas del <b>25 de agosto</b>:</p>
   <ul>
   <li><b>Jueves 27, de 10:30 a 11:20.</b> Son <b>50 minutos</b>, no las tres horas de cátedra. Después hay 15 minutos de break y la clase sigue normal.</li>
   <li><b>NO se necesita calculadora</b> — y eso te dice algo importante: las respuestas se dejan <b>expresadas</b>. No pierdas segundos calculando decimales; te pagan por el planteamiento.</li>
   <li>Hay que llevar <b>impreso el "Prueba 1 - Formulario"</b>, a doble cara y <b>sin ninguna marca ni anotación</b>. Imprímelo hoy, no el jueves en la mañana.</li>
   <li><b>Sala:</b> los alumnos desde <i>Ruiz de Gamboa</i> hasta <i>Wadhwani</i> rinden en <b>B-30</b>. Por orden alfabético Rivera cae antes de Ruiz, así que te tocaría <b>C-213</b> — igual confirma en el PDF "Distribución Salas M-1" que viene adjunto al anuncio.</li>
   </ul>`,
  },
  {
   t:'Qué entra y qué NO entra',
   h:`<p><b>El profesor lo dijo en clase: entra hasta descomposición.</b> Eso manda por sobre cualquier otra señal, así que el alcance queda así:</p>
   <p><b>Entra:</b></p>
   <ul>
   <li><b>Unidad 1</b> completa: condicional, Bayes, esperanza y varianza, distribuciones.</li>
   <li>Proceso de conteo, incrementos independientes y estacionarios.</li>
   <li>Poisson: conteo, tiempo entre eventos, tiempo del k-ésimo evento.</li>
   <li>Distribución condicional de los tiempos: uniforme, y binomial con u/t.</li>
   <li><b>Descomposición</b> (thinning), incluida la doble. Este es el techo.</li>
   </ul>
   <p><b>No entra:</b> suma o superposición de procesos, mezcla, y proceso de Poisson no homogéneo. Todo eso queda para la <b>Prueba 1</b> del 2 de septiembre.</p>
   <p><b>Un matiz que te conviene:</b> el <b>mínimo de exponenciales</b> y la <b>carrera de exponenciales</b> ya aparecieron en la Ayudantía 1 (el ejercicio de las tres pilas, y la P5 c) de cuál se descarga antes). Formalmente viven en la sección de suma del PPT, pero como ya los viste y son baratos de repasar, no los sueltes del todo — son media hoja de tu formulario y te cubren si aparece algo así.</p>`,
   ojo:'Ojo con la Ayudantía 2 de mañana: sí pasa por suma y mezcla (el ejercicio de los tres correctores es carrera y mezcla). No es contradicción — la ayudantía va apuntando también a la Prueba 1, que es seis días después. Aprovéchala igual, pero para el control del jueves prioriza los ejercicios de descomposición y de condicionamiento.'
  },
  {
   t:'El criterio que decide todo: exponencial directa o pasar por Poisson',
   h:`<p>La pregunta a hacerse siempre: <b>¿me preguntan por una cantidad o por un tiempo?</b> Y si es por un tiempo, <b>¿hasta el evento número cuántos?</b></p>
   <table class="tb"><tr><th>La pregunta es…</th><th>Qué usas</th></tr>
   <tr><td>"cuántos eventos en un periodo"</td><td>Poisson directo: N(t) ~ Poisson(λt)</td></tr>
   <tr><td>"cuánto tiempo hasta el <b>próximo</b>" (n = 1)</td><td>Exponencial directa: P(T &gt; t) = e<sup>−λt</sup></td></tr>
   <tr><td>"cuánto tiempo hasta el <b>n-ésimo</b>" (n ≥ 2)</td><td>Traduces a conteo</td></tr>
   <tr><td>"dado que hubo n eventos en (0,t)"</td><td>Binomial(n, u/t)</td></tr>
   <tr><td>"¿cuál ocurre primero?"</td><td>Carrera: λ<sub>1</sub>/(λ<sub>1</sub>+λ<sub>2</sub>)</td></tr>
   <tr><td>"ya pasaron s minutos"</td><td>Falta de memoria: se borra lo transcurrido</td></tr>
   </table>
   <p><b>La distinción que hay que tener clarísima</b>, porque es donde más se cae:</p>
   <ul>
   <li><b>T<sub>n</sub> = tiempo entre el evento n−1 y el n.</b> Siempre es Exponencial(λ), sin importar el n. Si el enunciado te para <i>sobre</i> un evento y pregunta cuánto falta para el siguiente, es <b>exponencial directa</b>.</li>
   <li><b>S<sub>n</sub> = T₁ + … + T<sub>n</sub> = tiempo desde el origen hasta el evento n.</b> Es Gamma(n, λ). Si el enunciado cuenta <i>desde el inicio</i>, hay que <b>traducir a conteo</b>.</li>
   </ul>
   <p>O sea, la pregunta real no es "qué número de evento" sino <b>"¿desde dónde estoy contando el tiempo?"</b>. Desde el evento anterior → exponencial. Desde el origen → conteo.</p>
   <p class="fx">S<sub>n</sub> &gt; t ⟺ N(t) ≤ n − 1     S<sub>n</sub> ≤ t ⟺ N(t) ≥ n</p>
   <p>En n = 1 las dos vías coinciden: P(T₁ &gt; t) = P(N(t) = 0) = e<sup>−λt</sup>. <b>Ojo:</b> ese 0 es el <i>número de eventos</i>, no una probabilidad — "el primer evento tarda más de t" es exactamente lo mismo que "hasta t no ocurrió ninguno".</p>
   <p><b>Por qué traducir y no integrar.</b> La acumulada de la Gamma con n entero <i>sí</i> se puede integrar, con n−1 integraciones por partes. Lo que pasa es que el resultado <b>es</b> la suma de Poisson. Traducir no es un truco: es llegar al mismo lugar sin hacer las integrales.</p>`
  },
  {
   t:'Cómo se corrige: la justificación da puntos',
   h:`<p>En las pautas de las evaluaciones pasadas el puntaje viene desglosado línea por línea, y hay puntos asignados explícitamente a frases como:</p>
   <ul>
   <li><i>"por incrementos independientes"</i> — 0,15 puntos</li>
   <li><i>"por incrementos estacionarios"</i> — 0,15 puntos</li>
   <li><i>"por complemento"</i> — 0,1 puntos</li>
   <li><i>"reemplazando por la fórmula de la distribución Poisson"</i> — 0,1 puntos</li>
   </ul>
   <p>O sea: <b>escribir por qué puedes hacer cada paso vale casi tanto como el paso</b>. Con 50 minutos y sin calculadora, la estrategia es plantear bien, justificar en una línea cada movida, y dejar la expresión sin evaluar.</p>
   <p>Y el corolario: equivocarte en la aritmética con el planteamiento bien rescata casi todo el puntaje. Al revés, no.</p>`
  },
  {
   t:'Formulario para escribir a mano',
   h:`<table class="tb"><tr><th>Qué necesito</th><th>Fórmula</th></tr>
   <tr><td>n eventos en tiempo t</td><td>e<sup>−λt</sup>(λt)<sup>n</sup>/n!</td></tr>
   <tr><td>Ningún evento hasta t</td><td>e<sup>−λt</sup></td></tr>
   <tr><td>Esperar más de t</td><td>e<sup>−λt</sup></td></tr>
   <tr><td>Tiempo medio entre eventos</td><td>1/λ</td></tr>
   <tr><td>Tiempo medio hasta el n-ésimo</td><td>n/λ</td></tr>
   <tr><td>n-ésimo evento después de t</td><td>P(S<sub>n</sub> &gt; t) = P(N(t) ≤ n−1)</td></tr>
   <tr><td>Separar por tipo (prob. p)</td><td>Poisson(λpt), independiente del complemento</td></tr>
   <tr><td>Descomposición doble (p y w)</td><td>Poisson(λ p w t), y los cuatro subprocesos independientes</td></tr>
   <tr><td>Dado N(t)=n, ¿cuántos en [0,u]?</td><td>Binomial(n, u/t)</td></tr>
   <tr><td>Dado N(t)=n, repartir en 3 subintervalos</td><td>Multinomial con las razones de largos</td></tr>
   <tr><td>Un solo evento en [0,t]</td><td>Uniforme en [0,t]</td></tr>
   </table>
   <p><b>Por si acaso</b>, media línea más al margen: mínimo de exponenciales = Exponencial(Σλ<sub>j</sub>) y carrera = λ<sub>i</sub>/Σλ<sub>j</sub>. Ya los viste en la Ayudantía 1 y no cuestan nada.</p>
   <p>Lo que <b>no</b> necesitas para este control y sí para la Prueba 1: la mezcla con Binomial(m, λ<sub>i</sub>/Σλ<sub>j</sub>), la intensidad acumulada m(t) y el condicionamiento con m(u)/m(t).</p>`
  },
  {
   t:'Plan para los dos días que quedan',
   h:`<table class="tb"><tr><th>Cuándo</th><th>Qué</th></tr>
   <tr><td><b>Hoy, martes 25</b></td><td>Imprimir el formulario a doble cara. Corregir tus cuatro errores de la Ayudantía 1. Leer el enunciado de la <b>Ayudantía 2</b> e intentar el ejercicio 1 (farmacia) antes de que te lo resuelvan mañana.</td></tr>
   <tr><td><b>Miércoles 26 · 15:30</b></td><td><b>Ayudantía 2 en H-012.</b> Es el ensayo del control: llega con el enunciado leído para aprovecharla de verdad.</td></tr>
   <tr><td><b>Miércoles 26 · noche</b></td><td><b>Control 1 de agosto 2024 cronometrado</b> (50 minutos, sin calculadora, dejando todo expresado). Corregir con la pauta.</td></tr>
   <tr><td><b>Jueves 27 · 10:30</b></td><td>Control. Formulario impreso, sin marcas.</td></tr>
   </table>
   <p><b>Si solo alcanzas una cosa:</b> la Ayudantía 2. Es el material más cercano al control que existe, lo escribieron los mismos ayudantes esta semana, y cubre exactamente el alcance que entra.</p>
   <p>Lo que sobre de la lista no se pierde: sirve para la <b>Prueba 1 del miércoles 2 de septiembre</b>, misma materia más el no homogéneo, con el triple de peso.</p>`
  }
 ],
 ejercicios:[
  {fuente:'Ayudantía 2 (Canvas) — la parte que entra en el control', items:[
   {x:'Ejercicio 4 — correos del profesor, tres partes', por:'Descomposición pura, y pide justificar explícitamente con la propiedad. Es el enunciado más parecido a una pregunta de control. Empieza por acá.'},
   {x:'Ejercicio 3 — sucursal bancaria, tres partes', por:'Descomposición doble (retiro por adulto mayor) y reparto en tres subintervalos. La parte c) mezcla descomposición con tiempo del k-ésimo.'},
   {x:'Ejercicio 1 — farmacia de turno, tres partes', por:'Condicionamiento con u/t, k-ésimo evento con dos restricciones e intervalos traslapados. La parte c) es la más difícil de la ayudantía.'},
   {x:'Ejercicio 2 — los tres correctores (opcional para el control)', por:'Carrera, mínimo y mezcla: apunta más a la Prueba 1. Las partes a) y c) igual valen porque el mínimo y la carrera ya los viste en la Ayudantía 1.'}
  ]},
  {fuente:'Controles 1 pasados · Capítulo 2 (Canvas)', items:[
   {x:'Control 1 · 23 de agosto de 2024 — procesadores y trabajos, 3 preguntas de 1 punto', por:'Mismo momento del semestre que el tuyo y encaja justo en el alcance: dos procesos independientes y condicionamiento. Hazlo cronometrado a 50 minutos y sin calculadora. Prioridad máxima.'},
   {x:'Control · jugador de fútbol, 1,5 goles por partido', por:'Descomposición por tipo de gol y nada más. Corto y exactamente del alcance.'},
   {x:'Control 1 · 31 de marzo de 2025 — centro de salud con 3 médicos', por:'Descomposición doble, tiempo hasta el 5.º evento y condicionamiento binomial. Tiene una parte de carrera de exponenciales: sáltala si andas justo de tiempo.'},
   {x:'Control 1 · farmacia de turno (solo esa parte)', por:'Uniformidad condicional, dentro del alcance. La parte de la bomba de bencina es mínimo de exponenciales: opcional.'}
  ]},
  {fuente:'Guía Capítulo 2 — Proceso de Poisson (Canvas)', items:[
   {x:'Problema 3 — centro comercial, clientes clasificados por tipo', por:'Descomposición pura. El más representativo del alcance.'},
   {x:'Problema 1 — distribución y esperanza condicionales de N(t)', por:'Incrementos independientes puro. Rápido y te calibra.'},
   {x:'Problema 7 — fondo de inversión con N tipos de oportunidades', por:'Descomposición múltiple. El más difícil, pero es justo el tema del control.'},
   {x:'Problema 5 — tubo fluorescente', por:'Tiempos entre eventos y falta de memoria.'},
   {x:'Problema 2 — el evento en el destino de vacaciones', por:'Condicionamiento.'},
   {x:'Problema 4 — estudiantes inscritos en el curso', por:'Conteo y condicional.'},
   {x:'Problema 6 — dos líneas de transporte (dejar para la Prueba 1)', por:'Es superposición y carrera: fuera del alcance del control.'}
  ]},
  {fuente:'Guía Capítulo 1 — Repaso de Probabilidad (Canvas)', items:[
   {x:'Ejercicios 10, 11 y 12 — independencia y probabilidad condicional', por:'Rápidos, sirven para calibrar.'},
   {x:'Ejercicios 14 y 15 — cajas con plumones y el test del virus', por:'Bayes clásico: te dan el efecto y piden la causa.'},
   {x:'Ejercicios 17, 18 y 19 — binomial y Poisson aplicadas', por:'El 19 (tornillos defectuosos) es la aproximación Poisson a la binomial.'},
   {x:'Ejercicios 20 a 23 — densidades continuas, esperanza y varianza', por:'El 22 (ampolletas del semáforo) es exponencial disfrazada.'},
   {x:'Saltarse los ejercicios 1 a 9, el 16 y los 24 a 27', por:'Conjuntos y combinatoria, o repetición de lo que ya cubre la Ayudantía 2. Con dos días no alcanzan y no rinden.'}
  ]},
  {fuente:'Ayudantía 1 — cerrar lo pendiente', items:[
   {x:'Corregir tus cuatro errores', por:'P1 c) quedó sin cerrar (da 0,161); P1 d) da 0,00597 y no 0,00691; P4 e) da 0,528 y no 0,0527; y en P4 la tasa es 9 por hora, no por minuto.'},
   {x:'Repasar la P5 — las tres pilas', por:'Mínimo y máximo de exponenciales. Formalmente es de la sección de suma, pero ya lo viste y es barato tenerlo fresco.'}
  ]}
 ]
},

{
 id:'me-p1', ramo:'me', eva:'Prueba 1', fecha:'2026-09-02',
 bajada:'20% · Unidad 1 y Capítulo 2 hasta SUMA · sin eximición',
 resumen:[
  {
   t:'Qué entra y qué NO',
   h:`<p><b>El techo es la suma de procesos de Poisson.</b> Ahí quedó la cátedra al cerrar la semana 4, incluido el ejercicio de consolidación que el profesor resolvió después de esa sección.</p>
   <p><b>Entra:</b></p>
   <ul>
   <li><b>Unidad 1</b> completa: condicional, Bayes, esperanza y varianza, distribuciones, falta de memoria.</li>
   <li>Proceso de conteo; incrementos independientes y estacionarios.</li>
   <li>Poisson: conteo, tiempo entre eventos, tiempo del k-ésimo evento.</li>
   <li>Distribución condicional de los tiempos: uniforme, binomial con u/t, reparto en varios subintervalos.</li>
   <li><b>Descomposición</b> (thinning), simple y doble.</li>
   <li><b>Suma / superposición</b>, carrera de exponenciales y mínimo de exponenciales.</li>
   </ul>
   <p><b>No entra:</b> <b>mezcla</b> (dado el total, cuántos de cada proceso) y <b>Poisson no homogéneo</b>. Las dos se pasan en la semana 5, o sea <b>después</b> de la prueba. Están en la guía de la semana 5 y no hay que tocarlas ahora.</p>`,
   ojo:'Esto importa mucho al hacer pruebas pasadas: las tres Pruebas 1 del archivo de Canvas traen no homogéneo en alguna parte. Cuando llegues a esa parte, sáltala — no es que no te salga, es que todavía no la pasan.'
  },
  {
   t:'Lo que tienes que saber, en una hoja',
   h:`<p><b>1. El criterio del tiempo</b> — ¿desde dónde cuento?</p>
   <ul>
   <li>Desde el evento anterior (o "el próximo") → <b>exponencial directa</b>, P(T &gt; t) = e<sup>−λt</sup></li>
   <li>Desde el origen hasta el n-ésimo → <b>traduzco a conteo</b>: S<sub>n</sub> ≤ t ⟺ N(t) ≥ n</li>
   <li>"Ya pasaron s minutos" → <b>falta de memoria</b>, borras lo transcurrido</li>
   </ul>
   <p><b>2. Las tres configuraciones de intervalos</b> — esto es lo que más se pregunta:</p>
   <table class="tb"><tr><th>Cómo están</th><th>Qué usas</th></tr>
   <tr><td>Separados, no se tocan</td><td>Incrementos independientes: borras el condicionamiento</td></tr>
   <tr><td>Se pisan parcialmente</td><td>Cortas en bloques disjuntos y sumas sobre el compartido</td></tr>
   <tr><td>Uno dentro del otro</td><td>Binomial(n, u/t) — λ se cancela</td></tr>
   </table>
   <p><b>3. Separar y juntar procesos</b></p>
   <ul>
   <li><b>Descomposición:</b> "cada evento es de tipo A con probabilidad p" → Poisson(λpt), independiente del complemento. Con dos clasificaciones a la vez, los cuatro subprocesos también son independientes.</li>
   <li><b>Suma:</b> juntar k procesos da Poisson con la suma de las tasas. El primer evento del juntado es el mínimo de exponenciales, y viene del proceso i con probabilidad λ<sub>i</sub>/Σλ<sub>j</sub>.</li>
   </ul>
   <p><b>4. Las frases que dan puntos.</b> En las pautas hay puntaje asignado a escribir <i>"por incrementos independientes"</i>, <i>"por incrementos estacionarios"</i>, <i>"por complemento"</i> y <i>"por la propiedad de descomposición"</i>. Ponlas al lado de cada igualdad.</p>`
  },
  {
   t:'Formulario para escribir a mano',
   h:`<table class="tb"><tr><th>Qué necesito</th><th>Fórmula</th></tr>
   <tr><td>n eventos en tiempo t</td><td>e<sup>−λt</sup>(λt)<sup>n</sup>/n!</td></tr>
   <tr><td>Ningún evento hasta t / esperar más de t</td><td>e<sup>−λt</sup></td></tr>
   <tr><td>Tiempo medio entre eventos / hasta el n-ésimo</td><td>1/λ  ·  n/λ</td></tr>
   <tr><td>n-ésimo evento después de t</td><td>P(S<sub>n</sub> &gt; t) = P(N(t) ≤ n−1)</td></tr>
   <tr><td>n-ésimo evento antes de t</td><td>P(S<sub>n</sub> ≤ t) = P(N(t) ≥ n)</td></tr>
   <tr><td>Falta de memoria</td><td>P(T &gt; s+t | T &gt; s) = P(T &gt; t)</td></tr>
   <tr><td>Separar por tipo (prob. p)</td><td>Poisson(λpt), independiente del complemento</td></tr>
   <tr><td>Descomposición doble (p y w)</td><td>Poisson(λpwt), los cuatro subprocesos independientes</td></tr>
   <tr><td>Juntar k procesos</td><td>Poisson((λ<sub>1</sub>+…+λ<sub>k</sub>)t)</td></tr>
   <tr><td>¿De cuál viene el próximo?</td><td>λ<sub>i</sub>/Σλ<sub>j</sub></td></tr>
   <tr><td>Mínimo de exponenciales</td><td>Exponencial(Σλ<sub>j</sub>)</td></tr>
   <tr><td>Máximo de n exponenciales iguales</td><td>E[máx] = (1/λ)(1 + 1/2 + … + 1/n)</td></tr>
   <tr><td>Dado N(t)=n, ¿cuántos en [0,u]?</td><td>Binomial(n, u/t)</td></tr>
   <tr><td>Dado N(t)=n, repartir en varios subintervalos</td><td>Multinomial con las razones de largos</td></tr>
   <tr><td>Un solo evento en [0,t]</td><td>Uniforme en [0,t]</td></tr>
   </table>
   <p><b>No pongas</b> mezcla ni m(t): no entran y solo te van a confundir mirando la hoja.</p>`,
   ojo:'Escribe siempre λ CON SU UNIDAD al lado, y el tiempo convertido a esa misma unidad, antes de tocar cualquier fórmula. La mitad de los errores del semestre pasado fueron de unidades.'
  },
  {
   t:'Plan de los tres días',
   h:`<p>Hoy es domingo 30 y la prueba es el miércoles 2. La prueba es larga y encadenada, así que la prioridad es <b>hacer evaluaciones completas de corrido</b>, no leer.</p>
   <table class="tb"><tr><th>Día</th><th>Qué</th></tr>
   <tr><td><b>Dom 30</b></td><td>Escribir el <b>formulario a mano</b> (media hora, y es repaso). Después los <b>cuatro controles pasados</b> seguidos: son cortos y te calibran rápido. Corregir con la pauta y anotar dónde te trancaste.</td></tr>
   <tr><td><b>Lun 31</b></td><td><b>Prueba 1 de los trabajos de menos de 1 hora</b> (partes a–f), cronometrada y de corrido. Es la más completa. Saltarse la parte del jefe de turno.</td></tr>
   <tr><td><b>Mar 1</b></td><td><b>Prueba 1 del 1 de septiembre de 2023</b> (cinta transportadora) y el <b>concesionario</b> del PPT, partes 1 a 3. Después, leer la pauta con puntaje detallado de la Prueba N.º 1.</td></tr>
   <tr><td><b>Mié 2</b></td><td>Prueba. Formulario impreso y a mano, y llegar temprano.</td></tr>
   </table>
   <p><b>Si el tiempo se acorta</b>, el orden de sacrificio es: primero sueltas la Guía del Capítulo 1, después los problemas de la Guía del Capítulo 2, y lo último que sueltas son los <b>controles y pruebas pasadas</b>. Esos son los que de verdad predicen la nota.</p>`
  }
 ],
 ejercicios:[
  {fuente:'Controles pasados · Capítulo 2 (Canvas) — todos dentro del alcance', items:[
   {x:'Control 1 · 23 de agosto de 2024 — procesadores y trabajos, 3 preguntas', por:'Dos procesos independientes y condicionamiento. Corto, empieza por acá para calibrar.'},
   {x:'Control · jugador de fútbol, 1,5 goles por partido', por:'Descomposición por tipo de gol. El más directo de los cuatro.'},
   {x:'Control 1 · farmacia de turno y bomba de bencina', por:'La farmacia es uniformidad condicional; la bomba es mínimo de exponenciales con operarios que salen de su puesto. Ahora las dos partes entran.'},
   {x:'Control 1 · 31 de marzo de 2025 — centro de salud con 3 médicos', por:'El más completo de los controles: descomposición doble, carrera de exponenciales, tiempo hasta el 5.º evento y condicionamiento binomial.'}
  ]},
  {fuente:'Pruebas 1 pasadas · Capítulo 2 (Canvas) — ojo con las partes fuera de alcance', items:[
   {x:'Prueba 1 · trabajos que se terminan en menos de 1 hora (partes a a f)', por:'La más completa y la más parecida en formato. Descomposición, tiempo hasta el n-ésimo, condicionamiento y mínimo de exponenciales. SALTARSE la parte del jefe de turno, que es no homogéneo.'},
   {x:'Prueba 1 · 1 de septiembre de 2023 — cinta transportadora y tienda de esquí', por:'Mismo enunciado que el ejercicio de consolidación del PPT, así que puedes comparar tu desarrollo con el del profesor. SALTARSE la parte de no homogéneo.'},
   {x:'Prueba N.º 1 · 9 de abril de 2025 — correos del profesor', por:'Descomposición y superposición. Trae la pauta con el puntaje desglosado línea por línea: LEERLA aunque no la hagas entera, muestra cómo redactar. SALTARSE la parte de no homogéneo.'}
  ]},
  {fuente:'Ejercicios resueltos por el profesor en el PPT', items:[
   {x:'Consolidación de aprendizajes — la cinta transportadora (5 partes)', por:'Es el ejercicio con el que cerró la semana 4, justo después de suma. Entra completo y es el mejor predictor de lo que va a preguntar.'},
   {x:'Repaso Prueba 1 — el concesionario automotriz, partes 1 a 3', por:'Superposición y descomposición doble. Las partes 4 y 5 usan condicionamiento avanzado y no homogéneo: déjalas para la semana 5.'}
  ]},
  {fuente:'Guía Capítulo 2 — Proceso de Poisson (Canvas)', items:[
   {x:'Problema 3 — centro comercial, clientes clasificados por tipo', por:'Descomposición pura.'},
   {x:'Problema 6 — dos líneas de transporte a Ciudad Empresarial', por:'Superposición y carrera de exponenciales. Ahora sí entra.'},
   {x:'Problema 1 — distribución y esperanza condicionales de N(t)', por:'Incrementos independientes. Rápido.'},
   {x:'Problema 7 — fondo de inversión con N tipos de oportunidades', por:'Descomposición múltiple. El más difícil de los siete.'},
   {x:'Problema 5 — tubo fluorescente', por:'Tiempos entre eventos y falta de memoria.'},
   {x:'Problemas 2 y 4 — vacaciones y estudiantes inscritos', por:'Condicionamiento. Los últimos en la fila si falta tiempo.'}
  ]},
  {fuente:'Guía Capítulo 1 — solo si sobra tiempo', items:[
   {x:'Ejercicios 14 y 15 — cajas con plumones y el test del virus', por:'Bayes clásico. Los dos que más rinden del capítulo 1.'},
   {x:'Ejercicios 20 a 23 — densidades continuas, esperanza y varianza', por:'El 22 (ampolletas del semáforo) es exponencial disfrazada.'},
   {x:'Ejercicios 17, 18 y 19 — binomial y Poisson aplicadas', por:'Refuerzo de distribuciones.'}
  ]}
 ]
}

]);
