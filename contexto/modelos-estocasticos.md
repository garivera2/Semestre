# Modelos Estocásticos — contexto del ramo

> Lee este archivo completo antes de trabajar.

## Identificación

- **Código:** ICI 3205
- **Profesor:** Marcel Favereau, PhD
- **Canvas:** curso id **48423** en `https://uandes.instructure.com`

## Horario

| Día | Bloque | Sala |
|---|---|---|
| Miércoles 15:30–17:20 | Ayudantía (ejercitación) | H-012 |
| Jueves 10:30–13:20 | Cátedra | C-213 |

Los **controles se rinden durante la cátedra** del jueves.

## Evaluaciones y ponderaciones

```
NF = 0,20·P1 + 0,20·P2 + 0,20·P3 + 0,25·Examen + 0,15·(promedio de los 4 controles)
```

Aprueba con **NF ≥ 4,0**. **No hay eximición.**

| Fecha | Evaluación | Contenido |
|---|---|---|
| jue 27 ago | Control 1 | Unidades 1 y 2 |
| mié 2 sep | **Prueba 1** | Unidades 1 y 2 |
| jue 1 oct | Control 2 | Unidad 3 |
| mié 7 oct | **Prueba 2** | Unidad 3 |
| jue 29 oct | Control 3 | Unidad 4 |
| mié 11 nov | **Prueba 3** | Unidad 4 |
| jue 12 nov | Control 4 | Unidad 5 |
| vie 20 nov | Recuperativas | Solo ausencias justificadas |
| vie 27 nov | **Examen** | Unidad 5 |

Las pruebas y el examen evalúan **modelación, desarrollo matemático e interpretación**. Los controles son individuales.

## Unidades

| Unidad | Contenido | Semanas |
|---|---|---|
| **1** | Repaso de probabilidad: condicional, independencia, Bayes, variables aleatorias, esperanza, varianza, distribuciones | 1–2 |
| **2** | Proceso de Poisson: conteo, homogéneo y no homogéneo, tiempos de eventos y entre eventos, superposición y descomposición | 2–4 |
| **3** | Cadenas de Markov en tiempo discreto: modelación, matrices de transición, visitas entre estados, clasificación de estados, comportamiento de largo plazo | 5–8 |
| **4** | Cadenas de Markov en tiempo continuo: tasas de transición, probabilidades límite, procesos de nacimiento y muerte | 9–11 |
| **5** | Sistemas de espera: ecuación de Little, M/M/1, M/M/c, capacidad finita e infinita, autoservicio, fuentes finitas, redes | 12–16 |

## Enfoque del curso

El profesor lo declara explícitamente: **el objetivo no es memorizar fórmulas aisladas, sino reconocer la estructura del problema, escoger el modelo correcto y justificar sus supuestos.**

Dinámica sugerida por él: comprender la definición → representar el sistema → plantear el modelo → resolver.

## Material en Canvas

- Capítulo 0 — Motivación y resumen del curso
- Capítulo 1 — Repaso de Probabilidad
- Capítulo 2 — Proceso de Poisson
- Ayudantía 0 y su pauta
- **Pautas de controles y pruebas pasadas** de los capítulos 2, 3, 4 y 5 — muy útiles como termómetro

**Libros:** Gazmuri & Crespo, Kulkarni, Tijms, Ross, Hillier & Lieberman, Taha.

## Guías ya escritas

Están en `app/guias/me.js`:

1. Repaso de probabilidad — Unidad 1 (semana 1)
2. Proceso de Poisson — Unidad 2 (semana 2)

## Pendiente

- Unidad 3: cadenas de Markov en tiempo discreto
- Unidades 4 y 5

## Cómo Gabo estudia este ramo

**Le interesa el fundamento conceptual antes que nada.** Lo que necesita de las guías es:

- Entender de dónde sale cada fórmula y qué significa
- Saber cuándo aplicar cada modelo
- Un **formulario** compacto por unidad

**Pero los ejercicios también importan.** El ramo es complejo, así que hay que **proponerle ejercicios y enseñarle a resolverlos**: mostrar el razonamiento, por qué se elige ese modelo y qué supuesto justifica cada paso. No basta con la respuesta ni con la fórmula suelta.

**Dónde van los ejercicios: en el chat, no en las guías.** Las guías del dashboard se quedan solo con fundamento y formulario. Los ejercicios se hacen ping-pong en la conversación — se le propone uno, él responde, se corrige y se explica. Nada de llenar `app/guias/me.js` con baterías de ejercicios.

Dice que el ramo le gusta pero que "es mucha probabilidad", así que conviene reforzar los fundamentos probabilísticos cuando aparezcan.

## Cómo agregar una guía

1. Edita `app/guias/me.js` — agrega un objeto al final del array, antes del `]);`
2. Copia la estructura de una existente. Campos: `id`, `ramo:'me'`, `tag`, `sem`, `titulo`, `bajada`, `min`, `secciones[]`
3. Cada sección lleva `t` (título) y luego `h` (HTML), `code`, `ojo` o `ej`
4. Sube la versión en `app/sw.js` y en el `v__` de `app/index.html`
5. Verifica: `node --check app/guias/me.js`
6. Gabo hace: `cd ~/Desktop/Semestre && git push origin master`
