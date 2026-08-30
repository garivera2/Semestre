# Métodos Numéricos — apuntes de clase y material del curso

> Archivo de acumulación. Cada semana se agrega lo nuevo. Sirve de base para armar
> el resumen de la Prueba 1 (14 sep, módulos I a IV) y los controles teóricos.

## Material disponible en Canvas (curso 48721 · Archivos)

| Archivo | Qué es | Fecha |
|---|---|---|
| `a1_enunciado.ipynb` | Ayudantía 1 — enunciado (Taylor, error de truncamiento) | 11 ago |
| `a1_pauta.ipynb` | Ayudantía 1 — **pauta resuelta** (220 KB, con outputs) | 11 ago |
| `A2_LinAlg.ipynb` | Ayudantía 2 — álgebra lineal con NumPy/SciPy | 18 ago |
| `IOC3205-2026ii_GuiaJupyterLab.pdf` | Guía de JupyterLab del ramo | 11 ago |

Labs 1 y 2 ya rendidos y subidos por Gabo.

---

## Semana 1 — Clase 1 (7 ago) · Capítulo 4: error numérico

### Motivación: EDO de distribución de calor
- Modelo: ∂T/∂t − α∇²T = 0 (distribución de calor en espacio-tiempo).
- Caso unidimensional: ∂T/∂t − α ∂²T/∂x² = 0 → es una **EDP**.
- Cambio de variable u = x/(2√(αt)) reduce la EDP a una **EDO ordinaria**:
  d²T/du² + 2u·dT/du = 0.
- Se integra por variables separables: con h := T', queda h' + 2uh = 0 → EDO de 1er
  orden → h = K·e^(−u²) → T = K∫e^(−u²)du.
- **El punto:** esa integral no tiene primitiva elemental. De ahí nacen los métodos numéricos.

### Soluciones numéricas
Alternativas que simplifican el análisis funcional, diferencial e integral a procesos algebraicos.

Estrategia conceptual ←→ marco matemático → **análisis numérico**, que se abre en tres:

| Rama | Qué responde |
|---|---|
| Algoritmo de cálculo | los pasos específicos para llegar al objetivo |
| Análisis de convergencia | la velocidad con que se llega al objetivo |
| Análisis del error | la desviación de la solución |

### Características de los métodos numéricos
- Son **aproximados**.
- Estructurados y sin ambigüedad.
- Manipulan y gestionan números dentro de funciones.
- Tienen **problemas de convergencia** (números negativos, etc.).

### Análisis de error: exactitud vs precisión
- **Exactitud:** qué tan cerca se está de la solución analítica.
- **Precisión:** dispersión de los resultados entre sí.
- Se puede ser *preciso pero inexacto* (dardos agrupados lejos del centro) — el dibujo
  de la diana es la imagen mental del concepto.
- **Inexactitud = sesgo** (desvío sistemático) → incertidumbre.
- Distancia del punto al objetivo = error.

### Clasificación del error
```
Error
├── Directos (error numérico)
│   ├── Truncamiento — asociado al MODELO / simplificación
│   │     (modelo más específico → resultado más preciso pero mayor complejidad)
│   └── Redondeo — asociado al COMPUTADOR
└── Indirectos — factores externos: error humano, falla de equipo, ruido, montaje
```

### Fórmulas del error
- **Error total (en número):**
  - Et (true) = valor exacto − valor aproximado
  - Ea (aproximado) = mejor aproximación − aproximación anterior
- **Error relativo (en porcentaje):** εt = |Et / valor de referencia| × 100 [%]
- **Criterio de parada:** εa ≤ εs, con εs = 0,5 × 10^(2−n) [%] para n cifras significativas.

### Error de truncamiento y serie de Taylor
La serie de Taylor puede aproximar cualquier función suave (continua a nivel cero, derivadas
continuas en el intervalo):

f(x) = f(a) + f'(a)(x−a) + f''(a)/2·(x−a)² + … + f⁽ᵏ⁾(a)/k!·(x−a)^k + …

- El **residuo** permite estimar el error de truncamiento en términos cuantitativos:
  R_n = f⁽ⁿ⁺¹⁾(c)/(n+1)! · (x−a)^(n+1), con c ∈ [a, x].
- n = cantidad de veces que se iteró. Sirve para evaluar el error de la función en
  distintas iteraciones.

### Notas de laboratorio (Colab / notebook de Python)
- `import numpy as np` — se renombra np para llamarla así. Trae funciones matemáticas.
- `from math import factorial` — hay que llamar explícitamente a la función factorial.
- **La serie de Taylor trabaja en radianes.** Para sen(60°): `x = 60*np.pi/180`.
- Radián = cuántas veces cabe el radio en el perímetro; es adimensional.
- Patrón visto: valor real con `np.sin(x)` → construir la serie término a término →
  Et = y_verdadero − y_aproximado → εt = 100·abs(Et/y_verdadero).

### Error de redondeo y precisión finita
- Notación de punto flotante (`float`): ±S × b^e, con S mantisa, b base, e posición.
- La cantidad de bits determina cuántos números se pueden representar en la máquina.
- Los irracionales (π, √3, …) nunca se representan exactos: **memoria finita**.
- **Overflow:** no hay espacio para el número (demasiado grande).
- **Underflow:** el número es más pequeño que lo que la máquina puede representar.
- **El intercambio central:** más cálculos → menor error de truncamiento pero mayor error
  de redondeo. Más iteraciones, más error acumulado.

---

## Semana 2 — Clase 2 (14 ago) · Capítulos 8-11: álgebra lineal

### Métodos de solución de Ax = b
| Método | Veredicto |
|---|---|
| Gráfico | Aproximado ✗, limitado a 3 dimensiones |
| Regla de Cramer | Exacto pero **ineficiente** ✗ — expansión de cofactores |
| **Eliminación** | **Eficiente** ✓ |

- Cramer: xi = |W con la columna i reemplazada por b| / |W|.
- Determinante por cofactores: |W| = Σ (−1)^(k+j)·w_kj·|M_kj|.
- La existencia de solución única implica det(A) ≠ 0.
- La eliminación combina linealmente 2 vectores para generar un tercero equivalente con
  una componente = 0. Deben ser **linealmente independientes** para que entreguen
  información nueva.

### Eliminación gaussiana (naive)
Transformar el sistema original a **triangular superior**:

```
Ax = b  →  matriz ampliada [A|b] = Q  →  reducción  →  [U|c]
```

Fórmula de la reducción: q_i* = q_i − (a_i1/a_11)·q_1

- q_1 = fila pivote, a_11 = elemento pivote, (a_i1/a_11) = factor de escalamiento.
- La matriz resultante es **equivalente** a A, solo que ahora es fácil despejar
  (sustitución hacia atrás).
- Ventaja extra: el determinante de una triangular superior es el producto de su diagonal.

### Normas matriciales
Miden el "tamaño" de la matriz — la magnitud de la amplificación como operador lineal.

| Denominación | Notación | Cálculo |
|---|---|---|
| Frobenius | ‖·‖_f | √(ΣΣ a_ij²) |
| Suma en fila o columna | ‖·‖_∞ | max_k (Σ \|a_ij\|) |
| Espectral (norma-2) | ‖·‖_2 | √(eigv_max( AᵀA )) |

### Complejidad temporal
- **Flops:** cantidad de operaciones de punto flotante. Es independiente de la potencia
  del equipo de cómputo — por eso se usa como medida.
- **Big O:** O(fun(n)) significa que al terminar, el algoritmo habrá hecho al menos
  fun(n) cálculos para una entrada de tamaño n.
- Escala: O(1) constante < O(n log n) < O(n^k).
- **Eliminación gaussiana: O(n³).**
- La complejidad completa de un código queda anclada al O(n^k) con **k mayor**: el bloque
  más caro determina y condiciona la eficiencia de todo el programa.

### Matriz inversa y factorización LU
- A·A⁻¹ = I, con A⁻¹ = adj(A)/|A| = [cof(A)]ᵀ/|A| → **O(n!)**, inviable.
- Mejor: eliminación gaussiana n veces.
- **Mejor aún: factorización LU ≈ A.** Permite resolver x para diferentes b sin repetir
  el proceso de eliminación.

```
Ax = b  --elim. Gauss-->  Ux = c  --producto por izquierda-->  LUx = Lc
```

- L se construye durante el proceso de eliminación (guarda los factores) y es
  **triangular inferior**.

### Dudas propias anotadas en clase
- "Ciclo `while`: no sé cuándo termina. `for`: sé dónde termina." → Pendiente de reforzar:
  `for` cuando el número de iteraciones se conoce de antemano, `while` cuando la parada
  depende de una condición (por ejemplo, εa < tolerancia).

---

## Ayudantía 2 — Álgebra Lineal con NumPy y SciPy (`A2_LinAlg.ipynb`)

Estructura: sección 1 de repaso teórico + código, y luego tres ejercicios aplicados.

### Repaso (secciones 1.1 a 1.8)
1.1 Matrices como `ndarray` · matrices especiales (`zeros`, `eye`, …) · indexado y
slicing `[fila, columna]` · operación elemento a elemento vs producto matricial (`@`).
1.2 Nota sobre `np.matrix` (heredado, no usar).
1.3 Determinante y existencia de solución — `det`.
1.4 Normas — `norm`.
1.5 Eliminación de Gauss — `solve`.
1.6 Inversa — `inv`.
1.7 Descomposición LU — `lu`.
1.8 Número de condición — `cond`.

Import base: `from scipy.linalg import det, norm, solve, inv, lu`

### Ejercicio 1 — Armadura de 2 barras (`solve`, `det`, `inv`, `norm`)
Nudo C con barras CA a 50° y CB a 130°, carga vertical de 30 kN hacia abajo.
Equilibrio ΣFx = 0, ΣFy = 0 da:

```
[cos50  cos130] [N_CA]   [ 0]
[sin50  sin130] [N_CB] = [30]
```

- a) Armar A y b como ndarray (`np.radians` para los ángulos) y verificar con `det` que
  la armadura es estable (no singular).
- b) Resolver con `solve` y verificar el **residuo** `norm(A@N - b)`.
- c) Resolver vía `inv(A)@b` y comparar con `norm` de la diferencia. Decir si las barras
  están en tracción o compresión según el signo.

**Conclusión:** det ≠ 0 → solución única. N_CA = N_CB ≈ 19,6 kN, ambas positivas →
**ambas barras en tracción**. `solve` e `inv@b` coinciden (~10⁻¹⁵, redondeo), pero
`solve` es preferible por eficiencia.

### Ejercicio 2 — Corrientes de malla en circuito resistivo (`lu`, `norm`, `det`)
Tres mallas, R1…R6 = 10, 15, 20, 5, 8, 12 Ω; R2 compartida entre mallas 1-2 y R3 entre
2-3; fuente de 100 V solo en la malla 1. Matriz de mallas (LVK):

```
R = [[R1+R2+R4,  -R2,        0     ],
     [-R2,        R2+R3+R5, -R3    ],
     [ 0,        -R3,        R3+R6 ]]
```

- a) Factorizar con `lu` y verificar R = PLU con `norm(R - P@L@U)`.
- b) Calcular `det(R)` como `det(P) * prod(diag(U))` y comparar con `det(R)` directo.
- c) Mover la fuente a la malla 3 (V' = (0,0,60)) y comentar por qué conviene reutilizar
  una única factorización LU en vez de resolver desde cero.

**Conclusión:** PLU reproduce R (dif. ~10⁻¹⁴) y el det desde los factores coincide.
Con varias configuraciones de fuente sobre la misma red conviene factorizar una vez y
reutilizar L y U por sustitución adelante/atrás.

### Ejercicio 3 — Número de condición y sensibilidad (`cond`, `solve`, `norm`)
Dos nodos libres unidos por resortes axiales, matriz de rigidez:

```
K = [[k1+k2, -k2  ],
     [-k2,    k2+k3]]
```

- Bien arriostrada: k1 = 200, k2 = 180, k3 = 220 kN/m
- Casi-mecanismo: k1 = 0,5, k2 = 180, k3 = 0,5 kN/m

- a) `cond(K)` en ambos casos.
- b) Resolver Ku = F con F = (10, 15) kN y comparar desplazamientos.
- c) Aplicar la misma perturbación absoluta δF = (0,3; −0,2) kN y comparar el cambio.

**Conclusión (la más importante del módulo):** el casi-mecanismo tiene κ ≈ 700 contra
κ ≈ 3 de la bien arriostrada. Se manifiesta en (1) desplazamientos mucho mayores para la
misma carga, y (2) frente a la misma incertidumbre en la carga, el cambio en los
desplazamientos es **casi 200 veces mayor**. El **determinante no lo habría anticipado**
(det ≈ 180, nada pequeño); `cond` sí lo detecta. Por eso `cond` es la métrica adecuada
para diagnosticar mal condicionamiento.

---

## Ayudantía 2 de raíces — `scipy.optimize.root_scalar` (repaso para el Laboratorio 3)

PDF de Eduardo Torreblanca. Es el repaso directo del L3. Tres problemas de ingeniería,
todos resueltos en el documento.

### La regla que ordena todo: igualar a cero

`root_scalar` solo busca dónde una función **vale cero**. Cualquier ecuación hay que
reescribirla como f(x) = 0.

| Ecuación original | Lo que defines como f(x) |
|---|---|
| e⁻ˣ = x | f(x) = e⁻ˣ − x |
| x³ = 2x + 5 | f(x) = x³ − 2x − 5 |
| a·sin(x) = bx | f(x) = a·sin(x) − bx |
| ln(x) = 2 − x | f(x) = ln(x) − 2 + x |

En los problemas aplicados esto se traduce en **función de trabajo = modelo − valor de diseño**.

### Elección de método (regla de oro)

| Método | Necesita | Cuándo |
|---|---|---|
| `brentq` | intervalo [a,b] con f(a)·f(b) < 0 | robusto, el default |
| `newton` | x0 y la derivada `fprime` | converge muy rápido si f' existe |
| `secant` | dos puntos x0, x1 | si no tienes derivada |

También disponibles: `bisect`, `toms748`, `halley`.

### El objeto de salida `RootResults`
`.root` · `.converged` · `.flag` · `.iterations` · `.function_calls`

**Siempre verificar `.converged` antes de creerle a `.root`.**

### Problema 1 — Flujo en tuberías (Manning) · `bisect` vs `toms748`
Q = (1/n)·Ah·Rh^(2/3)·S^(1/2), con Ah(θ) = (D²/8)(θ − sinθ), Ph(θ) = Dθ/2, Rh = Ah/Ph.
Datos: D = 0,6 m, n = 0,013, S = 0,001, Qd = 0,05 m³/s, intervalo θ ∈ [0,5 ; 4,5] rad.

- Función de trabajo: f(θ) = Q(θ) − Qd
- Verificar cambio de signo: `f(xl)*f(xu) < 0` → da −0,00714 ✓
- **Resultado: θ = 2,516047 rad en los dos métodos.**
- **bisect: 41 iteraciones. toms748: 5 iteraciones.** (brentq: 10)
- Nivel de llenado h = (D/2)(1 − cos(θ/2)) → **h/D = 0,3462**, o sea la tubería va a
  poco más de un tercio. Menos de 0,5 = va bajo la mitad → tiene sentido físico.
- **Moraleja:** misma raíz con 6 cifras, 8 veces menos iteraciones. Bisección es segura
  pero lenta; toms748 es cerrado *y* rápido.

### Problema 2 — Trayectoria de proyectil · `secant` y no-convergencia
y = y0 + x·tanθ − g·x²/(2(v0·cosθ)²). Δy = 25 pies, x = 250 pies, v0 = 9000 pies/min.
Convertir a SI con 1 pie = 0,3048 m.

- f(θ) = −Δy + x·tanθ − 0,5·g·x²/(v0·cosθ)²
- a) θ0 = π/4, θ1 = 0,9·θ0 → **θ = 16,3987°, 6 iteraciones, converged = True**
- b) θ0 = 1,40 rad, rtol = 0,5×10⁻⁶, maxiter = 6 → **θ = 79,299°, converged = False**,
  flag = "convergence error"
- **Moraleja:** el 79,3° es basura numérica, no una segunda solución. Un método abierto
  puede devolver un número perfectamente formateado y sin sentido físico. Por eso hay que
  mirar `converged` y `flag`, y evaluar f(θr) para validar.

### Problema 3 — Vibraciones · gráfica + `bisect` con iteraciones calculadas
f(ω) = 3·e^(−0,5ω)·cos(ω) + ω − 2, buscar la raíz positiva más pequeña.

- Graficar en [0, 8] para ubicarla visualmente, luego acotar el intervalo.
- Error absoluto objetivo: Es = 0,5·εs·|ωl + ωu| con εs = 0,5×10⁻⁵ (5 cifras significativas)
- Iteraciones: **k = int(log2((ωu − ωl)/Es)) + 1** — el `int(...)+1` hace de techo ⌈·⌉
- Con [0,01 ; 1]: Es = 2,525×10⁻⁶ → **k = 19 iteraciones**, raíz **ω = 0,98361**,
  f(ωr) ≈ −7×10⁻⁷ ✓
- **Ojo del enunciado:** si ωl = 0 entonces Es = 0 y `bisect` lanza error. Hay que
  desplazar el intervalo (ωl = 0,01).
- Otro detalle: `math.exp` y `math.cos` no operan sobre arrays. Para graficar con linspace,
  usar `[f(t) for t in x]` o cambiar a numpy.

### Errores frecuentes que lista el PDF
- `ValueError: f(a) and f(b) must have different signs` → el bracket no encierra raíz. Graficar.
- `RuntimeError: Failed to converge` → subir maxiter o mejorar el punto inicial.
- `TypeError en args` → los parámetros extra van como **tupla**: `args=(a, b)`, no lista.
- `newton` sin `fprime` → scipy usa diferencias finitas: menos preciso y más lento.

---

## Laboratorio 3 — Raíces de funciones escalares 1D (26 ago 2026)

Entregado: `rivera_gabriel_lab3.ipynb`. Rendido el miércoles siguiente a la ayudantía de
`root_scalar`.

### El problema
Sistema mecánico: determinar el radio x [cm] del rodillo inferior bajo una fuerza de
contacto F = 2,0 kN. Capacidad de carga:

F(x) = 10/sqrt(1+(x−5)²) − sqrt(1+(x−5)²) + x − 5

Función de trabajo: **f(x) = F(x) − 2**

La función tiene **dos raíces** en [0,15]: en 3,4438 y en **9,6406**. El enunciado pide
"el mayor tamaño de rodillo", o sea la mayor → intervalo [8, 12] la aísla.

### Resultados correctos (verificados)

| Apartado | Método | Raíz | Iteraciones | Llamadas a f |
|---|---|---|---|---|
| b) | bisect, xtol=1e-6 | 9,640641212 | **22** | 24 |
| c) | toms748, rtol=0,5e-9 | 9,640642142 | 4 | 9 |
| d) | secant, x0=10, x1=12 | 9,640642142 | 6 | **7** |
| f) | newton con fprime | 9,640642142 | 4 | 8 |

- n teórico de bisección: log2(4/1e-6) = 21,93 → **22**. Coincide con las iteraciones reales.
- f(x_r) = 0,000e+00 en todos los casos.
- Derivada (apartado e):

```python
def df(x):
    u = sqrt(1 + (x-5)**2)
    return -10*(x-5)/u**3 - (x-5)/u + 1

df(9.640642142390215)   # = -0.411347
```

### Qué salió bien
- Función de trabajo correcta: F(x) − 2. El −2 de la fuerza de contacto bien puesto.
- Intervalo [8,12] aislando la raíz mayor, con verificación f(8)·f(12) = −0,657 < 0.
- n teórico calculado y coincidente con las 22 iteraciones reales de bisect.
- toms748 con el rtol correcto (0,5×10⁻⁹ para s = 9 cifras).
- Secante con x₁ = x_u = 12 como pedía el enunciado.
- Las cuatro raíces coinciden en 9,640642.

### Qué se perdió (para no repetirlo)
1. **El apartado e) quedó vacío** (0,7 pts): no definió `df(x)`.
2. **f) usó `method='newton'` SIN `fprime`.** Lección clave: *scipy sin `fprime` no ejecuta
   Newton, cae al método de la secante*. El enunciado pedía explícitamente usar la df de e).
3. **No evaluó f(x_r) en ninguna parte**, y el enunciado lo pide literalmente en b), c), d)
   y f) ("Muestre x_r, evalúe f(x_r), ..."). Era una línea por apartado.
4. **g) respuesta discutible:** dijo Newton por menos iteraciones. La eficiencia real se mide
   en **evaluaciones de función**, y ahí gana **secante con 7** (Newton hace 4 iteraciones
   pero cada una cuesta 2 evaluaciones: f y f'). Respuesta más sólida: secante es la más
   eficiente en evaluaciones y no requiere derivada; toms748 es el mejor compromiso cuando
   se necesita garantía de convergencia.
5. Prolijidad: `sol_bisect` calculado dos veces; `Es`/`Es1` duplicados y reasignados;
   `n_teorico1` calculado para toms748 — esa fórmula log2 **solo vale para bisección**,
   porque solo bisección parte el intervalo exactamente a la mitad.

### La conclusión que importa
Los errores **no fueron de concepto** sino de no leer el enunciado hasta el final. Sabía
derivar, sabía qué es `fprime`, y "evalúe f(x_r)" estaba escrito.

**Ritual para los próximos labs (2 minutos al final):** releer cada apartado con lápiz y
tachar lo ya entregado, ítem por ítem. "Muestre x_r ✓ · evalúe f(x_r) ✗ · function_calls ✓
· iterations ✓".

---

## Semana 4 — Clase 4 (28 ago) · Capítulos 17 y 18: INTERPOLACIÓN

> **Nota:** Gabo no asistió a esta clase. Estos apuntes están reconstruidos desde el
> cronograma oficial del ramo (28 ago = "Interpolación polinomial y splines, Cap 17-18") y
> el libro guía Chapra & Clough. **Falta contrastarlos con los apuntes de un compañero o
> con las diapositivas de Canvas** — el profesor puede haber puesto énfasis distinto.
> Lo que sí es seguro: el L4 del 2 de septiembre es "Interpolación 1D".

### El problema: interpolar no es ajustar

Tienes n+1 puntos medidos y quieres estimar el valor de la función **entre** ellos.

| | Interpolación | Regresión (ajuste) |
|---|---|---|
| La curva | pasa **exactamente por** todos los puntos | pasa **cerca** de los puntos |
| Cuándo | los datos son precisos (tablas, mediciones limpias) | los datos tienen ruido/error |
| Objetivo | rellenar huecos | capturar la tendencia |

**Extrapolar** = evaluar fuera del rango de los datos. Siempre riesgoso: el error crece
descontroladamente. Se pregunta.

### El teorema fundamental

> Por n+1 puntos con abscisas distintas pasa **uno y solo un** polinomio de grado ≤ n.

2 puntos → una recta. 3 puntos → una parábola. **El polinomio es único**, lo que cambia es
**cómo lo escribes**. Newton y Lagrange dan el mismo polinomio, con distinta forma.

### Forma 1 — Monomial (la ingenua, NO se usa)

Plantear P(x) = a0 + a1·x + ... + an·x^n e imponer que pase por cada punto genera un sistema
lineal con **matriz de Vandermonde**. Problema: esa matriz está **pésimamente condicionada**
(número de condición enorme) — conecta directo con el módulo de álgebra lineal. Por eso no
se usa aunque sea lo primero que uno piensa.

### Forma 2 — Newton (diferencias divididas)

P(x) = b0 + b1(x−x0) + b2(x−x0)(x−x1) + ... + bn(x−x0)...(x−x(n−1))

Los coeficientes son las **diferencias divididas**:

```
b0 = f(x0)
b1 = f[x1,x0] = ( f(x1) − f(x0) ) / ( x1 − x0 )
b2 = f[x2,x1,x0] = ( f[x2,x1] − f[x1,x0] ) / ( x2 − x0 )
```

En general: f[xi,...,xj] = ( f[xi,...,x(j-1)] − f[x(i+1),...,xj] ) / ( xi − xj )

**Cómo se hace a mano: la tabla triangular.** Ejemplo con f(x) = ln(x) y los puntos
x = 1, 4, 6:

| x | f(x) | 1ª dif. div. | 2ª dif. div. |
|---|---|---|---|
| 1 | 0,000000 | 0,462098 | −0,051873 |
| 4 | 1,386294 | 0,202733 | |
| 6 | 1,791759 | | |

P2(x) = 0 + 0,462098(x−1) − 0,051873(x−1)(x−4)

Evaluando en x = 2: **P2(2) = 0,565844** contra ln(2) = 0,693147 → **error 18,4 %**.

**Ventaja de Newton:** si agregas un punto nuevo, **los coeficientes anteriores no cambian**;
solo se calcula uno más. Ideal cuando quieres subir el grado progresivamente y ver si mejora.

### Forma 3 — Lagrange

P(x) = Σ Li(x)·f(xi), con

```
Li(x) = Π ( x − xj ) / ( xi − xj )      para todo j distinto de i
```

**La idea clave:** cada Li vale **1 en su propio nodo xi y 0 en todos los demás**. Así, al
sumar, cada término "aporta" solo en su punto y el polinomio pasa exactamente por todos.

Caso de 2 puntos (interpolación lineal), que conviene tener memorizado:

P1(x) = f(x0)·(x−x1)/(x0−x1) + f(x1)·(x−x0)/(x1−x0)

**Newton vs Lagrange:** mismo polinomio. Lagrange es más directo de escribir de una vez
(no requiere tabla); Newton es mejor si vas a agregar puntos o quieres estimar el error.

### Error de interpolación

Rn = f[x, xn, ..., x0] · (x−x0)(x−x1)...(x−xn)

Es el **análogo exacto del residuo de Taylor** del Cap 4: donde Taylor usaba la derivada
(n+1)-ésima, acá se usa la diferencia dividida de orden n+1. Como no conoces f, en la
práctica se estima con **el siguiente término de Newton**: se calcula P(n+1) y la diferencia
con Pn sirve de estimación del error.

### EL FENÓMENO DE RUNGE (lo más preguntado del capítulo)

**Subir el grado del polinomio NO garantiza mejorar la aproximación. Muchas veces la empeora.**

Con la función de Runge f(x) = 1/(1+25x²) en [−1,1] y nodos equiespaciados:

| grado | error máximo |
|---|---|
| 5 | 0,433 |
| 10 | 1,916 |
| 15 | 2,108 |
| 20 | **59,822** |

El polinomio se pega bien en el centro pero **oscila violentamente cerca de los extremos**,
y peor mientras más alto el grado.

**Consecuencias prácticas:**
- En la práctica **casi nunca se pasa de grado 5 o 6**.
- Es exactamente el mismo patrón que el error de Taylor lejos del centro: más términos no
  siempre es mejor.
- **De acá nace la necesidad de los splines.**
- (Se puede mitigar usando nodos de Chebyshev en vez de equiespaciados, que se concentran
  en los extremos.)

---

## Capítulo 18 — SPLINES

### La idea

En vez de **un** polinomio de grado alto para todos los puntos, usar **muchos polinomios de
grado bajo**, uno por cada tramo entre puntos consecutivos, pegados entre sí con condiciones
de suavidad.

Cambias "un polinomio de grado 20" por "veinte polinomios de grado 3". Sin oscilaciones.

### Spline lineal
Une los puntos con rectas. Es continuo, pero **la derivada salta** en cada nodo: se ven los
quiebres. Sirve como referencia mental, poco más.

### Spline cuadrático
Polinomios de grado 2 por tramo, con continuidad de f y de f'. Queda un grado de libertad
suelto que hay que fijar arbitrariamente — por eso se prefiere el cúbico.

### Spline cúbico (el estándar)

Un polinomio cúbico por tramo: Si(x) = ai + bi(x−xi) + ci(x−xi)² + di(x−xi)³

Con n+1 puntos hay **n tramos** y **4n incógnitas**. Las condiciones:

| Condición | Cuántas |
|---|---|
| cada tramo pasa por sus dos extremos (continuidad de f) | 2n |
| las **primeras derivadas** coinciden en los nodos interiores | n−1 |
| las **segundas derivadas** coinciden en los nodos interiores | n−1 |
| **condiciones de borde** (faltan 2) | 2 |

Total: 4n. Que la **segunda derivada sea continua** es lo que hace que se vea suave a la
vista — es la condición que distingue al cúbico y lo que hay que saber decir.

### Las condiciones de borde (se preguntan)

| Nombre | Qué impone | Cuándo |
|---|---|---|
| **Natural** | f'' = 0 en los dos extremos | la más común en cursos; el spline "se relaja" |
| **Sujeta (clamped)** | f' = valor dado en los extremos | cuando conoces la pendiente física |
| **Not-a-knot** | f''' continua en el 2° y penúltimo nodo | **el default de SciPy** |

### Polinomio vs spline

| | Polinomio único | Spline cúbico |
|---|---|---|
| Grado | crece con los puntos | siempre 3 |
| Muchos puntos | oscila (Runge) | estable |
| Suavidad | infinita | f, f', f'' continuas |
| Uso real | pocos puntos (≤ 5-6) | el caso general |

---

## Implementación en Python (para el L4 del 2 de septiembre)

```python
import numpy as np
from scipy.interpolate import CubicSpline, interp1d, lagrange
import matplotlib.pyplot as plt

x = np.array([1, 4, 6, 9])
y = np.log(x)

# --- Polinomio interpolante ---
c  = np.polyfit(x, y, len(x)-1)      # coeficientes, grado n
p  = np.polyval(c, 2.0)              # evaluar
pl = lagrange(x, y)                  # objeto polinomio de Lagrange
print(pl(2.0))

# --- Interpolacion lineal / por tramos ---
fl = interp1d(x, y, kind='linear')
fc = interp1d(x, y, kind='cubic')

# --- Spline cubico (lo mas usado) ---
cs  = CubicSpline(x, y)                       # not-a-knot (default)
csn = CubicSpline(x, y, bc_type='natural')    # f''=0 en los bordes
csc = CubicSpline(x, y, bc_type=((1,0.5),(1,0.1)))   # clamped: f' dado

print(cs(2.0))            # evaluar
print(cs(2.0, 1))         # primera derivada en x=2
print(cs(2.0, 2))         # segunda derivada
print(cs.integrate(1, 6)) # integral definida entre 1 y 6

# --- Grafico tipico del lab ---
xf = np.linspace(x.min(), x.max(), 300)
plt.plot(x, y, 'ko', label='datos')
plt.plot(xf, cs(xf), '-',  label='spline cubico')
plt.plot(xf, np.polyval(c, xf), '--', label='polinomio grado n')
plt.legend(); plt.grid(alpha=0.3); plt.show()
```

**Detalles que cuestan puntos en laboratorio:**
- `CubicSpline` exige que **x esté ordenado de menor a mayor**. Si no, tira error.
- El default de `CubicSpline` es **not-a-knot**, no natural. Si el enunciado pide natural,
  hay que escribir `bc_type='natural'` explícitamente.
- `interp1d` está marcada como *legacy* en versiones nuevas de SciPy; para cúbica se prefiere
  `CubicSpline`.
- El objeto `lagrange` es numéricamente inestable con muchos puntos: sirve para mostrar la
  forma, no para calcular con n grande.

## Qué esperar en la prueba a mano (módulo III)

1. **Construir la tabla de diferencias divididas** con 3 o 4 puntos y escribir el polinomio
   de Newton. Es el ejercicio más probable.
2. **Lagrange con 3 puntos**: escribir los tres L_i y armar P2.
3. **Explicar el fenómeno de Runge** y por qué subir el grado puede empeorar.
4. **Contar las condiciones del spline cúbico**: por qué 4n incógnitas y de dónde salen.
5. **Diferenciar interpolación de regresión**, y por qué extrapolar es peligroso.
6. Que Newton y Lagrange dan **el mismo polinomio**, solo escrito distinto.
