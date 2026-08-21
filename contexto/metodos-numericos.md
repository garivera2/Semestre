# Métodos Numéricos — contexto del ramo

> Lee este archivo completo antes de trabajar. Contiene todo lo que necesitas saber del ramo.

## Identificación

- **Código:** IOC 3205 · NRC 8221 · 6 créditos
- **Profesor:** Harvey Hernández Suárez — hehernandez@miuandes.cl
- **Canvas:** curso id **48721** en `https://uandes.instructure.com`
- **Requisitos:** Cálculo II, Programación
- **Libro guía:** Chapra & Clough, *Applied Numerical Methods with Python for Engineers and Scientists*, McGraw-Hill 2022

## Horario

| Día | Bloque | Sala |
|---|---|---|
| Miércoles 08:30–10:20 | Laboratorio (calificado) | BIB COMP 2 |
| Viernes 13:30–16:20 | Cátedra | H-011 |

## Evaluaciones y ponderaciones

```
NP = 0,60·(prom. Pruebas) + 0,25·(prom. Laboratorios) + 0,15·(prom. Controles)
NF = 0,60·NP + 0,25·Examen + 0,15·(prom. Tareas)     [si NP ≥ 3,95]
Si NP < 3,95  →  NF queda topada en 3,9
```

Aprueba con **NF ≥ 3,95 y NP ≥ 3,95**.

**Eximición** (voluntaria): NP ≥ 5,0, aprobar todas las pruebas y controles, y promedio de pruebas ≥ 4,5. Si se exime, la nota final es la NP.

### Fechas

| Fecha | Evaluación |
|---|---|
| 31 ago | Tarea 1 (módulos I-III) |
| 11 sep | Control 1 teórico |
| 14 sep | **Prueba 1** — módulos I a IV |
| 5 oct | Tarea 2 |
| 21 oct | Control 2 teórico |
| 22 oct | **Prueba 2** — módulos V y VI |
| 6 nov | Control 3 teórico |
| 9 nov | **Prueba 3** — módulo VII |
| 10 nov | Tarea 3 |
| 24 nov | **Examen** — todos los módulos |

Laboratorios calificados casi todos los miércoles: L1 12-ago, L2 19-ago, L3 26-ago, L4 2-sep, L5 9-sep, L6 30-sep, L7 7-oct, L8 14-oct, L9 21-oct, L10 4-nov, L11 18-nov.

## Módulos

- **I** — Introducción y error numérico. NumPy/SciPy/Matplotlib, álgebra lineal dispersa, precisión finita
- **II** — Raíces. Bisección y métodos abiertos, 1 variable
- **III** — Interpolación. Lineal, splines, multidimensional
- **IV** — Integración numérica. Datos muestreados, funciones 1D, multivariable
- **V** — Diferenciación numérica. Datos, funciones, Jacobianos y Hessianos
- **VI** — EDOs. Familias de métodos, orden superior, valores iniciales y de frontera, rigidez
- **VII** — Optimización. Lineal con restricciones, no lineal, global

## Cronograma clase a clase

| Fecha | Contenido | Capítulos del libro |
|---|---|---|
| 7 ago | Presentación + error numérico | Cap 4 |
| 12 ago | **L1** NumPy, SciPy, Matplotlib | — |
| 14 ago | Álgebra lineal, eliminación gaussiana, LU, condicionamiento | Cap 8, 9, 10, 11 |
| 19 ago | **L2** Álgebra lineal con Python | — |
| 21 ago | Raíces de funciones 1D | Cap 5, 6 |
| 26 ago | **L3** Raíces unidimensionales | — |
| 28 ago | Interpolación polinomial y splines | Cap 17, 18 |
| 2 sep | **L4** Interpolación 1D | — |
| 4 sep | Integración numérica | Cap 19, 20 |
| 9 sep | **L5** Integración | — |
| 25 sep | Diferenciación numérica 1D | Cap 21 |
| 30 sep | **L6** Diferenciación numérica | — |
| 2 oct | Diferenciación parcial y sistemas no lineales | Cap 12, 21 |
| 7 oct | **L7** Sistemas no lineales | — |
| 9 oct | Problemas de valor inicial, EDO escalares | Cap 22 |
| 14 oct | **L8** Métodos RK paso constante | — |
| 16 oct | PVIs vectoriales y paso adaptativo | Cap 22, 23 |
| 21 oct | **L9** EDOs con paso adaptativo | — |
| 30 oct | Optimización local | Cap 7 |
| 4 nov | **L10** Optimización local | — |
| 13 nov | Álgebra dispersa y optimización global | Material adicional |
| 18 nov | **L11** Sparse y optimización global | — |

## Reglas del laboratorio

Se rinde presencial e individual, con filtro de IP.

- **Permitido:** documentación oficial de SciPy/NumPy, apuntes manuscritos, formulario físico
- **Prohibido:** IA de cualquier tipo, navegador con IA integrada, IDE distinto de Jupyter vía Chrome (nada de VSCode, Spyder), computador personal, tablet, celular

## Guías ya escritas

Están en `app/guias/mn.js`:

1. Modelación matemática y métodos numéricos (semana 1)
2. Error numérico — Cap 4 (semana 1)
3. Fundamentos de Python (semana 2)
4. Sistemas de ecuaciones lineales — Cap 8-11 (semana 2)
5. Laboratorio 1 · Serie de Taylor (semana 2)
6. Programación con Python (semana 3)

## Apuntes y material acumulado

`contexto/apuntes-mn.md` guarda los apuntes de clase transcritos semana a semana, el
inventario de archivos de Canvas y el desglose de las ayudantías. Es la base para armar
el resumen de la Prueba 1. Cada semana nueva se agrega ahí.

## Pendiente

- Guía de raíces (Cap 5-6) para la clase del 21 de agosto
- Guías de laboratorios L2 en adelante

## Cómo Gabo estudia este ramo

Quiere entender el **fundamento** antes que la implementación, porque las pruebas son a mano. Lo que necesita es la lógica del método y la justificación de las fórmulas, más el equivalente en Python para el laboratorio.

**Ejercicios: sí, pero en el chat, no en las guías.** El ramo es complejo, así que hay que proponerle ejercicios y enseñarle a resolverlos. Eso se hace ping-pong en la conversación: se le plantea un ejercicio, él lo responde, y recién ahí viene el desarrollo paso a paso explicando el porqué de cada paso, no solo el resultado.

**Python: no es experto.** Gabo sabe la lógica matemática pero la sintaxis de Python le cuesta. Hay que explicarle la notación cuando aparezca (qué es un `lambda`, qué es un array vs una función, por qué falla algo) y darle siempre la forma **más intuitiva y explícita**, no la más elegante: `def` antes que `lambda`, bucles explícitos antes que comprensiones, nombres largos antes que abreviados. Y darle plantillas de código que él pueda rellenar, porque en el laboratorio va con apuntes a mano.

Las guías de `mn.js` llevan el **fundamento** (teoría, justificación de fórmulas, código Python de referencia). No se cargan de baterías de ejercicios resueltos: el dashboard se pone pesado y no es para eso.

## Repasos de controles y pruebas

Sección **aparte de las guías**, en `app/repasos/mn.js`. Acá va, por cada control/prueba:

- **Qué materia entra** y las **fórmulas** que hay que saber
- Un **checklist de ejercicios** de Canvas: cuáles conviene hacer y por qué

Los ejercicios **no se resuelven ahí** — solo se listan. La resolución es ping-pong en el chat.

Cuando Gabo pida "arma el repaso del Control X", hay que:

1. Revisar Canvas de este ramo y ver qué controles, pruebas y ayudantías pasadas hay
2. Escribir el resumen de materia y el formulario
3. Armar el checklist indicando de cada ejercicio **por qué sirve** para esa evaluación
4. Agregarlo a `app/repasos/mn.js` siguiendo la estructura que está comentada al inicio del archivo
5. Subir el `CACHE` de `app/sw.js` y el `v__` de `app/index.html`
6. Verificar: `node --check app/repasos/mn.js`

**No mezclar esto con las guías.** Las guías son la materia; los repasos son la preparación de una evaluación concreta.

## Cómo agregar una guía

1. Edita `app/guias/mn.js` — agrega un objeto al final del array, antes del `]);`
2. Copia la estructura de una guía existente. Campos: `id`, `ramo:'mn'`, `tag`, `sem`, `titulo`, `bajada`, `min`, `secciones[]`
3. Cada sección lleva `t` (título) y luego `h` (HTML), `code` (bloque de código), `ojo` (advertencia) o `ej` (ejercicios), según corresponda
4. Sube la versión en `app/sw.js` y en el `v__` de `app/index.html`
5. Verifica que no haya errores: `node --check app/guias/mn.js`
6. Gabo hace: `cd ~/Desktop/Semestre && git push origin master`
