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
 bajada:'Unidades 1 y 2 · durante la cátedra, sala C-213',
 resumen:[
  {
   t:'Qué entra y cómo se evalúa',
   h:`<p>Entra la <b>Unidad 1</b> (repaso de probabilidad) y la <b>Unidad 2</b> completa (proceso de Poisson: conteo, tiempos, descomposición, suma, mezcla, condicionamiento y no homogéneo). Es individual.</p>
   <p>Pesa dentro del 15% que se reparten los cuatro controles, así que por sí solo no decide nada. Pero seis días después viene la <b>Prueba 1</b> con exactamente la misma materia y un 20%: todo lo que estudies acá te sirve dos veces.</p>
   <p><b>Cómo se corrige.</b> En las pautas de controles pasados hay puntaje asignado explícitamente a frases como <i>"por incrementos independientes"</i> y <i>"por incrementos estacionarios"</i>. Escribir la justificación <b>da puntos</b>. Equivocarte en la aritmética con el planteamiento bien rescata casi todo; al revés, no.</p>`
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
   <p><b>En una línea:</b> la exponencial solo sabe responder por <i>el próximo</i> evento. Desde el segundo en adelante hay que pasar por el conteo, porque S<sub>n</sub> es Gamma y su acumulada no se integra a mano.</p>
   <p class="fx">S<sub>n</sub> &gt; t ⟺ N(t) ≤ n − 1     S<sub>n</sub> ≤ t ⟺ N(t) ≥ n</p>
   <p>En n = 1 las dos vías coinciden: P(T₁ &gt; t) = P(N(t) = 0) = e<sup>−λt</sup>.</p>`
  },
  {
   t:'Lo que te da el formulario (y lo que tienes que traer tú)',
   h:`<p>El <b>"Prueba 1 - Formulario"</b> de Canvas es el que te entregan. Su índice trae: distribuciones discretas (binomial, geométrica, binomial negativa, Poisson, uniforme discreta), continuas (uniforme, exponencial y otras), proceso de conteo, proceso de Poisson con su corolario inverso, y proceso de Poisson no homogéneo.</p>
   <p><b>Ábrelo antes del control</b> y confirma si trae explícitas la descomposición, la superposición y la carrera de exponenciales: en el índice no aparecen como definición propia. Si no están, esas tres van de memoria.</p>
   <p><b>Lo que ningún formulario te puede dar</b>, y es justo lo que se evalúa: reconocer que "un porcentaje son de tipo 1" es descomposición, que "¿cuál llega primero?" es carrera de exponenciales, que "dado que llegaron n" abre la binomial, y saber justificar con incrementos independientes y estacionarios.</p>`
  },
  {
   t:'Formulario completo para escribir a mano',
   h:`<table class="tb"><tr><th>Qué necesito</th><th>Fórmula</th></tr>
   <tr><td>n eventos en tiempo t</td><td>e<sup>−λt</sup>(λt)<sup>n</sup>/n!</td></tr>
   <tr><td>Ningún evento hasta t</td><td>e<sup>−λt</sup></td></tr>
   <tr><td>Esperar más de t</td><td>e<sup>−λt</sup></td></tr>
   <tr><td>Tiempo medio entre eventos</td><td>1/λ</td></tr>
   <tr><td>Tiempo medio hasta el n-ésimo</td><td>n/λ</td></tr>
   <tr><td>Separar por tipo (prob. p)</td><td>Poisson(λpt), independiente del complemento</td></tr>
   <tr><td>Juntar k procesos</td><td>Poisson((λ<sub>1</sub>+…+λ<sub>k</sub>)t)</td></tr>
   <tr><td>¿De cuál viene el próximo?</td><td>λ<sub>i</sub>/Σλ<sub>j</sub></td></tr>
   <tr><td>Mínimo de exponenciales</td><td>Exponencial(Σλ<sub>j</sub>)</td></tr>
   <tr><td>Dado el total m, ¿cuántos del proceso i?</td><td>Binomial(m, λ<sub>i</sub>/Σλ<sub>j</sub>)</td></tr>
   <tr><td>Dado N(t)=n, ¿cuántos en [0,u]?</td><td>Binomial(n, u/t)</td></tr>
   <tr><td>Un solo evento en [0,t]</td><td>Uniforme en [0,t]</td></tr>
   <tr><td>Tasa variable</td><td>m(t)=∫₀ᵗλ(s)ds; reemplaza λt por m(t)</td></tr>
   <tr><td>No homogéneo, dado N(t)=n</td><td>Binomial(n, m(u)/m(t))</td></tr>
   </table>
   <p>Escribirlo a mano el miércoles no es trámite: al decidir qué entra y qué no, repasas el capítulo entero una vez más.</p>`
  },
  {
   t:'Plan de los días que quedan',
   h:`<p>Ojo con la semana: el <b>martes 25 tienes el Control 1 de Programación Matemática</b>, así que el tiempo real para Modelos es menos del que parece. Este plan ya lo asume.</p>
   <table class="tb"><tr><th>Día</th><th>Qué</th></tr>
   <tr><td><b>Lun 24</b></td><td>Día de PM. Para Modelos, solo lo barato: corregir tus cuatro errores de la Ayudantía 1 y dejar el criterio exponencial/Poisson automático. Media hora basta.</td></tr>
   <tr><td><b>Mar 25</b></td><td>Después del control de PM: Guía Cap. 2, problemas <b>1, 3 y 6</b>. Son los tres que más rinden.</td></tr>
   <tr><td><b>Mié 26</b></td><td>En la mañana, <b>Control 1 de agosto 2024 cronometrado</b> y sin apuntes. A las 15:30 la ayudantía. En la noche, escribir el <b>formulario a mano</b>.</td></tr>
   <tr><td><b>Jue 27</b></td><td>Control, 10:30, C-213.</td></tr>
   </table>
   <p><b>Si solo alcanzas a hacer una cosa:</b> el Control 1 de agosto 2024 cronometrado. Es el mismo momento del semestre y te dice en veinte minutos dónde estás parado.</p>
   <p>Lo que sobre de la lista de abajo no se pierde: sirve igual para la <b>Prueba 1 del miércoles 2 de septiembre</b>, que es la misma materia con el triple de peso.</p>`
  }
 ],
 ejercicios:[
  {fuente:'Controles y pruebas pasadas · Capítulo 2 (Canvas)', items:[
   {x:'Control 1 · 23 de agosto de 2024 — procesadores y trabajos, 3 preguntas de 1 punto', por:'El más representativo: mismo momento del semestre que el tuyo. Hazlo cronometrado y sin apuntes. Prioridad máxima.'},
   {x:'Control 1 · 31 de marzo de 2025 — centro de salud con 3 médicos', por:'Descomposición doble (tipo de paciente y previsión), carrera de exponenciales, tiempo hasta el 5.º evento y condicionamiento binomial, todo en un enunciado.'},
   {x:'Control 1 · farmacia de turno y bomba de bencina', por:'La farmacia usa uniformidad condicional; la bomba, mínimo de exponenciales con operarios que salen de su puesto.'},
   {x:'Control · jugador de fútbol, 1,5 goles por partido', por:'Descomposición por tipo de gol. Corto y bueno para calentar.'},
   {x:'Prueba 1 · trabajos que se terminan en menos de 1 hora (partes a a f)', por:'La más completa: descomposición, tiempo hasta el n-ésimo, condicionamiento y mínimo de exponenciales.'},
   {x:'Prueba 1 · 1 de septiembre de 2023 — cinta transportadora y tienda de esquí', por:'Mismo enunciado que el ejercicio de consolidación del PPT. Dos preguntas de 3 puntos.'},
   {x:'Prueba N.º 1 con pauta de puntaje detallada — LEERLA, no hacerla', por:'Muestra cuántos puntos vale cada justificación y cómo redactar para no perderlos.'},
   {x:'Correos del profesor a su bandeja de entrada', por:'El que más se parece a un Poisson no homogéneo.'}
  ]},
  {fuente:'Ejercicios resueltos por el profesor en el PPT de cátedra', items:[
   {x:'Consolidación de aprendizajes — la cinta transportadora (5 partes)', por:'Bolígrafos a 5 por minuto y lápices a 130 por hora. Ojo con las unidades. Cubre mezcla, binomial con u/t y tiempo del k-ésimo.'},
   {x:'Repaso Prueba 1 — el concesionario automotriz (5 partes)', por:'Recorre las cinco herramientas del capítulo: superposición, descomposición doble, orden de llegadas, condicionamiento y no homogéneo con lambda(t) = 2t² + t + 1. Si lo haces entero sin mirar, estás listo.'}
  ]},
  {fuente:'Guía Capítulo 2 — Proceso de Poisson (Canvas)', items:[
   {x:'Problema 1 — distribución y esperanza condicionales de N(t)', por:'Incrementos independientes puro. Empieza por acá.'},
   {x:'Problema 3 — centro comercial, clientes clasificados por tipo', por:'Descomposición pura.'},
   {x:'Problema 6 — dos líneas de transporte a Ciudad Empresarial', por:'Superposición y carrera de exponenciales.'},
   {x:'Problema 5 — tubo fluorescente', por:'Tiempos entre eventos y falta de memoria.'},
   {x:'Problema 2 — el evento en el destino de vacaciones', por:'Condicionamiento.'},
   {x:'Problema 4 — estudiantes inscritos en el curso', por:'Mezcla de conteo y condicional.'},
   {x:'Problema 7 — fondo de inversión con N tipos de oportunidades', por:'Descomposición múltiple. El más difícil de los siete.'}
  ]},
  {fuente:'Guía Capítulo 1 — Repaso de Probabilidad (Canvas)', items:[
   {x:'Ejercicios 10, 11 y 12 — independencia y probabilidad condicional', por:'Rápidos, sirven para calibrar.'},
   {x:'Ejercicios 14 y 15 — cajas con plumones y el test del virus', por:'Bayes clásico: te dan el efecto y piden la causa. El 15 es el caso de test médico con falsos positivos.'},
   {x:'Ejercicios 17, 18 y 19 — binomial y Poisson aplicadas', por:'El 19 (tornillos defectuosos) es la aproximación Poisson a la binomial.'},
   {x:'Ejercicios 20 a 23 — densidades continuas, esperanza y varianza', por:'El 22 (ampolletas del semáforo) es exponencial disfrazada.'},
   {x:'Ejercicios 13, 24, 25, 26 y 27 — condicionamiento aplicado', por:'Prioridad media. Buen entrenamiento de lectura de enunciado.'},
   {x:'Saltarse los ejercicios 1 a 9 y el 16', por:'Conjuntos y combinatoria: no apuntan a este ramo.'}
  ]},
  {fuente:'Ayudantías (Canvas)', items:[
   {x:'Ayudantía 1 — corregir tus cuatro errores', por:'P1 c) quedó sin cerrar (da 0,161); P1 d) da 0,00597 y no 0,00691; P4 e) da 0,528 y no 0,0527; y en P4 la tasa es 9 por hora, no por minuto.'},
   {x:'Ayudantía 1 · P5 de nuevo — las tres pilas', por:'Mínimo y máximo de exponenciales: lo que menos se practica y sí aparece en pruebas.'},
   {x:'Ayudantía 1 · contrastar con Pauta_Ayudantia_1.pdf', por:'Sobre todo la P5 c), donde dudaste del sentido de la carrera de exponenciales. Tu 2/3 estaba bien.'},
   {x:'Ayudantía 0 + pauta — repaso de probabilidad', por:'Solo si sientes floja la Unidad 1.'}
  ]}
 ]
},

{
 id:'me-p1', ramo:'me', eva:'Prueba 1', fecha:'2026-09-02',
 bajada:'20% · Unidades 1 y 2 · misma materia del Control 1',
 resumen:[
  {
   t:'Qué cambia respecto del Control 1',
   h:`<p>La materia es <b>la misma</b>: Unidades 1 y 2. Lo que cambia es el formato y lo que está en juego.</p>
   <ul>
   <li><b>Pesa 20%</b> contra el ~4% que aporta un control. Y no hay eximición, así que este 20% se paga completo.</li>
   <li><b>Los enunciados son largos.</b> En los controles pasados hay 3 o 4 preguntas cortas; en las pruebas hay uno o dos escenarios con cinco o seis partes encadenadas (a, b, c, d, e, f).</li>
   <li>Se evalúa explícitamente <b>modelación, desarrollo matemático e interpretación</b>. La interpretación —decir qué significa el número que obtuviste— aparece como pregunta.</li>
   </ul>
   <p>Estrategia: haz el repaso del Control 1 completo, y entre el jueves 27 y el miércoles 2 dedícate a las <b>pruebas</b> pasadas en vez de los controles, que es donde se entrena aguantar un enunciado largo sin perder el hilo.</p>`
  },
  {
   t:'Dónde poner el peso',
   h:`<p>Si el Control 1 te salió bien, no repitas todo. Concentra los seis días en lo que un control corto no alcanza a preguntar:</p>
   <ul>
   <li><b>Poisson no homogéneo</b> — en los controles apenas aparece; en las pruebas sí. Sobre todo la observación final del PPT con m(u)/m(t).</li>
   <li><b>Enunciados encadenados</b> — donde la parte d) usa lo que calculaste en la b).</li>
   <li><b>Descomposición doble</b> — dos clasificaciones simultáneas sobre el mismo proceso.</li>
   <li><b>Interpretar el resultado</b> — practica escribir una frase que explique qué significa cada número.</li>
   </ul>`
  }
 ],
 ejercicios:[
  {fuente:'Pruebas pasadas · Capítulo 2 (Canvas)', items:[
   {x:'Prueba 1 · trabajos que se terminan en menos de 1 hora (a a f)', por:'Hazla entera y de corrido, como si fuera la prueba real.'},
   {x:'Prueba 1 · 1 de septiembre de 2023 — cinta transportadora y tienda de esquí', por:'Dos preguntas de 3 puntos. Compara tu desarrollo con el del PPT.'},
   {x:'Prueba N.º 1 con pauta de puntaje detallada', por:'Leerla dos veces: antes de estudiar y la noche anterior.'},
   {x:'Repaso Prueba 1 del PPT — el concesionario automotriz', por:'Es la prueba que el profesor mismo diseñó como repaso. Lo más cercano que hay.'}
  ]},
  {fuente:'Antes de la prueba', items:[
   {x:'Rehacer el Control 1 con las preguntas que te salieron mal', por:'Lo que fallaste el 27 es exactamente lo que hay que arreglar antes del 2.'},
   {x:'Revisar el formulario oficial de la Prueba 1 con calma', por:'Saber dónde está cada cosa te ahorra minutos durante la prueba.'}
  ]}
 ]
}

]);
