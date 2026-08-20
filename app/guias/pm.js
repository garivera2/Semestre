/* ============================================================
   GUÍAS · PROGRAMACIÓN MATEMÁTICA
   Material original escrito para Gabo siguiendo el temario del ramo.
   Para agregar una guía nueva: copia la estructura de una existente
   y agrégala al final del array, antes del ];
============================================================ */
window.GUIAS = (window.GUIAS || []).concat([

/* ---- PM · OPTIMIZACIÓN LINEAL ---- */
{
 id:'pm-u1', ramo:'pm', tag:'Semana 1-2', sem:2,
 titulo:'Programación lineal y simplex',
 bajada:'Resumen corto: modelamiento, simplex, dos fases, dualidad y holgura complementaria. Para el Control 1.',
 min:30,
 secciones:[
 {
  t:'Modelamiento y forma estándar',
  h:`<p>Todo problema de programación lineal tiene tres piezas: <b>variables de decisión</b> (qué eliges), <b>función objetivo</b> (qué maximizas o minimizas) y <b>restricciones</b> (qué te limita).</p>
  <p>La <b>forma estándar</b> que necesita simplex:</p>
  <p class="fx">max c<sup>T</sup>x  s.a.  Ax = b,  x ≥ 0,  b ≥ 0</p>
  <p><b>Cómo llevar cualquier problema ahí:</b></p>
  <ul>
  <li><b>≤</b> → suma una variable de <b>holgura</b>: 3x₁ + 2x₂ ≤ 12 pasa a 3x₁ + 2x₂ + s = 12</li>
  <li><b>≥</b> → resta una variable de <b>exceso</b> y agrega una <b>artificial</b></li>
  <li><b>min</b> → multiplica el objetivo por −1 y maximiza</li>
  <li><b>Variable libre</b> → escríbela como x = x⁺ − x⁻ con ambas ≥ 0</li>
  <li><b>b negativo</b> → multiplica esa restricción por −1 (y da vuelta la desigualdad)</li>
  </ul>`
 },
 {
  t:'Solución gráfica y el teorema clave',
  h:`<p>Con dos variables se resuelve dibujando: grafica las restricciones, identifica la región factible, y evalúa el objetivo en los vértices.</p>
  <p><b>El teorema fundamental:</b> si existe solución óptima, entonces hay al menos un <b>vértice</b> de la región factible que es óptimo.</p>
  <p>Eso es lo que hace viable a simplex: en vez de revisar infinitos puntos, basta con recorrer vértices, que son finitos.</p>
  <p><b>Los cuatro casos posibles:</b> solución única (un vértice), soluciones múltiples (el objetivo es paralelo a una restricción activa), no acotada (la región se extiende infinitamente en la dirección de mejora), o infactible (no hay región).</p>`
 },
 {
  t:'Simplex',
  h:`<p>La idea: partir de un vértice factible y moverse a un vértice vecino que mejore el objetivo, hasta que ninguno mejore.</p>
  <p><b>El ciclo, en cuatro pasos:</b></p>
  <ol>
  <li><b>Variable de entrada:</b> la de costo reducido más favorable. En maximización, la más negativa de la fila objetivo.</li>
  <li><b>Variable de salida:</b> criterio del cociente mínimo. Divides b<sub>i</sub> por el coeficiente de la columna entrante, solo para los coeficientes <b>positivos</b>, y sale la fila con el cociente más chico.</li>
  <li><b>Pivoteo:</b> operaciones de fila para dejar la columna entrante como columna identidad.</li>
  <li><b>Criterio de parada:</b> cuando ningún costo reducido mejora, estás en el óptimo.</li>
  </ol>
  <p><b>Casos especiales que reconocer:</b> si todos los coeficientes de la columna entrante son ≤ 0, el problema es <b>no acotado</b>. Si en el óptimo una variable no básica tiene costo reducido cero, hay <b>soluciones múltiples</b>. Si una variable básica vale cero, la solución es <b>degenerada</b> y puede haber ciclado.</p>`,
  ojo:'El criterio del cociente mínimo solo considera coeficientes positivos. Incluir los negativos es el error más común y te lleva fuera de la región factible.'
 },
 {
  t:'Método de dos fases',
  h:`<p>Simplex necesita partir de una solución básica factible. Cuando hay restricciones de tipo ≥ o =, la base obvia no sirve, y ahí entra el método de dos fases.</p>
  <p><b>Fase 1.</b> Agregas variables artificiales y minimizas su suma. Si el mínimo llega a <b>cero</b>, encontraste un punto factible y las artificiales salieron de la base. Si el mínimo es <b>positivo</b>, el problema original es <b>infactible</b> — no hay nada más que hacer.</p>
  <p><b>Fase 2.</b> Descartas las artificiales, recuperas el objetivo original y corres simplex normal desde el vértice que encontraste.</p>
  <p>La alternativa es el <b>método de la Gran M</b>, que penaliza las artificiales con un coeficiente enorme en el objetivo. Mismo resultado, en una sola pasada, pero numéricamente más frágil.</p>`
 },
 {
  t:'Dualidad y holgura complementaria',
  h:`<p>Todo problema (el <b>primal</b>) tiene asociado otro (el <b>dual</b>). Si el primal maximiza con restricciones ≤, el dual minimiza con restricciones ≥, y los roles se invierten: las restricciones del primal se vuelven variables del dual.</p>
  <p><b>Los tres teoremas:</b></p>
  <ul>
  <li><b>Dualidad débil:</b> cualquier solución factible del dual acota superiormente al primal. Te da una cota sin resolver.</li>
  <li><b>Dualidad fuerte:</b> en el óptimo, ambos valores son <b>iguales</b>.</li>
  <li><b>Holgura complementaria:</b> la condición que las conecta.</li>
  </ul>
  <p class="fx">x<sub>j</sub> · (costo reducido<sub>j</sub>) = 0   y   y<sub>i</sub> · (holgura<sub>i</sub>) = 0</p>
  <p><b>Qué significa en palabras</b>, que es como conviene recordarlo:</p>
  <ul>
  <li>Si una <b>restricción no está activa</b> (le sobra holgura), su variable dual vale <b>cero</b>. Un recurso que sobra no vale nada.</li>
  <li>Si una <b>variable dual es positiva</b>, su restricción está <b>activa</b>. El recurso se agotó y por eso tiene valor.</li>
  <li>Si una <b>variable primal es positiva</b>, la restricción dual asociada se cumple con igualdad.</li>
  </ul>
  <p><b>La interpretación económica</b> es lo que hace útil todo esto: la variable dual y<sub>i</sub> es el <b>precio sombra</b> del recurso i — cuánto mejoraría el objetivo si tuvieras una unidad más de ese recurso.</p>`,
  ojo:'La holgura complementaria sirve para verificar optimalidad sin resolver el dual completo: si tienes una solución primal candidata, las condiciones te dicen qué restricciones duales deben cumplirse con igualdad, y de ahí despejas las duales. Es una pregunta de prueba muy frecuente.'
 }
 ]
},

/* ---- PM · PROGRAMACIÓN ENTERA ---- */
{
 id:'pm-entera', ramo:'pm', tag:'Semana 3', sem:3,
 titulo:'Programación entera y branch and bound',
 bajada:'Cuando las variables tienen que ser enteras: relajación lineal y ramificación. Materia del Control 1.',
 min:30,
 secciones:[
 {
  t:'El problema y por qué no basta con redondear',
  h:`<p>Muchas variables no admiten decimales: número de camiones, de personas, de máquinas. Y las variables <b>binarias</b> (0 o 1) modelan decisiones de sí/no — abrir o no una planta, elegir o no un proyecto.</p>
  <p>Eso da un <b>problema de programación entera</b> (PLE): igual que un PL, pero con la restricción extra de que ciertas variables sean enteras.</p>
  <p><b>La tentación es resolver el PL normal y redondear. No funciona</b>, por dos razones:</p>
  <ul>
  <li><b>Puede quedar infactible.</b> Si la solución relajada es x = 4,7 y la restricción es x ≤ 4,7, redondear hacia arriba te saca de la región factible.</li>
  <li><b>Puede quedar lejos del óptimo.</b> El verdadero óptimo entero puede estar en un punto completamente distinto, no en el vecino del fraccionario.</li>
  </ul>
  <p>Por eso hace falta un método propio.</p>
  <p><b>Y ojo con algo importante:</b> agregar la restricción de integralidad hace el problema <b>mucho más difícil</b>. El PL se resuelve en tiempo polinomial; el entero es NP-difícil. No es un detalle menor, es un salto de categoría.</p>`
 },
 {
  t:'Relajación lineal',
  h:`<p>La <b>relajación lineal</b> consiste en resolver el problema <b>ignorando la restricción de que las variables sean enteras</b>. Queda un PL común que resuelves con simplex.</p>
  <p>Y acá está lo clave: <b>la relajación te da una cota</b>.</p>
  <p class="fx">En maximización:  valor de la relajación ≥ óptimo entero</p>
  <p><b>Por qué:</b> la región factible del problema relajado <b>contiene</b> a la del entero — los puntos enteros son un subconjunto de todos los puntos. Si optimizas sobre un conjunto más grande, no puedes obtener menos.</p>
  <p><b>Dos casos al resolverla:</b></p>
  <ul>
  <li>Si la solución sale <b>entera por casualidad</b> → ya terminaste, ese es el óptimo del problema entero</li>
  <li>Si sale <b>fraccionaria</b> → tienes una cota superior y hay que ramificar</li>
  </ul>`,
  ojo:'Esa cota es lo que hace eficiente a branch and bound. Sin ella tendrías que revisar todas las combinaciones enteras posibles, que crecen exponencialmente. La cota te permite descartar ramas completas sin explorarlas.'
 },
 {
  t:'Branch and bound',
  h:`<p>El método construye un <b>árbol</b>: cada nodo es un subproblema con restricciones extra.</p>
  <p><b>Ramificar (branch).</b> Tomas una variable que salió fraccionaria, digamos x = 4,7, y creas <b>dos subproblemas</b>:</p>
  <p class="fx">Rama izquierda: x ≤ 4    ·    Rama derecha: x ≥ 5</p>
  <p>Fíjate que ninguna solución entera se pierde: todo entero cumple una u otra. Lo que sí eliminas es el pedazo fraccionario entre 4 y 5, que es justo lo que estorbaba.</p>
  <p><b>Acotar (bound).</b> Vas guardando la <b>mejor solución entera encontrada hasta ahora</b>, llamada incumbente. Ese valor es tu cota inferior en maximización.</p>
  <p><b>Podar.</b> Un nodo se descarta sin seguir explorándolo por tres motivos:</p>
  <table class="tb"><tr><th>Motivo</th><th>Qué pasó</th></tr>
  <tr><td><b>Por infactibilidad</b></td><td>El subproblema no tiene solución</td></tr>
  <tr><td><b>Por integralidad</b></td><td>La solución salió entera. Si es mejor que la incumbente, la reemplaza</td></tr>
  <tr><td><b>Por cota</b></td><td>La relajación del nodo es <b>peor</b> que la incumbente. Ninguna solución de esa rama puede superarla, así que no vale la pena mirarla</td></tr>
  </table>
  <p>El algoritmo termina cuando <b>no quedan nodos activos</b>. La incumbente final es el óptimo entero.</p>`,
  ojo:'La poda por cota es el corazón del método y la que más se pregunta. La justificación: si en el mejor de los casos esa rama da 18 y ya tienes una solución entera de 20, no hay nada que buscar ahí. Descartas todo el subárbol de un viaje.'
 },
 {
  t:'Ejemplo mínimo',
  h:`<p>Supón que maximizas y la relajación en la raíz da <b>z = 23,5</b> con x₁ = 4,7.</p>
  <ol>
  <li><b>Raíz:</b> z = 23,5, fraccionaria. Como el objetivo tiene coeficientes enteros, ya sabes que el óptimo entero es <b>a lo más 23</b></li>
  <li><b>Ramificas</b> en x₁ ≤ 4 y x₁ ≥ 5</li>
  <li><b>Nodo x₁ ≤ 4:</b> da z = 21 con solución entera → se vuelve la <b>incumbente</b>. Cota inferior = 21</li>
  <li><b>Nodo x₁ ≥ 5:</b> la relajación da z = 20,8. Como 20,8 &lt; 21, <b>se poda por cota</b> — ninguna solución entera de esa rama puede superar 21</li>
  <li><b>No quedan nodos.</b> El óptimo entero es <b>z = 21</b></li>
  </ol>
  <p>Fíjate que nunca exploraste el subárbol de la derecha. Esa es toda la gracia del método.</p>`,
  ojo:'Truco útil cuando los coeficientes del objetivo son enteros: si la relajación da 23,5, puedes redondear la cota a 23 inmediatamente. Se llama redondeo de la cota y a veces te permite podar antes.'
 }
 ]
}

]);
