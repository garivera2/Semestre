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
