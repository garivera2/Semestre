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

1. Programación lineal y simplex — forma estándar, solución gráfica, simplex, dos fases, dualidad, holgura complementaria

## Pendiente

- Programación entera y branch & bound
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
