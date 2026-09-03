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

,

/* ---- BD · CLASE 03: DE PLANILLA A 3FN ---- */
{
 id:'bd-c03', ramo:'bd', tag:'Semana 3', sem:3,
 titulo:'Clase 03 · De planilla a 3FN',
 bajada:'La clase del profe Díaz desarmada, con los dos ejercicios evaluados resueltos: planilla A vs B y la editorial de revistas.',
 min:60,
 secciones:[
 {
  t:'El hilo de la clase, que es también el método',
  h:`<p>El profe estructuró toda la clase 03 con una sola secuencia, y la repitió al principio y al final. Vale la pena memorizarla porque <b>es el orden en que hay que atacar cualquier ejercicio</b>:</p>
  <p class="fx">identificar → conectar → separar → verificar</p>
  <table class="tb"><tr><th>Paso</th><th>La pregunta que responde</th><th>Herramienta</th></tr>
  <tr><td><b>Identificar</b></td><td>¿Qué dato distingue a cada cosa?</td><td>Llaves: superclave, candidata, PK</td></tr>
  <tr><td><b>Conectar</b></td><td>¿Cómo vinculo sin copiar datos?</td><td>FK y cardinalidad</td></tr>
  <tr><td><b>Separar</b></td><td>¿En qué relación debe vivir cada dato?</td><td>Formas normales</td></tr>
  <tr><td><b>Verificar</b></td><td>¿Quedó bien?</td><td>Checklist de 4 puntos</td></tr></table>
  <p><b>El checklist de verificación, en este orden exacto:</b></p>
  <ol>
  <li><b>1FN</b> — ¿cada celda contiene un valor atómico?</li>
  <li><b>2FN</b> — ¿todo dato no primo depende de la PK completa?</li>
  <li><b>3FN</b> — ¿un dato descriptivo depende de otro dato descriptivo?</li>
  <li><b>Integridad</b> — ¿las FK representan las referencias del dominio?</li>
  </ol>
  <p>El cuarto punto es el que casi nadie hace y es donde se pierden puntos baratos: no basta con que las tablas estén normalizadas, las FK tienen que <b>apuntar a lo que corresponde</b> según el enunciado.</p>
  <p>Y la frase con la que cerró la unidad, que resume el criterio completo:</p>
  <p class="fx">No se trata de crear más tablas.<br>Se trata de evitar hechos contradictorios.</p>`,
  ojo:'Esa frase es la defensa contra el error de sobre-normalizar. Si separas una tabla y no eliminaste ninguna redundancia ni ninguna anomalía, no ganaste nada: solo agregaste un JOIN. La normalización se justifica por el hecho repetido que elimina, no por la cantidad de tablas que produce.'
 },
 {
  t:'Lo que dijo el profe con las estadísticas',
  h:`<p>En la lámina 21 el profe puso una tabla comparando las tasas de perfectos de este semestre contra las de los últimos ocho, con test de Fisher y corrección de Holm. Los saltos:</p>
  <table class="tb"><tr><th>Quiz</th><th>Media histórica</th><th>2026-2</th><th>p</th></tr>
  <tr><td>ER-1</td><td>49,7%</td><td>85%</td><td>1,5e-8</td></tr>
  <tr><td>ER-2</td><td>7,7%</td><td>7%</td><td>0,80</td></tr>
  <tr><td>FN-1</td><td>10,0%</td><td><b>65%</b></td><td>&lt;1e-15</td></tr>
  <tr><td>MR-1</td><td>38,4%</td><td><b>89%</b></td><td>3,8e-15</td></tr>
  <tr><td>MR-2</td><td>36,0%</td><td>69%</td><td>9,4e-8</td></tr></table>
  <p>Su lectura textual: en 4 de 5 quizzes el aumento es demasiado grande para atribuirlo a variación histórica, y es <b>"una señal para verificar comprensión, no una acusación individual"</b>.</p>
  <p><b>Qué significa para ti, en concreto:</b> las notas de las entregas de Canvas dejaron de ser evidencia creíble de que el curso entendió. La consecuencia práctica es que <b>la fase individual del C1 va a apretar</b>, porque es exactamente donde se verifica comprensión sin tecnología de por medio.</p>
  <p>Fíjate además en cuál quiz NO subió: ER-2, que se quedó en 7%. Ese es el que mide lo que de verdad cuesta. Y FN-1 es el que más saltó, de 10% a 65% — o sea, formas normales es donde el profe va a mirar con más atención si entendiste o repetiste.</p>`,
  ojo:'No es un dato para ponerse nervioso, es un dato para orientar el estudio: el ejercicio de esta clase, hecho a mano y sin ayuda, vale más que cualquier otra cosa que hagas esta semana. Si lo puedes resolver en papel explicando cada decisión, la fase individual deja de ser un problema.'
 },
 {
  t:'Evaluación breve: ¿diseño A o diseño B?',
  h:`<p>El primer ejercicio evaluado partía de esta planilla:</p>
  <table class="tb"><tr><th>ID sol.</th><th>Fecha</th><th>Correo</th><th>Persona</th><th>Material</th><th>Nombre</th><th>Cant.</th></tr>
  <tr><td>S01</td><td>12/07</td><td>ana@centro.cl</td><td>Ana</td><td>M10</td><td>Cartulina</td><td>5</td></tr>
  <tr><td>S01</td><td>12/07</td><td>ana@centro.cl</td><td>Ana</td><td>M20</td><td>Plumón</td><td>3</td></tr>
  <tr><td>S02</td><td>13/07</td><td>ana@centro.cl</td><td>Ana</td><td>M10</td><td>Cartulina</td><td>2</td></tr></table>
  <p>Y ofrecía dos diseños que se diferencian en <b>una sola cosa</b>: dónde vive el correo.</p>
  <table class="tb"><tr><th>Diseño A</th><th>Diseño B</th></tr>
  <tr><td>PERSONA(<u>correo</u>, nombre_persona)<br>MATERIAL(<u>cod_material</u>, nombre_material)<br>SOLICITUD(<u>id_sol</u>, fecha)<br>DETALLE(<u>id_sol</u>, <u>cod_material</u>, <b>correo</b>, cantidad)</td>
  <td>PERSONA(<u>correo</u>, nombre_persona)<br>MATERIAL(<u>cod_material</u>, nombre_material)<br>SOLICITUD(<u>id_sol</u>, fecha, <b>correo</b>)<br>DETALLE(<u>id_sol</u>, <u>cod_material</u>, cantidad)</td></tr></table>
  <p><b>Respuesta: el diseño B.</b></p>
  <p><b>Por qué A falla.</b> En A, la PK de DETALLE es {id_sol, cod_material}. Pero el correo depende <b>solo de id_sol</b> — quién hizo la solicitud es un hecho de la solicitud, no de cada línea de material.</p>
  <p>Eso es una <b>dependencia parcial</b>: un atributo no primo determinado por una parte de la clave compuesta. Rompe la <b>2FN</b>, y por lo tanto tampoco está en 3FN.</p>
  <p>Se ve en los datos: S01 tiene dos materiales, así que el correo de Ana aparece <b>dos veces</b> en DETALLE. Si Ana cambia su correo, hay que editar las dos filas.</p>
  <p><b>Por qué B funciona.</b> El correo vive en SOLICITUD, que es la relación cuya clave lo determina. Una fila por solicitud, un correo por fila, cero repetición.</p>
  <p><b>La pregunta que resuelve el ejercicio en 10 segundos:</b> "¿este dato es un hecho sobre la solicitud completa, o sobre cada línea de detalle?" El correo es de la solicitud. La cantidad sí es de la línea — por eso la cantidad se queda en DETALLE y nadie la discute.</p>`,
  ojo:'Ojo con el orden de la clave en A: {id_sol, cod_material}. El error de lectura frecuente es pensar que correo depende de la clave completa porque "está en la misma fila". Estar en la misma fila no es depender. Depender significa que si fijas la clave, el valor queda determinado — y acá basta con fijar id_sol para saber el correo, sin mirar cod_material.'
 },
 {
  t:'Segunda pregunta: agregar los talleres',
  h:`<p><b>El requisito nuevo:</b> existen varios talleres, TALLER(<u>id_taller</u>, nombre_taller), y <b>una misma solicitud puede incluir el mismo material para más de un taller</b>.</p>
  <p><b>La solución:</b></p>
  <p class="fx">TALLER(<u>id_taller</u>, nombre_taller)<br>DETALLE(<u>id_sol</u>, <u>cod_material</u>, <u>id_taller</u>, cantidad)</p>
  <p>id_taller entra <b>a la clave primaria</b> de DETALLE, y además es FK hacia TALLER.</p>
  <p><b>Por qué tiene que entrar a la PK y no basta con agregarlo como columna.</b> Lee otra vez el requisito: <i>el mismo material</i>, en <i>la misma solicitud</i>, para <i>dos talleres distintos</i>. O sea, tienen que poder existir estas dos filas a la vez:</p>
  <table class="tb"><tr><th>id_sol</th><th>cod_material</th><th>id_taller</th><th>cantidad</th></tr>
  <tr><td>S01</td><td>M10</td><td>T1</td><td>5</td></tr>
  <tr><td>S01</td><td>M10</td><td>T2</td><td>3</td></tr></table>
  <p>Con la PK vieja {id_sol, cod_material}, esas dos filas <b>colisionan</b>: tienen la misma clave. El motor rechaza la segunda. El requisito sería imposible de representar.</p>
  <p>Al meter id_taller en la clave, las dos filas se distinguen y el modelo puede expresar lo que el negocio necesita.</p>
  <p><b>La regla general:</b> cuando un requisito nuevo dice "el mismo X puede repetirse según Y", ese Y casi siempre tiene que entrar a la clave primaria. La clave define <b>qué cuenta como un registro distinto</b>, y el enunciado te está diciendo justamente eso.</p>`,
  ojo:'Nota de diseño: la cantidad sigue siendo correcta donde está, porque ahora es la cantidad de ese material para ese taller dentro de esa solicitud — depende de la clave completa nueva. Si dejaras cantidad dependiendo solo de {id_sol, cod_material} tendrías otra vez una dependencia parcial, ahora respecto de la clave ampliada.'
 },
 {
  t:'El ejercicio final: editorial de revistas',
  h:`<p>Este es el ejercicio grande de la clase — 60 minutos, grupos de 3, 12 puntos, y hay que entregar un <b>diagrama MR en 3FN indicando PK y FK</b>.</p>
  <p><b>El enunciado, en sus reglas:</b></p>
  <ul>
  <li>Cada revista tiene ISSN, nombre y área.</li>
  <li>Una revista publica <b>números</b>, identificados por <b>ISSN + volumen + número</b>, con fecha de publicación.</li>
  <li>Cada artículo tiene DOI, título, fecha de envío y estado.</li>
  <li>Un artículo pertenece a un número <b>cuando es aceptado</b>, pero puede existir antes de ser asignado. Mientras no tenga número, esos tres datos van nulos; al asignarlo, deben referenciar <b>en conjunto</b> un número existente.</li>
  <li>Los académicos se identifican por ORCID, con nombre y afiliación. <b>Almacene cada académico una sola vez</b>: uno mismo puede ser autor en un artículo y revisor en otro.</li>
  <li>Un artículo puede tener varios autores y se debe guardar el <b>orden de autoría</b>.</li>
  <li>Cada revisión corresponde a un artículo y a un revisor: fecha de asignación, fecha de respuesta, recomendación y comentario. Un artículo tiene varias revisiones, un revisor revisa muchos artículos. <b>Un revisor emite como máximo una revisión por artículo.</b></li>
  </ul>

  <p><b>PASO 1 · IDENTIFICAR.</b> Los sustantivos con identidad propia y qué los identifica:</p>
  <table class="tb"><tr><th>Cosa</th><th>PK</th><th>De dónde sale</th></tr>
  <tr><td>REVISTA</td><td>issn</td><td>dado directo</td></tr>
  <tr><td>NUMERO</td><td>{issn, volumen, numero}</td><td><b>dado explícito:</b> "identificados por ISSN + volumen + número"</td></tr>
  <tr><td>ARTICULO</td><td>doi</td><td>dado directo</td></tr>
  <tr><td>ACADEMICO</td><td>orcid</td><td>dado directo</td></tr></table>
  <p>NUMERO es una <b>entidad débil</b> de REVISTA: volumen 3 número 1 no significa nada sin decir de qué revista. Por eso el issn es parte de su clave <b>y</b> FK hacia REVISTA al mismo tiempo.</p>

  <p><b>PASO 2 · CONECTAR.</b> Las cardinalidades y dónde queda cada FK:</p>
  <table class="tb"><tr><th>Vínculo</th><th>Cardinalidad</th><th>Decisión</th></tr>
  <tr><td>REVISTA–NUMERO</td><td>1:N</td><td>issn en NUMERO (y en su PK)</td></tr>
  <tr><td>NUMERO–ARTICULO</td><td>1:N</td><td>la tripleta entera en ARTICULO, <b>nullable</b></td></tr>
  <tr><td>ARTICULO–ACADEMICO (autoría)</td><td>N:M con atributo</td><td>relación nueva AUTORIA</td></tr>
  <tr><td>ARTICULO–ACADEMICO (revisión)</td><td>N:M con atributos</td><td>relación nueva REVISION</td></tr></table>

  <p><b>PASO 3 · EL MODELO.</b></p>
  <p class="fx">REVISTA(<u>issn</u>, nombre, area)<br><br>
  NUMERO(<u>issn</u>, <u>volumen</u>, <u>numero</u>, fecha_publicacion)<br>
  &nbsp;&nbsp;FK issn → REVISTA<br><br>
  ACADEMICO(<u>orcid</u>, nombre, afiliacion)<br><br>
  ARTICULO(<u>doi</u>, titulo, fecha_envio, estado, issn, volumen, numero)<br>
  &nbsp;&nbsp;FK (issn, volumen, numero) → NUMERO &nbsp;<i>compuesta y nullable</i><br><br>
  AUTORIA(<u>doi</u>, <u>orcid</u>, orden_autoria)<br>
  &nbsp;&nbsp;FK doi → ARTICULO, FK orcid → ACADEMICO<br><br>
  REVISION(<u>doi</u>, <u>orcid</u>, fecha_asignacion, fecha_respuesta, recomendacion, comentario)<br>
  &nbsp;&nbsp;FK doi → ARTICULO, FK orcid → ACADEMICO</p>

  <p><b>PASO 4 · VERIFICAR.</b> Pasando el checklist por cada relación:</p>
  <ul>
  <li><b>1FN:</b> ningún atributo guarda listas. Los varios autores de un artículo están como filas de AUTORIA, no como una lista en ARTICULO.</li>
  <li><b>2FN:</b> las dos relaciones con clave compuesta son AUTORIA y REVISION. En AUTORIA, orden_autoria depende de <b>ambos</b> (el orden es de ese autor en ese artículo). En REVISION, todos los datos del proceso dependen del par completo. Sin dependencias parciales.</li>
  <li><b>3FN:</b> ningún atributo descriptivo determina a otro. nombre y afiliacion viven junto a orcid, que es su determinante. nombre y area viven junto a issn.</li>
  <li><b>Integridad:</b> cada FK apunta a la relación donde ese identificador es PK.</li>
  </ul>`,
  ojo:'Fíjate en la simetría entre AUTORIA y REVISION: las dos son N:M entre los mismos dos conjuntos, ARTICULO y ACADEMICO. Que existan dos relaciones distintas y no una sola con un campo "rol" es correcto, porque cada vínculo tiene atributos propios completamente diferentes — el orden de autoría no tiene sentido en una revisión, ni la recomendación en una autoría.'
 },
 {
  t:'Los cinco detalles que decidían el puntaje',
  h:`<p>La estructura general la saca cualquiera. Lo que separa un 12 de un 7 son estas cinco decisiones, y cada una está <b>escrita explícitamente en el enunciado</b> — no hay que adivinarlas, hay que leerlas.</p>

  <p><b>1. La FK de ARTICULO es compuesta, no tres FK sueltas.</b><br>
  El enunciado dice que los tres datos "deben referenciar <b>en conjunto</b> un número existente". Eso significa una sola restricción:</p>
  <p class="fx">FOREIGN KEY (issn, volumen, numero) → NUMERO</p>
  <p>Si declararas issn → REVISTA por un lado y volumen y numero sueltos, permitirías un artículo apuntando a la revista correcta pero a un volumen que no existe. La referencia se valida como <b>tripleta</b>.</p>

  <p><b>2. Esa FK puede ser nula, y las tres columnas juntas.</b><br>
  "Puede existir antes de ser asignado". Es participación <b>opcional</b>. O están las tres nulas, o están las tres con valores que forman un número real. Nunca una sí y dos no.</p>

  <p><b>3. Un solo ACADEMICO, no AUTOR y REVISOR por separado.</b><br>
  "Almacene cada académico una sola vez: un mismo académico puede ser autor en un artículo y revisor en otro." Es la trampa principal del ejercicio y el enunciado la señala con letras grandes.</p>
  <p>Si hicieras tablas AUTOR(orcid, nombre, afiliacion) y REVISOR(orcid, nombre, afiliacion), alguien que hace las dos cosas queda duplicado — y cuando cambie de universidad, tienes que acordarte de actualizar dos lugares. Es la anomalía de actualización, exactamente la que la unidad completa viene combatiendo.</p>
  <p>El rol no es una propiedad de la persona. <b>Es una propiedad del vínculo</b>, y por eso vive en AUTORIA o en REVISION, no en ACADEMICO.</p>

  <p><b>4. La PK de REVISION sale de una sola frase.</b><br>
  "Un revisor puede emitir como máximo <b>una</b> revisión por artículo." Esa restricción es la que permite que {doi, orcid} alcance como clave.</p>
  <p>Si el enunciado dijera que un revisor puede revisar el mismo artículo varias veces (segunda ronda, por ejemplo), {doi, orcid} ya no distinguiría las filas y necesitarías agregar algo: un nro_ronda, o la fecha_asignacion. <b>Una frase del enunciado cambia la clave primaria.</b></p>

  <p><b>5. orden_autoria va en AUTORIA, no en ACADEMICO ni en ARTICULO.</b><br>
  Es el ejemplo canónico de atributo de vínculo. Un académico no tiene un "orden" en abstracto; lo tiene <b>en un artículo determinado</b>. Puede ser primer autor en uno y tercero en otro.</p>
  <p><b>Detalle que suma:</b> conviene además declarar UNIQUE(doi, orden_autoria), para que un artículo no pueda tener dos primeros autores. El enunciado no lo pide, pero muestra que entendiste qué representa el dato.</p>`,
  ojo:'Los cinco detalles tienen algo en común: todos salen de leer con cuidado, no de saber más teoría. En el control, antes de dibujar nada, subraya en el enunciado las frases que dicen "identificado por", "puede", "debe", "como máximo", "una sola vez". Cada una de esas frases es una decisión de diseño ya tomada por el profe, esperando que la traduzcas.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Variación del ejercicio de la editorial: ahora un revisor SÍ puede revisar el mismo artículo más de una vez, en rondas sucesivas, y hay que saber a qué ronda corresponde cada revisión. ¿Qué cambia en el modelo?',
    a:`<b>Cambia la clave primaria de REVISION, y nada más:</b><br><br>
    <span class="fx-i">REVISION(<u>doi</u>, <u>orcid</u>, <u>nro_ronda</u>, fecha_asignacion, fecha_respuesta, recomendacion, comentario)</span><br><br>
    <b>Por qué.</b> Con la regla original, el par {doi, orcid} identificaba una fila porque había a lo más una revisión por combinación. Al permitir varias, ese par pasa a repetirse y deja de ser clave: dos rondas del mismo revisor sobre el mismo artículo colisionarían.<br><br>
    nro_ronda entra a la PK y funciona como <b>identificador parcial</b> — igual que el nro_consulta dentro de una ficha clínica. La ronda 1 existe en muchos pares artículo-revisor; solo tiene sentido dentro de uno.<br><br>
    <b>Lo que NO cambia:</b> las otras cinco relaciones quedan idénticas. Un requisito nuevo bien acotado toca un lugar del modelo, y ese es un buen indicador de que el diseño original estaba bien separado. Si un cambio chico te obliga a rehacer medio modelo, casi siempre es porque algo estaba mal normalizado.<br><br>
    <b>Alternativa que también se acepta:</b> usar fecha_asignacion en la clave, {doi, orcid, fecha_asignacion}. Funciona, pero es peor: depende de que nunca se asignen dos rondas el mismo día, y las claves basadas en fechas son frágiles. nro_ronda es explícito y además representa un dato que el negocio quiere consultar.`},
   {q:'En el modelo de la editorial, ¿por qué NUMERO no puede tener simplemente una PK simple tipo id_numero autoincremental? ¿Estaría mal?',
    a:`<b>No estaría mal como diseño real, pero sí estaría mal en este ejercicio.</b> Vale la pena entender la diferencia, porque son dos preguntas distintas.<br><br>
    <b>Por qué en el ejercicio se pide compuesta.</b> El enunciado dice literalmente que los números están "identificados por ISSN + volumen + número". Te están dando la clave. Cambiarla por un id inventado ignora un dato que el enunciado entregó a propósito, y además hace desaparecer del modelo la relación de dependencia entre NUMERO y REVISTA que el profe quería que representaras.<br><br>
    <b>Por qué en la práctica sí se hace.</b> Una PK sustituta (surrogate key) tiene ventajas reales:<br>
    • Las FK que la referencian son una columna en vez de tres. En ARTICULO ahorrarías dos columnas.<br>
    • Los JOIN son más baratos.<br>
    • Si algún día cambia la forma de numerar, no arrastras el cambio a todas las tablas que referencian.<br><br>
    <b>El costo.</b> Necesitas igual declarar UNIQUE(issn, volumen, numero), porque esa combinación sigue siendo única en el mundo real y sin la restricción podrías cargar dos filas del mismo número. O sea, la clave natural no desaparece: se degrada a clave alterna.<br><br>
    <b>Cómo responderlo si sale en el control:</b> señala que la clave natural es la que pide el enunciado, y menciona la sustituta como alternativa de implementación indicando que exige UNIQUE sobre la natural. Esa respuesta muestra que distingues el modelo lógico del físico — que es justamente la separación de niveles con que abrió la unidad.`},
   {q:'Vuelve al diseño A de la planilla de solicitudes (el incorrecto). Sin cambiar nada de lugar, ¿qué tendría que ser cierto del negocio para que A fuera correcto?',
    a:`<b>Que una solicitud pudiera tener materiales pedidos por personas distintas.</b><br><br>
    Recuerda por qué A falla: DETALLE(<u>id_sol</u>, <u>cod_material</u>, correo, cantidad) tiene una dependencia parcial porque <span class="fx-i">id_sol → correo</span>. El correo se repite en cada línea de la misma solicitud.<br><br>
    Pero esa dependencia existe solo porque <b>la regla del negocio</b> dice que una solicitud pertenece a una persona. Si la regla fuera otra — una solicitud es un carro compartido donde cada línea la pide alguien distinto — entonces:<br><br>
    • <span class="fx-i">id_sol → correo</span> <b>dejaría de ser cierta</b>: la misma solicitud tendría correos distintos según la línea.<br>
    • El correo pasaría a depender de la clave completa {id_sol, cod_material}.<br>
    • No habría dependencia parcial, y A estaría en 2FN y en 3FN.<br><br>
    <b>Lo que hay que llevarse de esto:</b> la misma estructura de tablas es correcta o incorrecta <b>según las reglas del negocio</b>, no por su forma. No existe "esta tabla está mal normalizada" en abstracto — existe "está mal normalizada dado que estas dependencias funcionales se cumplen".<br><br>
    Por eso el profe insiste en que las DF se deducen del dominio y no de los datos que ves en la planilla. Y por eso en el control, cuando justifiques, tienes que <b>nombrar la dependencia</b> que se viola: decir "A no está en 2FN" vale la mitad de decir "A no está en 2FN porque id_sol → correo es parcial respecto de la PK {id_sol, cod_material}".`},
   {q:'Enunciado nuevo para practicar completo. Un gimnasio registra: SOCIO con rut, nombre y varios teléfonos. CLASE con código, nombre y cupo. Cada clase la dicta un INSTRUCTOR (rut, nombre, especialidad). Las clases se dan en SESIONES, numeradas dentro de cada clase (sesión 1, 2, 3), con fecha y sala. Un socio se inscribe en sesiones y queda registrada su asistencia. Modela en 3FN indicando PK y FK.',
    a:`<b>El modelo:</b><br><br>
    <span class="fx-i">SOCIO(<u>rut_socio</u>, nombre)</span><br>
    <span class="fx-i">SOCIO_TELEFONO(<u>rut_socio</u>, <u>telefono</u>)</span> — FK rut_socio → SOCIO<br>
    <span class="fx-i">INSTRUCTOR(<u>rut_instructor</u>, nombre, especialidad)</span><br>
    <span class="fx-i">CLASE(<u>cod_clase</u>, nombre, cupo, rut_instructor)</span> — FK → INSTRUCTOR<br>
    <span class="fx-i">SESION(<u>cod_clase</u>, <u>nro_sesion</u>, fecha, sala)</span> — FK cod_clase → CLASE<br>
    <span class="fx-i">INSCRIPCION(<u>rut_socio</u>, <u>cod_clase</u>, <u>nro_sesion</u>, asistio)</span> — FK rut_socio → SOCIO, FK (cod_clase, nro_sesion) → SESION<br><br>
    <b>Las decisiones, una por una:</b><br><br>
    <b>1. Teléfonos → tabla propia.</b> Multivaluado. PK compuesta por los dos atributos.<br><br>
    <b>2. Instructor separado.</b> Si pusieras nombre y especialidad del instructor dentro de CLASE, tendrías una transitiva: <span class="fx-i">cod_clase → rut_instructor → especialidad</span>. Falla 3FN, y la especialidad se repetiría en cada clase que dicte.<br><br>
    <b>3. SESION es entidad débil de CLASE.</b> La pista es "numeradas dentro de cada clase": el número 1 se repite entre clases distintas. PK = clave de la fuerte + identificador parcial.<br><br>
    <b>4. La FK de INSCRIPCION hacia SESION es compuesta</b>, igual que en la editorial. Apunta a las dos columnas juntas, porque la PK de SESION son dos columnas.<br><br>
    <b>5. asistio vive en INSCRIPCION.</b> Es atributo del vínculo: no es un dato del socio ni de la sesión, sino del par. Mismo caso que orden_autoria.<br><br>
    <b>El detalle fino:</b> ¿el cupo va en CLASE o en SESION? Como está el enunciado, en CLASE — "CLASE con código, nombre y cupo". Pero si el negocio dijera que el cupo depende de la sala de cada sesión, tendría que moverse a SESION. <b>Vuelve a ser la regla del negocio la que decide dónde vive el dato</b>, que es literalmente el título de la clase: ¿dónde debe vivir cada dato?`}
  ]
 }
 ]
}

,

/* ---- BD · SIMULACROS DE C1 ---- */
{
 id:'bd-c1-sim', ramo:'bd', tag:'C1 · 3 sep', sem:5,
 titulo:'Simulacros de C1',
 bajada:'Cuatro ensayos completos con el formato real del control: dos fases individuales de 45 min y dos grupales de 120 min, con solución.',
 min:90,
 secciones:[
 {
  t:'Cómo usar esto para que sirva',
  h:`<p>Estos simulacros valen <b>solo si los haces bajo condiciones de control</b>. Leer la solución no enseña nada; equivocarte y entender por qué, sí.</p>
  <p><b>Las reglas:</b></p>
  <ol>
  <li><b>Papel y lápiz.</b> Nada de computador. Es como va a ser.</li>
  <li><b>Cronómetro.</b> 45 minutos las individuales, 120 las grupales. Si se acaba el tiempo, entregas lo que tengas.</li>
  <li><b>Cero material.</b> Ni la app, ni apuntes. Si no te acuerdas de algo, anótalo al margen y sigue — después revisas justo eso.</li>
  <li><b>Solución después.</b> Recién cuando entregaste tu versión.</li>
  </ol>
  <p><b>El orden que conviene:</b> Simulacro 1 individual → corriges → Simulacro 1 grupal → corriges → Simulacro 2 individual (acá deberías notar la diferencia) → Simulacro 2 grupal.</p>
  <p>Si te alcanza solo para dos, haz las <b>dos individuales</b>. Es la fase donde no te cubre el equipo, y donde el profe dijo que iba a verificar comprensión.</p>`,
  ojo:'Antes de dibujar nada, dedica 5 minutos a subrayar el enunciado buscando "identificado por", "puede", "debe", "como máximo", "una sola vez", "varios". Cada una de esas frases es una decisión de diseño ya tomada, esperando que la traduzcas. Los enunciados de abajo están escritos con la misma densidad que los del profe: nada sobra.'
 },
 {
  t:'Simulacro 1 · Fase individual (45 min)',
  ej:[
   {q:'<b>VETERINARIA.</b> Una clínica veterinaria quiere ordenar su registro.<br><br>Cada dueño se identifica por RUT y tiene nombre, dirección (calle, número y comuna) y puede registrar varios teléfonos de contacto.<br><br>Cada mascota tiene un número de chip único, nombre, especie, fecha de nacimiento y edad. Una mascota pertenece a un solo dueño; un dueño puede tener varias mascotas.<br><br>Cada mascota tiene exactamente una ficha clínica, y toda ficha corresponde a una mascota. Dentro de cada ficha se registran atenciones, numeradas 1, 2, 3 dentro de esa ficha, con fecha, motivo y diagnóstico. Cada atención la realiza un veterinario, identificado por RUT, con nombre y especialidad.<br><br>Diseñe el modelo relacional en 3FN indicando PK y FK. Justifique las decisiones no obvias.',
    a:`<b>El modelo:</b><br><br>
    <span class="fx-i">DUENO(<u>rut_dueno</u>, nombre, calle, numero, comuna)</span><br>
    <span class="fx-i">TELEFONO_DUENO(<u>rut_dueno</u>, <u>telefono</u>)</span> — FK rut_dueno → DUENO<br>
    <span class="fx-i">MASCOTA(<u>chip</u>, nombre, especie, fecha_nac, rut_dueno)</span> — FK → DUENO<br>
    <span class="fx-i">FICHA(<u>nro_ficha</u>, chip UNIQUE NOT NULL)</span> — FK → MASCOTA<br>
    <span class="fx-i">VETERINARIO(<u>rut_vet</u>, nombre, especialidad)</span><br>
    <span class="fx-i">ATENCION(<u>nro_ficha</u>, <u>nro_atencion</u>, fecha, motivo, diagnostico, rut_vet)</span> — FK nro_ficha → FICHA, FK rut_vet → VETERINARIO<br><br>

    <b>Las siete decisiones:</b><br><br>
    <b>1. Teléfonos → tabla propia.</b> "Varios teléfonos" es multivaluado. PK compuesta por los dos atributos: el dueño puede tener varios, y un número podría repetirse entre dueños.<br><br>
    <b>2. Dirección se descompone.</b> Compuesto: calle, numero y comuna son columnas sueltas de DUENO. No hay tabla.<br><br>
    <b>3. La edad NO aparece.</b> Derivada de fecha_nac. Guardarla sería guardar un dato que se desactualiza solo. <i>Este es el punto que más se pierde.</i><br><br>
    <b>4. Dueño–Mascota es 1:N</b> → FK en el lado N, que es MASCOTA.<br><br>
    <b>5. Mascota–Ficha es 1:1</b>, con participación total del lado FICHA (toda ficha tiene mascota; podría haber mascota sin ficha aún). Por eso la FK va en FICHA, con UNIQUE (la hace 1:1 y no 1:N) y NOT NULL (fuerza la participación total).<br><br>
    <i>Variante también correcta:</i> usar <span class="fx-i">FICHA(<u>chip</u>, ...)</span>, o sea que el chip sea directamente la PK de FICHA. Es más limpio y expresa el 1:1 sin necesidad de UNIQUE. Si la eliges, dilo explícitamente.<br><br>
    <b>6. ATENCION es entidad débil de FICHA.</b> La pista: "numeradas 1, 2, 3 <b>dentro de esa ficha</b>". El número por sí solo no identifica nada. PK = clave de la fuerte + identificador parcial.<br><br>
    <b>7. Veterinario–Atención es 1:N</b> → FK en ATENCION. Sin tabla nueva.<br><br>

    <b>Verificación 3FN:</b> ningún atributo descriptivo determina a otro. La especialidad vive junto a rut_vet, que es su determinante; el nombre del dueño junto a rut_dueno. Si hubieras puesto nombre_veterinario dentro de ATENCION, tendrías una transitiva.<br><br>
    <b>Autoevaluación:</b> 7 decisiones. Cuenta cuántas acertaste. Menos de 5 → repasa las reglas de traducción antes del siguiente simulacro.`}
  ]
 },
 {
  t:'Simulacro 1 · Fase grupal (120 min)',
  ej:[
   {q:'<b>AEROLÍNEA REGIONAL.</b> Una aerolínea necesita rediseñar su sistema.<br><br>Cada aeropuerto se identifica por su código IATA de tres letras, con nombre y ciudad.<br><br>Una ruta tiene un código propio, un aeropuerto de origen, uno de destino y una duración estimada.<br><br>Los vuelos se identifican por el código de la ruta más la fecha de salida. Cada vuelo se opera con un avión, identificado por su matrícula, con modelo y capacidad.<br><br>Algunos vuelos son de conexión: un vuelo puede tener un vuelo siguiente al que los pasajeros conectan. Ese dato puede no existir, y cuando existe debe referenciar un vuelo real.<br><br>Los pasajeros se identifican por número de pasaporte, con nombre, nacionalidad y varios correos de contacto. Un pasajero reserva muchos vuelos y un vuelo tiene muchos pasajeros; de cada reserva se guarda fecha de reserva, clase y número de asiento. Un pasajero no puede reservar dos veces el mismo vuelo.<br><br>La tripulación se identifica por número de empleado, con nombre y rol base. Un vuelo lleva varios tripulantes y un tripulante vuela muchos vuelos; se registra la función que cumplió en ese vuelo en particular.<br><br>Diseñe el modelo relacional en 3FN indicando PK y FK.',
    a:`<b>El modelo:</b><br><br>
    <span class="fx-i">AEROPUERTO(<u>iata</u>, nombre, ciudad)</span><br><br>
    <span class="fx-i">RUTA(<u>cod_ruta</u>, iata_origen, iata_destino, duracion)</span><br>
    &nbsp;&nbsp;FK iata_origen → AEROPUERTO, FK iata_destino → AEROPUERTO<br><br>
    <span class="fx-i">AVION(<u>matricula</u>, modelo, capacidad)</span><br><br>
    <span class="fx-i">VUELO(<u>cod_ruta</u>, <u>fecha_salida</u>, matricula, cod_ruta_conex, fecha_conex)</span><br>
    &nbsp;&nbsp;FK cod_ruta → RUTA · FK matricula → AVION<br>
    &nbsp;&nbsp;FK (cod_ruta_conex, fecha_conex) → VUELO &nbsp;<i>compuesta, nullable, auto-referente</i><br><br>
    <span class="fx-i">PASAJERO(<u>pasaporte</u>, nombre, nacionalidad)</span><br>
    <span class="fx-i">CORREO_PASAJERO(<u>pasaporte</u>, <u>correo</u>)</span> — FK → PASAJERO<br><br>
    <span class="fx-i">RESERVA(<u>pasaporte</u>, <u>cod_ruta</u>, <u>fecha_salida</u>, fecha_reserva, clase, asiento)</span><br>
    &nbsp;&nbsp;FK pasaporte → PASAJERO · FK (cod_ruta, fecha_salida) → VUELO<br><br>
    <span class="fx-i">TRIPULANTE(<u>nro_empleado</u>, nombre, rol_base)</span><br><br>
    <span class="fx-i">ASIGNACION(<u>nro_empleado</u>, <u>cod_ruta</u>, <u>fecha_salida</u>, funcion)</span><br>
    &nbsp;&nbsp;FK nro_empleado → TRIPULANTE · FK (cod_ruta, fecha_salida) → VUELO<br><br>

    <b>Los cinco puntos donde se decide la nota:</b><br><br>
    <b>1. RUTA tiene DOS FK a la misma tabla.</b> Origen y destino son ambos aeropuertos. Es perfectamente válido y hay que nombrarlas distinto (iata_origen, iata_destino) porque una tabla no puede tener dos columnas con el mismo nombre. Lo que hace distintas a las dos referencias no es la tabla de destino sino <b>el rol</b> que cumple cada una.<br><br>
    <b>2. VUELO tiene PK compuesta</b> {cod_ruta, fecha_salida}, porque el enunciado lo dice: "se identifican por el código de la ruta más la fecha de salida". Es entidad débil de RUTA — la fecha sola no identifica nada.<br><br>
    <b>3. La conexión es una FK compuesta de VUELO hacia sí misma, y nullable.</b> Este es el punto difícil:<br>
    • Es <b>auto-referente</b>: un vuelo apunta a otro vuelo.<br>
    • Es <b>compuesta</b>, porque la PK de VUELO son dos columnas.<br>
    • Es <b>opcional</b> ("puede no existir"), así que las dos columnas van nulas juntas, nunca una sí y otra no.<br>
    • "Cuando existe debe referenciar un vuelo real" es el enunciado pidiéndote explícitamente la integridad referencial.<br><br>
    <b>4. Dos N:M distintas sobre VUELO</b>, y cada una con su atributo propio. RESERVA lleva fecha_reserva, clase y asiento; ASIGNACION lleva funcion. No se pueden fusionar en una sola tabla con un campo "tipo": los atributos son completamente distintos.<br><br>
    <b>5. Las PK de RESERVA y ASIGNACION son de TRES columnas</b>, porque el lado VUELO ya aporta dos. La regla no cambia — sigue siendo "las claves de ambos lados" — pero el lado vuelo trae una clave compuesta.<br><br>
    "Un pasajero no puede reservar dos veces el mismo vuelo" es lo que <b>confirma</b> que {pasaporte, cod_ruta, fecha_salida} basta como PK. Si pudiera, necesitarías algo más.<br><br>

    <b>Trampas evitadas:</b><br>
    • <i>rol_base</i> en TRIPULANTE y <i>funcion</i> en ASIGNACION son cosas distintas: el rol es de la persona, la función es de ese vuelo. Meter la función en TRIPULANTE sería un error de diseño grave.<br>
    • La capacidad del avión vive en AVION, no en VUELO. Si la pusieras en VUELO tendrías <span class="fx-i">matricula → capacidad</span>, transitiva, y falla 3FN.<br><br>
    <b>Autoevaluación:</b> 9 tablas. Si te salieron 7 u 8, probablemente fusionaste RESERVA con ASIGNACION o te comiste la tabla de correos.`}
  ]
 },
 {
  t:'Simulacro 2 · Fase individual (45 min)',
  ej:[
   {q:'<b>TORNEO DEPORTIVO.</b> Un club organiza torneos y quiere sistematizar el registro.<br><br>Cada torneo tiene un código, nombre, año y la cantidad de equipos participantes.<br><br>Cada equipo tiene código, nombre, ciudad y varios colores oficiales.<br><br>Un equipo participa en varios torneos y un torneo tiene varios equipos. De cada participación se guarda la fecha de inscripción y el grupo asignado.<br><br>Los partidos se numeran dentro de cada torneo (partido 1, 2, 3…) y registran fecha, equipo local, equipo visitante y el marcador de cada lado. Cada partido lo dirige un árbitro, identificado por RUT, con nombre y categoría.<br><br>Diseñe el modelo relacional en 3FN indicando PK y FK.',
    a:`<b>El modelo:</b><br><br>
    <span class="fx-i">TORNEO(<u>cod_torneo</u>, nombre, anio)</span><br>
    <span class="fx-i">EQUIPO(<u>cod_equipo</u>, nombre, ciudad)</span><br>
    <span class="fx-i">COLOR_EQUIPO(<u>cod_equipo</u>, <u>color</u>)</span> — FK → EQUIPO<br>
    <span class="fx-i">PARTICIPACION(<u>cod_torneo</u>, <u>cod_equipo</u>, fecha_inscripcion, grupo)</span> — FK a ambas<br>
    <span class="fx-i">ARBITRO(<u>rut_arbitro</u>, nombre, categoria)</span><br>
    <span class="fx-i">PARTIDO(<u>cod_torneo</u>, <u>nro_partido</u>, fecha, cod_local, cod_visita, goles_local, goles_visita, rut_arbitro)</span><br>
    &nbsp;&nbsp;FK cod_torneo → TORNEO · FK cod_local → EQUIPO · FK cod_visita → EQUIPO · FK rut_arbitro → ARBITRO<br><br>

    <b>Las decisiones:</b><br><br>
    <b>1. La cantidad de equipos NO se guarda.</b> Es derivada: se cuenta desde PARTICIPACION. Mismo caso que la edad en la veterinaria — si la guardaras, quedaría desincronizada apenas se inscriba o retire un equipo. <i>Aquí está el atributo derivado escondido de este enunciado.</i><br><br>
    <b>2. Colores → tabla propia.</b> "Varios colores oficiales" es multivaluado.<br><br>
    <b>3. PARTICIPACION es N:M con atributos.</b> fecha_inscripcion y grupo no son del equipo ni del torneo: son del par. Un equipo puede estar en el grupo A de un torneo y en el grupo C de otro.<br><br>
    <b>4. PARTIDO es entidad débil de TORNEO.</b> "Se numeran dentro de cada torneo" — el número se reinicia, así que solo no identifica. PK = {cod_torneo, nro_partido}.<br><br>
    <b>5. Local y visita son dos FK a EQUIPO</b>, con nombres distintos. Igual que origen y destino en la aerolínea: dos referencias a la misma tabla, distinguidas por el rol.<br><br>
    <b>6. El marcador son dos columnas</b>, goles_local y goles_visita. Si lo guardaras como texto "2-1" violarías la 1FN: dos valores en una celda.<br><br>
    <b>7. La categoría del árbitro vive en ARBITRO.</b> Ponerla en PARTIDO daría <span class="fx-i">rut_arbitro → categoria</span>, transitiva, y rompe 3FN.<br><br>

    <b>Comparación con el simulacro 1:</b> es el mismo repertorio — derivado, multivaluado, N:M con atributos, entidad débil, doble FK — con distinto disfraz. Si este te costó menos que la veterinaria, el método ya está funcionando. Si te costó lo mismo, el problema no es la práctica sino que todavía estás resolviendo por intuición en vez de aplicar los cuatro pasos en orden.`}
  ]
 },
 {
  t:'Simulacro 2 · Fase grupal (120 min)',
  ej:[
   {q:'<b>CADENA DE FARMACIAS.</b> Una cadena registra sus ventas con receta en una sola planilla:<br><br><span class="fx-i">VENTA(<u>nro_venta</u>, <u>cod_producto</u>, fecha, rut_cliente, nombre_cliente, prevision, cod_local, direccion_local, comuna_local, nombre_producto, precio_unitario, laboratorio, cantidad, nro_receta, rut_medico, nombre_medico, especialidad_medico)</span><br><br>Reglas del negocio: una venta ocurre en un local y la hace un cliente. Una venta incluye varios productos, y de cada uno se registra la cantidad. Cada producto lo fabrica un laboratorio y tiene un precio de lista. Una venta con receta referencia una receta, emitida por un médico. Un médico tiene una especialidad. Una receta puede amparar varias ventas.<br><br><b>(a)</b> Escriba las dependencias funcionales.<br><b>(b)</b> Diagnostique la forma normal y nombre las dependencias que la rompen.<br><b>(c)</b> Normalice hasta 3FN indicando PK y FK.<br><b>(d)</b> Requisito nuevo: ahora una misma venta puede incluir el mismo producto con dos precios distintos, porque parte va con cobertura de convenio y parte sin. ¿Qué cambia?',
    a:`<b>(a) Las dependencias funcionales</b><br><br>
    <span class="fx-i">nro_venta → fecha, rut_cliente, cod_local, nro_receta</span><br>
    <span class="fx-i">rut_cliente → nombre_cliente, prevision</span><br>
    <span class="fx-i">cod_local → direccion_local, comuna_local</span><br>
    <span class="fx-i">cod_producto → nombre_producto, precio_unitario, laboratorio</span><br>
    <span class="fx-i">nro_receta → rut_medico</span><br>
    <span class="fx-i">rut_medico → nombre_medico, especialidad_medico</span><br>
    <span class="fx-i">{nro_venta, cod_producto} → cantidad</span><br><br>

    <b>(b) Diagnóstico</b><br><br>
    Está en <b>1FN</b> (los valores son atómicos) y <b>falla 2FN</b>.<br><br>
    <b>Dependencias parciales</b> — dependen solo de nro_venta, que es una parte de la PK {nro_venta, cod_producto}: fecha, rut_cliente, cod_local, nro_receta.<br>
    Y solo de cod_producto: nombre_producto, precio_unitario, laboratorio.<br><br>
    <b>Dependencias transitivas</b> — un no-clave determinando a otro no-clave: rut_cliente → nombre_cliente y prevision · cod_local → direccion y comuna · nro_receta → rut_medico · rut_medico → nombre y especialidad.<br><br>
    El único atributo bien puesto es <b>cantidad</b>, que sí depende de la clave completa.<br><br>

    <b>(c) Normalizado a 3FN</b><br><br>
    <span class="fx-i">CLIENTE(<u>rut_cliente</u>, nombre_cliente, prevision)</span><br>
    <span class="fx-i">LOCAL(<u>cod_local</u>, direccion_local, comuna_local)</span><br>
    <span class="fx-i">LABORATORIO(<u>laboratorio</u>)</span> <i>— opcional, ver nota</i><br>
    <span class="fx-i">PRODUCTO(<u>cod_producto</u>, nombre_producto, precio_unitario, laboratorio)</span><br>
    <span class="fx-i">MEDICO(<u>rut_medico</u>, nombre_medico, especialidad_medico)</span><br>
    <span class="fx-i">RECETA(<u>nro_receta</u>, rut_medico)</span> — FK → MEDICO<br>
    <span class="fx-i">VENTA(<u>nro_venta</u>, fecha, rut_cliente, cod_local, nro_receta)</span> — FK a CLIENTE, LOCAL y RECETA; nro_receta <b>nullable</b><br>
    <span class="fx-i">DETALLE(<u>nro_venta</u>, <u>cod_producto</u>, cantidad)</span> — FK a VENTA y PRODUCTO<br><br>
    <b>Notas de criterio:</b><br>
    • <i>nro_receta es nullable</i> porque no toda venta lleva receta ("una venta <b>con receta</b> referencia una receta"). Participación opcional.<br>
    • <i>LABORATORIO como tabla propia</i> solo se justifica si hubiera atributos del laboratorio que guardar. Con el enunciado tal cual, dejar el nombre como columna de PRODUCTO está bien y la separación sería sobre-normalizar — exactamente lo que el profe advierte con "no se trata de crear más tablas".<br>
    • "Una receta puede amparar varias ventas" confirma que RECETA es tabla aparte con relación 1:N hacia VENTA, y no un atributo de la venta.<br><br>

    <b>(d) El requisito nuevo</b><br><br>
    Ahora el mismo producto puede aparecer dos veces en una venta, con distinto precio según haya convenio. Con la PK actual {nro_venta, cod_producto} esas dos filas <b>colisionan</b>.<br><br>
    <span class="fx-i">DETALLE(<u>nro_venta</u>, <u>cod_producto</u>, <u>con_convenio</u>, cantidad, precio_cobrado)</span><br><br>
    Dos cambios, y los dos hay que justificarlos:<br><br>
    <b>1. con_convenio entra a la PK.</b> Es lo que distingue las dos líneas. Misma lógica que el id_taller del ejercicio del profe: cuando un requisito dice "el mismo X puede repetirse según Y", Y entra a la clave.<br><br>
    <b>2. Aparece precio_cobrado en DETALLE</b>, distinto del precio_unitario de PRODUCTO. Esto <b>no</b> es una violación de 3FN aunque lo parezca: son dos hechos diferentes. <i>precio_unitario</i> es el precio de lista vigente del producto; <i>precio_cobrado</i> es lo que efectivamente se cobró en esa línea. Depende de la clave completa nueva.<br><br>
    Es el mismo criterio de la boleta histórica: guardar el precio al momento de la venta es <b>desnormalización deliberada y justificada</b>, porque los precios de lista cambian y el documento histórico no debe alterarse. Distinto de no saber normalizar — y conviene decirlo así en la justificación, porque demuestra que distingues los dos casos.`}
  ]
 },
 {
  t:'Pauta de autocorrección',
  h:`<p>Después de cada simulacro, córrete con esta pauta antes de leer la solución completa. Puntúa sobre 12, como el profe.</p>
  <table class="tb"><tr><th>Criterio</th><th>Puntos</th><th>Se pierde cuando…</th></tr>
  <tr><td>Identificó todas las entidades</td><td>2</td><td>faltó alguna, o creó una que no existe</td></tr>
  <tr><td>PK correctas, incluidas las compuestas</td><td>3</td><td>usó clave simple donde el enunciado da compuesta, o no vio la entidad débil</td></tr>
  <tr><td>FK correctas y bien ubicadas</td><td>3</td><td>FK en el lado 1 de un 1:N, o FK compuesta partida en varias</td></tr>
  <tr><td>Atributos en la tabla correcta</td><td>2</td><td>guardó un derivado, o dejó un atributo de vínculo en un lado</td></tr>
  <tr><td>Está efectivamente en 3FN</td><td>2</td><td>quedó una transitiva sin separar</td></tr></table>
  <p><b>Lectura del puntaje:</b></p>
  <ul>
  <li><b>10-12</b> — estás listo. Repite un simulacro más para consolidar la velocidad.</li>
  <li><b>7-9</b> — el método lo tienes, fallas en detalles. Vuelve a la sección de errores frecuentes del repaso y haz el otro simulacro.</li>
  <li><b>menos de 7</b> — vuelve a las guías de Modelo Relacional y Formas Normales antes de seguir simulando. Simular sin base solo repite el error.</li>
  </ul>
  <p><b>Lo que casi nadie hace y vale la pena:</b> anota <i>por qué</i> te equivocaste, no solo <i>en qué</i>. "Se me pasó el derivado" y "no entendí que era entidad débil" se arreglan de maneras distintas: lo primero con un checklist de salida, lo segundo volviendo a la teoría.</p>`
 }
 ]
}

,

/* ---- BD · SQL2 · SELECT ---- */
{
 id:'bd-sql2', ramo:'bd', tag:'Semana 6', sem:6,
 titulo:'SQL2 · SELECT',
 bajada:'Consultar datos: WHERE, ORDER BY, agregación y GROUP BY. Para el quiz online BD-SQL2-1 del 9 de septiembre.',
 min:50,
 secciones:[
 {
  t:'Dónde estamos parados',
  h:`<p>SQL1 fue <b>estructura y datos</b>: crear tablas, meter filas, modificarlas. SQL2 es <b>preguntar</b>.</p>
  <table class="tb"><tr><th></th><th>Qué hace</th><th>Comandos</th></tr>
  <tr><td><b>DDL</b></td><td>define la estructura</td><td>CREATE, ALTER, DROP</td></tr>
  <tr><td><b>DML</b></td><td>mueve los datos</td><td>INSERT, UPDATE, DELETE</td></tr>
  <tr><td><b>DQL</b></td><td><b>consulta</b> los datos</td><td><b>SELECT</b> ← acá estamos</td></tr></table>
  <p>Y ojo con el alcance del temario: <b>SQL2 es SELECT sobre una tabla</b> más agregación. Los SELECT anidados son SQL3 y los JOIN son SQL4, con entregas el 23 de septiembre. Si en el quiz aparece un JOIN, es de arrastre, no el foco.</p>
  <p>Todos los ejemplos usan estas tablas:</p>
  <table class="tb"><tr><th>ALUMNO</th><th>INSCRIPCION</th></tr>
  <tr><td>rut, nombre, carrera, ingreso</td><td>rut, cod, nota, semestre</td></tr></table>`,
  ojo:'SELECT es el único comando que NO modifica nada. Puedes equivocarte todas las veces que quieras sin romper la base — al revés de UPDATE y DELETE. Eso lo hace el lugar seguro para experimentar, y explica por qué es donde más se pregunta.'
 },
 {
  t:'La estructura completa, en orden',
  h:`<p>Un SELECT tiene seis cláusulas y <b>el orden en que se escriben es obligatorio</b>:</p>
  <div class="fx">SELECT&nbsp;&nbsp;&nbsp;columnas<br>
  FROM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tabla<br>
  WHERE&nbsp;&nbsp;&nbsp;&nbsp;condición de filas<br>
  GROUP BY&nbsp;columnas de agrupación<br>
  HAVING&nbsp;&nbsp;&nbsp;condición de grupos<br>
  ORDER BY&nbsp;columnas de orden</div>
  <p>Pero <b>el motor las ejecuta en otro orden</b>, y entender esto resuelve la mitad de las preguntas del quiz:</p>
  <p class="fx">FROM → WHERE → GROUP BY → HAVING → <b>SELECT</b> → ORDER BY</p>
  <p>Fíjate dónde queda SELECT: <b>casi al final</b>. De ahí salen dos consecuencias que se preguntan siempre:</p>
  <ul>
  <li>En <b>WHERE no puedes usar un alias</b> definido en el SELECT — cuando WHERE corre, el SELECT todavía no se ejecutó y el alias no existe.</li>
  <li>En <b>ORDER BY sí puedes</b>, porque va después.</li>
  </ul>`,
  ojo:'Esa diferencia parece un capricho hasta que miras el orden de ejecución. No la memorices como regla suelta: memoriza la secuencia FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY y todas las reglas de este tipo se deducen solas.'
 },
 {
  t:'SELECT y WHERE',
  h:`<p><b>Lo básico:</b></p>
  <div class="fx">SELECT nombre, carrera FROM Alumno;<br>
  SELECT * FROM Alumno;&nbsp;&nbsp;<i>— todas las columnas</i><br>
  SELECT DISTINCT carrera FROM Alumno;&nbsp;&nbsp;<i>— sin repetir</i></div>
  <p><b>DISTINCT</b> es importante: a diferencia del álgebra relacional, donde π elimina duplicados <b>sola</b>, en SQL los duplicados <b>se quedan</b> salvo que pidas DISTINCT. Es la diferencia entre trabajar con conjuntos y con multiconjuntos, y es pregunta segura.</p>
  <p><b>Los operadores del WHERE:</b></p>
  <table class="tb"><tr><th>Operador</th><th>Ejemplo</th><th>Qué hace</th></tr>
  <tr><td>= ≠ &lt; &gt; &lt;= &gt;=</td><td>nota &gt;= 4</td><td>comparación (en SQL el "distinto" es &lt;&gt; o !=)</td></tr>
  <tr><td><b>BETWEEN</b></td><td>nota BETWEEN 4 AND 5</td><td>rango, <b>incluye ambos extremos</b></td></tr>
  <tr><td><b>IN</b></td><td>carrera IN ('Industrial','Civil')</td><td>pertenece a la lista</td></tr>
  <tr><td><b>LIKE</b></td><td>nombre LIKE 'A%'</td><td>patrón de texto</td></tr>
  <tr><td><b>IS NULL</b></td><td>nota IS NULL</td><td>el único modo de preguntar por nulo</td></tr>
  <tr><td>AND OR NOT</td><td>a &gt; 1 AND b &lt; 2</td><td>combinan condiciones</td></tr></table>
  <p><b>Los comodines de LIKE:</b> <code>%</code> es "cualquier cantidad de caracteres, incluso ninguno" y <code>_</code> es "exactamente un carácter".</p>
  <div class="fx">'A%' → empieza con A &nbsp;·&nbsp; '%z' → termina en z<br>'%ana%' → contiene ana &nbsp;·&nbsp; '_a%' → la segunda letra es a</div>`,
  ojo:'BETWEEN incluye los dos extremos: nota BETWEEN 4 AND 5 sí toma el 4,0 y el 5,0. Si en el quiz piden "mayor que 4", BETWEEN 4 AND 5 está mal — ahí va nota > 4 AND nota <= 5. Es un error de un solo carácter que cuesta la pregunta completa.'
 },
 {
  t:'Alias y ORDER BY',
  h:`<p><b>Alias con AS</b> — le cambia el nombre a una columna en el resultado:</p>
  <div class="fx">SELECT nombre AS estudiante, nota * 10 AS puntaje<br>FROM Inscripcion;</div>
  <p>Sirve sobre todo para nombrar columnas calculadas, que sin alias salen con un nombre feo o vacío.</p>
  <p><b>ORDER BY</b> — ordena el resultado:</p>
  <div class="fx">SELECT nombre, nota FROM Inscripcion<br>ORDER BY nota DESC, nombre ASC;</div>
  <ul>
  <li><b>ASC</b> ascendente (es el valor por defecto, se puede omitir)</li>
  <li><b>DESC</b> descendente</li>
  <li>Con varias columnas, ordena por la primera y usa la segunda para desempatar</li>
  </ul>
  <p><b>LIMIT</b> corta el resultado, y se usa casi siempre pegado a ORDER BY:</p>
  <div class="fx">SELECT nombre, nota FROM Inscripcion<br>ORDER BY nota DESC<br>LIMIT 3;&nbsp;&nbsp;<i>— las tres mejores notas</i></div>
  <p>Sin ORDER BY, LIMIT te da tres filas cualesquiera: en una tabla el orden no está garantizado.</p>`
 },
 {
  t:'Funciones de agregación',
  h:`<p>Colapsan muchas filas en <b>un solo valor</b>.</p>
  <table class="tb"><tr><th>Función</th><th>Qué devuelve</th></tr>
  <tr><td><b>COUNT</b></td><td>cuántas filas</td></tr>
  <tr><td><b>SUM</b></td><td>la suma</td></tr>
  <tr><td><b>AVG</b></td><td>el promedio</td></tr>
  <tr><td><b>MIN</b> / <b>MAX</b></td><td>el menor / el mayor</td></tr></table>
  <div class="fx">SELECT COUNT(*) AS total,<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AVG(nota) AS promedio,<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAX(nota) AS mejor<br>FROM Inscripcion;</div>
  <p><b>La distinción que más cae en el quiz:</b></p>
  <table class="tb"><tr><th>Forma</th><th>Cuenta</th></tr>
  <tr><td><b>COUNT(*)</b></td><td><b>todas</b> las filas, nulos incluidos</td></tr>
  <tr><td><b>COUNT(nota)</b></td><td>solo las filas donde nota <b>NO es nula</b></td></tr>
  <tr><td><b>COUNT(DISTINCT cod)</b></td><td>cuántos valores <b>distintos</b> de cod hay</td></tr></table>
  <p><b>Ejemplo concreto.</b> Si hay 10 inscripciones y 3 tienen la nota en NULL:</p>
  <div class="fx">COUNT(*) → 10 &nbsp;·&nbsp; COUNT(nota) → 7</div>
  <p>Y lo mismo con las demás: <b>AVG, SUM, MIN y MAX ignoran los nulos</b>. Por eso AVG(nota) del ejemplo divide por 7, no por 10 — que casi nunca es lo que la gente asume.</p>`,
  ojo:'No puedes mezclar una columna suelta con una función de agregación sin GROUP BY. "SELECT nombre, COUNT(*) FROM Alumno;" es un error: COUNT(*) devuelve un valor y nombre devuelve muchos, así que no calzan. O agrupas, o pides solo agregados.'
 },
 {
  t:'GROUP BY y HAVING',
  h:`<p><b>GROUP BY</b> parte la tabla en grupos y aplica la agregación <b>a cada grupo por separado</b>.</p>
  <div class="fx">SELECT carrera, COUNT(*) AS cuantos<br>FROM Alumno<br>GROUP BY carrera;</div>
  <p>En vez de un número total, te da un número <b>por carrera</b>.</p>
  <p><b>La regla de oro:</b> todo lo que aparece en el SELECT y no está dentro de una función de agregación <b>tiene que estar en el GROUP BY</b>.</p>
  <div class="fx">✓ SELECT carrera, COUNT(*) … GROUP BY carrera<br>
  ✗ SELECT carrera, nombre, COUNT(*) … GROUP BY carrera</div>
  <p>El segundo falla porque dentro de un grupo hay muchos nombres y el motor no sabe cuál mostrar.</p>
  <p><b>HAVING</b> filtra <b>grupos</b>, igual que WHERE filtra filas:</p>
  <div class="fx">SELECT carrera, COUNT(*) AS cuantos<br>FROM Alumno<br>GROUP BY carrera<br>HAVING COUNT(*) &gt;= 10;</div>
  <p><b>WHERE vs HAVING</b> — la pregunta clásica del quiz:</p>
  <table class="tb"><tr><th></th><th>Filtra</th><th>Cuándo corre</th><th>¿Puede usar COUNT/AVG?</th></tr>
  <tr><td><b>WHERE</b></td><td>filas</td><td><b>antes</b> de agrupar</td><td><b>no</b></td></tr>
  <tr><td><b>HAVING</b></td><td>grupos</td><td><b>después</b> de agrupar</td><td><b>sí</b></td></tr></table>
  <p><b>Las dos juntas en una consulta:</b></p>
  <div class="fx">SELECT cod, AVG(nota) AS promedio<br>
  FROM Inscripcion<br>
  WHERE semestre = '2026-2'&nbsp;&nbsp;<i>— filtra filas primero</i><br>
  GROUP BY cod<br>
  HAVING AVG(nota) &lt; 4&nbsp;&nbsp;<i>— filtra grupos después</i><br>
  ORDER BY promedio ASC;</div>
  <p>Se lee así: de las inscripciones de este semestre, agrupadas por ramo, muéstrame los ramos cuyo promedio es rojo, del peor hacia arriba.</p>`,
  ojo:'Si la condición se puede poner en WHERE, ponla en WHERE. Filtrar antes de agrupar es más barato: el motor arma menos grupos. HAVING es solo para lo que no se puede saber hasta después de agrupar, o sea, condiciones sobre COUNT, SUM, AVG, MIN o MAX.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Escribe: nombre y carrera de los alumnos que ingresaron entre 2022 y 2024, ordenados por carrera y dentro de cada carrera por nombre.',
    a:`<div class="fx">SELECT nombre, carrera<br>FROM Alumno<br>WHERE ingreso BETWEEN 2022 AND 2024<br>ORDER BY carrera, nombre;</div>
    <b>Los detalles:</b><br>
    • BETWEEN <b>incluye</b> 2022 y 2024. Si el enunciado dijera "después de 2022", habría que usar ingreso > 2022.<br>
    • En ORDER BY, la segunda columna desempata dentro de la primera. Ese es exactamente el "dentro de cada carrera".<br>
    • ASC es el default, así que no hace falta escribirlo.`},
   {q:'¿Cuál es la diferencia de resultado entre estas dos consultas, si la tabla tiene 20 inscripciones y 5 tienen nota nula?<br><br>SELECT COUNT(*) FROM Inscripcion;<br>SELECT COUNT(nota) FROM Inscripcion;',
    a:`<b>La primera devuelve 20. La segunda devuelve 15.</b><br><br>
    <b>COUNT(*)</b> cuenta filas, sin mirar el contenido. Las 20 existen, así que cuenta 20.<br><br>
    <b>COUNT(nota)</b> cuenta <b>valores no nulos</b> de esa columna. Los 5 nulos no son valores — son "no se sabe" — así que no entran.<br><br>
    <b>La consecuencia que casi nadie ve:</b> lo mismo pasa con AVG. <span class="fx-i">AVG(nota)</span> suma las 15 notas conocidas y divide <b>por 15</b>, no por 20. Si tú esperabas el promedio "sobre el total", el resultado te va a parecer alto y no vas a saber por qué.<br><br>
    Si quisieras tratar los nulos como cero tendrías que decirlo explícitamente con COALESCE(nota, 0), pero eso ya es otra cosa — y normalmente es un error conceptual: una nota que no existe no es un cero.`},
   {q:'Escribe: los ramos que tienen más de 30 inscritos este semestre, mostrando el código y la cantidad, del más masivo al menos masivo.',
    a:`<div class="fx">SELECT cod, COUNT(*) AS inscritos<br>
    FROM Inscripcion<br>
    WHERE semestre = '2026-2'<br>
    GROUP BY cod<br>
    HAVING COUNT(*) &gt; 30<br>
    ORDER BY inscritos DESC;</div>
    <b>Por qué cada cláusula está donde está:</b><br><br>
    <b>WHERE semestre</b> — es una condición sobre <b>filas</b> individuales y se puede evaluar antes de agrupar. Va en WHERE, que es más barato.<br><br>
    <b>HAVING COUNT(*) > 30</b> — "más de 30 inscritos" es una propiedad del <b>grupo</b>. Es imposible saberlo antes de agrupar, así que no puede ir en WHERE.<br><br>
    <b>ORDER BY inscritos</b> — acá sí se puede usar el alias, porque ORDER BY se ejecuta <b>después</b> del SELECT. Si intentaras <span class="fx-i">WHERE inscritos > 30</span> daría error: cuando WHERE corre, ese alias todavía no existe.<br><br>
    <b>Si te lo preguntan al revés:</b> "los ramos con menos de 5 inscritos" es el mismo esquema con HAVING COUNT(*) < 5. Lo que nunca cambia es que la condición sobre el conteo va en HAVING.`},
   {q:'Esta consulta da error. ¿Por qué, y cómo se arregla?<br><br>SELECT carrera, nombre, AVG(ingreso)<br>FROM Alumno<br>GROUP BY carrera;',
    a:`<b>El error:</b> <i>nombre</i> está en el SELECT pero no está en el GROUP BY ni dentro de una función de agregación.<br><br>
    <b>Por qué es un error de verdad y no una manía del motor.</b> Al agrupar por carrera, cada grupo junta muchos alumnos. Para ese grupo, AVG(ingreso) tiene un valor único — el promedio. Pero <i>nombre</i> tiene <b>doscientos valores distintos</b>, uno por alumno. ¿Cuál debería mostrar? No hay respuesta, así que el motor rechaza la consulta.<br><br>
    <b>Las tres formas de arreglarlo, según lo que quisieras:</b><br><br>
    <b>1. Si querías el promedio por carrera</b> — saca el nombre:<br>
    <span class="fx-i">SELECT carrera, AVG(ingreso) FROM Alumno GROUP BY carrera;</span><br><br>
    <b>2. Si querías el promedio por alumno dentro de la carrera</b> — agrega el nombre al GROUP BY:<br>
    <span class="fx-i">SELECT carrera, nombre, AVG(ingreso) FROM Alumno GROUP BY carrera, nombre;</span><br>
    (aunque acá el promedio de un solo alumno es su propio año de ingreso, así que probablemente no era eso)<br><br>
    <b>3. Si querías un nombre cualquiera del grupo</b> — envuélvelo en una agregación:<br>
    <span class="fx-i">SELECT carrera, MIN(nombre), AVG(ingreso) FROM Alumno GROUP BY carrera;</span><br><br>
    <b>La regla para el quiz, en una línea:</b> todo lo del SELECT o está en el GROUP BY, o está dentro de una función de agregación. Sin excepciones.`}
  ]
 }
 ]
}

,

/* ---- BD · PREGUNTA 1 DE LOS EXÁMENES ---- */
{
 id:'bd-exam', ramo:'bd', tag:'C1 · práctica', sem:5,
 titulo:'Pregunta 1 de los exámenes',
 bajada:'Los ocho enunciados reales del compilado del profe, con su pauta oficial. Es lo que él mismo recomendó practicar para el C1.',
 min:120,
 secciones:[
 {
  t:'Cómo se responde: el formato exacto',
  h:`<p>La Pregunta 1 vale <b>30%</b> y siempre pide lo mismo. La respuesta <b>no es un diagrama</b>: es una lista de relaciones.</p>
  <div class="fx">Cliente(<u>rut</u>, nombre, email, telefono)<br>
  Sede(<u>id</u>, nombre, comuna)<br>
  Sala(<u>id</u>, nombre, capacidad, <i>sede_id</i>)<br>
  Reserva(<u>id</u>, fecha, hora_inicio, hora_fin, estado, <i>cliente_rut</i>, <i>sala_id</i>)<br>
  ReservaEjecutivo(<u><i>reserva_id</i></u>, <u><i>ejecutivo_rut</i></u>)</div>
  <p><b>Subrayado = PK · cursiva = FK.</b> Y conviene cerrar con la nota que el profe pone en sus propias pautas:</p>
  <p class="fx">"Los atributos subrayados son claves primarias y los que están<br>en cursiva son claves foráneas."</p>
  <p>Escribir esa línea te cuesta 10 segundos y elimina cualquier ambigüedad al corregir.</p>
  <p><b>Cómo se corrige</b> (pauta textual del examen 2022, se parte con 6 puntos):</p>
  <table class="tb"><tr><th>Situación</th><th>Descuento</th></tr>
  <tr><td>Falta una relación</td><td><b>−1</b></td></tr>
  <tr><td>Falta un atributo</td><td>−0,5</td></tr>
  <tr><td><b>Sobra un atributo que tiene sentido</b></td><td><b>no descuenta</b></td></tr>
  <tr><td>No está en 3NF</td><td>−1</td></tr></table>
  <p>Nota final de la pregunta = <b>1 + puntaje</b>. Seis puntos limpios es un 7.</p>`,
  ojo:'La asimetría de la pauta define la táctica: un atributo de más que tiene sentido cuesta CERO, uno de menos cuesta 0,5, y una tabla de menos cuesta 1. Ante la duda, incluye. Ante la duda entre separar o no separar, separa.'
 },
 {
  t:'El párrafo de verificación 3NF que el profe acepta',
  h:`<p>Gabo, esto responde tu duda exacta. En la pauta del examen del coworking, el profe escribe él mismo la verificación. Es la redacción modelo:</p>
  <p class="fx">"Cada atributo no clave depende únicamente de la PK completa de su tabla.<br>
  No hay dependencias parciales (las tablas con PK simple no pueden tenerlas).<br>
  No hay dependencias transitivas (ningún atributo no clave<br>depende de otro atributo no clave)."</p>
  <p><b>Tu versión estaba bien encaminada.</b> Dijiste que los atributos dependen de la clave primaria y no entre sí — eso es exactamente el corazón del asunto. Lo que faltaba es separarlo en las dos mitades, porque son dos condiciones distintas:</p>
  <table class="tb"><tr><th></th><th>Qué prohíbe</th><th>Se llama</th></tr>
  <tr><td><b>2FN</b></td><td>depender de un <b>pedazo</b> de la PK</td><td>dependencia parcial</td></tr>
  <tr><td><b>3FN</b></td><td>depender de <b>otro atributo no clave</b></td><td>dependencia transitiva</td></tr></table>
  <p><b>Y el atajo que el profe usa en su propia pauta:</b> "las tablas con PK simple no pueden tener dependencias parciales". Si tu tabla tiene clave de un solo atributo, la 2FN está garantizada — no puedes depender de un pedazo de algo que no tiene pedazos.</p>
  <p><b>Cómo usarlo en el control:</b> al final de tu modelo, escribe dos o tres líneas con esa misma estructura. Recorre tus tablas y di: las de PK simple no pueden tener parciales; las de PK compuesta las revisé una por una; y ningún atributo descriptivo determina a otro. Eso protege el punto que se descuenta por "no está en 3NF".</p>`,
  ojo:'No basta con que tu modelo ESTÉ en 3NF: conviene decir que lo está y por qué. El profe descuenta 1 punto por no estar en 3NF, y una verificación escrita de tres líneas es la evidencia más barata de que sí revisaste.'
 },
 {
  t:'Los ocho enunciados reales',
  h:`<p>Están ordenados de más simple a más complejo. <b>Resuélvelos en papel antes de abrir la solución.</b> Cada uno debería tomarte entre 20 y 35 minutos.</p>
  <p>Si tienes poco tiempo, haz el <b>4 (bibliotecas)</b> y el <b>8 (coworking)</b>: el primero tiene la jerarquía libro→copia que es la trampa más elegante, y el segundo es el más reciente y trae la verificación 3NF completa.</p>`,
  ej:[
   {q:'<b>EXAMEN 2022 · QUIZZES ONLINE.</b> Modele los quizzes que deben hacer los alumnos. Los quizzes se completan por un sitio web, quedando disponibles en una fecha y hora determinada, y se cierran en otra fecha y hora definida previamente. Cada quiz está formado por una serie de preguntas, y cada una tiene un conjunto de alternativas, únicas para cada pregunta. Tanto preguntas como alternativas son solo de texto, y cada pregunta tiene sólo una alternativa correcta. Los alumnos se identifican con rut, nombre y apellido, y contestan el quiz una sola vez eligiendo una alternativa para cada pregunta.',
    a:`<b>Solución oficial (alternativa 1):</b><br>
    <span class="fx-i">Alumno(<u>rut</u>, nombre, apellido)</span><br>
    <span class="fx-i">Quiz(<u>nombre</u>, fecha_inicio, fecha_fin)</span><br>
    <span class="fx-i">Pregunta(<u>id</u>, <i>quiz</i>, texto)</span><br>
    <span class="fx-i">Alternativa(<u>id</u>, <i>pregunta</i>, texto, correcta)</span><br>
    <span class="fx-i">Respuesta(<u><i>rut</i></u>, <u><i>alternativa</i></u>)</span><br><br>
    <b>Alternativa 2, también aceptada:</b> poner <i>alternativa_correcta</i> como FK dentro de Pregunta, y dejar Alternativa sin el booleano.<br><br>
    <b>Que existan DOS soluciones oficiales es el dato más importante de todo el compilado.</b> No tienes que adivinar el modelo exacto del profe: tienes que ser coherente y representar los hechos.<br><br>
    <b>La cadena jerárquica:</b> Quiz → Pregunta → Alternativa. Cada nivel lleva la FK del anterior. Es el mismo patrón de Sede→Sala y Libro→Copia en otros exámenes.<br><br>
    <b>Respuesta es la N:M</b> entre Alumno y Alternativa. Fíjate que basta {rut, alternativa} como PK porque "contestan el quiz una sola vez" — si pudieran responder varias veces, harían falta más atributos en la clave.`},

   {q:'<b>CLÍNICA DENTAL.</b> Modele la gestión de citas. Las citas se programan por un sitio web y están disponibles en una fecha y hora específica. Cada cita tiene un dentista asignado y un conjunto de tratamientos a realizarse, que pueden ser de distintos tipos (limpieza, empaste, extracción). Pacientes y dentistas se identifican con rut, nombre y apellido. Los tratamientos tienen identificador, descripción y valor. El valor de la cita se calcula como el valor de la consulta (tratamiento básico) más los tratamientos realizados.',
    a:`<b>Solución oficial:</b><br>
    <span class="fx-i">Paciente(<u>rut</u>, nombre, apellido)</span><br>
    <span class="fx-i">Dentista(<u>rut</u>, nombre, apellido)</span><br>
    <span class="fx-i">Tratamiento(<u>id</u>, descripcion, valor)</span><br>
    <span class="fx-i">Cita(<u>id</u>, <i>rut_paciente</i>, <i>rut_dentista</i>, fecha, hora, valor_total)</span><br>
    <span class="fx-i">CitaTratamiento(<u><i>id_cita</i></u>, <u><i>id_tratamiento</i></u>)</span><br><br>
    <b>Dos tablas separadas para Paciente y Dentista</b>, aunque tengan los mismos atributos. Acá el enunciado no dice que una persona pueda ser ambas cosas, así que separarlas está bien. <i>Ojo con el contraste:</i> en el ejercicio de la editorial de la clase 03, el enunciado sí decía "almacene cada académico una sola vez" — ahí habría sido un error separar. <b>Lee siempre esa frase.</b><br><br>
    <b>El detalle discutible:</b> valor_total en Cita es un <b>atributo derivado</b> — el enunciado dice que "se calcula como". En rigor no debería almacenarse. Pero la pauta lo acepta, y además es defendible: es el valor cobrado en ese momento, que no debe cambiar si mañana suben los precios. Es el mismo criterio de la boleta histórica.<br><br>
    Si lo omites, tampoco pierdes: recuerda que un atributo que falta cuesta 0,5 y uno que sobra con sentido cuesta 0. <b>Ponlo.</b>`},

   {q:'<b>TIENDA DE VIDEOJUEGOS.</b> Una empresa requiere organizar su catálogo en línea. Cada videojuego se identifica por un código único y tiene título, género y precio. Se mantienen datos de los clientes: identificación única, nombre y correo. Se desea registrar las compras realizadas, cada una con identificador único, fecha y el cliente que la efectuó. Los clientes pueden generar múltiples compras y cada compra puede incluir varios videojuegos. Se desea además rastrear las compañías desarrolladoras, identificadas por ID único, nombre y país de origen.',
    a:`<b>Solución oficial:</b><br>
    <span class="fx-i">Cliente(<u>id</u>, nombre, email)</span><br>
    <span class="fx-i">Videojuego(<u>codigo</u>, titulo, genero, precio, <i>desarrollador_id</i>)</span><br>
    <span class="fx-i">Desarrolladora(<u>id</u>, nombre, pais)</span><br>
    <span class="fx-i">Compra(<u>id</u>, fecha, <i>cliente_id</i>)</span><br>
    <span class="fx-i">DetalleCompra(<u><i>compra_id</i></u>, <u><i>videojuego_codigo</i></u>)</span><br><br>
    <b>Este es el esqueleto puro del patrón:</b> actor (Cliente) + recurso (Videojuego) + transacción (Compra) + tabla intermedia (DetalleCompra). Si te aprendes este de memoria, reconoces el 70% de los enunciados.<br><br>
    <b>Desarrolladora es 1:N hacia Videojuego</b> → FK en el lado N. Un error frecuente es meter nombre_desarrolladora y pais dentro de Videojuego: eso daría <span class="fx-i">desarrollador_id → pais</span>, transitiva, y falla 3NF.<br><br>
    <b>Nota:</b> DetalleCompra no tiene atributos propios acá. En un caso real llevaría cantidad y precio_al_momento. Si los agregas no te descuentan — tienen sentido.`},

   {q:'<b>RED DE BIBLIOTECAS.</b> Cada libro del catálogo tiene ISBN único, título, año de publicación y está asociado a uno o varios autores. Cada autor tiene ID único, nombre y nacionalidad. Los usuarios tienen ID único, nombre y correo. Se requiere registrar los préstamos: cada uno con identificador único, fecha de préstamo, fecha de devolución, el libro (copia) prestado y el usuario que lo realizó. Un libro puede tener múltiples copias, cada una con número de serie único y su estado (disponible, prestado, en mantenimiento). <b>Es importante registrar qué copia específica del libro fue prestada en cada préstamo.</b>',
    a:`<b>Solución oficial:</b><br>
    <span class="fx-i">Libro(<u>ISBN</u>, titulo, anio_publicacion)</span><br>
    <span class="fx-i">Autor(<u>id</u>, nombre, nacionalidad)</span><br>
    <span class="fx-i">LibroAutor(<u><i>libro_ISBN</i></u>, <u><i>autor_id</i></u>)</span><br>
    <span class="fx-i">Usuario(<u>id</u>, nombre, email)</span><br>
    <span class="fx-i">Copia(<u>numero_serie</u>, estado, <i>libro_ISBN</i>)</span><br>
    <span class="fx-i">Prestamo(<u>id</u>, fecha_prestamo, fecha_devolucion, <i>copia_numero_serie</i>, <i>usuario_id</i>)</span><br><br>
    <b>La distinción Libro vs Copia es el corazón del ejercicio</b>, y el enunciado la subraya: "es importante registrar qué copia específica fue prestada".<br><br>
    <b>Libro</b> es la obra: el ISBN, el título, el año. <b>Copia</b> es el objeto físico en el estante, con su número de serie y su estado.<br><br>
    <b>Por qué importa:</b> si el préstamo apuntara al ISBN, no sabrías cuál de los cinco ejemplares se llevó el usuario, ni podrías marcar uno como "en mantenimiento" sin marcarlos todos. El estado es de la copia, no de la obra.<br><br>
    <b>Es el mismo patrón que Sede→Sala o Quiz→Pregunta:</b> una entidad "tipo" y una entidad "instancia". Cuando el enunciado hable de "ejemplares", "unidades", "instancias" o dé un atributo que solo tiene sentido para el objeto físico (estado, ubicación), separa.<br><br>
    <b>LibroAutor</b> es la N:M: "asociado a uno o varios autores" y un autor escribe varios libros.`},

   {q:'<b>ALQUILER DE VEHÍCULOS.</b> Cada vehículo posee número de registro único, marca, modelo, año de fabricación, tipo (sedán, SUV, camión), precio por día y estado (disponible, alquilado, en mantenimiento). Los clientes tienen ID único, nombre, dirección y teléfono. Cada alquiler debe incluir fecha de inicio, fecha de fin, el vehículo alquilado y el cliente. <b>Un cliente no puede arrendar el mismo vehículo más de una vez en la misma fecha.</b> La empresa ofrece accesorios (sillas de auto, seguros, GPS) cada uno con su precio diario y descripción. Un alquiler puede incluir múltiples accesorios y es esencial registrar qué accesorios fueron alquilados con cada vehículo.',
    a:`<b>Solución oficial:</b><br>
    <span class="fx-i">Vehiculo(<u>numero_registro</u>, marca, modelo, anio_fabricacion, tipo, precio)</span><br>
    <span class="fx-i">Cliente(<u>id</u>, nombre, direccion, telefono)</span><br>
    <span class="fx-i">Alquiler(<u>fecha_inicio</u>, fecha_fin, <u><i>vehiculo_numero_registro</i></u>, <u><i>cliente_id</i></u>)</span><br>
    <span class="fx-i">EstadoVehiculo(<u><i>vehiculo_numero_registro</i></u>, estado)</span><br>
    <span class="fx-i">Accesorio(<u>id</u>, nombre, descripcion, precio)</span><br>
    <span class="fx-i">AlquilerAccesorio(<u><i>alquiler_id</i></u>, <u><i>accesorio_id</i></u>)</span><br><br>
    <b>La frase que define la PK:</b> "un cliente no puede arrendar el mismo vehículo más de una vez en la misma fecha". Eso es el enunciado dictándote la clave primaria compuesta: <b>{fecha_inicio, vehiculo, cliente}</b>. Sin esa frase habrías puesto un id simple.<br><br>
    <b>Esta es la habilidad que más vale entrenar:</b> reconocer que una frase en castellano sobre lo que "no puede" pasar es una restricción de unicidad, y por lo tanto una clave.<br><br>
    <b>EstadoVehiculo separado</b> es una decisión discutible del profe — con un solo estado actual podría ir como columna de Vehiculo. Se justifica si quieres historial. <b>Cualquiera de las dos te la aceptan</b>, pero es un buen ejemplo de que el profe premia separar antes que juntar.<br><br>
    <b>Ojo con el desajuste:</b> la solución oficial usa <i>alquiler_id</i> en AlquilerAccesorio aunque Alquiler no tiene id simple. Es una inconsistencia del propio profe. Si te pasa algo así, lo coherente sería arrastrar las tres columnas — pero no te compliques: esto confirma que la corrección es por sentido, no al milímetro.`},

   {q:'<b>CLÍNICA DE SALUD INTEGRAL.</b> Los pacientes tienen rut, nombre, fecha de nacimiento, dirección y teléfono, y pueden asistir a múltiples consultas. Los médicos tienen rut, nombre y teléfono, y <b>pueden ejercer en una o varias áreas de especialización</b>; cada área puede incluir a distintos médicos. Las consultas se programan en fechas y horas específicas, están asociadas a un paciente, y <b>una misma consulta puede ser atendida por más de un médico</b>. Durante cada consulta se realizan procedimientos (exámenes, radiografías) con descripción y costo; hay que identificar cuáles se efectuaron en cada consulta para calcular el costo total. Diseñe un modelo relacional en 3NF.',
    a:`<b>Solución oficial:</b><br>
    <span class="fx-i">Paciente(<u>rut</u>, nombre, fecha_nacimiento, direccion, telefono)</span><br>
    <span class="fx-i">Medico(<u>rut</u>, nombre, telefono)</span><br>
    <span class="fx-i">Especialidad(<u>id</u>, nombre)</span><br>
    <span class="fx-i">MedicoEspecialidad(<u><i>medico_id</i></u>, <u><i>especialidad_id</i></u>)</span><br>
    <span class="fx-i">Consulta(<u>id</u>, fecha, hora, <i>paciente_id</i>)</span><br>
    <span class="fx-i">ConsultaMedico(<u><i>consulta_id</i></u>, <u><i>medico_id</i></u>)</span><br>
    <span class="fx-i">Procedimiento(<u>codigo</u>, descripcion, costo)</span><br>
    <span class="fx-i">ConsultaProcedimiento(<u><i>consulta_id</i></u>, <u><i>procedimiento_codigo</i></u>)</span><br><br>
    <b>Ocho tablas, TRES de ellas intermedias.</b> Este es el examen con más N:M y es donde más se pierde por tablas faltantes — a −1 cada una.<br><br>
    <b>Las tres frases que delatan cada N:M:</b><br>
    • "pueden ejercer en <b>una o varias</b> áreas" + "cada área puede incluir a <b>distintos</b> médicos" → MedicoEspecialidad<br>
    • "una misma consulta puede ser atendida por <b>más de un</b> médico" → ConsultaMedico<br>
    • "identificar cuáles procedimientos se efectuaron en <b>cada</b> consulta" → ConsultaProcedimiento<br><br>
    <b>La técnica para no perder ninguna:</b> antes de escribir, subraya todas las frases con "varios", "múltiples", "más de un", "uno o varias". <b>Cada una es una tabla.</b> Cuéntalas y verifica que tu modelo tenga esa cantidad de intermedias.<br><br>
    <b>El costo total NO se guarda.</b> El enunciado dice "para calcular el costo total" — es derivado, se suma desde ConsultaProcedimiento.`},

   {q:'<b>AEROLÍNEA ANDESAIR.</b> Se requiere identificar cada pasajero por su RUT, con nombre, correo y teléfono, y consultar cuántas veces ha volado. Registrar cada avión con identificador interno, modelo y capacidad total de asientos. Los vuelos se identifican por un código (como "AA123"), asociados a una fecha, hora de salida, un par de aeropuertos de origen y destino, y un avión específico. Cada vuelo cuenta con tripulación asignada (piloto, copiloto, jefe de cabina, tripulantes) de los que se quiere conocer identificador, nombre y rol; un vuelo tiene varios tripulantes y los tripulantes participan en varios vuelos. Los pasajeros realizan reservas: código o id, a qué pasajero corresponde, en qué vuelo viaja, cuándo se realizó, el asiento asignado ("12A") y el estado (PENDIENTE, CONFIRMADA, CANCELADA). Diseñe un modelo relacional en 3NF.',
    a:`<b>Solución oficial:</b><br>
    <span class="fx-i">Pasajero(<u>rut</u>, nombre, email, telefono)</span><br>
    <span class="fx-i">Avion(<u>id</u>, modelo, capacidad_total)</span><br>
    <span class="fx-i">Vuelo(<u>codigo</u>, fecha, hora_salida, origen, destino, <i>avion_id</i>)</span><br>
    <span class="fx-i">Tripulante(<u>rut</u>, nombre, telefono, rol)</span><br>
    <span class="fx-i">VueloTripulante(<u><i>vuelo_codigo</i></u>, <u><i>tripulante_id</i></u>)</span><br>
    <span class="fx-i">Reserva(<u>id</u>, fecha_reserva, estado, asiento, <i>pasajero_rut</i>, <i>vuelo_codigo</i>)</span><br><br>
    <b>"Consultar cuántas veces ha volado" es un derivado</b> — se cuenta desde Reserva. No va como columna de Pasajero. El enunciado lo camufla como si fuera un dato a guardar; es una consulta.<br><br>
    <b>Origen y destino como columnas simples.</b> El profe no creó tabla Aeropuerto acá, aunque sería más correcto. Si tú la creas y pones dos FK, <b>no te descuentan</b> — es una tabla de más que tiene sentido, y es mejor diseño. Es exactamente el caso donde la pauta te protege.<br><br>
    <b>El código de vuelo como PK</b> es discutible: "AA123" se repite todos los días. En rigor la PK debería ser {codigo, fecha}, como lo modelamos en el simulacro de la aerolínea. La solución del profe usa solo el código. <b>Ambas se aceptan</b>, pero si pones la compuesta, justifícala en una línea: "AA123 se repite cada día, así que el código solo no identifica un vuelo".<br><br>
    <b>Compara con nuestro simulacro grupal de aerolínea:</b> el nuestro era más estricto (aeropuertos como tabla, PK compuesta, FK de conexión). Si resolviste aquel, este te sale solo.`},

   {q:'<b>COWORKING NODOCOWORK.</b> Registrar cada cliente por su RUT, con nombre completo, correo y teléfono. Las sedes se identifican por un código numérico, con nombre comercial y comuna. Dentro de cada sede hay varias salas; cada sala tiene identificador propio, nombre descriptivo y capacidad máxima. Una sala pertenece a una sola sede y cada sede tiene muchas salas. Cuando un cliente desea usar una sala se genera una reserva con identificador único, fecha, hora de inicio, hora de término y estado (PENDIENTE, CONFIRMADA, FINALIZADA, CANCELADA). Cada reserva corresponde a un único cliente y a una única sala. Los ejecutivos de atención acompañan las reservas. Diseñe un modelo relacional en 3NF.',
    a:`<b>Solución oficial:</b><br>
    <span class="fx-i">Cliente(<u>rut</u>, nombre, email, telefono)</span><br>
    <span class="fx-i">Sede(<u>id</u>, nombre, comuna)</span><br>
    <span class="fx-i">Sala(<u>id</u>, nombre, capacidad, <i>sede_id</i>)</span><br>
    <span class="fx-i">Ejecutivo(<u>rut</u>, nombre, telefono)</span><br>
    <span class="fx-i">Reserva(<u>id</u>, fecha_reserva, hora_inicio, hora_fin, estado, <i>cliente_rut</i>, <i>sala_id</i>)</span><br>
    <span class="fx-i">ReservaEjecutivo(<u><i>reserva_id</i></u>, <u><i>ejecutivo_rut</i></u>)</span><br><br>
    <b>Y la verificación 3NF, textual del profe:</b><br>
    <i>"Cada atributo no clave depende únicamente de la PK completa de su tabla. No hay dependencias parciales (las tablas con PK simple no pueden tenerlas; ReservaEjecutivo no tiene atributos no clave). No hay dependencias transitivas (ningún atributo no clave depende de otro atributo no clave)."</i><br><br>
    <b>Copia esa estructura de párrafo en el control.</b> Tres frases: parciales, por qué no las hay, transitivas. Te cubre el punto que se descuenta por 3NF.<br><br>
    <b>Sede→Sala es 1:N</b>, no N:M. El enunciado lo dice explícito: "una sala pertenece a una sola sede". FK en Sala, sin tabla intermedia. <b>No todo lo que suena a jerarquía es N:M</b> — hay que leer la dirección.<br><br>
    <b>La trampa que evita el enunciado:</b> "atiende tanto a freelancers como a equipos de empresas, pero <b>para efectos del sistema todos se registran como clientes individuales</b>". Eso te está diciendo que NO hagas dos tablas. Es la misma clase de frase que "almacene cada académico una sola vez".`}
  ]
 },
 {
  t:'Checklist de 60 segundos antes de entregar',
  h:`<p>Recorre esto con tu hoja al lado. Cada punto corresponde a un descuento real de la pauta.</p>
  <ol>
  <li><b>¿Marqué PK y FK?</b> Subrayado y cursiva, más la nota que lo explica. Es gratis y evita ambigüedad.</li>
  <li><b>¿Conté las frases con "varios", "múltiples", "más de un"?</b> Cada una debería tener su tabla intermedia. Si el enunciado tiene tres y tu modelo tiene dos, falta una — y eso vale −1.</li>
  <li><b>¿Hay algún atributo derivado colado?</b> "Se calcula como", "cuántas veces", "el total de". Esos no se guardan… salvo que sea un valor histórico congelado, y entonces lo dejas y lo justificas.</li>
  <li><b>¿Cada FK apunta a una tabla que existe</b> y ahí ese campo es PK?</li>
  <li><b>¿Alguna frase dice qué NO puede pasar?</b> ("no puede arrendar dos veces el mismo…", "una sola vez", "como máximo uno"). Eso define una PK compuesta.</li>
  <li><b>¿Escribí las tres líneas de verificación 3NF?</b></li>
  <li><b>¿Algún atributo descriptivo repetido en dos tablas?</b> Si el nombre del cliente aparece en Cliente y en Reserva, sobra en Reserva.</li>
  </ol>
  <p class="fx">Prioridad si te queda poco tiempo:<br><b>que estén todas las tablas</b> (−1 c/u) → PK y FK → 3NF (−1 una sola vez)</p>`
 }
 ]
}

]);
