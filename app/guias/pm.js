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
}

]);
