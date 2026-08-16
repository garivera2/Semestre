/* ============================================================
   GUÍAS · BASES DE DATOS
   Material original escrito para Gabo siguiendo el temario del ramo.
   Para agregar una guía nueva: copia la estructura de una existente
   y agrégala al final del array, antes del ];
============================================================ */
window.GUIAS = (window.GUIAS || []).concat([

/* ---- BD · ENTIDAD-RELACIÓN ---- */
{
 id:'bd-er', ramo:'bd', tag:'Semana 2', sem:2,
 titulo:'Entidad-Relación',
 bajada:'Lo que necesitas para BD-ER-1 y BD-ER-2. Basado en el handout ER-1 del profe Recabarren.',
 min:50,
 secciones:[
 {
  t:'Para qué sirve modelar antes de programar',
  h:`<p>Antes de crear una base de datos hay que <b>diseñarla</b>. El handout lo dice directo: la etapa de diseño te permite expresar con claridad qué quieres registrar, y además evaluar si tu solución es buena antes de haber escrito una sola línea de SQL.</p>
  <p>El curso plantea tres niveles, y conviene tenerlos separados en la cabeza:</p>
  <table class="tb"><tr><th>Nivel</th><th>Qué haces</th></tr>
  <tr><td><b>Modelo conceptual</b></td><td>Estudias el dominio, defines los límites del sistema y expresas los elementos y sus relaciones de forma sencilla. <b>Acá vive el diagrama ER.</b></td></tr>
  <tr><td><b>Modelo lógico</b></td><td>Traduces eso a algo que un motor de base de datos pueda soportar (tablas). Es el modelo relacional, la semana siguiente.</td></tr>
  <tr><td><b>Modelo físico</b></td><td>Lo implementas en el motor elegido, con PostgreSQL.</td></tr></table>
  <p>Un diagrama ER se lee de un vistazo, permite ver todas las relaciones a la vez, y facilita la construcción posterior. Esa es la justificación completa de por qué existe.</p>`,
  ojo:'Que tu C1 sea de Modelación no es casualidad: el 3 de septiembre te van a pedir exactamente esto, con fase individual donde cada uno propone su propio modelo. O sea, esta unidad no se agota en la tarea de esta semana.'
 },
 {
  t:'Entidades',
  h:`<p>Una <b>entidad</b> es un objeto o concepto del mundo real del que quieres guardar información y que se puede distinguir de los demás. Alumno, Curso, Vehículo, Venta.</p>
  <p>Distingue dos cosas que se confunden:</p>
  <ul>
  <li><b>Tipo de entidad:</b> la categoría. "Alumno". Es lo que dibujas en el diagrama, como un rectángulo.</li>
  <li><b>Instancia:</b> un caso concreto. "Gabriel Rivera, RUT 12.345.678-9".</li>
  </ul>
  <p>En el diagrama solo aparecen los tipos, nunca las instancias.</p>
  <p><b>Cómo las detectas en un enunciado:</b> suelen ser <b>sustantivos</b> sobre los que el texto da varios datos. Si de algo solo se menciona un dato suelto, probablemente sea un atributo, no una entidad.</p>
  <p><b>Entidad débil.</b> Es una entidad que <b>no puede identificarse por sí sola</b>: necesita a otra para tener sentido. El ejemplo típico es un ítem de una boleta — la línea "2 unidades de producto X" no existe sin la boleta a la que pertenece. Se dibuja con doble rectángulo, y su vínculo con la entidad fuerte también va reforzado.</p>`,
  ojo:'Regla práctica para entidad débil: si al borrar la entidad fuerte la otra queda sin sentido, es débil. Una boleta sin sus líneas es una boleta vacía; una línea sin boleta no es nada.'
 },
 {
  t:'Atributos',
  h:`<p>Los <b>atributos</b> son las propiedades que describen una entidad. Nombre, fecha de nacimiento, precio.</p>
  <p>El handout distingue cuatro tipos, y estos sí caen en evaluaciones:</p>
  <table class="tb"><tr><th>Tipo</th><th>Qué es</th><th>Ejemplo</th></tr>
  <tr><td><b>Simple</b></td><td>Un valor indivisible</td><td>edad</td></tr>
  <tr><td><b>Compuesto</b></td><td>Se puede descomponer en partes</td><td>dirección → calle, número, comuna</td></tr>
  <tr><td><b>Multivaluado</b></td><td>Puede tener varios valores a la vez</td><td>teléfonos de un cliente</td></tr>
  <tr><td><b>Derivado</b></td><td>Se calcula a partir de otro, no se guarda</td><td>edad, derivada de la fecha de nacimiento</td></tr></table>
  <p><b>El identificador (clave).</b> Es el atributo —o combinación— que distingue una instancia de otra sin ambigüedad. RUT para una persona, patente para un vehículo. Se subraya en el diagrama.</p>
  <p>Un identificador tiene que cumplir dos cosas: ser <b>único</b> y <b>no cambiar</b>. Por eso el nombre no sirve como clave aunque parezca cómodo: hay repetidos y la gente se cambia el nombre.</p>`,
  ojo:'El atributo derivado es el que más se olvida. Si guardas la edad en vez de la fecha de nacimiento, tu base queda desactualizada mañana. Guarda siempre el dato fuente y calcula lo derivado al consultar.'
 },
 {
  t:'Vínculos y cardinalidad',
  h:`<p>Un <b>vínculo</b> (tu profe usa esa palabra; en otros textos verás "relación" o "interrelación") es una asociación entre entidades. Se dibuja como un rombo y se nombra con un <b>verbo</b>: un Alumno <i>cursa</i> un Ramo.</p>
  <p><b>La cardinalidad</b> responde: ¿cuántas instancias de A se pueden asociar con cuántas de B?</p>
  <table class="tb"><tr><th>Tipo</th><th>Se lee</th><th>Ejemplo</th></tr>
  <tr><td><b>1:1</b></td><td>uno a uno</td><td>Persona ↔ Pasaporte</td></tr>
  <tr><td><b>1:N</b></td><td>uno a muchos</td><td>Profesor dicta muchos Ramos</td></tr>
  <tr><td><b>N:M</b></td><td>muchos a muchos</td><td>Alumno cursa muchos Ramos, cada Ramo tiene muchos Alumnos</td></tr></table>
  <p><b>Cómo la determinas sin equivocarte:</b> hazte la pregunta en las <b>dos direcciones</b>, una a la vez, y en singular.</p>
  <ul>
  <li>"Un alumno, ¿cuántos ramos puede cursar?" → varios</li>
  <li>"Un ramo, ¿cuántos alumnos puede tener?" → varios</li>
  <li>Ambas dan varios → <b>N:M</b></li>
  </ul>
  <p>Si una da "uno" y la otra "varios", es 1:N. Si ambas dan "uno", es 1:1.</p>
  <p><b>La participación</b> es la otra mitad, y es la que más se olvida. Responde: ¿es <b>obligatorio</b> que una instancia participe del vínculo?</p>
  <ul>
  <li><b>Total (obligatoria):</b> toda instancia debe participar. Toda venta tiene que tener un cliente. Se dibuja con línea doble.</li>
  <li><b>Parcial (opcional):</b> puede no participar. Un cliente puede no haber comprado nunca. Línea simple.</li>
  </ul>`,
  ojo:'Cardinalidad y participación son preguntas distintas. La cardinalidad dice "cuántos", la participación dice "si es obligatorio". Un vínculo 1:N puede tener participación total de un lado y parcial del otro. Contestar solo una de las dos es media respuesta.'
 },
 {
  t:'De un enunciado al diagrama',
  h:`<p>El proceso que da el handout: estudiar el dominio → definir los límites del sistema → expresar los elementos y sus relaciones. En la práctica es esto:</p>
  <ol>
  <li><b>Subraya los sustantivos.</b> Candidatos a entidad.</li>
  <li><b>Subraya los verbos que conectan sustantivos.</b> Candidatos a vínculo.</li>
  <li><b>Descarta.</b> Un sustantivo del que solo se dice un dato es atributo, no entidad.</li>
  <li><b>Asigna atributos</b> a cada entidad y decide el identificador.</li>
  <li><b>Para cada vínculo, pregunta en las dos direcciones</b> y anota la cardinalidad.</li>
  <li><b>Para cada lado, pregunta si es obligatorio</b> y anota la participación.</li>
  <li><b>Revisa las débiles:</b> ¿alguna entidad no se identifica sola?</li>
  </ol>
  <p><b>Ejemplo trabajado.</b> "Una automotora vende vehículos. De cada vehículo se registra su patente, marca, modelo y año. Los clientes tienen RUT, nombre y varios teléfonos. Un cliente puede comprar varios vehículos, pero cada vehículo se vende una sola vez. De cada venta se registra la fecha y el monto."</p>
  <ul>
  <li><b>Entidades:</b> Vehículo (patente, marca, modelo, año), Cliente (RUT, nombre, teléfonos)</li>
  <li><b>Teléfonos</b> es atributo <b>multivaluado</b> de Cliente — dice "varios"</li>
  <li><b>Vínculo:</b> Compra, con atributos propios (fecha, monto). Que el vínculo tenga atributos es normal y hay que dibujarlos colgando del rombo</li>
  <li><b>Cardinalidad:</b> un cliente compra varios vehículos → varios. Un vehículo es comprado por → uno solo ("se vende una sola vez"). Entonces <b>1:N</b></li>
  <li><b>Participación:</b> todo vehículo vendido tiene cliente → total del lado Vehículo. Un cliente registrado puede no haber comprado aún → parcial del lado Cliente</li>
  </ul>`,
  ojo:'La herramienta que usan es yEd Graph Editor, online y gratis. Bájala antes de sentarte a hacer la tarea, no mientras. Y practica dibujando el ejemplo de arriba: si te sale en menos de 10 minutos, estás listo.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'"Una biblioteca presta libros a socios. De cada libro se guarda ISBN, título y autor. De cada socio, su número de socio y nombre. Un socio puede tener varios préstamos y un libro puede prestarse muchas veces a lo largo del tiempo. De cada préstamo se registra la fecha de salida y la de devolución." Identifica entidades, vínculo, cardinalidad y participación.',
    a:`<b>Entidades:</b><br>
    • <b>Libro</b> — identificador ISBN, atributos título y autor<br>
    • <b>Socio</b> — identificador número de socio, atributo nombre<br><br>
    <b>Vínculo:</b> Préstamo, con atributos propios <i>fecha de salida</i> y <i>fecha de devolución</i>.<br><br>
    <b>Cardinalidad:</b> pregunta en ambas direcciones.<br>
    • Un socio, ¿cuántos libros puede pedir? → varios<br>
    • Un libro, ¿a cuántos socios se puede prestar? → varios (a lo largo del tiempo)<br>
    → <b>N:M</b><br><br>
    <b>Participación:</b> ambas parciales. Un socio recién inscrito puede no haber pedido nada, y un libro nuevo puede no haberse prestado nunca.<br><br>
    <b>El detalle fino:</b> si un mismo socio puede pedir el mismo libro <b>más de una vez</b> en fechas distintas, la fecha de salida pasa a ser parte del identificador del préstamo. Si no lo modelas así, el segundo préstamo pisa al primero. Ese matiz es exactamente el tipo de cosa que distingue un 5 de un 7.`},
   {q:'¿Cuándo un atributo debería convertirse en entidad? Da un criterio, no un ejemplo.',
    a:`Tres señales, cualquiera basta:<br><br>
    <b>1. Tiene atributos propios.</b> Si de "marca" solo guardas el nombre, es atributo. Si además necesitas su país de origen y su representante en Chile, ya es entidad.<br><br>
    <b>2. Se repite en muchas instancias.</b> Si mil vehículos dicen "Toyota", estás guardando ese texto mil veces. Eso es redundancia, y trae los problemas que verás en Formas Normales: si se escribe mal en una, tu base queda inconsistente.<br><br>
    <b>3. Se relaciona con otras entidades.</b> Si "marca" tiene que conectarse con "proveedor", necesita ser entidad para poder participar en un vínculo. Los atributos no se vinculan.<br><br>
    Este criterio es la puerta de entrada a la normalización, que es la unidad de la semana siguiente.`},
   {q:'¿Por qué un vínculo N:M no se puede implementar directamente como tabla, y qué se hace?',
    a:`Porque una tabla relacional guarda <b>un valor por celda</b>. Si un alumno cursa cinco ramos, no puedes meter cinco códigos en una sola celda de la tabla Alumno — eso viola la primera forma normal.<br><br>
    <b>La solución:</b> el vínculo N:M se convierte en una <b>tabla propia</b>, a veces llamada tabla intermedia o de asociación. Contiene:<br>
    • la clave del alumno<br>
    • la clave del ramo<br>
    • los atributos propios del vínculo (nota, semestre)<br><br>
    Su clave primaria es la <b>combinación</b> de ambas claves foráneas.<br><br>
    Fíjate que esto ya es traducir del modelo conceptual al lógico, que es el tema de MR-1 y MR-2. Por eso ER no es un ejercicio aislado: lo que dibujes acá determina las tablas que vas a escribir la próxima semana.`}
  ]
 }
 ]
},

/* ---- BD · MODELO RELACIONAL ---- */
{
 id:'bd-mr', ramo:'bd', tag:'Semana 3', sem:3,
 titulo:'Modelo Relacional',
 bajada:'Cómo pasar del diagrama ER a tablas reales. Para BD-MR-1 y BD-MR-2.',
 min:45,
 secciones:[
 {
  t:'El vocabulario formal',
  h:`<p>El modelo relacional es el <b>modelo lógico</b>: lo que un motor de base de datos puede realmente ejecutar. Tiene su propio vocabulario y en pruebas se exige usarlo bien.</p>
  <table class="tb"><tr><th>Término formal</th><th>En la práctica</th></tr>
  <tr><td><b>Relación</b></td><td>Una tabla</td></tr>
  <tr><td><b>Tupla</b></td><td>Una fila</td></tr>
  <tr><td><b>Atributo</b></td><td>Una columna</td></tr>
  <tr><td><b>Dominio</b></td><td>El conjunto de valores válidos de un atributo</td></tr>
  <tr><td><b>Grado</b></td><td>Cantidad de atributos</td></tr>
  <tr><td><b>Cardinalidad</b></td><td>Cantidad de tuplas</td></tr></table>
  <p>Ojo con "relación": en el modelo relacional significa <b>tabla</b>, no vínculo. Es una fuente de confusión permanente, y es parte de por qué tu profe usa "vínculo" en el diagrama ER.</p>
  <p>La notación de un esquema es: <span class="fx-i">Alumno(<u>rut</u>, nombre, email)</span>, con la clave primaria subrayada.</p>`
 },
 {
  t:'Claves',
  h:`<p>El handout MR-1 gira casi entero en torno a esto: hay 22 menciones a "Clave".</p>
  <ul>
  <li><b>Superclave:</b> cualquier conjunto de atributos que identifica una tupla de forma única. Puede tener atributos de sobra.</li>
  <li><b>Clave candidata:</b> una superclave <b>mínima</b> — si le quitas cualquier atributo, deja de identificar.</li>
  <li><b>Clave primaria:</b> la candidata que eliges como identificador oficial. No admite nulos y no debería cambiar.</li>
  <li><b>Clave foránea:</b> un atributo que apunta a la clave primaria de otra tabla. Es lo que materializa los vínculos.</li>
  </ul>
  <p><b>Las dos reglas de integridad:</b></p>
  <p><b>1. Integridad de entidad.</b> La clave primaria no puede ser nula. Si lo fuera, no podrías distinguir esa tupla.</p>
  <p><b>2. Integridad referencial.</b> Toda clave foránea debe apuntar a una tupla que <b>existe</b>, o ser nula. No puedes tener una venta cuyo cliente no está en la tabla Cliente.</p>`,
  ojo:'La integridad referencial es lo que impide dejar datos huérfanos, y es la razón por la que el motor te va a rechazar un DELETE de un cliente que tiene ventas asociadas. No es un error tuyo: es la base protegiéndose.'
 },
 {
  t:'Traducir ER a tablas: las reglas',
  h:`<p>Esto es mecánico una vez que sabes las reglas. Son cuatro casos.</p>
  <p><b>1. Cada entidad fuerte → una tabla.</b> Sus atributos simples son las columnas. Su identificador es la clave primaria.</p>
  <p><b>2. Vínculo 1:N → clave foránea en el lado N.</b> No se crea tabla nueva. Si un Profesor dicta muchos Ramos, la tabla Ramo lleva la columna <code>rut_profesor</code>.</p>
  <p><b>3. Vínculo N:M → tabla nueva.</b> Contiene las claves de ambos lados más los atributos propios del vínculo. La clave primaria es la combinación de ambas.</p>
  <p><b>4. Vínculo 1:1 → clave foránea en cualquiera de los dos</b>, preferentemente en el lado de participación total.</p>
  <p><b>Los atributos especiales:</b></p>
  <ul>
  <li><b>Compuesto:</b> se descompone en sus partes. Dirección se vuelve calle, número, comuna.</li>
  <li><b>Multivaluado:</b> se va a una <b>tabla aparte</b>, con la clave de la entidad original. Los teléfonos de un cliente son una tabla Telefono(rut_cliente, numero).</li>
  <li><b>Derivado:</b> no se guarda. Se calcula al consultar.</li>
  </ul>
  <p><b>5. Entidad débil → tabla</b> cuya clave primaria es la combinación de su identificador parcial más la clave de la entidad fuerte.</p>`,
  ojo:'La regla 2 es la que más se equivoca: la clave foránea va SIEMPRE en el lado "muchos". Si la pusieras en el lado "uno", tendrías que guardar varios valores en una celda, que es justo lo que el modelo relacional no permite.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Traduce a tablas: Cliente(RUT, nombre, teléfonos múltiples) y Vehículo(patente, marca), vinculados por Compra 1:N con atributos fecha y monto.',
    a:`<b>Cliente</b>(<u>rut</u>, nombre)<br>
    <b>Telefono</b>(<u>rut_cliente</u>, <u>numero</u>) — clave foránea rut_cliente → Cliente<br>
    <b>Vehiculo</b>(<u>patente</u>, marca, rut_cliente, fecha_compra, monto)<br><br>
    <b>Por qué queda así:</b><br>
    • Teléfonos es multivaluado → tabla propia. Su clave primaria es la combinación rut + número, porque un cliente puede tener varios y un número podría repetirse entre clientes.<br>
    • La compra es 1:N (un cliente compra varios vehículos, cada vehículo se vende una vez) → clave foránea en el lado N, que es Vehículo.<br>
    • Los atributos del vínculo (fecha, monto) <b>viajan junto con la clave foránea</b>, a la misma tabla. Eso es lo que más se olvida: no crean tabla propia en un 1:N.<br><br>
    Si la compra fuera N:M, en cambio, sí habría una tabla Compra(<u>rut_cliente</u>, <u>patente</u>, fecha, monto).`},
   {q:'¿Cuál es la diferencia entre clave candidata y clave primaria? ¿Puede una tabla tener varias primarias?',
    a:`Una <b>clave candidata</b> es cualquier conjunto mínimo de atributos que identifica de forma única. Una tabla puede tener <b>varias</b>.<br><br>
    Ejemplo: en una tabla Alumno, tanto el <i>RUT</i> como el <i>número de matrícula</i> identifican únicamente. Ambas son candidatas.<br><br>
    La <b>clave primaria</b> es la que <b>eliges</b> entre las candidatas para que sea el identificador oficial. Solo puede haber <b>una</b> por tabla. Las otras candidatas quedan como claves alternativas y se marcan como UNIQUE.<br><br>
    <b>Criterios para elegir:</b> la más estable (que no cambie), la más corta, y la que no admita nulos. Entre RUT y matrícula suele preferirse la matrícula, porque es interna a la institución y no depende de un dato externo.<br><br>
    "Mínima" es la palabra clave de candidata: {RUT, nombre} identifica única, pero no es candidata porque le sobra el nombre — el RUT solo ya basta.`}
  ]
 }
 ]
},

/* ---- BD · FORMAS NORMALES ---- */
{
 id:'bd-fn', ramo:'bd', tag:'Semana 3', sem:3,
 titulo:'Formas Normales',
 bajada:'Dependencias funcionales, anomalías y cómo llegar a 3FN. Para BD-FN-1.',
 min:45,
 secciones:[
 {
  t:'El problema: anomalías',
  h:`<p>La normalización existe para resolver un problema concreto: cuando guardas datos repetidos, la base se corrompe sola. Los handouts NZ hablan de <b>anomalías</b> y hay tres.</p>
  <p>Imagina una única tabla con alumno, ramo y profesor:</p>
  <table class="tb"><tr><th>rut</th><th>nombre</th><th>ramo</th><th>profesor</th></tr>
  <tr><td>111</td><td>Ana</td><td>BD</td><td>Díaz</td></tr>
  <tr><td>111</td><td>Ana</td><td>MN</td><td>Hernández</td></tr>
  <tr><td>222</td><td>Luis</td><td>BD</td><td>Díaz</td></tr></table>
  <ul>
  <li><b>Anomalía de inserción:</b> no puedes registrar un ramo nuevo que todavía no tiene alumnos inscritos, porque la clave necesita un rut.</li>
  <li><b>Anomalía de eliminación:</b> si borras a Luis, y era el único de BD... perderías también quién dicta BD.</li>
  <li><b>Anomalía de actualización:</b> si el profesor de BD cambia, tienes que modificarlo en <b>todas</b> las filas. Si se te escapa una, la base queda inconsistente y ya no sabes cuál es la verdad.</li>
  </ul>
  <p>La causa raíz de las tres es la misma: <b>redundancia</b>. El mismo hecho guardado en varios lugares.</p>`
 },
 {
  t:'Dependencias funcionales',
  h:`<p>Es la herramienta formal para detectar redundancia. Se escribe:</p>
  <p class="fx">A → B</p>
  <p>y se lee "A determina B": si conoces el valor de A, el de B queda determinado sin ambigüedad. Nunca vas a encontrar dos filas con el mismo A y distinto B.</p>
  <p>En el ejemplo de arriba: <span class="fx-i">rut → nombre</span> (un RUT determina un solo nombre) y <span class="fx-i">ramo → profesor</span>.</p>
  <p><b>Los tipos que hay que distinguir:</b></p>
  <ul>
  <li><b>Dependencia total:</b> B depende de <b>toda</b> la clave compuesta.</li>
  <li><b>Dependencia parcial:</b> B depende de <b>una parte</b> de la clave compuesta. Es lo que rompe la 2FN.</li>
  <li><b>Dependencia transitiva:</b> A → B y B → C, entonces A → C indirectamente. C no depende de la clave directamente sino a través de B. Es lo que rompe la 3FN.</li>
  </ul>`,
  ojo:'Las dependencias funcionales no se deducen de los datos que ves, sino de las REGLAS del negocio. Que en tus tres filas ningún nombre se repita no prueba que rut → nombre; lo prueba el hecho de que un RUT pertenece a una sola persona. Confundir esto es un error clásico.'
 },
 {
  t:'Las tres formas normales',
  h:`<p>Son acumulativas: para estar en 3FN tienes que cumplir también 1FN y 2FN.</p>
  <p><b>1FN — valores atómicos</b></p>
  <p>Cada celda contiene un solo valor. Nada de "1234567, 8765432" en la columna teléfono, ni columnas repetidas tipo telefono1, telefono2, telefono3.</p>
  <p><i>Se arregla:</i> sacando lo multivaluado a una tabla aparte.</p>
  <p><b>2FN — sin dependencias parciales</b></p>
  <p>Todo atributo que no es clave depende de la clave <b>completa</b>, no de una parte.</p>
  <p>Solo puede fallar si la clave primaria es <b>compuesta</b>. Con clave simple, 1FN implica 2FN automáticamente.</p>
  <p><i>Ejemplo:</i> en Inscripcion(<u>rut</u>, <u>ramo</u>, nota, nombre_alumno), el nombre depende solo del rut, no de la combinación. Dependencia parcial.</p>
  <p><i>Se arregla:</i> separando lo que depende de cada parte en su propia tabla.</p>
  <p><b>3FN — sin dependencias transitivas</b></p>
  <p>Ningún atributo no-clave depende de otro atributo no-clave.</p>
  <p><i>Ejemplo:</i> en Alumno(<u>rut</u>, nombre, cod_carrera, nombre_carrera), el nombre de la carrera depende de cod_carrera, que no es clave. Transitiva.</p>
  <p><i>Se arregla:</i> sacando esos atributos a su propia tabla.</p>
  <p><b>BCNF</b> es una versión más estricta de la 3FN: exige que <b>todo</b> determinante sea una superclave. Aparece en NZ-2 y solo se distingue de la 3FN en casos con múltiples claves candidatas superpuestas.</p>`
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'La tabla Venta(<u>nro_boleta</u>, <u>cod_producto</u>, cantidad, nombre_producto, precio_unitario, rut_cliente, nombre_cliente) ¿en qué forma normal está y cómo la normalizas?',
    a:`<b>Está en 1FN</b> (los valores son atómicos) pero <b>no en 2FN</b>.<br><br>
    La clave es compuesta: {nro_boleta, cod_producto}. Y hay dependencias parciales:<br>
    • cod_producto → nombre_producto, precio_unitario<br>
    • nro_boleta → rut_cliente, nombre_cliente<br><br>
    Ninguno de esos depende de la clave completa. Además hay una <b>transitiva</b>: rut_cliente → nombre_cliente, y rut_cliente no es clave.<br><br>
    <b>Normalizada a 3FN:</b><br>
    <b>Producto</b>(<u>cod_producto</u>, nombre_producto, precio_unitario)<br>
    <b>Cliente</b>(<u>rut_cliente</u>, nombre_cliente)<br>
    <b>Boleta</b>(<u>nro_boleta</u>, rut_cliente) — FK a Cliente<br>
    <b>DetalleVenta</b>(<u>nro_boleta</u>, <u>cod_producto</u>, cantidad) — FK a ambas<br><br>
    Ahora el precio de un producto vive en <b>un solo lugar</b>. Cambiarlo es una operación, no mil.<br><br>
    <b>Nota de diseño real:</b> en una boleta normalmente se guarda el precio <i>al momento de la venta</i> dentro de DetalleVenta, porque los precios cambian y la boleta histórica no debe alterarse. Eso es desnormalización deliberada y justificada — distinto de no saber normalizar.`},
   {q:'¿Por qué una tabla con clave primaria simple que está en 1FN siempre está en 2FN?',
    a:`Porque la 2FN prohíbe las <b>dependencias parciales</b>, y una dependencia parcial es aquella en que un atributo depende de <b>una parte</b> de la clave.<br><br>
    Si la clave tiene un solo atributo, <b>no tiene partes</b>. No existe un subconjunto propio no vacío del cual algo pueda depender parcialmente. Por lo tanto la violación es imposible por construcción.<br><br>
    <b>La consecuencia práctica:</b> cuando revises 2FN, lo primero que miras es si la clave es compuesta. Si no lo es, saltas directo a revisar 3FN y te ahorras la mitad del trabajo.<br><br>
    Esta es una pregunta de razonamiento, no de memoria: te están evaluando si entendiste la definición o si te la aprendiste.`}
  ]
 }
 ]
}

]);
