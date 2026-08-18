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

## Pendiente

- SQL1 a SQL4
- Vistas, procedimientos almacenados, triggers
- Conexión por Python y gráficos

## Estado actual

Gabo ya rindió un control y dice que va bien. **No es prioridad** por ahora.

## Cómo trabajar este ramo

Gabo encuentra Bases de Datos complejo, así que **acá sí quiere ejercicios**: hay que proponérselos y enseñarle a resolverlos, no solo darle teoría. A diferencia de Modelos Estocásticos, donde los hace solo.

Concretamente:
- Proponer ejercicios propios cuando no haya material del ramo a mano
- Resolverlos explicando el razonamiento paso a paso, no solo el resultado
- Que las guías nuevas de `bd.js` traigan sección de ejercicios con solución explicada

## Cómo agregar una guía

1. Edita `app/guias/bd.js` — agrega un objeto al final del array, antes del `]);`
2. Copia la estructura de una existente. Campos: `id`, `ramo:'bd'`, `tag`, `sem`, `titulo`, `bajada`, `min`, `secciones[]`
3. Cada sección lleva `t` (título) y luego `h` (HTML), `code`, `ojo` o `ej`
4. Sube la versión en `app/sw.js` y en el `v__` de `app/index.html`
5. Verifica: `node --check app/guias/bd.js`
6. Gabo hace: `cd ~/Desktop/Semestre && git push origin master`
