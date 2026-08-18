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
    "Mínima" es la palabra clave de candidata: {RUT, nombre} identifica única, pero no es candidata porque le sobra el nombre — el RUT solo ya basta.`},
   {q:'<b>Caso completo tipo control.</b> Una clínica registra: Médico (RUT, nombre, varias especialidades). Paciente (RUT, nombre, dirección con calle/número/comuna, fecha de nacimiento y edad). Cada paciente tiene una Ficha clínica única, y toda ficha pertenece a un paciente. Una Ficha contiene varias Consultas, numeradas 1, 2, 3 dentro de cada ficha (el número se reinicia en cada ficha). Un Médico atiende muchas Consultas. Médicos y Pacientes se vinculan por Convenio N:M con fecha de inicio y descuento. Traduce todo a tablas.',
    a:`<b>Las tablas:</b><br>
    <b>Medico</b>(<u>rut_medico</u>, nombre)<br>
    <b>Especialidad</b>(<u>rut_medico</u>, <u>especialidad</u>) — FK rut_medico → Medico<br>
    <b>Paciente</b>(<u>rut_paciente</u>, nombre, calle, numero, comuna, fecha_nac)<br>
    <b>Ficha</b>(<u>nro_ficha</u>, rut_paciente UNIQUE NOT NULL) — FK → Paciente<br>
    <b>Consulta</b>(<u>nro_ficha</u>, <u>nro_consulta</u>, fecha, diagnostico, rut_medico) — FK nro_ficha → Ficha, FK rut_medico → Medico<br>
    <b>Convenio</b>(<u>rut_medico</u>, <u>rut_paciente</u>, fecha_inicio, descuento) — FK a ambas<br><br>
    <b>El razonamiento, decisión por decisión:</b><br><br>
    <b>1. Especialidades → tabla propia.</b> Es multivaluado ("varias especialidades"). La clave primaria es la combinación completa, porque un médico tiene varias y una especialidad la comparten varios médicos.<br><br>
    <b>2. Dirección se descompone.</b> Es un atributo compuesto: sus partes se vuelven columnas sueltas en Paciente. No se crea tabla.<br><br>
    <b>3. La edad no aparece.</b> Es un atributo derivado — se calcula desde fecha_nac al consultar. Guardarla sería un error: quedaría desactualizada al día siguiente. <i>Este es el detalle que más se cae en el control.</i><br><br>
    <b>4. Ficha–Paciente es 1:1 con participación total del lado Ficha.</b> Toda ficha tiene paciente, pero podría existir un paciente sin ficha aún. Por eso la FK va en Ficha, con UNIQUE (para que sea 1:1 y no 1:N) y NOT NULL (para forzar la participación total). Ponerla en Paciente obligaría a dejar nulos.<br><br>
    <b>5. Consulta es entidad débil de Ficha.</b> La pista está en "el número se reinicia en cada ficha": nro_consulta por sí solo no identifica nada. Su clave primaria es la combinación del identificador parcial (nro_consulta) más la clave de la entidad fuerte (nro_ficha).<br><br>
    <b>6. Médico–Consulta es 1:N</b> → FK en el lado N, que es Consulta. Sin tabla nueva.<br><br>
    <b>7. Convenio es N:M</b> → tabla nueva, con las dos claves formando la primaria y los atributos del vínculo adentro.`},
   {q:'En un vínculo 1:1, ¿por qué se prefiere poner la clave foránea en el lado de participación total? ¿Y qué pasa si ambos lados son totales?',
    a:`<b>Porque evita los nulos.</b><br><br>
    Si la participación de A es total (todo A se vincula con un B) y la de B es parcial (algunos B no tienen A), entonces:<br>
    • FK en A → <b>nunca</b> es nula, porque todo A tiene su B. Puedes declararla NOT NULL y el motor te protege.<br>
    • FK en B → sería nula en todas las filas de B sin A. Esas celdas vacías complican las consultas (te obligan a manejar IS NULL) y no te dejan expresar la regla del negocio en el esquema.<br><br>
    El principio general: <b>la restricción que puedes declarar es una restricción que la base hace cumplir por ti.</b> Todo lo que dejas fuera del esquema tienes que vigilarlo a mano en el código, y eventualmente se te escapa.<br><br>
    <b>Si ambos lados son totales:</b> formalmente da lo mismo dónde va, y de hecho eso es señal de que probablemente <b>deberían ser una sola tabla</b>. Si todo A tiene exactamente un B y todo B tiene exactamente un A, están en correspondencia perfecta y separarlos solo agrega un JOIN a cada consulta. Se separan igual cuando hay razones prácticas: muchos atributos que casi nunca se consultan, o permisos de acceso distintos.<br><br>
    <b>Si ambos son parciales:</b> pon la FK donde haya menos nulos, o considera una tercera tabla con solo los dos identificadores, que guarda únicamente los pares que sí existen.`},
   {q:'¿Por qué un vínculo N:M obliga a crear tabla nueva, mientras que un 1:N no?',
    a:`Porque en el modelo relacional <b>una celda guarda un solo valor</b> (eso es la 1FN), y de ahí sale todo lo demás.<br><br>
    <b>En 1:N</b> — un profesor dicta muchos ramos, cada ramo tiene un profesor. Mirado desde el lado N, cada ramo necesita guardar <b>un</b> rut de profesor. Un valor, una celda. Cabe. Por eso basta con una columna FK en Ramo.<br><br>
    Si intentaras ponerla al revés, en Profesor tendrías que guardar la lista de todos sus ramos en una celda. No cabe.<br><br>
    <b>En N:M</b> — un alumno toma muchos ramos y un ramo tiene muchos alumnos. Da igual de qué lado lo mires: siempre necesitas guardar varios valores en una celda. <b>No cabe por ningún lado.</b> La única salida es una tabla donde cada fila representa un par, y hay tantas filas como pares existan.<br><br>
    <b>El corolario que sirve en el control:</b> los atributos del vínculo siguen la misma lógica. En 1:N viajan a la tabla del lado N junto con la FK (la fecha de compra es un dato del vehículo comprado). En N:M no tienen dónde ir salvo la tabla intermedia — no son un dato del alumno ni del ramo, sino <b>del par</b> alumno-ramo. La nota de un alumno en un ramo es el ejemplo canónico.`}
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
    Esta es una pregunta de razonamiento, no de memoria: te están evaluando si entendiste la definición o si te la aprendiste.`},
   {q:'<b>Encontrar la clave sin que te la digan.</b> R(A, B, C, D, E) con dependencias: A → B, B → C, A D → E. ¿Cuál es la clave candidata y en qué forma normal está R?',
    a:`<b>Método: cierre de atributos.</b> Partes de un conjunto y le vas sumando todo lo que puedas deducir. Si llegas a todos los atributos, ese conjunto es superclave.<br><br>
    <b>Paso 1 — ¿qué atributos nunca aparecen a la derecha?</b> Mira las tres DF: a la derecha aparecen B, C, E. Nunca aparecen <b>A</b> ni <b>D</b>.<br><br>
    Un atributo que nunca es determinado por nadie <b>no se puede deducir</b>, así que tiene que estar sí o sí en toda clave. Este es el atajo que ahorra la mitad del trabajo: empieza siempre por acá.<br><br>
    <b>Paso 2 — calcula el cierre de {A, D}:</b><br>
    • Partes con {A, D}<br>
    • A → B, entonces agregas B: {A, D, B}<br>
    • B → C, entonces agregas C: {A, D, B, C}<br>
    • A D → E, y tienes A y D, entonces agregas E: {A, D, B, C, E}<br><br>
    Llegaste a los cinco atributos. <b>{A, D} es superclave</b>, y como ni A solo ni D solo alcanzan (A da {A,B,C}, le falta D y E; D solo da {D}), es <b>mínima</b>. Clave candidata: <b>{A, D}</b>.<br><br>
    <b>Paso 3 — la forma normal.</b> Los atributos no-clave son B, C, E.<br>
    • <b>2FN:</b> falla. A → B es una dependencia <b>parcial</b>: B depende solo de A, que es una parte de la clave {A, D}. Lo mismo arrastra a C.<br>
    • Como falla 2FN, R está en <b>1FN</b> y nada más.<br><br>
    <b>Paso 4 — normalizar:</b><br>
    <b>R1</b>(<u>A</u>, B) — saca la dependencia parcial A → B<br>
    <b>R2</b>(<u>B</u>, C) — saca la transitiva B → C<br>
    <b>R3</b>(<u>A</u>, <u>D</u>, E) — se queda con la dependencia total<br><br>
    Fíjate que B → C era además <b>transitiva</b> (A → B → C). Al separarla en R2 resolviste 2FN y 3FN de una vez.`},
   {q:'¿Cuándo una tabla está en 3FN pero NO en BCNF? Da un ejemplo y explica por qué la 3FN deja pasar ese caso.',
    a:`Ocurre cuando hay <b>claves candidatas que se superponen</b> — comparten algún atributo.<br><br>
    <b>Ejemplo clásico:</b> Asesoria(alumno, ramo, profesor), con las reglas:<br>
    • Cada alumno en un ramo tiene un solo profesor asesor → <span class="fx-i">{alumno, ramo} → profesor</span><br>
    • Cada profesor asesora un solo ramo → <span class="fx-i">profesor → ramo</span><br><br>
    <b>Claves candidatas:</b> {alumno, ramo} y {alumno, profesor}. Se superponen en <i>alumno</i>.<br><br>
    <b>¿Está en 3FN?</b> Sí. La 3FN dice que ningún atributo <b>no-primo</b> puede depender de algo que no sea superclave. Acá <i>ramo</i> y <i>profesor</i> son ambos <b>primos</b> (pertenecen a alguna clave candidata), así que la regla no aplica y la tabla pasa el examen.<br><br>
    <b>¿Está en BCNF?</b> No. La BCNF es más dura: exige que <b>todo</b> determinante sea superclave, sin excepción para atributos primos. Y <i>profesor</i> determina <i>ramo</i> sin ser superclave. Falla.<br><br>
    <b>Por qué importa en la práctica:</b> la redundancia sigue ahí. El hecho "el profesor Díaz asesora BD" se repite en cada fila donde aparece Díaz. Si Díaz cambia de ramo hay que actualizar todas — que es exactamente la anomalía que la normalización venía a eliminar. La 3FN, por cómo está redactada la excepción de los atributos primos, no la ve.<br><br>
    <b>Se arregla:</b> Profesor(<u>profesor</u>, ramo) y Asesoria(<u>alumno</u>, <u>profesor</u>).<br><br>
    <b>El precio:</b> esta descomposición <b>pierde la dependencia</b> {alumno, ramo} → profesor, que ya no se puede verificar en una sola tabla. Ese es el trade-off real de BCNF: siempre se puede alcanzar sin perder información, pero no siempre conservando todas las dependencias. La 3FN sí garantiza ambas cosas — por eso en la práctica muchos diseños se quedan ahí.`},
   {q:'<b>Normaliza este caso.</b> Horario(<u>cod_seccion</u>, <u>dia</u>, <u>bloque</u>, sala, capacidad_sala, cod_ramo, nombre_ramo, rut_profe, nombre_profe). Reglas: una sección tiene un ramo y un profesor; una sección se reúne en varios bloques; cada reunión ocurre en una sala.',
    a:`<b>Paso 1 — las dependencias funcionales:</b><br>
    • {cod_seccion, dia, bloque} → sala &nbsp;<i>(depende de la clave completa: la sala puede cambiar entre bloques)</i><br>
    • cod_seccion → cod_ramo, rut_profe &nbsp;<i>(parcial)</i><br>
    • cod_ramo → nombre_ramo &nbsp;<i>(transitiva)</i><br>
    • rut_profe → nombre_profe &nbsp;<i>(transitiva)</i><br>
    • sala → capacidad_sala &nbsp;<i>(transitiva)</i><br><br>
    <b>Paso 2 — diagnóstico.</b> Está en 1FN. Falla 2FN por cod_seccion → cod_ramo, rut_profe, que dependen de una parte de la clave. Y falla 3FN por las tres transitivas.<br><br>
    <b>Paso 3 — a 2FN.</b> Sacas lo que depende solo de cod_seccion:<br>
    <b>Seccion</b>(<u>cod_seccion</u>, cod_ramo, nombre_ramo, rut_profe, nombre_profe)<br>
    <b>Horario</b>(<u>cod_seccion</u>, <u>dia</u>, <u>bloque</u>, sala, capacidad_sala)<br><br>
    <b>Paso 4 — a 3FN.</b> Ahora eliminas las transitivas de cada una:<br>
    <b>Ramo</b>(<u>cod_ramo</u>, nombre_ramo)<br>
    <b>Profesor</b>(<u>rut_profe</u>, nombre_profe)<br>
    <b>Sala</b>(<u>sala</u>, capacidad_sala)<br>
    <b>Seccion</b>(<u>cod_seccion</u>, cod_ramo, rut_profe) — FK a Ramo y Profesor<br>
    <b>Horario</b>(<u>cod_seccion</u>, <u>dia</u>, <u>bloque</u>, sala) — FK a Seccion y Sala<br><br>
    <b>Lo que hay que saber ver:</b> que <i>sala</i> depende de la clave completa y no de una parte. Si asumieras que una sección usa siempre la misma sala, sala saldría de Horario y se iría a Seccion — y el modelo ya no podría representar una sección que el lunes está en un laboratorio y el miércoles en una sala normal.<br><br>
    Por eso la primera pregunta en cualquier ejercicio de normalización no es "¿qué forma normal es?" sino <b>"¿cuáles son las reglas del negocio?"</b>. Las DF salen de ahí, y todo lo demás es mecánico.`}
  ]
 }
 ]
},

/* ---- BD · ÁLGEBRA RELACIONAL ---- */
{
 id:'bd-ar', ramo:'bd', tag:'Semana 4', sem:4,
 titulo:'Álgebra Relacional',
 bajada:'Los operadores y cómo encadenarlos. Para BD-AR-1 y BD-AR-2, que vencen el 26 de agosto.',
 min:55,
 secciones:[
 {
  t:'Qué es y por qué se pasa por acá antes de SQL',
  h:`<p>El álgebra relacional es un <b>lenguaje formal de consultas</b>. Le das una o dos relaciones (tablas) y te devuelve otra relación. Nada más.</p>
  <p>Esa frase tiene una consecuencia enorme y es lo primero que hay que internalizar: como la salida de un operador es una relación, <b>puedes usarla como entrada del siguiente</b>. Los operadores se encadenan sin límite. A eso se le llama la propiedad de <b>clausura</b>, y es lo que hace que con seis operadores básicos puedas expresar consultas arbitrariamente complicadas.</p>
  <p>El ramo lo enseña antes de SQL por dos razones:</p>
  <ul>
  <li><b>Es el modelo mental de SQL.</b> Cuando escribas SELECT ... FROM ... WHERE, estarás haciendo una proyección sobre una selección sobre un producto. Entender el álgebra es entender qué hace el motor.</li>
  <li><b>Es lo que optimiza el motor.</b> PostgreSQL traduce tu SQL a una expresión algebraica y la reescribe en otra equivalente pero más barata. Por eso importa saber que dos expresiones distintas dan el mismo resultado.</li>
  </ul>
  <p>Trabajaremos con este esquema en todos los ejemplos:</p>
  <table class="tb"><tr><th>Relación</th><th>Atributos</th></tr>
  <tr><td><b>Alumno</b></td><td><u>rut</u>, nombre, carrera, año_ingreso</td></tr>
  <tr><td><b>Ramo</b></td><td><u>cod</u>, nombre, creditos, rut_profe</td></tr>
  <tr><td><b>Inscripcion</b></td><td><u>rut</u>, <u>cod</u>, nota, semestre</td></tr>
  <tr><td><b>Profesor</b></td><td><u>rut_profe</u>, nombre, departamento</td></tr></table>`,
  ojo:'El álgebra relacional trabaja con CONJUNTOS: no hay filas duplicadas y no hay orden. SQL no cumple ninguna de las dos (permite duplicados y tiene ORDER BY). Es la diferencia que más confunde al pasar de un mundo al otro — en álgebra, una proyección elimina duplicados automáticamente; en SQL hay que pedir DISTINCT.'
 },
 {
  t:'Los operadores unarios: σ, π, ρ',
  h:`<p><b>Selección — σ (sigma)</b><br>
  Filtra <b>filas</b>. Se lee "los que cumplen la condición".</p>
  <p class="fx">σ<sub>carrera = 'Civil Industrial'</sub>(Alumno)</p>
  <p>La condición admite comparadores (=, ≠, &lt;, &gt;, ≤, ≥) y conectores lógicos (∧ y, ∨ o, ¬ no). El resultado tiene <b>las mismas columnas</b> que la entrada, con menos o igual cantidad de filas.</p>
  <p class="fx">σ<sub>nota ≥ 4 ∧ semestre = '2026-2'</sub>(Inscripcion)</p>

  <p><b>Proyección — π (pi)</b><br>
  Filtra <b>columnas</b>. Se lee "quédate solo con estos atributos".</p>
  <p class="fx">π<sub>nombre, carrera</sub>(Alumno)</p>
  <p>El resultado tiene menos o igual cantidad de columnas, y <b>menos o igual cantidad de filas</b> — porque al botar columnas pueden quedar filas idénticas, y en un conjunto los duplicados se colapsan.</p>
  <p>Ese detalle es evaluable: π<sub>carrera</sub>(Alumno) sobre 500 alumnos de 8 carreras devuelve <b>8 filas</b>, no 500.</p>

  <p><b>Renombre — ρ (rho)</b><br>
  Le cambia el nombre a una relación o a sus atributos.</p>
  <p class="fx">ρ<sub>A1</sub>(Alumno)</p>
  <p>Parece un operador de adorno hasta que necesitas <b>comparar una tabla consigo misma</b>. Ahí es imprescindible: sin renombrar no puedes distinguir de cuál de las dos copias viene cada atributo.</p>`,
  ojo:'σ y π conmutan solo si la proyección conserva los atributos que usa la condición. π_nombre(σ_carrera=X(Alumno)) es válido, pero σ_carrera=X(π_nombre(Alumno)) no lo es: después de proyectar solo el nombre, la columna carrera ya no existe y no hay nada que filtrar.'
 },
 {
  t:'Los operadores de conjuntos: ∪, ∩, −',
  h:`<p>Los tres exigen que las relaciones sean <b>compatibles en unión</b>: mismo número de atributos y tipos correspondientes compatibles. No puedes unir Alumno con Ramo.</p>
  <p><b>Unión (∪)</b> — todo lo que está en R o en S, sin repetir.</p>
  <p><b>Intersección (∩)</b> — lo que está en ambas.</p>
  <p><b>Diferencia (−)</b> — lo que está en R y <b>no</b> está en S.</p>
  <p>La diferencia es el operador clave del curso, porque es el que traduce el <b>"no"</b> y el <b>"todos"</b>. Cada vez que un enunciado diga "los alumnos que NO tomaron BD", tu respuesta va a tener una resta:</p>
  <p class="fx">π<sub>rut</sub>(Alumno) − π<sub>rut</sub>(σ<sub>cod = 'BD'</sub>(Inscripcion))</p>
  <p>Se lee de adentro hacia afuera: de todas las inscripciones te quedas con las de BD, sacas sus ruts, y a los ruts de todos los alumnos le restas ese conjunto. Queda quien nunca aparece inscrito en BD.</p>
  <p><b>Dato útil:</b> la intersección no es un operador primitivo. Se puede escribir con dos diferencias:</p>
  <p class="fx">R ∩ S = R − (R − S)</p>
  <p>Los operadores realmente primitivos son seis: σ, π, ρ, ∪, − y ×. Todo el resto (∩, ⋈, ÷) se construye con esos. Es una pregunta típica de examen.</p>`,
  ojo:'El orden importa en la resta y no importa en unión e intersección. R − S ≠ S − R. Si te piden "alumnos sin inscripciones" y escribes la resta al revés, obtienes el conjunto vacío y el error es difícil de ver.'
 },
 {
  t:'Producto cartesiano y JOIN',
  h:`<p><b>Producto cartesiano (×)</b><br>
  Combina <b>cada</b> fila de R con <b>cada</b> fila de S. Si R tiene 100 filas y S tiene 50, el resultado tiene 5.000. Los atributos se suman.</p>
  <p>Por sí solo casi nunca es lo que quieres: la mayoría de esas combinaciones no significan nada (un alumno pegado a la inscripción de otro). Su utilidad es servir de base al join.</p>

  <p><b>Reunión natural (⋈)</b><br>
  Es el producto cartesiano, pero quedándote solo con las filas donde los <b>atributos con el mismo nombre coinciden</b>, y mostrando esa columna una sola vez.</p>
  <p class="fx">Alumno ⋈ Inscripcion</p>
  <p>Como ambas tienen <i>rut</i>, cada alumno se pega con sus propias inscripciones y con ninguna otra. Equivale a:</p>
  <p class="fx">π<sub>...</sub>(σ<sub>Alumno.rut = Inscripcion.rut</sub>(Alumno × Inscripcion))</p>
  <p>Esa equivalencia es la definición formal, y explica por qué el join no es un operador primitivo.</p>

  <p><b>Theta-join (⋈<sub>θ</sub>)</b><br>
  Cuando la condición no es "atributos del mismo nombre son iguales" sino cualquier otra:</p>
  <p class="fx">Alumno ⋈<sub>año_ingreso &lt; 2024</sub> Ramo</p>

  <p><b>Joins externos</b><br>
  El join natural <b>pierde</b> las filas que no encuentran pareja. Los outer joins las conservan, rellenando con nulos:</p>
  <ul>
  <li><b>⟕ izquierdo:</b> conserva todas las de la izquierda. Alumno ⟕ Inscripcion te deja ver a los alumnos <b>sin</b> inscripciones, con nulos en las columnas de la derecha.</li>
  <li><b>⟖ derecho:</b> lo mismo por el otro lado.</li>
  <li><b>⟗ completo:</b> conserva ambos lados.</li>
  </ul>`,
  ojo:'Si las dos relaciones NO comparten ningún nombre de atributo, el join natural degenera en producto cartesiano — la condición de igualdad está vacía, así que todo pasa. Y si comparten un nombre que no debían compartir (dos "nombre" que significan cosas distintas), el join filtra por una condición absurda y devuelve casi nada. Antes de escribir ⋈, revisa qué atributos se llaman igual.'
 },
 {
  t:'División (÷): el operador del "para todos"',
  h:`<p>Es el que más cuesta, y aparece siempre porque es el único que traduce la palabra <b>"todos"</b>.</p>
  <p>R ÷ S devuelve los valores de R que están asociados con <b>todos</b> los valores de S.</p>
  <p><b>Ejemplo.</b> "Alumnos que están inscritos en todos los ramos de 6 créditos."</p>
  <p class="fx">π<sub>rut, cod</sub>(Inscripcion) ÷ π<sub>cod</sub>(σ<sub>creditos = 6</sub>(Ramo))</p>
  <p><b>Cómo se arma, en tres pasos:</b></p>
  <ol>
  <li><b>El divisor</b> es el conjunto del "todos" — acá, los códigos de los ramos de 6 créditos.</li>
  <li><b>El dividendo</b> es la relación de pares, proyectada exactamente a dos cosas: el atributo que quieres de respuesta (rut) y el que vas a dividir (cod). <b>Ni un atributo más</b>, o la división no funciona.</li>
  <li><b>El resultado</b> tiene los atributos del dividendo menos los del divisor. Acá queda solo rut.</li>
  </ol>
  <p><b>Verificación mental:</b> si el divisor tiene 3 ramos, un alumno sale en el resultado solo si aparece en el dividendo con los 3. Con 2 de 3 no basta.</p>
  <p><b>Caso borde evaluable:</b> si el divisor es <b>vacío</b>, el resultado es <b>todo</b> el dividendo proyectado. Suena raro, pero es correcto: "todos los elementos de un conjunto vacío" se cumple vacuamente para cualquiera.</p>
  <p><b>La división tampoco es primitiva.</b> Se escribe con diferencias:</p>
  <p class="fx">R ÷ S = π<sub>A</sub>(R) − π<sub>A</sub>( (π<sub>A</sub>(R) × S) − R )</p>
  <p>La idea: arma todos los pares que <i>deberían</i> existir (π<sub>A</sub>(R) × S), réstale los que <b>sí</b> existen, y lo que sobra son los pares que faltan. Quien aparezca ahí tiene al menos un elemento faltante, así que se lo restas al total. Los que quedan lo tienen todo.</p>`,
  ojo:'Distingue "todos" de "al menos uno". "Alumnos inscritos en algún ramo de 6 créditos" es un join simple. "Alumnos inscritos en TODOS los ramos de 6 créditos" es división. Leer mal esa palabra en el enunciado es el error más caro del control, porque la respuesta no se parece en nada.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Escribe: nombre de los alumnos de Civil Industrial que aprobaron el ramo de código BD (nota ≥ 4).',
    a:`<p class="fx">π<sub>nombre</sub>( σ<sub>carrera='Civil Industrial'</sub>(Alumno) ⋈ σ<sub>cod='BD' ∧ nota≥4</sub>(Inscripcion) )</p>
    <b>Cómo se construye, de adentro hacia afuera:</b><br><br>
    1. Filtras cada relación <b>por separado</b> con lo que puedas filtrar antes de juntarlas.<br>
    2. Las unes por el join natural, que usa <i>rut</i> automáticamente.<br>
    3. Proyectas el nombre al final.<br><br>
    <b>Por qué filtrar antes del join y no después.</b> Esto también es correcto:<br>
    <span class="fx-i">π<sub>nombre</sub>(σ<sub>carrera='Civil Industrial' ∧ cod='BD' ∧ nota≥4</sub>(Alumno ⋈ Inscripcion))</span><br><br>
    Da el mismo resultado, pero es <b>peor</b>: construye el join completo de todos los alumnos con todas las inscripciones y recién ahí filtra. La primera versión reduce ambas relaciones antes de combinarlas, así que el join opera sobre mucho menos.<br><br>
    Esa transformación —<b>empujar las selecciones hacia las hojas</b>— es literalmente la primera optimización que aplica PostgreSQL cuando compila tu consulta. Que las dos expresiones sean equivalentes es lo que le da permiso para reescribirla.`},
   {q:'Escribe: nombre de los alumnos que NO están inscritos en ningún ramo del profesor con rut_profe = 999.',
    a:`<p class="fx">π<sub>nombre</sub>( Alumno ⋈ ( π<sub>rut</sub>(Alumno) − π<sub>rut</sub>( Inscripcion ⋈ σ<sub>rut_profe=999</sub>(Ramo) ) ) )</p>
    <b>Paso a paso:</b><br><br>
    1. <span class="fx-i">σ<sub>rut_profe=999</sub>(Ramo)</span> — los ramos de ese profesor.<br>
    2. <span class="fx-i">Inscripcion ⋈ (eso)</span> — las inscripciones en esos ramos. El join usa <i>cod</i>.<br>
    3. <span class="fx-i">π<sub>rut</sub>(...)</span> — los ruts de quienes SÍ tomaron alguno.<br>
    4. <b>La resta</b> — todos los ruts menos esos. Quedan los que no aparecen nunca.<br>
    5. El join final con Alumno es solo para recuperar el nombre, porque el paso 4 devuelve ruts pelados.<br><br>
    <b>La trampa.</b> Mucha gente intenta esto:<br>
    <span class="fx-i">π<sub>nombre</sub>(Alumno ⋈ σ<sub>rut_profe≠999</sub>(...))</span><br><br>
    Está <b>mal</b>, y vale la pena entender por qué: eso devuelve a los alumnos que tomaron <b>algún</b> ramo de <b>otro</b> profesor. Un alumno que tomó dos ramos, uno del 999 y otro de alguien más, aparecería en el resultado — y no debería.<br><br>
    <b>La regla:</b> negar la condición <i>dentro</i> de la selección no es lo mismo que negar la <i>pertenencia al conjunto</i>. Para lo segundo necesitas la diferencia, siempre. Cada vez que veas "ninguno", "no", "nunca", tu respuesta lleva un −.`},
   {q:'Escribe: rut de los alumnos inscritos en todos los ramos que dicta el departamento de Industrial.',
    a:`<p class="fx">π<sub>rut, cod</sub>(Inscripcion) ÷ π<sub>cod</sub>( Ramo ⋈ σ<sub>departamento='Industrial'</sub>(Profesor) )</p>
    <b>Se arma por partes:</b><br><br>
    <b>El divisor</b> — el conjunto del "todos". Necesitas los códigos de los ramos de ese departamento, y el departamento está en Profesor, no en Ramo. Por eso hay un join intermedio por <i>rut_profe</i> antes de proyectar <i>cod</i>.<br><br>
    <b>El dividendo</b> — π<sub>rut, cod</sub>(Inscripcion), <b>exactamente</b> esos dos atributos. Si dejaras <i>nota</i> o <i>semestre</i>, la división se rompe: pasaría a exigir coincidencia en esos atributos también y devolvería vacío.<br><br>
    Esa poda del dividendo es el paso que más se olvida, y falla en silencio: la expresión se ve razonable y el resultado es un conjunto vacío sin que nada avise.<br><br>
    <b>Verifícalo con números.</b> Supón que Industrial dicta BD, MN y PM. Un alumno con inscripciones en BD y MN <b>no</b> sale. Uno con BD, MN, PM y además MI <b>sí</b> sale — la división pide que estén todos los del divisor, no prohíbe tener otros.<br><br>
    <b>Práctica útil:</b> arma dos tablitas de 4 o 5 filas a mano y ejecuta la expresión tú mismo. En papel, con el reloj corriendo, esa verificación de 30 segundos es lo que separa una respuesta correcta de una que se veía bien.`},
   {q:'Escribe: nombre de los alumnos que tomaron al menos dos ramos distintos. (Pista: necesitas ρ.)',
    a:`<p class="fx">π<sub>nombre</sub>( Alumno ⋈ π<sub>rut</sub>( σ<sub>I1.rut = I2.rut ∧ I1.cod ≠ I2.cod</sub>( ρ<sub>I1</sub>(Inscripcion) × ρ<sub>I2</sub>(Inscripcion) ) ) )</p>
    <b>La idea:</b> "al menos dos" se expresa comparando la relación <b>consigo misma</b> y exigiendo que las dos filas sean distintas.<br><br>
    <b>Por qué hace falta ρ.</b> Si escribieras Inscripcion × Inscripcion, el resultado tendría dos columnas llamadas <i>rut</i> y dos llamadas <i>cod</i>, y no habría forma de referirse a una en particular. El renombre les da apellido: I1.rut y I2.rut.<br><br>
    <b>Por qué × y no ⋈.</b> El join natural pegaría cada inscripción <b>solo consigo misma</b> (todos los atributos coinciden), y nunca encontrarías dos filas distintas. Necesitas el producto cartesiano para generar todos los pares posibles y después filtrar.<br><br>
    <b>Las dos condiciones y qué hace cada una:</b><br>
    • <i>I1.rut = I2.rut</i> — que las dos inscripciones sean del mismo alumno.<br>
    • <i>I1.cod ≠ I2.cod</i> — que sean de ramos distintos. Sin esta, cada fila se emparejaría consigo misma y <b>todo</b> alumno con una sola inscripción saldría en el resultado.<br><br>
    <b>Lo que el álgebra no puede hacer:</b> esta técnica escala mal. Para "al menos tres ramos" necesitas un producto triple, y para "al menos N" no hay forma de escribirlo. El álgebra relacional básica <b>no tiene funciones de agregación</b> — no existe COUNT. Por eso en SQL esta misma consulta se resuelve con GROUP BY ... HAVING COUNT(*) ≥ 2, que es incomparablemente más simple. Es una limitación real del formalismo, y una buena respuesta de examen la menciona.`}
  ]
 }
 ]
}

]);
