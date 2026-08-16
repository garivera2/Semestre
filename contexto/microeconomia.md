# Microeconomía — contexto del ramo

> Lee este archivo completo antes de trabajar.

## Identificación

- **NRC:** 591 y 3594
- **Canvas:** curso id **47456** en `https://uandes.instructure.com`

## Horario

| Día | Bloque | Sala |
|---|---|---|
| Lunes 16:30–19:20 | Cátedra | R-01 |
| Jueves 13:30–15:20 | Ayudantía | C-018 |

Las **pruebas se rinden en el bloque del jueves 13:30–15:20**.

## Evaluaciones y ponderaciones

```
NF = 0,25·P1 + 0,25·P2 + 0,30·Examen
   + 0,10·(controles cortos en ayudantía)
   + 0,10·(controles en clase)
```

| Fecha | Evaluación | Contenido |
|---|---|---|
| jue 24 sep, 13:30–15:20 | **Prueba 1** | Temas I.1 a II.2 |
| jue 5 nov, 13:30–15:20 | **Prueba 2** | Temas II.2 a III.1 |
| mié 25 nov, 13:30–15:30 | **Examen** | Toda la materia |
| lun 30 nov | Recuperativo (tentativo) | Solo por ausencia justificada al examen |

### Reglas importantes

- **Ninguna evaluación es reprobatoria y no se exige nota mínima**
- De los **4 controles cortos de ayudantía se elimina el peor**
- Los controles son **sin anunciar**, tanto en ayudantías como en clases. Materia: la semana anterior
- Máximo **una ausencia justificada a pruebas**; en ese caso la nota del examen reemplaza la prueba
- Las **ausencias a controles cortos no se pueden justificar**
- La materia de las pruebas **no es acumulativa**; el examen sí evalúa todo
- Habrá **2 o 3 lecturas en inglés** (máx. 15 páginas c/u) evaluadas en pruebas y examen, enviadas con una semana de anticipación

## Unidades

| Unidad | Contenido | Semanas |
|---|---|---|
| **I** | Teoría del Consumidor | 1–5 |
| **II** | Teoría del Productor | 6–10 |
| **III** | Mercados y Competencia | 11–14 |

### Detalle de la Unidad I (lo ya pasado)

- **I.1** Preferencias y utilidad: axiomas de preferencia, función de utilidad, curvas de indiferencia y TMS
- **I.2** Maximización de la utilidad y elección: restricción presupuestaria, problema de optimización, función de utilidad indirecta
- **I.3** Funciones de demanda: cambios en ingreso, en precio propio, en precio cruzado, demanda de mercado

### Conceptos base que el profe exige dominar

Los presentó como requisito de entrada: definición de mercado, mercado competitivo, demanda (movimientos vs desplazamientos), oferta, equilibrio y estática comparativa, elasticidad, excedentes de consumidor y productor, e intervención de mercado (precio máximo, mínimo, impuestos, subsidios).

## Guías ya escritas

Están en `app/guias/mi.js`:

1. Introducción a la Economía — los 8 conceptos base
2. Teoría del Consumidor — Unidades I.1, I.2 y I.3

## Pendiente

- Resto de la Unidad I si aparece más material
- Unidad II: Teoría del Productor
- Unidad III: Mercados y Competencia

## Cómo Gabo estudia este ramo

**Solo quiere el fundamento y los conceptos.** Las ayudantías y los ejercicios los hace él. Puede mandar sus apuntes de clase si el PPT no alcanza.

## Cómo agregar una guía

1. Edita `app/guias/mi.js` — agrega un objeto al final del array, antes del `]);`
2. Copia la estructura de una existente. Campos: `id`, `ramo:'mi'`, `tag`, `sem`, `titulo`, `bajada`, `min`, `secciones[]`
3. Cada sección lleva `t` (título) y luego `h` (HTML), `code`, `ojo` o `ej`
4. Sube la versión en `app/sw.js` y en el `v__` de `app/index.html`
5. Verifica: `node --check app/guias/mi.js`
6. Gabo hace: `cd ~/Desktop/Semestre && git push origin master`
