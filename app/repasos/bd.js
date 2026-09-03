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

 {t:'★ Las 3FN en una frase (y cómo escribirlo en el control)',
  h:`<p><b>La definición corta, que es la que hay que tener a mano:</b></p>
  <p class="fx">Todo atributo no clave depende de <b>la PK completa</b><br>y de <b>nada más</b>.</p>
  <p>Esa frase contiene las dos condiciones. Separadas:</p>
  <table class="tb"><tr><th></th><th>Prohíbe que un atributo dependa de…</th><th>Nombre</th><th>Solo falla si…</th></tr>
  <tr><td><b>2FN</b></td><td>un <b>pedazo</b> de la PK</td><td>parcial</td><td>la PK es <b>compuesta</b></td></tr>
  <tr><td><b>3FN</b></td><td><b>otro atributo no clave</b></td><td>transitiva</td><td>hay descriptivos encadenados</td></tr></table>
  <p>Y antes de las dos va la <b>1FN</b>: una celda, un valor. Sin listas metidas adentro.</p>
  <p><b>El párrafo que escribe el propio profe en su pauta</b> (examen del coworking) — cópialo tal cual al final de tu modelo:</p>
  <p class="fx">"Cada atributo no clave depende únicamente de la PK completa de su tabla.<br>
  No hay dependencias parciales (las tablas con PK simple no pueden tenerlas).<br>
  No hay dependencias transitivas (ningún atributo no clave<br>depende de otro atributo no clave)."</p>
  <p><b>El atajo que él mismo usa:</b> las tablas con <b>PK simple no pueden tener dependencias parciales</b>. Así que al verificar, separa tus tablas en dos montones: las de PK simple pasan la 2FN automáticamente, y solo revisas una por una las de PK compuesta.</p>
  <p><b>Por qué conviene escribirlo:</b> la pauta descuenta <b>1 punto</b> por "no está en 3NF". Tres líneas de verificación son la evidencia más barata de que sí revisaste, y te ordenan a ti mismo la revisión.</p>`,
  ojo:'Cuidado con una confusión frecuente: la 3FN NO dice que cada atributo sea su propia clave, ni que las tablas no se relacionen entre sí. Las tablas se relacionan todo lo que haga falta — de eso se tratan las FK. Lo que no puede pasar es que DENTRO de una misma tabla un atributo descriptivo determine a otro.'
 },

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

 {t:'★ La Pregunta 1 del examen · el patrón real',
  h:`<p>El profe recomendó resolver la <b>Pregunta 1 de los exámenes anteriores</b>. Están en Canvas → Compilados → <i>examenes_compilado.pdf</i>. Revisé los ocho y el patrón no varía nunca.</p>
  <p><b>Siempre vale 30%</b> — es la pregunta más pesada del examen. Y siempre pide lo mismo:</p>
  <p class="fx">"Diseñe un modelo relacional en 3NF. Exprese el modelo en formato de<br>relaciones marcando claramente las claves primarias y foráneas."</p>
  <p><b>El formato de entrega NO es un diagrama ER.</b> Es una lista de relaciones:</p>
  <div class="fx">Cliente(<u>id</u>, nombre, email)<br>
  Videojuego(<u>codigo</u>, titulo, genero, precio, <i>desarrollador_id</i>)<br>
  Compra(<u>id</u>, fecha, <i>cliente_id</i>)<br>
  DetalleCompra(<u><i>compra_id</i></u>, <u><i>videojuego_codigo</i></u>)</div>
  <p>Subrayado = PK · cursiva = FK. Eso es todo. <b>No pierdas tiempo dibujando cajitas.</b></p>
  <p><b>Los ocho casos que han caído:</b> quizzes online · clínica dental · tienda de videojuegos · red de bibliotecas · alquiler de vehículos · clínica de salud integral · aerolínea AndesAir · coworking NodoCowork.</p>
  <p><b>La estructura es siempre la misma, con distinto disfraz:</b></p>
  <table class="tb"><tr><th>Pieza</th><th>Ejemplos</th></tr>
  <tr><td>Un <b>actor</b> con id propio</td><td>cliente, paciente, alumno, pasajero, usuario</td></tr>
  <tr><td>Un <b>recurso</b> con id propio</td><td>videojuego, sala, vehículo, avión, libro, quiz</td></tr>
  <tr><td>Una <b>transacción</b> que los une</td><td>compra, reserva, alquiler, préstamo, cita, respuesta</td></tr>
  <tr><td>Una o dos <b>N:M</b> con tabla intermedia</td><td>DetalleCompra, LibroAutor, CitaTratamiento, AlquilerAccesorio, VueloTripulante</td></tr>
  <tr><td>A veces una <b>jerarquía</b></td><td>sede→sala, libro→copia, quiz→pregunta→alternativa</td></tr></table>
  <p>Si identificas esas cinco piezas en el enunciado, ya tienes el modelo.</p>`,
  ojo:'La pieza que más se olvida es la tabla intermedia del N:M. Aparece en los OCHO exámenes sin excepción. Cuando leas "una compra puede incluir varios X", "un libro tiene varios autores", "un vuelo tiene varios tripulantes" — ahí va tabla nueva, siempre.'
 },

 {t:'★ La pauta de corrección, y la táctica que se deduce',
  h:`<p>El examen 2022 trae la pauta textual. Esto vale oro porque te dice <b>exactamente</b> dónde se pierde:</p>
  <table class="tb"><tr><th>Situación</th><th>Descuento</th></tr>
  <tr><td>Falta una relación</td><td><b>−1 punto</b></td></tr>
  <tr><td>Falta un atributo</td><td>−0,5</td></tr>
  <tr><td>Sobra un atributo <b>que tiene sentido</b></td><td><b>no se descuenta</b></td></tr>
  <tr><td>Sobra un atributo sin sentido</td><td>−0,5</td></tr>
  <tr><td>No está en 3NF</td><td>−1 punto</td></tr></table>
  <p>Se parte con 6 puntos y la nota es <b>1 + puntaje</b>. O sea: 6 puntos limpios = un 7.</p>
  <p><b>Las tres consecuencias tácticas, que son lo importante:</b></p>
  <ol>
  <li><b>Ante la duda con un atributo, PONLO.</b> La pauta dice explícito que un atributo que sobra pero tiene sentido <b>no descuenta</b>. Omitirlo cuesta 0,5; incluirlo cuesta 0. La asimetría está a tu favor.</li>
  <li><b>Una tabla que falta cuesta el doble que un atributo.</b> Si dudas entre separar o no separar, <b>separa</b>. Una tabla de más que tiene sentido es mucho menos grave que una de menos.</li>
  <li><b>No estar en 3NF cuesta 1 punto, una sola vez.</b> No es la muerte. Prefiere entregar el modelo completo con una transitiva antes que un modelo perfecto al que le faltan dos tablas — eso costaría 2.</li>
  </ol>
  <p><b>El orden en que conviene gastar el tiempo:</b> primero que estén <b>todas las tablas</b> (es lo más caro), después las PK y FK, y al final revisar 3NF. Al revés se pierde más.</p>`,
  ojo:'Que la solución oficial del examen 2022 acepte DOS alternativas distintas para el mismo enunciado te dice algo importante: no hay una única respuesta correcta. Lo que se evalúa es la coherencia y que estén representados los hechos, no que adivines el modelo exacto que tenía el profe en la cabeza.'
 },

 {t:'★ Ojo: este control es sobre TU proyecto',
  h:`<p>El anuncio del profe cambia una cosa importante respecto de un control normal: <b>hay que modelar el proyecto</b>, no un enunciado sorpresa.</p>
  <p class="fx">"Deberán modelar el proyecto igual como lo hemos realizado las últimas clases.<br>En este día se van a enfrentar por primera vez frente al proyecto."</p>
  <p><b>Qué significa en la práctica:</b> el dominio probablemente ya lo conoces o te lo van a describir ahí mismo. Lo que se evalúa es si sabes <b>traducir un dominio a relaciones</b>, no si te acordaste de una materia.</p>
  <p>La carpeta <i>Proyecto → 01_practica_modelacion</i> en Canvas está <b>vacía</b> al momento de escribir esto. Si el profe sube algo antes del control, es lo primero que hay que mirar.</p>
  <p><b>Sobre la nota:</b> el profe advirtió que <b>no es un promedio simple</b> entre la parte individual y la grupal — depende de cómo te va en cada una, y el detalle está en la clase 1. La lectura práctica: la nota individual no se puede compensar del todo con el grupo, así que la fase individual pesa más de lo que parece.</p>`,
  ojo:'Esto conecta con la lámina 21: el profe ya dijo que iba a verificar comprensión individual. Un esquema de nota donde lo individual no se compensa con lo grupal es exactamente el mecanismo para hacerlo.'
 },

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
  {fuente:'Pregunta 1 de los exámenes (guía en la app)', items:[
   {x:'1 · Quizzes online (2022)', por:'El único con DOS soluciones oficiales aceptadas'},
   {x:'2 · Clínica dental', por:'Dos entidades con los mismos atributos, y un derivado discutible'},
   {x:'3 · Tienda de videojuegos', por:'El esqueleto puro del patrón: actor + recurso + transacción'},
   {x:'4 · Red de bibliotecas ★', por:'La jerarquía Libro→Copia, la trampa más elegante'},
   {x:'5 · Alquiler de vehículos', por:'Una frase del enunciado define la PK compuesta'},
   {x:'6 · Clínica de salud integral', por:'TRES tablas intermedias: donde más se pierde'},
   {x:'7 · Aerolínea AndesAir', por:'Derivado camuflado y PK discutible'},
   {x:'8 · Coworking NodoCowork ★', por:'El más reciente, con la verificación 3NF del profe'}
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
