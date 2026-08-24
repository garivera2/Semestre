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
 bajada:'Unidades I.1 y I.2: preferencias, curvas de indiferencia, el problema de maximización y los casos de esquina y vértice.',
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
  <p>La TMS <b>decreciente</b> es la traducción matemática de la convexidad: mientras más tengas del bien 1, menos del bien 2 estás dispuesto a sacrificar por otra unidad más.</p><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 330 200" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M58.0,23.0 L58.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M58.0,175.0 L308.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="311.0" y="179.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="52.0" y="25.0" fill="var(--tx)" font-size="11" font-weight="650">y</text><path d="M69.2,50.2 L71.4,70.8 L73.7,85.5 L75.9,96.6 L78.1,105.3 L80.3,112.2 L82.5,117.9 L84.7,122.6 L87.0,126.6 L89.2,130.1 L91.4,133.1 L93.6,135.7 L95.8,138.0 L98.0,140.0 L100.2,141.9 L102.5,143.5 L104.7,145.0 L106.9,146.4 L109.1,147.6 L111.3,148.8 L113.5,149.8 L115.8,150.8 L118.0,151.7 L120.2,152.5 L122.4,153.3 L124.6,154.0 L126.8,154.7 L129.1,155.3 L131.3,155.9 L133.5,156.5 L135.7,157.0 L137.9,157.5 L140.2,158.0 L142.4,158.4 L144.6,158.8 L146.8,159.2 L149.0,159.6 L151.2,160.0 L153.4,160.3 L155.7,160.7 L157.9,161.0 L160.1,161.3 L162.3,161.6 L164.5,161.9 L166.8,162.1 L169.0,162.4 L171.2,162.6 L173.4,162.9 L175.6,163.1 L177.8,163.3 L180.1,163.5 L182.3,163.7 L184.5,163.9 L186.7,164.1 L188.9,164.3 L191.1,164.5 L193.3,164.7 L195.6,164.8 L197.8,165.0 L200.0,165.1" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="204.0" y="168.6" fill="var(--tx2)" font-size="10.5">U&#8320;</text><path d="M75.5,26.9 L78.4,47.5 L81.2,63.2 L84.1,75.4 L87.0,85.2 L89.8,93.2 L92.7,100.0 L95.5,105.7 L98.3,110.6 L101.2,114.8 L104.0,118.5 L106.9,121.8 L109.8,124.8 L112.6,127.4 L115.5,129.7 L118.3,131.9 L121.2,133.8 L124.0,135.6 L126.8,137.2 L129.7,138.7 L132.6,140.1 L135.4,141.4 L138.2,142.6 L141.1,143.7 L143.9,144.7 L146.8,145.7 L149.7,146.6 L152.5,147.5 L155.3,148.3 L158.2,149.1 L161.1,149.8 L163.9,150.4 L166.8,151.1 L169.6,151.7 L172.4,152.3 L175.3,152.8 L178.2,153.4 L181.0,153.9 L183.8,154.3 L186.7,154.8 L189.6,155.2 L192.4,155.7 L195.2,156.1 L198.1,156.4 L200.9,156.8 L203.8,157.2 L206.7,157.5 L209.5,157.8 L212.3,158.2 L215.2,158.5 L218.1,158.8 L220.9,159.0 L223.8,159.3 L226.6,159.6 L229.4,159.8 L232.3,160.1 L235.2,160.3 L238.0,160.6" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="242.0" y="164.1" fill="var(--acc)" font-size="10.5" font-weight="650">U&#8321;</text><path d="M87.9,34.5 L91.4,49.2 L94.9,61.1 L98.3,70.9 L101.8,79.2 L105.3,86.2 L108.8,92.3 L112.3,97.6 L115.8,102.3 L119.2,106.4 L122.7,110.1 L126.2,113.4 L129.7,116.4 L133.2,119.1 L136.7,121.6 L140.2,123.9 L143.6,126.0 L147.1,127.9 L150.6,129.6 L154.1,131.3 L157.6,132.8 L161.1,134.2 L164.5,135.6 L168.0,136.8 L171.5,138.0 L175.0,139.1 L178.5,140.1 L181.9,141.1 L185.4,142.0 L188.9,142.9 L192.4,143.8 L195.9,144.5 L199.4,145.3 L202.8,146.0 L206.3,146.7 L209.8,147.3 L213.3,148.0 L216.8,148.5 L220.3,149.1 L223.8,149.7 L227.2,150.2 L230.7,150.7 L234.2,151.2 L237.7,151.6 L241.2,152.1 L244.7,152.5 L248.1,152.9 L251.6,153.3 L255.1,153.7 L258.6,154.1 L262.1,154.4 L265.6,154.8 L269.0,155.1 L272.5,155.4 L276.0,155.7" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="280.0" y="159.2" fill="var(--tx2)" font-size="10.5">U&#8322;</text><circle cx="109.0" cy="124.0" r="3.2" fill="var(--acc)"/><path d="M75.0,90.0 L161.0,176.0" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><text x="131.0" y="90.0" fill="var(--tx2)" font-size="10.5">pendiente = &#8722;TMS</text><text x="176.0" y="45.0" fill="var(--acc)" font-size="10.5" font-weight="650">TMS = UMg&#8339;/UMg<tspan baseline-shift="sub" font-size="7.6">y</tspan></text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Cada curva une canastas con la <b>misma</b> utilidad. La <b>TMS</b> es el valor absoluto de la pendiente en un punto: cu&#225;ntas unidades de y resignas por una de x sin cambiar de curva. Al avanzar hacia la derecha la curva se aplana &#8212; esa es la <b>TMS decreciente</b>, que es la convexidad.</figcaption></figure>`
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
  <p>Ese último punto es importante: la demanda depende de precios <b>relativos</b> e ingreso real, no de valores nominales. Es lo que se llama ausencia de ilusión monetaria.</p><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 330 200" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M58.0,23.0 L58.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M58.0,175.0 L308.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="311.0" y="179.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="52.0" y="25.0" fill="var(--tx)" font-size="11" font-weight="650">y</text><path d="M58.0,75.0 L198.0,175.0" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="154.0" y="135.0" fill="var(--acc)" font-size="10.5" font-weight="650">inicial</text><path d="M58.0,35.0 L254.0,175.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="190.0" y="101.0" fill="var(--tx2)" font-size="10.5">sube I (paralela)</text><path d="M58.0,75.0 L133.0,175.0" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><text x="82.0" y="29.0" fill="var(--tx2)" font-size="10.5">sube p&#8339; (rota)</text><text x="26.0" y="77.0" fill="var(--tx2)" font-size="10.5">I/p<tspan baseline-shift="sub" font-size="7.6">y</tspan></text><text x="184.0" y="190.0" fill="var(--tx2)" font-size="10.5">I/p&#8339;</text><text x="170.0" y="57.0" fill="var(--tx2)" font-size="10.5">pendiente = &#8722;p&#8339;/p<tspan baseline-shift="sub" font-size="7.6">y</tspan></text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Sube el <b>ingreso</b>: la recta se corre <b>paralela</b>, la pendiente no cambia. Sube <b>p<sub>x</sub></b>: la recta <b>rota</b> pivoteando sobre el eje y, porque el intercepto I/p<sub>y</sub> no depende de p<sub>x</sub>. Y si suben ambos precios y el ingreso en la misma proporci&#243;n, <b>no pasa nada</b>.</figcaption></figure>`
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
  <p><b>Soluciones de esquina:</b> si los bienes son sustitutos perfectos o las preferencias no son convexas, el óptimo puede estar en un extremo y ahí la tangencia no se cumple. Hay que revisarlo, no asumirlo.</p><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 330 200" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M58.0,23.0 L58.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M58.0,175.0 L308.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="311.0" y="179.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="52.0" y="25.0" fill="var(--tx)" font-size="11" font-weight="650">y</text><path d="M58.0,45.0 L238.0,175.0" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M67.0,58.3 L69.0,80.0 L71.1,94.8 L73.2,105.7 L75.2,114.0 L77.2,120.5 L79.3,125.7 L81.3,130.0 L83.4,133.7 L85.5,136.7 L87.5,139.4 L89.5,141.7 L91.6,143.8 L93.7,145.5 L95.7,147.1 L97.8,148.6 L99.8,149.9 L101.8,151.1 L103.9,152.1 L106.0,153.1 L108.0,154.0 L110.0,154.8 L112.1,155.6 L114.2,156.3 L116.2,157.0 L118.2,157.6 L120.3,158.1 L122.3,158.7 L124.4,159.2 L126.5,159.7 L128.5,160.1 L130.6,160.5 L132.6,160.9 L134.7,161.3 L136.7,161.7 L138.8,162.0 L140.8,162.3 L142.8,162.6 L144.9,162.9 L146.9,163.2 L149.0,163.5 L151.1,163.7 L153.1,164.0 L155.2,164.2 L157.2,164.4 L159.2,164.6 L161.3,164.8 L163.3,165.0 L165.4,165.2 L167.4,165.4 L169.5,165.6 L171.6,165.8 L173.6,165.9 L175.7,166.1 L177.7,166.2 L179.8,166.4 L181.8,166.5 L183.8,166.7 L185.9,166.8 L187.9,166.9 L190.0,167.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="194.0" y="170.5" fill="var(--tx2)" font-size="10.5">U&#8320;</text><path d="M72.6,30.1 L75.3,53.4 L78.1,70.2 L80.9,82.9 L83.7,92.9 L86.5,100.9 L89.3,107.5 L92.0,113.0 L94.8,117.7 L97.6,121.7 L100.4,125.2 L103.2,128.3 L106.0,131.0 L108.8,133.4 L111.5,135.6 L114.3,137.5 L117.1,139.3 L119.9,140.9 L122.7,142.4 L125.5,143.7 L128.2,145.0 L131.0,146.1 L133.8,147.2 L136.6,148.1 L139.4,149.1 L142.2,149.9 L144.9,150.7 L147.7,151.5 L150.5,152.2 L153.3,152.9 L156.1,153.5 L158.8,154.1 L161.6,154.6 L164.4,155.2 L167.2,155.7 L170.0,156.2 L172.8,156.6 L175.6,157.1 L178.3,157.5 L181.1,157.9 L183.9,158.2 L186.7,158.6 L189.5,159.0 L192.2,159.3 L195.0,159.6 L197.8,159.9 L200.6,160.2 L203.4,160.5 L206.2,160.8 L208.9,161.0 L211.7,161.3 L214.5,161.5 L217.3,161.8 L220.1,162.0 L222.9,162.2 L225.7,162.4 L228.4,162.6 L231.2,162.8 L234.0,163.0" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="238.0" y="166.5" fill="var(--acc)" font-size="10.5" font-weight="650">U*</text><path d="M84.4,38.7 L87.9,54.6 L91.4,67.2 L94.9,77.4 L98.3,85.8 L101.8,92.9 L105.3,98.9 L108.8,104.1 L112.3,108.7 L115.8,112.7 L119.2,116.2 L122.7,119.4 L126.2,122.2 L129.7,124.8 L133.2,127.1 L136.7,129.2 L140.2,131.2 L143.6,133.0 L147.1,134.6 L150.6,136.1 L154.1,137.5 L157.6,138.8 L161.1,140.1 L164.5,141.2 L168.0,142.3 L171.5,143.3 L175.0,144.2 L178.5,145.1 L181.9,146.0 L185.4,146.7 L188.9,147.5 L192.4,148.2 L195.9,148.9 L199.4,149.5 L202.8,150.1 L206.3,150.7 L209.8,151.3 L213.3,151.8 L216.8,152.3 L220.3,152.8 L223.8,153.3 L227.2,153.7 L230.7,154.2 L234.2,154.6 L237.7,155.0 L241.2,155.3 L244.7,155.7 L248.1,156.1 L251.6,156.4 L255.1,156.7 L258.6,157.1 L262.1,157.4 L265.6,157.7 L269.0,157.9 L272.5,158.2 L276.0,158.5" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="280.0" y="162.0" fill="var(--tx2)" font-size="10.5">U&#8322;</text><circle cx="148.0" cy="110.0" r="3.6" fill="var(--acc)"/><path d="M148.0,110.0 L148.0,175.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M58.0,110.0 L148.0,110.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="143.0" y="190.0" fill="var(--tx)" font-size="11" font-weight="650">x*</text><text x="36.0" y="113.0" fill="var(--tx)" font-size="11" font-weight="650">y*</text><text x="162.0" y="79.0" fill="var(--acc)" font-size="10.5" font-weight="650">TMS = p&#8339;/p<tspan baseline-shift="sub" font-size="7.6">y</tspan></text><text x="178.0" y="33.0" fill="var(--tx2)" font-size="10.5">U&#8322; inalcanzable</text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">El &#243;ptimo es la <b>tangencia</b>: la curva de indiferencia m&#225;s alta que toca el presupuesto. U<sub>2</sub> no se alcanza; sobre U<sub>0</sub> sobrar&#237;a presupuesto. En el punto tangente la <b>TMS iguala al precio relativo</b>: lo que est&#225;s dispuesto a intercambiar coincide con lo que el mercado te ofrece.</figcaption></figure>`,
  ojo:'La función de utilidad indirecta V(p₁,p₂,m) es la utilidad máxima alcanzable dados precios e ingreso. O sea, tomas la solución del problema y la reemplazas de vuelta en U. Sirve para analizar bienestar sin volver a optimizar cada vez.'
 }, {
  t:'I.2 · Casos particulares: esquina y vértice',
  h:`<p>El profe los dejó anotados explícitamente en el PPT, así que es materia de prueba. Son los dos casos donde la receta "iguala TMS a p<sub>x</sub>/p<sub>y</sub>" <b>no funciona</b>.</p><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 380 190" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M48.0,37.0 L48.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M48.0,155.0 L160.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="163.0" y="159.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="42.0" y="39.0" fill="var(--tx)" font-size="11" font-weight="650">y</text><text x="44.0" y="23.0" fill="var(--tx)" font-size="11" font-weight="650">Sustitutos perfectos</text><path d="M48.0,60.0 L153.0,155.0" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M50.0,85.0 L140.0,31.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M50.0,112.2 L140.0,58.2" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M50.0,139.4 L140.0,85.4" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><circle cx="153.0" cy="155.0" r="3.6" fill="var(--acc)"/><text x="106.0" y="172.0" fill="var(--acc)" font-size="10.5" font-weight="650">esquina</text><path d="M248.0,37.0 L248.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M248.0,155.0 L360.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="363.0" y="159.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="242.0" y="39.0" fill="var(--tx)" font-size="11" font-weight="650">y</text><text x="244.0" y="23.0" fill="var(--tx)" font-size="11" font-weight="650">Leontief</text><path d="M248.0,60.0 L353.0,155.0" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M266.0,151.0 L266.0,115.0 L348.0,115.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M292.0,151.0 L292.0,89.0 L348.0,89.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M318.0,151.0 L318.0,63.0 L348.0,63.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><circle cx="292.0" cy="99.0" r="3.6" fill="var(--acc)"/><text x="298.0" y="91.0" fill="var(--acc)" font-size="10.5" font-weight="650">v&#233;rtice</text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Con utilidad <b>lineal</b> (sustitutos perfectos) las curvas son rectas: si su pendiente no coincide con la del presupuesto, el &#243;ptimo est&#225; en un <b>extremo</b> y se compra un solo bien. Con <b>Leontief</b> u = m&#237;n(x, ay) las curvas son en L y el &#243;ptimo est&#225; en el <b>v&#233;rtice</b>: proporci&#243;n fija, y la tangencia no existe.</figcaption></figure><p><b>1 · Solución de esquina — utilidad lineal.</b> Si u(x,y) = ax + by, los bienes son <b>sustitutos perfectos</b> y las curvas de indiferencia son rectas de pendiente constante −a/b. La TMS ya no depende de las cantidades, así que no hay un punto donde "se iguale" a nada: o la TMS es mayor que el precio relativo para todo punto, o es menor.</p>
  <ul>
  <li>Si TMS &gt; p<sub>x</sub>/p<sub>y</sub> → conviene gastar <b>todo</b> en x: x* = I/p<sub>x</sub>, y* = 0</li>
  <li>Si TMS &lt; p<sub>x</sub>/p<sub>y</sub> → conviene gastar <b>todo</b> en y</li>
  <li>Si son iguales → cualquier punto de la recta presupuestaria sirve (infinitas soluciones)</li>
  </ul>
  <p><b>Qué implica sobre el comportamiento de compra:</b> el consumidor es un "todo o nada". Ante un cambio chico de precio que cruce el umbral, salta de comprar solo x a comprar solo y. No hay ajuste gradual.</p>
  <p><b>2 · Solución de vértice — utilidad Leontief.</b> Si u(x,y) = mín(x, ay), los bienes son <b>complementarios perfectos</b> y las curvas son en forma de L. En el vértice la curva tiene un quiebre: la derivada no existe, así que la TMS no está definida y Lagrange no entrega nada útil.</p>
  <p>Se resuelve por otro lado: el óptimo siempre está en el vértice, donde <b>x = ay</b>. Esa igualdad reemplaza a la condición de tangencia, y se combina con el presupuesto:</p>
  <p class="fx">x = a·y   y   p<sub>x</sub>x + p<sub>y</sub>y = I</p>
  <p>Dos ecuaciones, dos incógnitas. Listo.</p>
  <p><b>Qué implica sobre el comportamiento de compra:</b> las cantidades se consumen en <b>proporción fija</b> pase lo que pase con los precios. Los zapatos izquierdo y derecho: por caro que se ponga uno, nadie compra tres del mismo.</p>`,
  ojo:'La pregunta típica es "¿por qué no podemos resolver esto analíticamente con las condiciones de primer orden?" — como en la pregunta 3 de la ayudantía 2, con u = mín(x, 4y). La respuesta es que en el <b>vértice la función no es diferenciable</b>, y las condiciones de primer orden requieren derivadas. Hay que resolver por la proporción fija y el presupuesto, o gráficamente.'
 },


 ]
}
,

/* ---- MI · UNIDAD I.3 · FUNCIONES DE DEMANDA (semana 3) ---- */
{
 id:'mi-i3', ramo:'mi', tag:'Semana 3', sem:3,
 titulo:'Funciones de Demanda',
 bajada:'Unidad I.3 completa, siguiendo el PPT del profe: cambios en ingreso, en precio propio y cruzado, bienestar del consumidor y demanda de mercado.',
 min:80,
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
  t:'Cómo leer las derivadas (esto es lo que se evalúa)',
  h:`<p>Toda la unidad está escrita en derivadas parciales. Si sabes leerlas, la unidad se reduce a mirar un signo.</p>
  <p class="fx">∂x* / ∂I</p>
  <p><b>Se lee:</b> "cuánto cambia la cantidad óptima del bien x cuando cambia el ingreso, <b>dejando todo lo demás fijo</b>".</p>
  <ul>
  <li>La <b>∂</b> (parcial, no la d normal) es justamente eso: hay más de una variable en juego — x* depende de p<sub>x</sub>, p<sub>y</sub> e I — y estás moviendo <b>una sola</b> mientras congelas las otras.</li>
  <li>El <b>asterisco</b> en x* no es decorativo: significa "la cantidad <b>óptima</b>", la que sale de resolver el problema del consumidor. No es cualquier cantidad, es la elegida.</li>
  <li>Lo que importa casi siempre es el <b>signo</b>, no el número. Positivo, cero o negativo es lo que define la clasificación del bien.</li>
  </ul>
  <p><b>Las tres derivadas de la unidad y qué clasifica cada una:</b></p>
  <table class="tb">
  <tr><th>Derivada</th><th>Qué mueves</th><th>Qué clasifica</th></tr>
  <tr><td>∂x*/∂I</td><td>el ingreso</td><td>normal / neutro / inferior</td></tr>
  <tr><td>∂x*/∂p<sub>x</sub></td><td>su propio precio</td><td>Ley de la Demanda (y el caso Giffen)</td></tr>
  <tr><td>∂x*/∂p<sub>y</sub></td><td>el precio del otro bien</td><td>sustituto / complemento / independiente</td></tr>
  </table>
  <p><b>Cómo se calcula en la práctica.</b> Primero resuelves el problema y obtienes la función de demanda; recién ahí derivas. Ejemplo con x* = I/(2p<sub>x</sub>):</p>
  <p class="fx">∂x*/∂I = 1/(2p<sub>x</sub>) &gt; 0 → normal<br>∂x*/∂p<sub>x</sub> = −I/(2p<sub>x</sub>²) &lt; 0 → cumple la Ley de la Demanda<br>∂x*/∂p<sub>y</sub> = 0 → independiente de y</p>
  <p>Fíjate que al derivar respecto a I, el p<sub>x</sub> se trata como si fuera un número cualquiera. Eso es "dejar todo lo demás fijo".</p>`,
  ojo:'La conexión entre el signo y el gráfico es lo que hay que tener automático: el <b>signo de la derivada</b> es la <b>pendiente de la curva</b>. ∂x*/∂I &gt; 0 significa que la curva de Engel sube. ∂x*/∂p<sub>x</sub> &lt; 0 significa que la curva de demanda baja. No son dos cosas distintas, es la misma información escrita de dos formas.'
 },
 {
  t:'Cómo se construye la curva de demanda',
  h:`<p>Esto es lo que el profe dibujó en la pizarra en dos pisos, y es el corazón de la unidad. Antes del gráfico, ordena qué es cada cosa, porque ahí se arma la confusión:</p>
  <ul>
  <li><b>U₀, U₁, U₂ no son tres funciones distintas.</b> Es la <b>misma</b> función de utilidad u(x,y) dibujada a tres alturas. Cada curva es un conjunto de nivel: todos los (x,y) que dan el mismo valor de u. Como un mapa de cerros, donde cada línea es una altura. Por eso U₂ está más lejos del origen: U₀ &lt; U₁ &lt; U₂.</li>
  <li><b>Las tres rectas son la misma restricción</b> m = p<sub>x</sub>x + p<sub>y</sub>y, con tres precios distintos de x. Todas salen del <b>mismo punto</b> en el eje y, que es m/p<sub>y</sub>, porque ni el ingreso ni p<sub>y</sub> cambiaron. Lo único que se mueve es el intercepto horizontal m/p<sub>x</sub>.</li>
  <li><b>La función de demanda x*(p<sub>x</sub>, p<sub>y</sub>, m) es el resultado</b>, no un supuesto. Es lo que se está construyendo.</li>
  </ul><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 340 400" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M58.0,12.0 L58.0,180.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M58.0,180.0 L343.0,180.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="346.0" y="184.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="52.0" y="10.0" fill="var(--tx)" font-size="11" font-weight="650">y</text><path d="M58.0,52.0 L178.0,180.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="165.0" y="207.0" fill="var(--tx2)" font-size="10.5">m/p&#8339;&#8320;</text><path d="M58.0,52.0 L234.5,180.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="221.5" y="207.0" fill="var(--tx2)" font-size="10.5">m/p&#8339;&#8321;</text><path d="M58.0,52.0 L299.9,180.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="286.9" y="207.0" fill="var(--tx2)" font-size="10.5">m/p&#8339;&#8322;</text><path d="M67.8,29.0 L71.6,41.4 L75.4,51.7 L79.2,60.6 L83.0,68.5 L86.8,75.5 L90.6,81.9 L94.4,87.7 L98.2,93.1 L102.0,98.1 L105.8,102.7 L109.6,107.0 L113.4,111.0 L117.2,114.8 L121.0,118.4 L124.8,121.8 L128.6,125.0 L132.4,128.0 L136.2,130.9 L140.0,133.6 L143.8,136.1 L147.6,138.6 L151.4,140.9 L155.2,143.1 L159.0,145.2 L162.8,147.3 L166.6,149.2 L170.4,151.0 L174.2,152.7 L178.0,154.4 L181.8,156.0 L185.6,157.5 L189.4,158.9 L193.2,160.3 L197.0,161.6 L200.8,162.9 L204.6,164.0 L208.4,165.2 L212.2,166.3 L216.0,167.3 L219.8,168.2 L223.6,169.2 L227.4,170.0 L231.2,170.9 L235.0,171.7" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="239.0" y="175.2" fill="var(--acc)" font-size="10.5" font-weight="650">U&#8320;</text><path d="M80.7,29.0 L85.4,39.4 L90.0,48.6 L94.7,56.9 L99.4,64.4 L104.0,71.3 L108.7,77.7 L113.4,83.6 L118.0,89.1 L122.7,94.2 L127.4,99.0 L132.0,103.6 L136.7,107.8 L141.4,111.8 L146.0,115.6 L150.7,119.2 L155.4,122.6 L160.0,125.8 L164.7,128.9 L169.4,131.8 L174.0,134.6 L178.7,137.2 L183.3,139.7 L188.0,142.1 L192.7,144.4 L197.3,146.5 L202.0,148.6 L206.7,150.5 L211.3,152.4 L216.0,154.2 L220.7,155.9 L225.3,157.5 L230.0,159.1 L234.7,160.5 L239.3,161.9 L244.0,163.3 L248.7,164.5 L253.3,165.7 L258.0,166.8 L262.7,167.9 L267.3,168.9 L272.0,169.9 L276.7,170.8 L281.3,171.7 L286.0,172.5" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="290.0" y="176.0" fill="var(--acc)" font-size="10.5" font-weight="650">U&#8321;</text><path d="M100.2,29.0 L105.4,37.7 L110.7,45.8 L115.9,53.2 L121.1,60.2 L126.4,66.6 L131.6,72.7 L136.9,78.3 L142.1,83.7 L147.4,88.7 L152.6,93.5 L157.9,98.0 L163.1,102.3 L168.4,106.3 L173.6,110.2 L178.9,113.9 L184.1,117.4 L189.3,120.7 L194.6,123.9 L199.8,126.9 L205.1,129.8 L210.3,132.6 L215.6,135.2 L220.8,137.7 L226.1,140.2 L231.3,142.5 L236.6,144.7 L241.8,146.8 L247.1,148.8 L252.3,150.7 L257.6,152.6 L262.8,154.3 L268.0,156.0 L273.3,157.6 L278.5,159.1 L283.8,160.6 L289.0,162.0 L294.3,163.3 L299.5,164.5 L304.8,165.7 L310.0,166.9 L315.3,167.9 L320.5,169.0 L325.8,169.9 L331.0,170.8" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="335.0" y="174.3" fill="var(--acc)" font-size="10.5" font-weight="650">U&#8322;</text><circle cx="111.3" cy="108.9" r="3.2" fill="var(--acc)"/><path d="M111.3,108.9 L111.3,180.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M58.0,108.9 L111.3,108.9" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="106.3" y="193.0" fill="var(--tx)" font-size="11" font-weight="650">x&#8320;</text><circle cx="153.4" cy="121.2" r="3.2" fill="var(--acc)"/><path d="M153.4,121.2 L153.4,180.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M58.0,121.2 L153.4,121.2" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="148.4" y="193.0" fill="var(--tx)" font-size="11" font-weight="650">x&#8321;</text><circle cx="207.3" cy="131.0" r="3.2" fill="var(--acc)"/><path d="M207.3,131.0 L207.3,180.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M58.0,131.0 L207.3,131.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="202.3" y="193.0" fill="var(--tx)" font-size="11" font-weight="650">x&#8322;</text><text x="226.0" y="52.0" fill="var(--tx2)" font-size="10.5">m = p&#8339;x + p<tspan baseline-shift="sub" font-size="7.6">y</tspan> y</text><path d="M58.0,212.0 L58.0,372.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M58.0,372.0 L343.0,372.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="346.0" y="376.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="52.0" y="216.0" fill="var(--tx)" font-size="11" font-weight="650">p&#8339;</text><path d="M309.5,337.6 L287.9,335.1 L269.1,332.6 L252.8,330.2 L238.4,327.7 L225.6,325.3 L214.2,322.8 L204.1,320.3 L194.9,317.9 L186.6,315.4 L179.1,313.0 L172.3,310.5 L166.0,308.0 L160.3,305.6 L155.0,303.1 L150.2,300.7 L145.7,298.2 L141.6,295.7 L137.7,293.3 L134.1,290.8 L130.8,288.4 L127.7,285.9 L124.8,283.4 L122.0,281.0 L119.5,278.5 L117.1,276.1 L114.8,273.6 L112.7,271.1 L110.7,268.7 L108.8,266.2 L107.0,263.8 L105.3,261.3 L103.7,258.8 L102.1,256.4 L100.7,253.9 L99.3,251.5 L98.0,249.0 L96.8,246.5 L95.6,244.1 L94.4,241.6 L93.3,239.2 L92.3,236.7 L91.3,234.2 L90.4,231.8 L89.5,229.3" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="111.3" cy="269.5" r="3.2" fill="var(--acc)"/><path d="M111.3,180.0 L111.3,269.5" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M58.0,269.5 L111.3,269.5" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="28.0" y="273.0" fill="var(--tx)" font-size="11" font-weight="650">p&#8339;&#8320;</text><circle cx="153.4" cy="302.3" r="3.2" fill="var(--acc)"/><path d="M153.4,180.0 L153.4,302.3" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M58.0,302.3 L153.4,302.3" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="28.0" y="305.8" fill="var(--tx)" font-size="11" font-weight="650">p&#8339;&#8321;</text><circle cx="207.3" cy="321.2" r="3.2" fill="var(--acc)"/><path d="M207.3,180.0 L207.3,321.2" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M58.0,321.2 L207.3,321.2" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="28.0" y="324.7" fill="var(--tx)" font-size="11" font-weight="650">p&#8339;&#8322;</text><path d="M120.3,276.5 L194.3,312.2" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><polygon points="198.3,314.2 193.1,314.6 195.5,309.8" fill="var(--tx2)"/><text x="202.0" y="255.6" fill="var(--acc)" font-size="10.5" font-weight="650">demanda x*(p&#8339;)</text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Arriba: el mismo problema resuelto tres veces, bajando p<sub>x</sub>. El presupuesto <b>rota</b> sobre el eje y (m y p<sub>y</sub> no cambian) y la tangencia se corre a la derecha. Abajo: se bajan las cantidades x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub> y se cruzan con el precio que las gener&#243;. Esos tres pares <b>son</b> la curva de demanda.</figcaption></figure><p><b>Qué pasa matemáticamente.</b> Cada punto de tangencia es un problema de optimización completo y resuelto:</p>
  <p class="fx">máx u(x,y)  s.a.  p<sub>x</sub>x + p<sub>y</sub>y = m   →   TMS = p<sub>x</sub>/p<sub>y</sub></p>
  <p>Se resuelve tres veces, con p<sub>x₀</sub> &gt; p<sub>x₁</sub> &gt; p<sub>x₂</sub>. Al bajar el precio, la recta se <b>aplana</b> (su pendiente −p<sub>x</sub>/p<sub>y</sub> se hace menos empinada), la tangencia se corre a la derecha y se alcanza una curva de indiferencia más alta: x₀ &lt; x₁ &lt; x₂ y U₀ &lt; U₁ &lt; U₂. La curva que une los tres puntos de tangencia se llama <b>senda de precio-consumo</b>.</p>
  <p><b>El paso de abajo.</b> El segundo panel tiene otros ejes: cantidad contra p<sub>x</sub>. Se bajan las cantidades x₀, x₁, x₂ manteniendo la misma escala horizontal — por eso las líneas punteadas son verticales — y cada una se cruza con el precio que la generó. Uniendo esos tres pares sale la <b>curva de demanda</b>.</p>
  <p><b>Qué significa económicamente.</b> Acá está el punto de todo el rodeo:</p>
  <ul>
  <li><b>La curva de demanda no es un supuesto, es la solución del problema del consumidor graficada.</b> Cada punto de ella es alguien que ya optimizó dado ese precio.</li>
  <li><b>Por qué es decreciente:</b> no es "porque sí". Es porque al bajar p<sub>x</sub> el presupuesto rota hacia afuera y el nuevo óptimo queda a la derecha. La pendiente negativa es un <b>resultado</b> del modelo, no una hipótesis.</li>
  <li><b>Por qué I y p<sub>y</sub> desplazan la curva y p<sub>x</sub> no:</b> en toda la construcción I y p<sub>y</sub> se mantuvieron fijos. Si mueves uno de esos, el panel de arriba se rehace entero y sale una curva de demanda <b>nueva</b>. Si mueves p<sub>x</sub>, te quedas dentro del mismo dibujo y solo caminas sobre la curva.</li>
  </ul>`,
  ojo:'En la pizarra el profe usa <b>m</b> para el ingreso y en el PPT aparece <b>I</b>. Es exactamente lo mismo — no te confundas si ves las dos notaciones en la prueba.'
 },
 {
  t:'Cambios en el ingreso · curva de Engel',
  h:`<p>Un aumento de I <b>expande la restricción presupuestaria sin cambiar su pendiente</b>. La recta se corre paralela hacia afuera.</p>
  <p>Como la razón de precios no cambió, <b>la TMS en el óptimo tampoco cambia</b>. Por eso no hay distorsión en la composición de la canasta: no es que el bien se haya vuelto relativamente más caro, simplemente puedes más.</p>
  <p>La clasificación sale del signo de la derivada:</p>
  <p class="fx">∂x*/∂I &gt; 0 → bien <b>normal</b><br>∂x*/∂I = 0 → bien <b>neutro</b><br>∂x*/∂I &lt; 0 → bien <b>inferior</b></p>
  <p>La <b>curva de Engel</b> grafica esa relación: ingreso contra cantidad demandada, dejando precios y preferencias fijos. Es <b>creciente</b> para un bien normal, <b>vertical</b> para uno neutro y <b>decreciente</b> para uno inferior.</p><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 320 200" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M55.0,25.0 L55.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M55.0,175.0 L305.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="308.0" y="179.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="49.0" y="27.0" fill="var(--tx)" font-size="11" font-weight="650">I</text><path d="M67.0,167.0 L150.0,37.0" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="69.0" y="27.0" fill="var(--acc)" font-size="10.5" font-weight="650">normal</text><text x="69.0" y="41.0" fill="var(--tx2)" font-size="10.5">&#8706;x*/&#8706;I &gt; 0</text><path d="M187.0,167.0 L187.0,37.0" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><text x="169.0" y="27.0" fill="var(--tx2)" font-size="10.5">neutro</text><path d="M297.0,167.0 L227.0,37.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="233.0" y="27.0" fill="var(--tx2)" font-size="10.5">inferior</text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Curva de Engel: ingreso en el eje vertical, cantidad en el horizontal, con precios y preferencias fijos. <b>Creciente</b> si el bien es normal, <b>vertical</b> si es neutro (m&#225;s ingreso no cambia el consumo) y <b>decreciente</b> si es inferior.</figcaption></figure>`,
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
  <p><b>Movimientos vs desplazamientos.</b> Si cambia p<sub>x</sub>, te mueves <b>sobre</b> la curva. Si cambia cualquier otra cosa — I, p<sub>y</sub>, preferencias — la curva entera <b>se desplaza</b>.</p><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 320 200" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M55.0,25.0 L55.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M55.0,175.0 L305.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="308.0" y="179.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="49.0" y="27.0" fill="var(--tx)" font-size="11" font-weight="650">p&#8339;</text><path d="M65.0,35.0 L205.0,165.0" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="207.0" y="167.0" fill="var(--acc)" font-size="10.5" font-weight="650">D&#8320;</text><path d="M145.0,35.0 L290.0,165.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="292.0" y="167.0" fill="var(--tx2)" font-size="10.5">D&#8321;</text><circle cx="100.0" cy="68.0" r="3" fill="var(--acc)"/><circle cx="165.0" cy="128.0" r="3" fill="var(--acc)"/><path d="M107.0,74.0 L154.7,118.0" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><polygon points="158.0,121.0 152.9,119.9 156.5,116.0" fill="var(--tx2)"/><text x="71.0" y="135.0" fill="var(--tx2)" font-size="10.5">cambia p&#8339;</text><text x="71.0" y="148.0" fill="var(--tx2)" font-size="10.5">(movimiento)</text><path d="M173.0,47.0 L216.5,47.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><polygon points="221.0,47.0 216.5,49.7 216.5,44.3" fill="var(--tx3)"/><text x="119.0" y="33.0" fill="var(--tx2)" font-size="10.5">cambia I, p<tspan baseline-shift="sub" font-size="7.6">y</tspan> o preferencias</text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Si cambia el <b>precio propio</b> te mueves <b>sobre</b> la curva. Si cambia cualquier otra cosa &#8212; ingreso, precio del otro bien, preferencias, n&#186; de consumidores &#8212; la curva entera <b>se desplaza</b>.</figcaption></figure>`,
  ojo:'No te compliques descomponiendo en efecto sustitución y efecto ingreso: el profe dijo que Slutsky no entra. Para justificar el signo de la demanda usa directamente la Ley de la Demanda y la clasificación normal/neutro/inferior.'
 },
 {
  t:'Cambios en el precio cruzado',
  h:`<p>Ahora movemos el precio del <b>otro</b> bien:</p>
  <p class="fx">∂x*/∂p<sub>y</sub> &gt; 0 → x es <b>sustituto</b> de y<br>∂x*/∂p<sub>y</sub> &lt; 0 → x es <b>complemento</b> de y<br>∂x*/∂p<sub>y</sub> = 0 → x es <b>independiente</b> de y</p>
  <p>La intuición: si sube el precio del té y compras más café, te cambiaste de uno a otro → sustitutos. Si sube el precio del café y compras menos azúcar, se consumían juntos → complementos.</p><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M55.0,28.0 L55.0,168.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M55.0,168.0 L305.0,168.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="308.0" y="172.0" fill="var(--tx)" font-size="11" font-weight="650">p<tspan baseline-shift="sub" font-size="7.6">y</tspan></text><text x="49.0" y="30.0" fill="var(--tx)" font-size="11" font-weight="650">x*</text><path d="M67.0,148.0 L283.0,46.0" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="147.0" y="34.0" fill="var(--acc)" font-size="10.5" font-weight="650">sustituto  &#8706;x*/&#8706;p<tspan baseline-shift="sub" font-size="7.6">y</tspan> &gt; 0</text><path d="M67.0,98.0 L283.0,98.0" stroke="var(--tx2)" stroke-width="1.6" fill="none" stroke-linecap="round"/><text x="173.0" y="86.0" fill="var(--tx2)" font-size="10.5">independiente  = 0</text><path d="M67.0,46.0 L283.0,148.0" stroke="var(--tx3)" stroke-width="1.4" fill="none" stroke-linecap="round"/><text x="187.0" y="156.0" fill="var(--tx2)" font-size="10.5">complemento  &lt; 0</text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Sube el precio del <b>otro</b> bien. Si compras m&#225;s de x, te cambiaste: <b>sustituto</b>. Si compras menos, se consum&#237;an juntos: <b>complemento</b>. Ojo: la relaci&#243;n puede no ser sim&#233;trica en la otra direcci&#243;n.</figcaption></figure>`,
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
  </ul><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 320 205" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M55.0,20.0 L55.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M55.0,175.0 L305.0,175.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="308.0" y="179.0" fill="var(--tx)" font-size="11" font-weight="650">x</text><text x="49.0" y="22.0" fill="var(--tx)" font-size="11" font-weight="650">p&#8339;</text><path d="M60.0,28.1 L285.0,167.6" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><text x="195.0" y="102.0" fill="var(--acc)" font-size="10.5" font-weight="650">demanda</text><polygon points="55.0,62.2 115.0,62.2 205.0,118.0 55.0,118.0" fill="var(--acc)" opacity="0.22"/><path d="M55.0,62.2 L115.0,62.2" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M55.0,118.0 L205.0,118.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="35.0" y="66.2" fill="var(--tx)" font-size="11" font-weight="650">p&#8320;</text><text x="35.0" y="122.0" fill="var(--tx)" font-size="11" font-weight="650">p&#8321;</text><path d="M115.0,62.2 L115.0,175.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><path d="M205.0,118.0 L205.0,175.0" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="110.0" y="189.0" fill="var(--tx2)" font-size="10.5">x&#8320;</text><text x="200.0" y="189.0" fill="var(--tx2)" font-size="10.5">x&#8321;</text><text x="71.0" y="88.2" fill="var(--acc)" font-size="10.5" font-weight="650">&#916; excedente</text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Baja el precio de p<sub>0</sub> a p<sub>1</sub>. El &#225;rea pintada es el <b>aumento del excedente del consumidor</b>, y es la aproximaci&#243;n pr&#225;ctica a la <b>variaci&#243;n compensatoria</b>: cu&#225;nto ingreso habr&#237;a que quitarle para dejarlo en la utilidad de antes.</figcaption></figure>`,
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
  <p>La <b>curva</b> de demanda de mercado Q<sub>D</sub>(p) es esa función dejando todo lo demás constante (<i>ceteris paribus</i>). Se <b>desplaza</b> — y puede cambiar de forma — ante cambios en ingreso, precios de otros bienes, preferencias y <b>cantidad de consumidores</b>.</p><figure style="margin:16px 0;padding:13px 9px 9px;background:var(--panel2);border-radius:12px"><svg viewBox="0 0 380 185" style="width:100%;height:auto;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg"><path d="M48.0,37.0 L48.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M48.0,155.0 L126.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="129.0" y="159.0" fill="var(--tx)" font-size="11" font-weight="650">q</text><text x="42.0" y="39.0" fill="var(--tx)" font-size="11" font-weight="650">p</text><text x="46.0" y="23.0" fill="var(--tx)" font-size="11" font-weight="650">Consumidor A</text><path d="M96.8,155.0 L96.3,154.0 L95.8,153.0 L95.3,152.1 L94.8,151.1 L94.3,150.1 L93.8,149.1 L93.3,148.1 L92.8,147.1 L92.4,146.2 L91.9,145.2 L91.4,144.2 L90.9,143.2 L90.4,142.2 L89.9,141.2 L89.4,140.2 L89.0,139.3 L88.5,138.3 L88.0,137.3 L87.5,136.3 L87.0,135.3 L86.5,134.3 L86.0,133.4 L85.5,132.4 L85.0,131.4 L84.6,130.4 L84.1,129.4 L83.6,128.4 L83.1,127.5 L82.6,126.5 L82.1,125.5 L81.6,124.5 L81.2,123.5 L80.7,122.6 L80.2,121.6 L79.7,120.6 L79.2,119.6 L78.7,118.6 L78.2,117.6 L77.7,116.7 L77.2,115.7 L76.8,114.7 L76.3,113.7 L75.8,112.7 L75.3,111.7 L74.8,110.8 L74.3,109.8 L73.8,108.8 L73.3,107.8 L72.9,106.8 L72.4,105.8 L71.9,104.8 L71.4,103.9 L70.9,102.9 L70.4,101.9 L69.9,100.9 L69.5,99.9 L69.0,98.9 L68.5,98.0 L68.0,97.0 L67.5,96.0 L67.0,95.0 L66.5,94.0 L66.0,93.0 L65.5,92.1 L65.1,91.1 L64.6,90.1 L64.1,89.1 L63.6,88.1 L63.1,87.1 L62.6,86.2 L62.1,85.2 L61.6,84.2 L61.2,83.2 L60.7,82.2 L60.2,81.2 L59.7,80.3 L59.2,79.3 L58.7,78.3 L58.2,77.3 L57.8,76.3 L57.3,75.4 L56.8,74.4 L56.3,73.4 L55.8,72.4 L55.3,71.4 L54.8,70.4 L54.3,69.5 L53.8,68.5 L53.4,67.5 L52.9,66.5 L52.4,65.5 L51.9,64.5 L51.4,63.5 L50.9,62.6 L50.4,61.6 L50.0,60.6 L49.5,59.6 L49.0,58.6 L48.5,57.6 L48.0,56.7" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M168.0,37.0 L168.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M168.0,155.0 L246.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="249.0" y="159.0" fill="var(--tx)" font-size="11" font-weight="650">q</text><text x="162.0" y="39.0" fill="var(--tx)" font-size="11" font-weight="650">p</text><text x="166.0" y="23.0" fill="var(--tx)" font-size="11" font-weight="650">Consumidor B</text><path d="M197.2,155.0 L196.3,154.0 L195.3,153.0 L194.3,152.1 L193.3,151.1 L192.4,150.1 L191.4,149.1 L190.4,148.1 L189.4,147.1 L188.5,146.2 L187.5,145.2 L186.5,144.2 L185.6,143.2 L184.6,142.2 L183.6,141.2 L182.6,140.2 L181.7,139.3 L180.7,138.3 L179.7,137.3 L178.7,136.3 L177.8,135.3 L176.8,134.3 L175.8,133.4 L174.8,132.4 L173.8,131.4 L172.9,130.4 L171.9,129.4 L170.9,128.4 L169.9,127.5 L169.0,126.5 L168.0,125.5" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M288.0,37.0 L288.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><path d="M288.0,155.0 L366.0,155.0" stroke="var(--tx3)" stroke-width="1.1" fill="none"/><text x="369.0" y="159.0" fill="var(--tx)" font-size="11" font-weight="650">q</text><text x="282.0" y="39.0" fill="var(--tx)" font-size="11" font-weight="650">p</text><text x="286.0" y="23.0" fill="var(--tx)" font-size="11" font-weight="650">Mercado</text><path d="M366.0,155.0 L364.5,154.0 L363.1,153.0 L361.6,152.1 L360.1,151.1 L358.7,150.1 L357.2,149.1 L355.8,148.1 L354.3,147.1 L352.8,146.2 L351.4,145.2 L349.9,144.2 L348.4,143.2 L347.0,142.2 L345.5,141.2 L344.1,140.2 L342.6,139.3 L341.1,138.3 L339.7,137.3 L338.2,136.3 L336.8,135.3 L335.3,134.3 L333.8,133.4 L332.4,132.4 L330.9,131.4 L329.4,130.4 L328.0,129.4 L326.5,128.4 L325.1,127.5 L323.6,126.5 L322.1,125.5 L321.6,124.5 L321.1,123.5 L320.7,122.6 L320.2,121.6 L319.7,120.6 L319.2,119.6 L318.7,118.6 L318.2,117.6 L317.7,116.7 L317.2,115.7 L316.8,114.7 L316.3,113.7 L315.8,112.7 L315.3,111.7 L314.8,110.8 L314.3,109.8 L313.8,108.8 L313.4,107.8 L312.9,106.8 L312.4,105.8 L311.9,104.8 L311.4,103.9 L310.9,102.9 L310.4,101.9 L309.9,100.9 L309.4,99.9 L309.0,98.9 L308.5,98.0 L308.0,97.0 L307.5,96.0 L307.0,95.0 L306.5,94.0 L306.0,93.0 L305.6,92.1 L305.1,91.1 L304.6,90.1 L304.1,89.1 L303.6,88.1 L303.1,87.1 L302.6,86.2 L302.1,85.2 L301.6,84.2 L301.2,83.2 L300.7,82.2 L300.2,81.2 L299.7,80.3 L299.2,79.3 L298.7,78.3 L298.2,77.3 L297.8,76.3 L297.3,75.4 L296.8,74.4 L296.3,73.4 L295.8,72.4 L295.3,71.4 L294.8,70.4 L294.3,69.5 L293.9,68.5 L293.4,67.5 L292.9,66.5 L292.4,65.5 L291.9,64.5 L291.4,63.5 L290.9,62.6 L290.4,61.6 L289.9,60.6 L289.5,59.6 L289.0,58.6 L288.5,57.6 L288.0,56.7" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="322.1" cy="125.5" r="3" fill="var(--acc)"/><path d="M288.0,125.5 L322.1,125.5" stroke="var(--tx3)" stroke-width="1" stroke-dasharray="3 3" fill="none"/><text x="262.0" y="129.0" fill="var(--tx2)" font-size="10.5">p = 3</text><text x="327.1" y="119.5" fill="var(--acc)" font-size="10.5" font-weight="650">quiebre</text></svg><figcaption style="font-size:11.5px;color:var(--tx2);text-align:center;margin-top:9px;line-height:1.55">Suma <b>horizontal</b>: para cada precio se suman cantidades. B deja de comprar en p = 3, as&#237; que desde ah&#237; hacia arriba la demanda de mercado es solo la de A y se vuelve m&#225;s empinada. Ese <b>quiebre</b> es lo que se cae en las pruebas.</figcaption></figure>`,
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
