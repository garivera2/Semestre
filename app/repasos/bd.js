/* ============================================================
   REPASOS DE CONTROLES Y PRUEBAS · BD
   Sección aparte de las guías. Acá va, por cada evaluación:
     · qué materia entra y las fórmulas que hay que saber
     · el checklist de ejercicios de Canvas que conviene hacer
   Los ejercicios NO se resuelven acá — solo se listan cuáles hacer.

   ESTRUCTURA
   {
    id:'bd-c1',            // único
    ramo:'bd',
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
 id:'bd-c1', ramo:'bd', eva:'C1 · Modelación', fecha:'2026-09-03',
 bajada:'8% de la nota · 45 min individual + 120 min grupal · todo en papel',
 resumen:[
 {t:'Qué entra y qué NO entra',
  h:`<p><b>Entra:</b> Entidad-Relación, Modelo Relacional y Formas Normales. O sea, las clases 1, 2 y 3.</p>
  <p><b>NO entra:</b> Álgebra Relacional ni SQL. Esos fueron los quizzes del 26 de agosto y son otra cosa.</p>
  <p>Es la primera de las cinco evaluaciones de aplicación, cada una vale <b>8%</b>. Y recuerda la condición de aprobación del ramo: se exige <b>4,0 en cada componente por separado</b>, así que el promedio de aplicación no puede bajar de ahí sin que la nota final se trunque a 3,9.</p>
  <table class="tb"><tr><th>Unidad</th><th>Lo que tienes que poder hacer</th></tr>
  <tr><td><b>Entidad-Relación</b></td><td>Leer un enunciado y dibujar el diagrama: entidades, atributos (simples, compuestos, multivaluados, derivados), vínculos, cardinalidad, participación, entidades débiles</td></tr>
  <tr><td><b>Modelo Relacional</b></td><td>Traducir ese diagrama a tablas con PK y FK, aplicando las reglas de traducción</td></tr>
  <tr><td><b>Formas Normales</b></td><td>Detectar dependencias, diagnosticar la forma normal y normalizar hasta 3FN</td></tr></table>`},

 {t:'Cómo es el control por dentro',
  h:`<table class="tb"><tr><th>Fase</th><th>Tiempo</th><th>Qué pasa</th></tr>
  <tr><td><b>Individual</b></td><td>45 min</td><td>Versión acotada. <b>Cada estudiante propone su propio modelo.</b> Acá no te cubre nadie.</td></tr>
  <tr><td>Receso</td><td>15 min</td><td>—</td></tr>
  <tr><td><b>Grupal</b></td><td>120 min</td><td>Equipo estable de 3, entregan <b>una única solución</b>.</td></tr></table>
  <p><b>Todo en papel y sin tecnología.</b> Ni computador, ni celular, ni yEd.</p>
  <p>La consecuencia práctica de que sea en papel: no hay motor que te avise de un error. Nadie te va a decir que la FK apunta a una tabla que no existe. La verificación la haces tú, y por eso el checklist del profe importa tanto.</p>`,
  },

 {t:'El método del profe · identificar → conectar → separar → verificar',
  h:`<p>Es la secuencia con que estructuró la clase 03 completa, y es el orden en que hay que atacar cualquier ejercicio.</p>
  <table class="tb"><tr><th>Paso</th><th>La pregunta</th><th>Herramienta</th></tr>
  <tr><td><b>1 · Identificar</b></td><td>¿Qué dato distingue a cada cosa?</td><td>superclave → candidata → PK</td></tr>
  <tr><td><b>2 · Conectar</b></td><td>¿Cómo vinculo sin copiar datos?</td><td>FK y cardinalidad</td></tr>
  <tr><td><b>3 · Separar</b></td><td>¿Dónde debe vivir cada dato?</td><td>formas normales</td></tr>
  <tr><td><b>4 · Verificar</b></td><td>¿Quedó bien?</td><td>el checklist de abajo</td></tr></table>
  <p><b>El checklist de verificación, en este orden exacto:</b></p>
  <ol>
  <li><b>1FN</b> — ¿cada celda contiene un valor atómico?</li>
  <li><b>2FN</b> — ¿todo dato no primo depende de la PK completa?</li>
  <li><b>3FN</b> — ¿un dato descriptivo depende de otro dato descriptivo?</li>
  <li><b>Integridad</b> — ¿las FK representan las referencias del dominio?</li>
  </ol>
  <p>El punto 4 es el que casi nadie hace y donde se pierden puntos baratos.</p>
  <p>Y la frase con que cerró la unidad, que es el criterio para decidir si una separación se justifica:</p>
  <p class="fx">No se trata de crear más tablas.<br>Se trata de evitar hechos contradictorios.</p>`},

 {t:'Formulario · traducir ER a tablas',
  h:`<table class="tb"><tr><th>En el ER</th><th>En el MR</th></tr>
  <tr><td>Entidad fuerte</td><td>una tabla; su identificador es la PK</td></tr>
  <tr><td>Atributo simple</td><td>una columna</td></tr>
  <tr><td>Atributo <b>compuesto</b></td><td>se descompone en columnas (dirección → calle, número, comuna)</td></tr>
  <tr><td>Atributo <b>multivaluado</b></td><td><b>tabla aparte</b>, PK = clave de la entidad + el valor</td></tr>
  <tr><td>Atributo <b>derivado</b></td><td><b>no se almacena</b>, se calcula al consultar</td></tr>
  <tr><td>Vínculo <b>1:1</b></td><td>FK en cualquiera de los dos, preferentemente el de participación total, con UNIQUE</td></tr>
  <tr><td>Vínculo <b>1:N</b></td><td>FK en el <b>lado N</b>. Los atributos del vínculo viajan con la FK.</td></tr>
  <tr><td>Vínculo <b>N:M</b></td><td><b>tabla nueva</b> con ambas claves como PK compuesta, más los atributos del vínculo</td></tr>
  <tr><td><b>Entidad débil</b></td><td>tabla cuya PK = identificador parcial + clave de la entidad fuerte</td></tr></table>
  <p><b>El porqué de la regla 1:N</b>, que es la que más se equivoca: la FK va en el lado "muchos" porque una celda guarda <b>un solo valor</b>. En el lado N cada fila necesita guardar un identificador; al revés tendrías que meter una lista en una celda.</p>`},

 {t:'Formulario · las tres formas normales',
  h:`<p>El truco es <b>dónde miras</b> en cada paso, de adentro hacia afuera:</p>
  <p class="fx">1FN → dentro de la CELDA &nbsp;·&nbsp; 2FN → la CLAVE &nbsp;·&nbsp; 3FN → entre los NO-CLAVE</p>
  <table class="tb"><tr><th></th><th>La pregunta</th><th>Solo puede fallar si…</th><th>Se arregla</th></tr>
  <tr><td><b>1FN</b></td><td>¿hay una lista metida en la celda?</td><td>hay multivaluados</td><td>tabla aparte</td></tr>
  <tr><td><b>2FN</b></td><td>¿algo depende de un <b>pedazo</b> de la PK?</td><td><b>la PK es compuesta</b></td><td>separas lo que depende de cada pedazo</td></tr>
  <tr><td><b>3FN</b></td><td>¿un no-clave determina a otro no-clave?</td><td>hay datos descriptivos encadenados</td><td>sacas esa pareja a su tabla</td></tr></table>
  <p><b>Son acumulativas:</b> para estar en 3FN tienes que cumplir también 1FN y 2FN. Por eso se revisan en ese orden.</p>
  <p><b>El atajo que ahorra la mitad del trabajo:</b> si la PK es <b>simple</b>, la 2FN está garantizada — no puedes depender de un pedazo de algo que no tiene pedazos. Saltas directo a 3FN.</p>
  <p><b>Superclave vs candidata</b>, que es donde más se resbala:</p>
  <p class="fx">toda candidata ES superclave · no toda superclave es candidata</p>
  <p>Superclave = identifica una fila, <i>aunque le sobren atributos</i>. Candidata = superclave <b>mínima</b>, no le sobra nada. Agregar columnas nunca rompe una superclave: si con {rut, cod} ya sabías de qué fila hablo, con {rut, cod, nota} sigues sabiendo.</p>
  <p><b>BCNF</b> es más estricta que la 3FN: exige que <b>todo</b> determinante sea superclave, sin la excepción de los atributos primos. Solo se distinguen cuando hay claves candidatas que se superponen.</p>`},

 {t:'Los siete errores que más cuestan puntos',
  h:`<ol>
  <li><b>Guardar el atributo derivado.</b> Si el enunciado da fecha de nacimiento <i>y</i> edad, la edad no va. Es el detalle que más se cae.</li>
  <li><b>Poner la FK en el lado 1</b> de un vínculo 1:N. Va siempre en el lado N.</li>
  <li><b>Olvidar que los atributos del vínculo N:M</b> viven en la tabla intermedia, no en ninguno de los dos lados.</li>
  <li><b>Partir una FK compuesta</b> en varias FK sueltas. Si la PK del destino son tres columnas, la referencia es <b>una</b> restricción con las tres.</li>
  <li><b>Duplicar una entidad por su rol.</b> Si la misma persona puede ser autor y revisor, o cliente y proveedor, va <b>una sola tabla</b>: el rol es propiedad del vínculo, no de la persona.</li>
  <li><b>No leer la restricción que fija la PK.</b> Frases como "como máximo uno por…" o "se numeran dentro de cada…" son la definición de la clave, escrita en castellano.</li>
  <li><b>Justificar sin nombrar la dependencia.</b> "No está en 2FN" vale la mitad que "no está en 2FN porque id_sol → correo es parcial respecto de la PK {id_sol, cod_material}".</li>
  </ol>`},

 {t:'Qué hacer los últimos 10 minutos',
  h:`<p>En papel no hay quien te corrija, así que reserva tiempo para revisar. En este orden:</p>
  <ol>
  <li><b>Subraya el enunciado</b> buscando "identificado por", "puede", "debe", "como máximo", "una sola vez", "varios". Verifica que cada frase subrayada esté representada en tu modelo.</li>
  <li><b>Recorre tabla por tabla</b> el checklist 1FN → 2FN → 3FN → integridad.</li>
  <li><b>Sigue cada FK</b> y confirma que la tabla de destino existe y que ahí ese campo es PK.</li>
  <li><b>Cuenta los atributos del enunciado</b> y verifica que todos aparecen en alguna tabla — salvo los derivados, que no deben aparecer.</li>
  </ol>
  <p>Esa revisión de 10 minutos recupera más puntos que 10 minutos extra de diseño.</p>`}
 ],
 ejercicios:[
  {fuente:'Simulacros de C1 (guía en la app)', items:[
   {x:'Simulacro 1 · fase individual — Veterinaria', por:'45 min, cronometrado, sin mirar la solución'},
   {x:'Simulacro 1 · fase grupal — Aerolínea regional', por:'El grande: FK compuesta, débil, N:M con atributos'},
   {x:'Simulacro 2 · fase individual — Torneo deportivo', por:'45 min, el segundo intento debería salir más suelto'},
   {x:'Simulacro 2 · fase grupal — Farmacias y recetas', por:'El más largo, con 3FN a partir de planilla'}
  ]},
  {fuente:'Ejercicio oficial del profe (clase 03)', items:[
   {x:'Editorial de revistas académicas', por:'Es el que él mismo puso como cierre: su idea de nivel C1'},
   {x:'Planilla de solicitudes — diseño A vs B', por:'La evaluación breve de 15 min, con su pauta'},
   {x:'Variación: agregar los talleres', por:'Cómo un requisito nuevo cambia la PK'}
  ]},
  {fuente:'Guías de la app', items:[
   {x:'Entidad-Relación — los 3 ejercicios', por:'Base del diagrama'},
   {x:'Modelo Relacional — los 5 ejercicios', por:'Incluye el caso completo de la clínica'},
   {x:'Formas Normales — los 5 ejercicios', por:'Cierre de atributos y 3FN vs BCNF'},
   {x:'Clase 03 — el ejercicio del gimnasio', por:'Modelar de cero, el más parecido a la fase individual'}
  ]}
 ]
}

]);
