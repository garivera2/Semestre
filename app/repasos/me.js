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
 bajada:'20% · Unidades 1 y 2 completas, ahora sí con Poisson no homogéneo',
 resumen:[
  {
   t:'Qué cambia respecto del Control 1',
   h:`<p>Acá entra <b>todo</b>. El Control 1 llegaba hasta descomposición; la Prueba 1 suma además <b>superposición, mezcla y proceso de Poisson no homogéneo</b>. Lo demás que cambia:</p>
   <ul>
   <li><b>Pesa 20%</b> contra el ~4% que aporta un control, y no hay eximición: este 20% se paga completo.</li>
   <li><b>Los enunciados son largos.</b> En los controles hay 3 o 4 preguntas cortas; en las pruebas hay uno o dos escenarios con cinco o seis partes encadenadas.</li>
   <li>Se evalúa explícitamente <b>modelación, desarrollo matemático e interpretación</b>.</li>
   </ul>
   <p><b>El dato duro:</b> de las tres Pruebas 1 que hay en el archivo de Canvas, <b>las tres traen no homogéneo</b>. No es opcional.</p>`
  },
  {
   t:'Lo nuevo: suma, mezcla y no homogéneo',
   h:`<p><b>Suma (superposición).</b> Si juntas k procesos independientes, N(t) ~ Poisson((λ₁+…+λ<sub>k</sub>)t), y la probabilidad de que el próximo evento venga del proceso i es λ<sub>i</sub>/Σλ<sub>j</sub>. La demostración va por el mínimo: T₁ = mín(X₁,Y₁) es exponencial de tasa λ₁+λ₂.</p>
   <p><b>Mezcla.</b> Es la suma mirada al revés: dado que en total ocurrieron m eventos, cuántos venían del proceso i.</p>
   <p class="fx">Y<sub>i</sub>(t) | X(t) = m  ~  Binomial( m , λ<sub>i</sub>/Σλ<sub>j</sub> )</p>
   <p><b>No homogéneo.</b> Se relaja la tasa constante: ahora λ(t) varía. Aparece la <b>intensidad acumulada</b>:</p>
   <p class="fx">m(t) = ∫₀ᵗ λ(s) ds</p>
   <p class="fx">N(t) ~ Poisson(m(t))     N(t) − N(s) ~ Poisson(m(t) − m(s))</p>
   <p><b>Regla mecánica:</b> donde en el caso homogéneo escribías λt, ahora escribes m(t). Todo lo de conteo se mantiene igual.</p>
   <p><b>Lo que se pierde:</b> los incrementos estacionarios. Los independientes se mantienen. Y los tiempos entre eventos dejan de ser exponenciales idénticamente distribuidos.</p>
   <p><b>La observación que cierra el PPT</b>, y que es la que más se pregunta:</p>
   <p class="fx">N(u) | N(t) = n  ~  Binomial(n, m(u)/m(t))</p>
   <p class="fx">P(S<sub>k</sub> &lt; u | N(t) = n) = P(N(u) ≥ k | N(t) = n)</p>
   <p>Donde en el caso homogéneo la probabilidad era la razón de <i>largos</i> (u/t), acá es la razón de <i>intensidades acumuladas</i>. El tiempo deja de medirse en minutos y pasa a medirse en eventos esperados.</p>`,
   ojo:'Si en la prueba ves una λ que depende de t, lo primero que haces es integrar y dejar m(t) escrito. La mitad de los errores vienen de seguir arrastrando λ cuando ya debería haber desaparecido.'
  },
  {
   t:'Dónde poner el peso los días entre el control y la prueba',
   h:`<p>Si el Control 1 te salió bien, no repitas todo. Concentra los días en lo que un control corto no alcanza a preguntar:</p>
   <ul>
   <li><b>No homogéneo</b>, que es materia nueva para la evaluación.</li>
   <li><b>Enunciados encadenados</b>, donde la parte d) usa lo que calculaste en la b).</li>
   <li><b>Interpretar el resultado</b>: practica escribir una frase que explique qué significa cada número.</li>
   <li>Lo que hayas fallado el jueves 27.</li>
   </ul>`
  }
 ],
 ejercicios:[
  {fuente:'Pruebas 1 pasadas · Capítulo 2 (Canvas)', items:[
   {x:'Prueba N.º 1 · 9 de abril de 2025 — correos del profesor, con pauta de puntaje detallada', por:'Descomposición y superposición, más un no homogéneo. Trae el puntaje desglosado línea por línea: es la mejor guía que existe de cómo redactar.'},
   {x:'Prueba 1 · 1 de septiembre de 2023 — cinta transportadora y tienda de esquí', por:'Dos preguntas de 3 puntos, con no homogéneo. Compara tu desarrollo con el del PPT, que resuelve el mismo enunciado.'},
   {x:'Prueba 1 · trabajos que se terminan en menos de 1 hora (partes a a f)', por:'Seis partes encadenadas y el jefe de turno con proceso no homogéneo. Hazla entera y de corrido, como si fuera la prueba real.'}
  ]},
  {fuente:'Del PPT de cátedra', items:[
   {x:'Repaso Prueba 1 — el concesionario automotriz (5 partes)', por:'Es la prueba que el profesor mismo diseñó como repaso: superposición, descomposición doble, orden de llegadas, condicionamiento y un no homogéneo con lambda(t) = 2t² + t + 1. Lo más cercano que hay.'},
   {x:'Rehacer las láminas de suma, mezcla, no homogéneo y la observación final', por:'Es todo lo que quedó fuera del Control 1: las cuatro secciones que cierran el capítulo.'},
   {x:'Guía Cap. 2, problema 6 — dos líneas de transporte', por:'Superposición y carrera de exponenciales, que en el control no entraban.'},
   {x:'Ayudantía 2, ejercicio 2 completo — los tres correctores', por:'Las siete partes: mínimo, carrera, orden de llegadas, mezcla y falta de memoria.'}
  ]},
  {fuente:'Antes de la prueba', items:[
   {x:'Rehacer el Control 1 con las preguntas que te salieron mal', por:'Lo que falles el 27 es exactamente lo que hay que arreglar antes del 2.'},
   {x:'Revisar el formulario oficial con calma', por:'Es el mismo del control. Saber dónde está cada cosa te ahorra minutos.'}
  ]}
 ]
}

]);
