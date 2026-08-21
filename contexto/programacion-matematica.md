# Programación Matemática — contexto del ramo

> Lee este archivo completo antes de trabajar.

## Identificación

- **Profesor:** Miguel Carrasco
- **Canvas:** curso id **48499** en `https://uandes.instructure.com`

## Horario

| Día | Bloque | Sala |
|---|---|---|
| Lunes 12:30–15:20 | Cátedra | R-01 |
| Martes 13:30–15:20 | Ayudantía | CEN 101 |

**Patrón útil:** los **controles caen en la ayudantía del martes** y las **pruebas en la cátedra del lunes**. No son bloques extra.

## Evaluaciones

⚠ **Las ponderaciones todavía no están publicadas en Canvas.** El profe publicó solo el calendario (planilla "Programación Mat 202620.xlsx"). Cuando aparezcan, hay que actualizar la calculadora en `app/index.html`, objeto `CALC.pm`.

| Fecha | Evaluación | Contenido |
|---|---|---|
| mar 25 ago | **Control 1** | Modelamiento, programación lineal, simplex, solución gráfica, dualidad, B&B |
| lun 7 sep | **Prueba 1** | Programación lineal, dualidad, flujo en redes, programación entera, no lineal |
| mar 22 sep | **Control 2** | Optimización sin restricciones, condiciones de primer y segundo orden, convexidad |
| ~lun 5 oct | **Prueba 2** | Optimización sin restricciones, gradiente, Newton, con restricciones — *día exacto por confirmar* |
| mar 27 oct | **Control 3** | Optimización con restricciones, KKT caso no convexo |
| lun 9 nov | **Prueba 3** | Optimización con restricciones, programación dinámica |
| lun 16 nov | Prueba recuperativa | Toda la materia |
| mar 17 nov | **Control 4** | Programación dinámica |
| mié 18 nov | Fin de clases | — |
| **mar 1 dic, 13:30–15:20** | **EXAMEN** | Toda la materia |

**Ojo:** el examen del 1 de diciembre es la última evaluación de todo el semestre.

## Temario por bloques

1. **Programación lineal** — modelamiento, forma estándar, solución gráfica, simplex, dos fases / Gran M
2. **Dualidad** — teoremas de dualidad débil y fuerte, holgura complementaria, precios sombra
3. **Programación entera** — branch and bound
4. **Flujo en redes**
5. **Optimización no lineal sin restricciones** — condiciones de primer y segundo orden, convexidad, gradiente, Newton
6. **Optimización no lineal con restricciones** — KKT, caso convexo y no convexo
7. **Programación dinámica**

## Guías ya escritas

Están en `app/guias/pm.js`:

1. **Programación lineal y simplex** (`pm-u1`, semana 1-2) — forma estándar, solución gráfica, simplex, dos fases, dualidad, holgura complementaria, tabla de correspondencia primal–dual
2. **Programación entera y branch and bound** (`pm-entera`, semana 3) — relajación lineal, ramificación, poda por cota, el algoritmo formal del profe (Algoritmo 1), ramificación en binarias, cuándo no hace falta seguir ramificando
3. **Modelamiento: los modelos clásicos** (`pm-modelos`, semana 2) — dieta, transporte balanceado, mochila (binaria/acotada/continua), costo fijo y big-M, localización de plantas, y las restricciones que hay que linealizar

## Repasos de controles y pruebas

Sección **aparte de las guías**, en `app/repasos/pm.js`. Acá va, por cada control/prueba:

- **Qué materia entra** y las **fórmulas** que hay que saber
- Un **checklist de ejercicios** de Canvas: cuáles conviene hacer y por qué

Los ejercicios **no se resuelven ahí** — solo se listan. La resolución es ping-pong en el chat.

Ya escrito: **`pm-c1` · Control 1 · Programación Matemática** (25 de agosto). Siete bloques de resumen — qué entra, formularios de dualidad, modelamiento, PL/gráfico y B&B, errores que cuestan puntos, y plan día por día — más un checklist de 17 ejercicios agrupados en 5 fuentes.

Cuando Gabo pida "arma el repaso del Control X", hay que:

1. Revisar Canvas de este ramo y ver qué controles, pruebas y ayudantías pasadas hay
2. Escribir el resumen de materia y el formulario
3. Armar el checklist indicando de cada ejercicio **por qué sirve** para esa evaluación
4. Agregarlo a `app/repasos/pm.js` siguiendo la estructura que está comentada al inicio del archivo
5. Subir el `CACHE` de `app/sw.js` y el `v__` de `app/index.html`
6. Verificar: `node --check app/repasos/pm.js`

**No mezclar esto con las guías.** Las guías son la materia; los repasos son la preparación de una evaluación concreta.

## Material disponible en Canvas (curso 48499)

Revisado el 20 de agosto de 2026. La pestaña *Archivos* está deshabilitada; todo se llega por **Módulos**.

- **Ayudantías 2026-20** — Ayudantía 1 (11 ago, enunciado + pauta) y Ayudantía 2 (18 ago, solo enunciado por ahora). Son las dos que entran al Control 1.
- **Evaluaciones y Pautas 2026-10** — pautas del semestre pasado, mismo profesor: Controles 1, 2, 3 y recuperativo, y Pruebas 1, 2, 3 y recuperativa.
  - Relevante para el Control 1: **Control 1** (transporte/redes + PL gráfico + dual), **Prueba 1** (PL entero + gráfico + B&B, entera binaria con holgura complementaria, localización de plantas) y **solo el P3 del Control 2** (criterios de poda en B&B).
  - El resto (Controles 2 y 3, Pruebas 2 y 3, recuperativas) es optimización no lineal, KKT y programación dinámica: material de más adelante.
- **Clase 1 (Sec. Bustamante)** — presentación, introducción y un PDF de teoría de juegos.
- **Calendario** — planilla `Programación Mat 202620.xlsx`.
- Ojo: la pauta del Control 1 de 2026-10 trae un error de tipeo en la parte de holgura complementaria (mezcla números de otro problema). El resultado correcto es π₁ = 5/2, π₂ = 1/4, w* = 23,75.

## Apuntes de clase de Gabo

Subió un PDF de 5 páginas con lo visto hasta la última clase: modelos clásicos (dieta, transporte, mochila, costo fijo), programación entera y relajación lineal con el contraejemplo de por qué redondear no sirve, y el método Branch and Bound con el árbol del ejemplo max 5x₁ + 4x₂ (relajado en (3,75 · 1,25), z = 23,75; óptimo entero x = (3,2), z = 23). Todo eso ya quedó cubierto en las guías.

## Pendiente

- Flujo en redes
- Optimización no lineal sin y con restricciones
- Programación dinámica

## Estado actual

La teoría de las primeras semanas (simplex, dos fases, holgura complementaria) ya se la sabe, así que los resúmenes conceptuales pueden ser cortos.

**Pero los ejercicios sí importan.** El ramo es complejo y la práctica es donde se juega la nota. Regla para todo chat de este ramo:

- Cada vez que aparezca material con ejercicios (guías del profe, ayudantías, controles y pruebas de años anteriores, ejercicios tipo), **proponérselos a Gabo y enseñárselos**.
- Enseñar de verdad: enunciado, cómo se ataca, desarrollo paso a paso y **el porqué de cada decisión** — no solo el resultado.
- **Los ejercicios NO van al dashboard.** `pm.js` se queda solo con teoría y resúmenes, para no engordar la app. Los ejercicios se hacen **acá en el chat**, en formato ping-pong: se propone uno, Gabo responde, se corrige y se explica el porqué. Recién ahí se pasa al siguiente.
- Cuando no haya material subido, proponer ejercicios propios del nivel del ramo y del contenido que viene en la próxima evaluación.
- **El material lo manda Gabo.** No ir a buscarlo a Canvas por cuenta propia salvo que él lo pida explícitamente.

## Cómo agregar una guía

1. Edita `app/guias/pm.js` — agrega un objeto al final del array, antes del `]);`
2. Copia la estructura de una existente. Campos: `id`, `ramo:'pm'`, `tag`, `sem`, `titulo`, `bajada`, `min`, `secciones[]`
3. Cada sección lleva `t` (título) y luego `h` (HTML), `code`, `ojo` o `ej`
4. Sube la versión en `app/sw.js` y en el `v__` de `app/index.html`
5. Verifica: `node --check app/guias/pm.js`
6. Gabo hace: `cd ~/Desktop/Semestre && git push origin master`
