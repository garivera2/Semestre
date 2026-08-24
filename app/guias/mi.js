/* ============================================================
   GUÍAS · MICROECONOMÍA
   Material original escrito para Gabo siguiendo el temario del ramo.
   Para agregar una guía nueva: copia la estructura de una existente
   y agrégala al final del array, antes del ];
============================================================ */
window.GUIAS = (window.GUIAS || []).concat([

/* ---- MICROECONOMÍA ---- */
{
 id:'micro1', ramo:'mi', tag:'Unidad 1', sem:2,
 titulo:'Introducción a la Economía',
 bajada:'Los ocho conceptos base que el profe dijo que debes dominar antes de entrar a Teoría del Consumidor. NRC 591 y 3594.',
 min:70,
 secciones:[
 {
  t:'1 · Definición de mercado',
  h:`<p>Un <b>mercado</b> es el conjunto de compradores y vendedores que, a través de sus interacciones reales o potenciales, determinan el precio de un producto.</p>
  <p>Tres cosas que parecen obvias y en la prueba no lo son:</p>
  <ul>
  <li><b>No es un lugar físico.</b> Es una relación de intercambio. El mercado del dólar no está en ninguna parte y existe.</li>
  <li><b>"Potenciales" importa.</b> Un comprador que hoy no compra pero compraría a otro precio también forma parte del mercado. Por eso los precios reaccionan a gente que ni siquiera transó.</li>
  <li><b>La definición depende de dos fronteras:</b> la <i>extensión del producto</i> (¿el mercado es "bebidas" o "bebidas cola"?) y la <i>extensión geográfica</i> (¿Santiago o Chile?). Cambiar la frontera cambia quién es competencia.</li>
  </ul>
  <p>El criterio para trazar esas fronteras es la <b>sustituibilidad</b>: si al subir el precio de A la gente se cambia masivamente a B, entonces A y B están en el mismo mercado.</p>`,
  ojo:'Pregunta clásica de prueba: "¿el pan de una panadería de barrio compite con el de un supermercado a 20 km?". La respuesta depende de si los consumidores los consideran sustitutos, no de la distancia en sí. Argumenta desde la sustituibilidad y tienes el punto.'
 },
 {
  t:'2 · Mercado competitivo o de competencia perfecta',
  h:`<p>Es el modelo de referencia del curso: no describe la realidad, sino el caso ideal contra el cual se comparan los demás.</p>
  <p><b>Los cuatro supuestos:</b></p>
  <ol>
  <li><b>Muchos compradores y vendedores</b>, todos pequeños respecto al mercado</li>
  <li><b>Producto homogéneo</b>: el de un vendedor es indistinguible del de otro</li>
  <li><b>Información perfecta</b>: todos conocen precios y calidades</li>
  <li><b>Libre entrada y salida</b>: nadie tiene barreras para entrar o irse</li>
  </ol>
  <p>La consecuencia crítica de esos supuestos es que cada empresa es <b>tomadora de precios</b>: no puede influir en el precio, solo decide cuánto producir a ese precio dado.</p>
  <p>¿Por qué? Si sube su precio un peso, pierde <b>todos</b> sus clientes, porque el producto es idéntico al de los demás y todos lo saben. Y bajarlo no tiene sentido, porque puede vender todo lo que quiera al precio de mercado.</p>
  <p>Geométricamente: la empresa individual enfrenta una demanda <b>perfectamente elástica</b> (horizontal) al precio de mercado, aunque la demanda del mercado completo sí tenga pendiente negativa. Esos son dos gráficos distintos y confundirlos es un error típico.</p>`,
  ojo:'Que ningún supuesto se cumpla del todo en la vida real no invalida el modelo. Sirve como referencia: cuando estudies precio máximo o impuestos, la pérdida de eficiencia se mide justamente respecto a este caso ideal.'
 },
 {
  t:'3 · Demanda: movimientos sobre la curva vs desplazamientos',
  h:`<p>Este es <b>el</b> concepto donde más gente pierde puntos. Presta atención a la distinción.</p>
  <p>La <b>curva de demanda</b> relaciona el precio con la cantidad demandada, <i>manteniendo todo lo demás constante</i> (ceteris paribus). Tiene pendiente negativa: a mayor precio, menor cantidad.</p>
  <p class="fx">Q<sub>d</sub> = f( P ; ingreso, precios de otros bienes, gustos, expectativas, N° consumidores )</p>
  <p>Fíjate en el punto y coma. Lo que está antes del <i>;</i> genera movimientos <b>sobre</b> la curva. Lo que está después genera <b>desplazamientos</b> de la curva.</p>
  <table class="tb"><tr><th>Qué cambia</th><th>Qué pasa</th><th>Cómo se llama</th></tr>
  <tr><td>El precio del bien</td><td>Te mueves a otro punto de la <b>misma</b> curva</td><td>Cambio en la <b>cantidad demandada</b></td></tr>
  <tr><td>Cualquier otro determinante</td><td>La curva completa se corre</td><td>Cambio en la <b>demanda</b></td></tr></table>
  <p><b>Los otros determinantes, uno por uno:</b></p>
  <ul>
  <li><b>Ingreso:</b> si sube y la demanda aumenta, el bien es <i>normal</i>. Si sube y la demanda cae, es <i>inferior</i> (transporte público, marcas económicas).</li>
  <li><b>Precio de bienes relacionados:</b> si sube el precio del té y aumenta la demanda de café, son <i>sustitutos</i>. Si sube el precio de los autos y cae la demanda de bencina, son <i>complementarios</i>.</li>
  <li><b>Gustos y preferencias</b></li>
  <li><b>Expectativas:</b> si esperas que suba el precio mañana, compras más hoy.</li>
  <li><b>Número de consumidores</b></li>
  </ul>`,
  ojo:'La trampa clásica: "el precio del bien subió y por eso cayó la demanda". Está MAL dicho. Cayó la cantidad demandada. La demanda —la curva entera— no se movió. En una prueba esa precisión de lenguaje suele valer puntos.'
 },
 {
  t:'4 · Oferta: la misma lógica, al revés',
  h:`<p>La <b>curva de oferta</b> relaciona precio con cantidad ofrecida, ceteris paribus. Pendiente positiva: a mayor precio, más quieren producir los vendedores.</p>
  <p class="fx">Q<sub>s</sub> = f( P ; costos de insumos, tecnología, expectativas, N° vendedores )</p>
  <p>Vale exactamente la misma distinción: el precio del bien mueve <b>sobre</b> la curva; todo lo demás <b>desplaza</b> la curva.</p>
  <p><b>Determinantes que desplazan la oferta:</b></p>
  <ul>
  <li><b>Precio de los insumos:</b> si sube la mano de obra o la materia prima, producir cuesta más y la oferta se contrae (se corre a la izquierda).</li>
  <li><b>Tecnología:</b> una mejora abarata la producción y expande la oferta (a la derecha).</li>
  <li><b>Expectativas de precio futuro</b></li>
  <li><b>Número de vendedores:</b> entra un competidor nuevo, la oferta del mercado aumenta.</li>
  <li><b>Impuestos y subsidios a la producción</b></li>
  </ul>
  <p><b>Cómo dibujar los desplazamientos sin equivocarte:</b> piensa en <b>horizontal</b>, no en vertical. "La oferta aumenta" significa que a <i>cada precio</i> se ofrece más cantidad → la curva se corre hacia la <b>derecha</b>. Si piensas en vertical te confundes, porque una curva de oferta que se corre a la derecha se ve "más abajo".</p>`
 },
 {
  t:'5 · Equilibrio de mercado y estática comparativa',
  h:`<p>El <b>equilibrio</b> es el par (P*, Q*) donde la cantidad demandada iguala a la ofrecida. Gráficamente, la intersección.</p>
  <p class="fx">Q<sub>d</sub>(P*) = Q<sub>s</sub>(P*)</p>
  <p><b>Por qué el mercado tiende ahí solo:</b></p>
  <ul>
  <li>Si <b>P &gt; P*</b> hay <b>exceso de oferta</b> (excedente). Los vendedores acumulan stock y bajan precios.</li>
  <li>Si <b>P &lt; P*</b> hay <b>exceso de demanda</b> (escasez). Los compradores compiten y empujan el precio hacia arriba.</li>
  </ul>
  <p>La <b>estática comparativa</b> es comparar dos equilibrios: uno antes y otro después de un cambio. El procedimiento es siempre el mismo, cuatro pasos:</p>
  <ol>
  <li>¿Qué curva se afecta, oferta o demanda?</li>
  <li>¿Hacia dónde se desplaza?</li>
  <li>Encuentra el nuevo punto de intersección</li>
  <li>Compara P* y Q* antes y después</li>
  </ol>
  <p><b>Los cuatro casos simples:</b></p>
  <table class="tb"><tr><th>Cambio</th><th>P*</th><th>Q*</th></tr>
  <tr><td>Demanda aumenta</td><td>sube</td><td>sube</td></tr>
  <tr><td>Demanda disminuye</td><td>baja</td><td>baja</td></tr>
  <tr><td>Oferta aumenta</td><td>baja</td><td>sube</td></tr>
  <tr><td>Oferta disminuye</td><td>sube</td><td>baja</td></tr></table>`,
  ojo:'El caso que más cae en pruebas: se mueven las DOS curvas a la vez. Ahí uno de los dos efectos queda indeterminado. Ejemplo: si la demanda aumenta y la oferta también, Q* claramente sube, pero P* depende de cuál se movió más. La respuesta correcta es decir explícitamente "indeterminado, depende de las magnitudes relativas". Escribir eso vale más que inventar una dirección.'
 },
 {
  t:'6 · Elasticidad',
  h:`<p>La <b>elasticidad</b> mide cuánto reacciona una variable ante el cambio de otra, en términos porcentuales. Que sea en porcentaje es lo que la hace comparable entre bienes con unidades distintas.</p>
  <p class="fx">E<sub>p</sub> = (%Δ cantidad demandada) / (%Δ precio)</p>
  <p>Para la demanda siempre da negativa, así que casi siempre se habla de su valor absoluto.</p>
  <table class="tb"><tr><th>|E|</th><th>Se llama</th><th>Significa</th></tr>
  <tr><td>&gt; 1</td><td>Elástica</td><td>La cantidad reacciona más que proporcionalmente</td></tr>
  <tr><td>= 1</td><td>Unitaria</td><td>Reaccionan igual</td></tr>
  <tr><td>&lt; 1</td><td>Inelástica</td><td>La cantidad reacciona poco</td></tr>
  <tr><td>= 0</td><td>Perfectamente inelástica</td><td>Curva vertical</td></tr>
  <tr><td>= ∞</td><td>Perfectamente elástica</td><td>Curva horizontal</td></tr></table>
  <p><b>Qué determina que un bien sea elástico:</b> la existencia de sustitutos cercanos (el determinante más fuerte), si es un lujo o una necesidad, cuánto pesa en el presupuesto, y el horizonte de tiempo — todo es más elástico en el largo plazo porque hay tiempo de ajustarse.</p>
  <p><b>La relación con el ingreso total, que es lo que más preguntan:</b></p>
  <p class="fx">IT = P × Q</p>
  <ul>
  <li>Demanda <b>elástica</b>: si subes el precio, el ingreso total <b>cae</b> (pierdes más en cantidad de lo que ganas en precio)</li>
  <li>Demanda <b>inelástica</b>: si subes el precio, el ingreso total <b>sube</b></li>
  <li>Elasticidad <b>unitaria</b>: el ingreso total no cambia, está en su máximo</li>
  </ul>
  <p><b>Otras dos elasticidades:</b> la <i>elasticidad ingreso</i> (positiva = bien normal, negativa = inferior) y la <i>elasticidad cruzada</i> (positiva = sustitutos, negativa = complementarios).</p>`,
  ojo:'En una recta de demanda la elasticidad NO es constante: es elástica en el tramo de arriba, unitaria justo al medio, e inelástica abajo. La pendiente sí es constante, la elasticidad no. Pendiente y elasticidad son cosas distintas, y confundirlas es de los errores más caros del curso.'
 },
 {
  t:'7 · Excedente del consumidor y del productor',
  h:`<p>Son las medidas de <b>bienestar</b>: cuánto gana cada lado por poder transar.</p>
  <p><b>Excedente del consumidor (EC):</b> la diferencia entre lo máximo que estabas dispuesto a pagar y lo que efectivamente pagaste. En el gráfico, el área <b>bajo la curva de demanda y sobre el precio</b>.</p>
  <p><b>Excedente del productor (EP):</b> la diferencia entre lo que recibiste y lo mínimo que estabas dispuesto a aceptar. El área <b>sobre la curva de oferta y bajo el precio</b>.</p>
  <p class="fx">Excedente total = EC + EP</p>
  <p>Con curvas rectas, calcularlos es geometría de triángulos:</p>
  <p class="fx">EC = ½ × base × altura = ½ × Q* × (P<sub>máx</sub> − P*)</p>
  <p>donde P<sub>máx</sub> es el intercepto de la demanda con el eje vertical.</p>
  <p><b>Por qué importa:</b> el equilibrio competitivo <b>maximiza el excedente total</b>. Cualquier cosa que aleje al mercado de ese punto —un precio máximo, un impuesto— genera una <b>pérdida de eficiencia social</b> (o pérdida irrecuperable), que en el gráfico es el famoso triangulito que queda entre las curvas en la zona donde ya no hay transacciones.</p>`,
  ojo:'Este es el puente hacia el punto 8. Todo el análisis de intervención de mercado se reduce a: dibujar la intervención, marcar el nuevo EC y EP, y calcular el triángulo que se perdió. Si dominas calcular áreas acá, el punto 8 se vuelve mecánico.'
 },
 {
  t:'8 · Intervención de mercado',
  h:`<p>Cuatro instrumentos. En todos el procedimiento es el mismo: dibuja, identifica el desequilibrio, calcula quién gana y quién pierde.</p>
  <p><b>Precio máximo (techo)</b> — ej. control de arriendos</p>
  <ul>
  <li>Solo tiene efecto si se fija <b>bajo</b> el precio de equilibrio</li>
  <li>Genera <b>escasez</b>: la cantidad demandada supera a la ofrecida</li>
  <li>Los consumidores que <i>logran</i> comprar ganan; los que quedan fuera pierden</li>
  <li>Aparecen colas, listas de espera y mercados informales</li>
  </ul>
  <p><b>Precio mínimo (piso)</b> — ej. salario mínimo</p>
  <ul>
  <li>Solo tiene efecto si se fija <b>sobre</b> el equilibrio</li>
  <li>Genera <b>excedente</b>: se ofrece más de lo que se demanda</li>
  <li>En el mercado laboral ese excedente es desempleo</li>
  </ul>
  <p><b>Impuestos</b></p>
  <p>La clave del tema: <b>da lo mismo a quién se le cobre legalmente el impuesto</b>. El reparto real de la carga —la <i>incidencia</i>— lo determinan las elasticidades:</p>
  <p class="fx">El lado más inelástico soporta la mayor parte del impuesto</p>
  <p>La intuición: quien tiene menos alternativas no puede escapar. Por eso los impuestos al tabaco los paga casi enteramente el consumidor: su demanda es muy inelástica.</p>
  <p>Un impuesto genera además una <b>pérdida de eficiencia</b>, porque desaparecen transacciones que eran mutuamente beneficiosas. La recaudación del Estado es un rectángulo; la pérdida social es el triángulo que queda a su lado.</p>
  <p><b>Subsidios</b></p>
  <p>Es el espejo del impuesto: baja el precio que paga el consumidor, sube el que recibe el productor, y aumenta la cantidad transada. También genera pérdida de eficiencia, porque ahora se producen unidades cuyo costo supera lo que la gente realmente valora.</p>`,
  ojo:'La pregunta que más se repite: "¿quién paga realmente el impuesto?". La respuesta nunca es "el que dice la ley". Siempre argumenta desde las elasticidades relativas, y si te dan un caso concreto, identifica primero cuál lado tiene menos sustitutos.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'El precio del café sube. Explica qué pasa con: (a) la cantidad demandada de café, (b) la demanda de té, (c) la demanda de azúcar. Usa el lenguaje correcto en cada caso.',
    a:`<b>(a) Cantidad demandada de café:</b> disminuye. Es un <b>movimiento sobre</b> la curva de demanda del café, porque lo que cambió fue el precio del propio bien. La demanda de café no se movió.<br><br>
    <b>(b) Demanda de té:</b> aumenta, la curva se <b>desplaza a la derecha</b>. El té es <b>sustituto</b> del café: al encarecerse uno, la gente se cambia al otro. Acá sí cambió la demanda, porque lo que se movió fue el precio de <i>otro</i> bien.<br><br>
    <b>(c) Demanda de azúcar:</b> disminuye, se <b>desplaza a la izquierda</b>. El azúcar es <b>complementario</b> del café: se consumen juntos, así que menos café implica menos azúcar.<br><br>
    Nota que en (a) usamos "cantidad demandada" y en (b) y (c) "demanda". Esa distinción es exactamente lo que se está evaluando.`},
   {q:'Un mercado tiene demanda Qd = 100 − 2P y oferta Qs = 20 + 2P. Encuentra el equilibrio y calcula el excedente del consumidor.',
    a:`<b>Equilibrio:</b> igualamos<br>
    100 − 2P = 20 + 2P<br>
    80 = 4P → <b>P* = 20</b><br>
    Q* = 100 − 2(20) = <b>60</b><br><br>
    <b>Excedente del consumidor:</b> primero el precio máximo que alguien pagaría, o sea donde Qd = 0:<br>
    100 − 2P = 0 → P<sub>máx</sub> = 50<br><br>
    Es el triángulo entre 50 y 20, con base Q* = 60:<br>
    EC = ½ × 60 × (50 − 20) = ½ × 60 × 30 = <b>900</b><br><br>
    De paso, el excedente del productor: el precio mínimo al que ofrecerían algo es donde Qs = 0 → P = −10, que al ser negativo significa que ofrecen desde P = 0. Con Qs=20 en P=0:<br>
    EP = ½ × (60+20) × 20 = 800`},
   {q:'El gobierno fija un precio máximo de 15 en el mercado del ejercicio anterior. ¿Qué pasa?',
    a:`El techo está <b>bajo</b> el equilibrio (15 &lt; 20), así que <b>sí es vinculante</b> y tiene efecto.<br><br>
    <b>Al precio de 15:</b><br>
    Qd = 100 − 2(15) = 70<br>
    Qs = 20 + 2(15) = 50<br><br>
    <b>Escasez = 70 − 50 = 20 unidades.</b> Hay 20 unidades de demanda insatisfecha.<br><br>
    La cantidad efectivamente transada es <b>50</b>, no 70: el mercado queda limitado por el lado corto, que acá es la oferta. Nadie puede comprar lo que no se produjo.<br><br>
    <b>Quién gana y quién pierde:</b> los consumidores que logran comprar pagan menos y ganan. Los que quedan fuera —y antes sí compraban— pierden. Los productores pierden inequívocamente: venden menos y a menor precio. El excedente total cae, y esa caída es la pérdida de eficiencia.<br><br>
    Si el techo se hubiera fijado en 25, estaría <b>sobre</b> el equilibrio y no pasaría nada: el mercado seguiría transando en 20. Un precio máximo no vinculante es irrelevante.`},
   {q:'¿Por qué el impuesto al tabaco lo termina pagando casi todo el consumidor, aunque legalmente se le cobre a la empresa?',
    a:`Porque la <b>incidencia</b> del impuesto no la decide la ley, sino las <b>elasticidades relativas</b>. La regla es que el lado <b>más inelástico</b> soporta la mayor parte de la carga.<br><br>
    La demanda de tabaco es <b>muy inelástica</b>: es adictivo y no tiene sustitutos cercanos. Aunque suba el precio, los fumadores reducen poco su consumo. La oferta, en cambio, es relativamente elástica: las tabacaleras pueden ajustar producción, cambiar de mercado o dejar de producir.<br><br>
    Como el consumidor tiene menos escapatoria, la empresa puede traspasarle casi todo el impuesto vía precio sin perder ventas significativas.<br><br>
    <b>El caso extremo</b> ayuda a fijar la idea: con demanda perfectamente inelástica (vertical), el consumidor paga el <b>100 %</b> del impuesto. Con demanda perfectamente elástica (horizontal), lo paga entero el productor.<br><br>
    Esto además explica por qué los gobiernos gravan bienes inelásticos: recaudan mucho y la cantidad transada cae poco, lo que significa menor pérdida de eficiencia. El costo es que suele ser un impuesto regresivo.`}
  ]
 }
 ]
},

/* ---- MI · TEORÍA DEL CONSUMIDOR ---- */
{
 id:'mi-u1', ramo:'mi', tag:'Semana 1-2', sem:2,
 titulo:'Teoría del Consumidor',
 bajada:'Unidades I.1 y I.2: preferencias, curvas de indiferencia y el problema de maximización de utilidad.',
 min:60,
 secciones:[
 {
  t:'I.1 · Axiomas de preferencia',
  h:`<p>Todo parte de una pregunta simple: ¿cómo se representa matemáticamente que alguien prefiere una cosa sobre otra?</p>
  <p>Se escribe <b>A ≿ B</b> ("A es al menos tan preferido como B"). Para que esas preferencias se puedan modelar, se exigen axiomas:</p>
  <ul>
  <li><b>Completitud:</b> dadas dos canastas cualesquiera, el consumidor siempre puede decidir. Nunca responde "no sé".</li>
  <li><b>Transitividad:</b> si A ≿ B y B ≿ C, entonces A ≿ C. Es lo que evita preferencias circulares.</li>
  <li><b>Reflexividad:</b> A ≿ A.</li>
  <li><b>Continuidad:</b> cambios pequeños en la canasta no producen saltos bruscos en las preferencias.</li>
  <li><b>No saciedad (más es mejor):</b> más cantidad siempre se prefiere.</li>
  <li><b>Convexidad:</b> se prefieren las combinaciones equilibradas a los extremos.</li>
  </ul>
  <p><b>Para qué sirven:</b> si se cumplen completitud, transitividad y continuidad, se puede demostrar que existe una <b>función de utilidad</b> U(x) que representa esas preferencias. Ese es el puente entre "me gusta más" y las matemáticas.</p>`,
  ojo:'La utilidad es ORDINAL, no cardinal. U=10 y U=20 solo significan que la segunda se prefiere, no que sea el doble de buena. Por eso cualquier transformación monótona creciente de U representa las mismas preferencias — y esa propiedad se usa para simplificar problemas, por ejemplo tomando logaritmo a una Cobb-Douglas.'
 },
 {
  t:'I.1 · Curvas de indiferencia y TMS',
  h:`<p>Una <b>curva de indiferencia</b> une todas las canastas que dan la misma utilidad. El consumidor es indiferente entre cualquier punto de ella.</p>
  <p><b>Propiedades:</b> tienen pendiente negativa, nunca se cruzan (se violaría transitividad), las más alejadas del origen dan mayor utilidad, y son convexas hacia el origen.</p>
  <p>La <b>Tasa Marginal de Sustitución</b> es la pendiente de esa curva:</p>
  <p class="fx">TMS = − dx₂/dx₁ = UMg₁ / UMg₂</p>
  <p>Se lee: cuántas unidades del bien 2 estás dispuesto a resignar por una unidad más del bien 1, manteniendo la misma utilidad.</p>
  <p>La TMS <b>decreciente</b> es la traducción matemática de la convexidad: mientras más tengas del bien 1, menos del bien 2 estás dispuesto a sacrificar por otra unidad más.</p>`
 },
 {
  t:'I.2 · Restricción presupuestaria',
  h:`<p>Las preferencias dicen qué quieres; el presupuesto dice qué puedes.</p>
  <p class="fx">p₁x₁ + p₂x₂ ≤ m</p>
  <p>La recta presupuestaria es la frontera, cuando gastas todo. Su <b>pendiente es −p₁/p₂</b>: el precio relativo, o sea a cuántas unidades del bien 2 tienes que renunciar en el mercado para conseguir una del bien 1.</p>
  <p><b>Cómo se mueve:</b></p>
  <ul>
  <li>Si sube el <b>ingreso</b> m → se desplaza paralela hacia afuera, sin cambiar pendiente</li>
  <li>Si sube <b>p₁</b> → rota hacia adentro pivoteando sobre el eje del bien 2</li>
  <li>Si suben <b>ambos precios y el ingreso</b> en la misma proporción → <b>no cambia nada</b></li>
  </ul>
  <p>Ese último punto es importante: la demanda depende de precios <b>relativos</b> e ingreso real, no de valores nominales. Es lo que se llama ausencia de ilusión monetaria.</p>`
 },
 {
  t:'I.2 · El problema de optimización',
  h:`<p>Acá se juntan las dos mitades. El consumidor resuelve:</p>
  <p class="fx">max U(x₁, x₂)  sujeto a  p₁x₁ + p₂x₂ = m</p>
  <p><b>La condición de óptimo:</b></p>
  <p class="fx">TMS = p₁/p₂   ⟺   UMg₁/p₁ = UMg₂/p₂</p>
  <p>La segunda forma es la más intuitiva: en el óptimo, <b>el último peso gastado en cada bien rinde la misma utilidad</b>. Si un bien rindiera más por peso, convendría reasignar gasto hacia él — y entonces no estabas en el óptimo.</p>
  <p>Geométricamente: el punto donde la curva de indiferencia más alta alcanzable es <b>tangente</b> a la recta presupuestaria.</p>
  <p><b>Método de resolución.</b> Se usa Lagrange:</p>
  <p class="fx">ℒ = U(x₁,x₂) + λ(m − p₁x₁ − p₂x₂)</p>
  <p>Derivas respecto a x₁, x₂ y λ, igualas a cero, y resuelves el sistema. El multiplicador λ tiene interpretación: es la <b>utilidad marginal del ingreso</b>, cuánto sube tu utilidad si te dan un peso más.</p>
  <p><b>Soluciones de esquina:</b> si los bienes son sustitutos perfectos o las preferencias no son convexas, el óptimo puede estar en un extremo y ahí la tangencia no se cumple. Hay que revisarlo, no asumirlo.</p>`,
  ojo:'La función de utilidad indirecta V(p₁,p₂,m) es la utilidad máxima alcanzable dados precios e ingreso. O sea, tomas la solución del problema y la reemplazas de vuelta en U. Sirve para analizar bienestar sin volver a optimizar cada vez.'
 },

 ]
}
,

/* ---- MI · UNIDAD I.3 · FUNCIONES DE DEMANDA (semana 3) ---- */
{
 id:'mi-i3', ramo:'mi', tag:'Semana 3', sem:3,
 titulo:'Funciones de Demanda',
 bajada:'Unidad I.3 completa, siguiendo el PPT del profe: cambios en ingreso, en precio propio y cruzado, bienestar del consumidor y demanda de mercado.',
 min:55,
 secciones:[
 {
  t:'De dónde salen las funciones de demanda',
  h:`<p>En I.2 resolviste el problema del consumidor para <b>un</b> conjunto de precios e ingreso. Si lo resuelves para <b>cualquier</b> combinación, lo que obtienes ya no es un número sino dos funciones:</p>
  <p class="fx">x*(p<sub>x</sub>, p<sub>y</sub>, I)   ;   y*(p<sub>x</sub>, p<sub>y</sub>, I)</p>
  <p>Esas son las <b>funciones de demanda</b>. Toda la unidad I.3 es una sola pregunta repetida tres veces: <i>¿qué le pasa a x* cuando muevo una de las tres variables?</i></p>
  <ul>
  <li>Muevo <b>I</b> → curva de Engel, bien normal / neutro / inferior</li>
  <li>Muevo <b>p<sub>x</sub></b> → curva de demanda, Ley de la Demanda</li>
  <li>Muevo <b>p<sub>y</sub></b> → sustitutos, complementos o independientes</li>
  </ul>
  <p>Y después dos temas que cierran la unidad: <b>bienestar del consumidor</b> y <b>demanda de mercado</b>.</p>`,
  ojo:'Ojo con la notación del profe: usa p<sub>x</sub>, p<sub>y</sub> e <b>I</b> (ingreso). Nada de p₁, p₂ ni m. En la prueba conviene escribir igual que él.'
 },
 {
  t:'Cambios en el ingreso · curva de Engel',
  h:`<p>Un aumento de I <b>expande la restricción presupuestaria sin cambiar su pendiente</b>. La recta se corre paralela hacia afuera.</p>
  <p>Como la razón de precios no cambió, <b>la TMS en el óptimo tampoco cambia</b>. Por eso no hay distorsión en la composición de la canasta: no es que el bien se haya vuelto relativamente más caro, simplemente puedes más.</p>
  <p>La clasificación sale del signo de la derivada:</p>
  <p class="fx">∂x*/∂I &gt; 0 → bien <b>normal</b><br>∂x*/∂I = 0 → bien <b>neutro</b><br>∂x*/∂I &lt; 0 → bien <b>inferior</b></p>
  <p>La <b>curva de Engel</b> grafica esa relación: ingreso contra cantidad demandada, dejando precios y preferencias fijos. Es <b>creciente</b> para un bien normal, <b>vertical</b> para uno neutro y <b>decreciente</b> para uno inferior.</p>`,
  ojo:'Frase textual del PPT: <b>"inferioridad no es una cualidad intrínseca"</b>. Un bien no es inferior por naturaleza — lo es para cierta persona, en cierto rango de ingreso. El mismo bien puede ser normal cuando ganas poco e inferior cuando ganas más. Si te preguntan "¿el transporte público es un bien inferior?", la respuesta parte por "depende de para quién y en qué tramo de ingreso".'
 },
 {
  t:'Cambios en el precio propio · Ley de la Demanda',
  h:`<p>Esta es la relación más importante, porque sistemáticamente se observa negativa:</p>
  <p class="fx">∂x*(p<sub>x</sub>, p<sub>y</sub>, I) / ∂p<sub>x</sub> &lt; 0</p>
  <p>La <b>curva de demanda</b> grafica precio propio contra cantidad óptima, manteniendo fijos I, los otros precios y las preferencias.</p>
  <p><b>Ley de la Demanda</b> (el profe dijo explícitamente que se demuestra con la ecuación de Slutsky, <b>que no se ve en este curso</b>):</p>
  <ul>
  <li>Si el bien es <b>normal o neutro</b> en el ingreso → la demanda es <b>decreciente</b> en su propio precio. Siempre.</li>
  <li>Si el bien es <b>inferior</b> → la demanda <b>podría</b>, en casos muy raros, ser creciente en su precio. Ese es el <b>bien Giffen</b>.</li>
  </ul>
  <p>O sea: ser inferior es condición <b>necesaria pero no suficiente</b> para ser Giffen. Todo Giffen es inferior; casi ningún inferior es Giffen.</p>
  <p><b>Movimientos vs desplazamientos.</b> Si cambia p<sub>x</sub>, te mueves <b>sobre</b> la curva. Si cambia cualquier otra cosa — I, p<sub>y</sub>, preferencias — la curva entera <b>se desplaza</b>.</p>`,
  ojo:'No te compliques descomponiendo en efecto sustitución y efecto ingreso: el profe dijo que Slutsky no entra. Para justificar el signo de la demanda usa directamente la Ley de la Demanda y la clasificación normal/neutro/inferior.'
 },
 {
  t:'Cambios en el precio cruzado',
  h:`<p>Ahora movemos el precio del <b>otro</b> bien:</p>
  <p class="fx">∂x*/∂p<sub>y</sub> &gt; 0 → x es <b>sustituto</b> de y<br>∂x*/∂p<sub>y</sub> &lt; 0 → x es <b>complemento</b> de y<br>∂x*/∂p<sub>y</sub> = 0 → x es <b>independiente</b> de y</p>
  <p>La intuición: si sube el precio del té y compras más café, te cambiaste de uno a otro → sustitutos. Si sube el precio del café y compras menos azúcar, se consumían juntos → complementos.</p>`,
  ojo:'Advertencia del PPT que vale puntos: <b>el efecto puede no ser simétrico</b>. Que x sea sustituto de y no obliga a que y sea sustituto de x. Con U = ln(x) + y pasa exactamente eso — lo compruebas en el ejercicio 1.'
 },
 {
  t:'Análisis de bienestar del consumidor',
  h:`<p>¿Para qué sirve? Para poder responder preguntas como:</p>
  <ul>
  <li>Cuánto <b>mejora</b> el bienestar cuando una mejora tecnológica baja el precio (o sube la calidad) de un bien</li>
  <li>Cuánto <b>empeora</b> ante colusiones, monopolios o impuestos que suben el precio</li>
  </ul>
  <p><b>El problema.</b> Lo intuitivo sería medir el cambio en la <b>función de utilidad indirecta</b> V(p<sub>x</sub>, p<sub>y</sub>, I). Pero la utilidad es <b>ordinal</b>: sirve para ordenar canastas de una misma persona, no para comparar entre individuos ni para decir "mejoró en 3 unidades". No se puede sumar el bienestar de dos personas midiendo utilidad.</p>
  <p><b>La solución.</b> Se pasa a medidas en <b>pesos</b>:</p>
  <ul>
  <li><b>Variación compensatoria:</b> el cambio en ingreso que habría que darle (o quitarle) al consumidor para dejarlo en la <b>misma utilidad máxima</b> que tenía antes del cambio de precios. Se calcula desde V.</li>
  <li><b>Cambio en el excedente del consumidor:</b> el área bajo la curva de demanda. Es una medida <b>aproximada</b> de la variación compensatoria, y es la que se usa en la práctica porque solo necesitas la curva de demanda.</li>
  </ul>`,
  ojo:'La cadena de razonamiento completa es lo que preguntan: utilidad indirecta → es ordinal → no comparable → por eso medimos en pesos → variación compensatoria → y el excedente del consumidor la aproxima. Si te preguntan "¿por qué no medimos el bienestar con la utilidad?", la respuesta es <b>ordinalidad</b>.'
 },
 {
  t:'Demanda de mercado',
  h:`<p>Con N individuos (n = 1,…,N) y M bienes (m = 1,…,M), la demanda de mercado del bien m es la <b>suma de las demandas individuales</b>:</p>
  <p class="fx">Q<sub>Dm</sub>(p<sub>1</sub>,…,p<sub>M</sub>, I<sub>1</sub>,…,I<sub>N</sub>) = Σ<sub>n=1..N</sub> x<sub>n,m</sub>(p<sub>1</sub>,…,p<sub>M</sub>, I<sub>n</sub>)</p>
  <p>Las tres observaciones del PPT:</p>
  <ol>
  <li>Todos los consumidores enfrentan <b>los mismos precios</b>.</li>
  <li>Q<sub>Dm</sub> depende de los precios de <b>todos</b> los bienes, no solo del propio.</li>
  <li>Q<sub>Dm</sub> depende del <b>ingreso total y de su distribución</b>. Dos sociedades con el mismo ingreso agregado pero repartido distinto tienen demandas de mercado distintas.</li>
  </ol>
  <p>La <b>curva</b> de demanda de mercado Q<sub>D</sub>(p) es esa función dejando todo lo demás constante (<i>ceteris paribus</i>). Se <b>desplaza</b> — y puede cambiar de forma — ante cambios en ingreso, precios de otros bienes, preferencias y <b>cantidad de consumidores</b>.</p>`,
  ojo:'La suma es <b>horizontal</b>: para cada precio sumas las cantidades, no al revés. Y ojo con los tramos: si a cierto precio un consumidor ya no compra nada, desde ahí la demanda de mercado cambia de pendiente. Eso se cae en las pruebas.'
 },
 {
  t:'Ejercicios',
  ej:[
   {q:'Con U(x,y) = ln(x) + y (la misma de la ayudantía 2), las demandas son x* = p<sub>y</sub>/p<sub>x</sub> e y* = I/p<sub>y</sub> − 1. Clasifica ambos bienes según el ingreso, y determina la relación de precio cruzado en las dos direcciones.',
    a:`<b>Según el ingreso:</b><br>
    ∂x*/∂I = <b>0</b> → x es un bien <b>neutro</b>. Su demanda no depende del ingreso: la curva de Engel es <b>vertical</b>.<br>
    ∂y*/∂I = 1/p<sub>y</sub> &gt; 0 → y es un bien <b>normal</b>. Todo el ingreso extra se va al bien y.<br><br>
    <b>Precio cruzado, ida:</b><br>
    ∂x*/∂p<sub>y</sub> = 1/p<sub>x</sub> &gt; 0 → <b>x es sustituto de y</b>.<br><br>
    <b>Precio cruzado, vuelta:</b><br>
    y* = I/p<sub>y</sub> − 1 no contiene p<sub>x</sub>, así que ∂y*/∂p<sub>x</sub> = <b>0</b> → <b>y es independiente de x</b>.<br><br>
    <b>Acá está el punto:</b> x es sustituto de y, pero y <b>no</b> es sustituto de x. Es justo la asimetría que advierte el PPT. Pasa porque la utilidad es <b>cuasilineal</b> en y: el bien y absorbe todo el efecto ingreso y el bien x queda "anclado" al precio relativo.<br><br>
    <b>Bonus, Ley de la Demanda:</b> ∂x*/∂p<sub>x</sub> = −p<sub>y</sub>/p<sub>x</sub>² &lt; 0. Decreciente, como corresponde a un bien neutro.`},
   {q:'Un bien tiene demanda x* = I/(2p<sub>x</sub>). Dibuja mentalmente su curva de Engel y su curva de demanda, y clasifícalo.',
    a:`<b>Curva de Engel</b> (dejando p<sub>x</sub> fijo): x* = (1/2p<sub>x</sub>)·I es una <b>recta creciente que parte del origen</b>. Como ∂x*/∂I = 1/(2p<sub>x</sub>) &gt; 0, el bien es <b>normal</b>.<br><br>
    <b>Curva de demanda</b> (dejando I fijo): x* = (I/2)·(1/p<sub>x</sub>) es una <b>hipérbola decreciente</b>. ∂x*/∂p<sub>x</sub> = −I/(2p<sub>x</sub>²) &lt; 0, o sea cumple la Ley de la Demanda — lo cual era esperable, porque el bien es normal.<br><br>
    <b>Detalle que vale mencionar:</b> el gasto en este bien es p<sub>x</sub>·x* = I/2, <b>constante</b>. Gaste lo que gaste el precio, siempre se destina la mitad del ingreso a este bien.<br><br>
    <b>Y no es Giffen:</b> ni podría serlo. Giffen exige que el bien sea inferior, y este es normal.`},
   {q:'En un mercado hay solo dos consumidores: q<sub>A</sub> = 10 − p y q<sub>B</sub> = 6 − 2p. Encuentra la demanda de mercado.',
    a:`Se suman <b>horizontalmente</b>: para cada precio, sumas cantidades. Pero primero hay que ver <b>hasta qué precio compra cada uno</b>.<br><br>
    A deja de comprar cuando 10 − p = 0 → p = 10.<br>
    B deja de comprar cuando 6 − 2p = 0 → p = <b>3</b>.<br><br>
    Entonces la demanda de mercado tiene <b>dos tramos</b>:<br><br>
    <b>Si p ≤ 3</b> (compran los dos):<br>
    Q = (10 − p) + (6 − 2p) = <b>16 − 3p</b><br><br>
    <b>Si 3 &lt; p ≤ 10</b> (solo compra A):<br>
    Q = <b>10 − p</b><br><br>
    <b>Si p &gt; 10:</b> Q = 0<br><br>
    <b>Lo que se evalúa:</b> que la curva tiene un <b>quiebre en p = 3</b> y se vuelve más empinada cuando B sale del mercado. Sumar 16 − 3p para todo precio es el error clásico — daría cantidad negativa para B cuando p &gt; 3.<br><br>
    Verifica en p = 3: Q = 16 − 9 = 7, y por el otro tramo Q = 10 − 3 = 7. Coinciden, así que el quiebre está bien puesto.`},
   {q:'Sube el ingreso de los consumidores. ¿Qué le pasa a la curva de demanda de mercado de un bien inferior? ¿Y si en vez de eso sube el precio de ese mismo bien?',
    a:`<b>Sube el ingreso:</b> como el bien es <b>inferior</b>, cada consumidor demanda <b>menos</b> a cualquier precio. La curva de demanda de mercado se <b>desplaza hacia la izquierda</b>. Es un desplazamiento, no un movimiento: lo que cambió no fue el precio del bien.<br><br>
    <b>Sube el precio propio:</b> hay un <b>movimiento sobre</b> la curva, hacia arriba y a la izquierda. La curva no se mueve.<br><br>
    <b>Cuidado con el "inferior":</b> ser inferior no significa que la demanda suba con el precio. Eso solo pasaría si además fuera <b>Giffen</b>, que es un caso raro. Salvo que el enunciado lo diga explícitamente, un bien inferior sigue teniendo demanda decreciente en su propio precio.<br><br>
    Y recuerda la tercera observación del PPT: si el aumento de ingreso no fuera parejo sino concentrado en algunos consumidores, el efecto sería distinto — la demanda de mercado depende de la <b>distribución</b> del ingreso, no solo del total.`}
  ]
 }
 ]
}


]);
