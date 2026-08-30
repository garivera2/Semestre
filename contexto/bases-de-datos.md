# Bases de Datos — contexto del ramo

> Lee este archivo completo antes de trabajar.

## Identificación

- **Profesores:** Carlos Díaz (cdiaz1@miuandes.cl), Maximiliano García, Andrés Howard
- **Handouts:** Matías Recabarren (mrecabarren@miuandes.cl)
- **Canvas:** curso id **47770** en `https://uandes.instructure.com`

## Horario

| Día | Bloque | Sala |
|---|---|---|
| Jueves 16:30–19:20 | Cátedra | H-108 |

Los **controles se rinden los jueves**.

## Evaluaciones y ponderaciones

```
NF = 0,20·Trabajo semanal + 0,40·Prom. evaluaciones de aplicación + 0,40·Examen
```

**Condición de aprobación:** se exige **≥ 4,0 en cada componente por separado** (trabajo semanal, promedio de aplicación y examen), además de NF ≥ 4,0. Si falla alguno, la nota final se trunca a **3,9**. **No hay eximición.**

Las cinco evaluaciones de aplicación valen **8% cada una**.

| Fecha | Evaluación |
|---|---|
| dom 16 ago | Cierre de inscripción de equipos (grupos de 3) |
| jue 3 sep | **C1** Modelación |
| jue 24 sep | Control práctico grupal en servidor (entrega 23:59) |
| jue 8 oct | **C2** SQL básico |
| jue 29 oct | **C3** SQL avanzado |
| jue 19 nov | **C4** Vistas, funciones, triggers e índices |
| jue 26 nov | **Examen** |

### Entregas semanales en Canvas (vencen 23:59)

| Fecha | Entregas |
|---|---|
| mié 12 ago | BD-ER-1, BD-ER-2 |
| mié 19 ago | BD-FN-1, BD-MR-1, BD-MR-2 |
| mié 26 ago | BD-AR-1, BD-AR-2, BD-SQL1-1 |
| mié 9 sep | BD-SQL2-1 |
| mié 23 sep | BD-SQL3-1/2, BD-SQL4-1/2/3 |

Los códigos son sigla del tema + número: **ER** Entidad-Relación, **MR** Modelo Relacional, **FN** Formas Normales, **AR** Álgebra Relacional, **SQL1–4** los de SQL.

## Formato de los controles

1. **Fase individual** — 45 min. Versión acotada para demostrar preparación personal. En C1 cada estudiante propone su propio modelo
2. **Receso** — 15 min
3. **Fase grupal** — 120 min. Equipos estables de 3, entregan una única solución

Se aplica a C1–C4. El control grupal en servidor no tiene fase individual.

**Todo en papel y sin tecnología.**

## Trabajo semanal (20%)

Se construye con: quizzes de Canvas, ejercicios individuales, ejercicios grupales y desafíos en las sesiones de repaso. Los **días de control no dan puntos** de trabajo semanal.

Metodología: el material se publica **antes** de la clase y hay que llegar habiéndolo revisado. La clase es para aclarar dudas y resolver problemas en papel.

## Temario

Entidad-Relación · Modelo Relacional · Formas Normales · Álgebra Relacional · SQL1 DDL y DML · SQL2 SELECT · SQL3 SELECT anidados · SQL4 JOIN · SQL VIEW · Procedimientos almacenados · Triggers · Conexión por Python · Gráficos en Python

**Herramienta de diagramas:** yEd Graph Editor (online, gratis)
**Motor:** PostgreSQL

## Guías ya escritas

Están en `app/guias/bd.js`:

1. Entidad-Relación (semana 2) — 3 ejercicios
2. Modelo Relacional (semana 3) — 5 ejercicios, incluye un caso completo tipo control
3. Formas Normales (semana 3) — 5 ejercicios, incluye cierre de atributos y 3FN vs BCNF
4. Álgebra Relacional (semana 4) — 4 ejercicios, incluye división y auto-join con rho
5. Clase 03 · De planilla a 3FN (semana 3) — 7 secciones, 4 ejercicios. Cubre el PDF
   `clase03-propuesta.pdf` del profe Díaz completo: el método identificar-conectar-separar-verificar,
   el quiz de la planilla (diseño A vs B) y el ejercicio final de la editorial de revistas resuelto
   paso a paso, con los cinco detalles que deciden el puntaje.
6. Simulacros de C1 (semana 5) — 4 ensayos con el formato real: fase individual de 45 min
   (Veterinaria, Torneo deportivo) y fase grupal de 120 min (Aerolínea regional, Cadena de
   farmacias), con solución y pauta de autocorrección sobre 12 puntos.
7. SQL2 · SELECT (semana 6) — 7 secciones, 4 ejercicios. WHERE, ORDER BY, agregación,
   GROUP BY vs HAVING y el orden de ejecución.

## Repasos en la sección Pruebas del dashboard

Van en `app/repasos/bd.js` (estructura distinta a las guías, documentada en el encabezado del archivo).

- **bd-c1** · C1 Modelación, 3 de septiembre. Siete secciones de resumen (qué entra, formato,
  método del profe, formulario ER→MR, formulario de formas normales, los siete errores caros,
  qué hacer los últimos 10 min) más un checklist de 11 ejercicios.

## Notación del profe (del cheatsheet de la clase 04)

Importa porque difiere del estándar y conviene escribir como él:

- Álgebra relacional: **solo cuatro operadores** — σ selección, π proyección, ⋈ reunión
  condicional y ⋈ reunión natural. No usa división, diferencia, unión ni producto cartesiano.
- SQL: `INT` (no INTEGER), `DECIMAL(10,2)` (no NUMERIC), **FK inline** con `REFERENCES`
  en la columna en vez de `FOREIGN KEY (...)` al final, tablas en `PascalCase` y columnas
  en `camelCase`. PK compuesta sí va como línea aparte al final.
- El cheatsheet está en Canvas, carpeta Cheatsheet: hay de las clases 02, 03, 04, 06, 07 y 09.
  El de la 04 se bajó (`clase04_cheatsheet.pdf`); los de 06 y 07 todavía no.

## Pendiente

- SQL2 a SQL4 (la guía de SQL2 ya está escrita; falta SQL3 y SQL4)
- Vistas, procedimientos almacenados, triggers
- Conexión por Python y gráficos

## Estado actual

**Al 28 de agosto:** rindió los tres quizzes del 26 (BD-AR-1, BD-AR-2, BD-SQL1-1) y le fue bien.
El control individual y el grupal de esa semana también salieron bien; dice que entendió todo.

**Lo que viene ahora: C1 Modelación, jueves 3 de septiembre.** Es de ER + MR + FN, NO de
Álgebra Relacional ni SQL. Formato: 45 min individual (cada uno propone su propio modelo) +
120 min grupal, todo en papel. Después viene SQL2 (SELECT) con entrega BD-SQL2-1 el 9 de septiembre.

Gabo ya rindió un control anterior y dice que va bien.

**Aviso del profe (lámina 21 de la clase 03):** comparó las tasas de perfectos de este semestre
contra ocho semestres anteriores con test de Fisher y corrección Holm. FN-1 saltó de 10% a 65%,
MR-1 de 38% a 89%. Su lectura textual: "es una señal para verificar comprensión, no una acusación
individual". Traducción práctica: **la fase individual del C1 (3 de septiembre) va a apretar**,
porque es donde se verifica comprensión sin tecnología. Estudiar los ejercicios a mano es lo que rinde.

## Cómo trabajar este ramo

Gabo encuentra Bases de Datos complejo, así que **acá sí quiere ejercicios**: hay que proponérselos y enseñarle a resolverlos, no solo darle teoría. A diferencia de Modelos Estocásticos, donde los hace solo.

Concretamente:
- Proponer ejercicios propios cuando no haya material del ramo a mano
- Resolverlos explicando el razonamiento paso a paso, no solo el resultado
- Que las guías nuevas de `bd.js` traigan sección de ejercicios con solución explicada

## Repasos de controles y pruebas

Sección **aparte de las guías**, en `app/repasos/bd.js`. Acá va, por cada control/prueba:

- **Qué materia entra** y las **fórmulas** que hay que saber
- Un **checklist de ejercicios** de Canvas: cuáles conviene hacer y por qué

Los ejercicios **no se resuelven ahí** — solo se listan. La resolución es ping-pong en el chat.

Cuando Gabo pida "arma el repaso del Control X", hay que:

1. Revisar Canvas de este ramo y ver qué controles, pruebas y ayudantías pasadas hay
2. Escribir el resumen de materia y el formulario
3. Armar el checklist indicando de cada ejercicio **por qué sirve** para esa evaluación
4. Agregarlo a `app/repasos/bd.js` siguiendo la estructura que está comentada al inicio del archivo
5. Subir el `CACHE` de `app/sw.js` y el `v__` de `app/index.html`
6. Verificar: `node --check app/repasos/bd.js`

**No mezclar esto con las guías.** Las guías son la materia; los repasos son la preparación de una evaluación concreta.

## Cómo agregar una guía

1. Edita `app/guias/bd.js` — agrega un objeto al final del array, antes del `]);`
2. Copia la estructura de una existente. Campos: `id`, `ramo:'bd'`, `tag`, `sem`, `titulo`, `bajada`, `min`, `secciones[]`
3. Cada sección lleva `t` (título) y luego `h` (HTML), `code`, `ojo` o `ej`
4. Sube la versión en `app/sw.js` y en el `v__` de `app/index.html`
5. Verifica: `node --check app/guias/bd.js`
6. Gabo hace: `cd ~/Desktop/Semestre && git push origin master`
