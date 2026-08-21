# Modelos Estocásticos — contexto del ramo

> Lee este archivo completo antes de trabajar.

## Identificación

- **Código:** ICI 3205 (sección 202620-8231)
- **Profesores:** Marcel Favereau, PhD · Yessica Mercado
- **Ayudantes:** Rodolfo Bertens · Agustín Vásquez
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

Inventario revisado el 20 de agosto de 2026 (18 archivos):

**Apuntes de cátedra**
- Capítulo 0 — Motivación y resumen del curso
- Capítulo 1 — Repaso de Probabilidad (Alumnos)
- Capítulo 2 — Proceso de Poisson (Alumnos)
- `DistribucionCondicionalTiemposDeEventos.xlsx` — planilla del profesor para la uniformidad condicional

**Guías de ejercicios (con solución desarrollada)**
- Capítulo 1 — Ejercicios: **27 problemas**. Los 1–9 son conjuntos y combinatoria, poco relevantes para este ramo. Los que sirven: 10–15 (condicional y Bayes), 17–19 (binomial y Poisson), 20–23 (densidades continuas), 24–27 (condicionamiento aplicado).
- Capítulo 2 — Ejercicios: **7 problemas**, todos pertinentes. Orden recomendado: 1, 3, 6, 5, 2, 4, 7.

**Ayudantías**
- Ayudantía 0 + pauta (repaso de probabilidad)
- Ayudantía 1 + pauta (Poisson y exponencial) — **semana 3**

**Formularios oficiales** (los que se entregan en la evaluación)
- Prueba 1, 2, 3 y 4 — Formulario. El de la Prueba 1 trae: distribuciones discretas (binomial, geométrica, binomial negativa, Poisson, uniforme discreta), continuas (uniforme, exponencial y otras), proceso de conteo, proceso de Poisson con su corolario inverso, y proceso de Poisson no homogéneo. **No aparecen como definición propia** la descomposición, la superposición ni la carrera de exponenciales — conviene confirmarlo y, si no están, llevarlas de memoria.

**Controles y pruebas pasadas** de los capítulos 2, 3, 4 y 5 — el termómetro real. El del capítulo 2 tiene 60 páginas con solución y contiene ocho evaluaciones: Control 1 de agosto 2024 (procesadores), Control 1 de marzo 2025 (centro de salud con 3 médicos), Control de la farmacia de turno y la bomba de bencina, Control del jugador de fútbol, Prueba 1 de los trabajos de menos de 1 hora (6 partes), Prueba 1 de septiembre 2023 (cinta transportadora), una Prueba N.º 1 con pauta de puntaje detallada, y el caso de los correos del profesor (no homogéneo).

**Libros:** Gazmuri & Crespo, Kulkarni, Tijms, Ross, Hillier & Lieberman, Taha.

## Criterio clave del capítulo 2

La duda que más le costó a Gabo y que conviene reforzar siempre: **cuándo se usa la exponencial directa y cuándo hay que traducir a Poisson**.

- "Cuántos eventos en un periodo" → Poisson directo.
- "Cuánto tiempo hasta el **próximo**" (n = 1) → exponencial directa, `P(T > t) = e^(-λt)`.
- "Cuánto tiempo hasta el **n-ésimo**" (n ≥ 2) → hay que traducir, porque `Sₙ` es Gamma y su acumulada no se integra a mano: `{Sₙ > t} ⟺ {N(t) ≤ n-1}` y `{Sₙ ≤ t} ⟺ {N(t) ≥ n}`.
- "Dado que hubo n eventos en (0,t)" → binomial o uniformidad condicional.
- "¿Cuál ocurre primero?" → carrera de exponenciales, `λ₁/(λ₁+λ₂)`.
- "Ya pasaron s minutos" → falta de memoria, se borra lo transcurrido.

## Guías ya escritas

Están en `app/guias/me.js`:

1. Repaso de probabilidad — Unidad 1 (semana 1)
2. Proceso de Poisson — Unidad 2 (semana 2)
3. **Repaso para el Control 1** — semana 3. Es la guía de repaso: qué entra, el criterio exponencial/Poisson, qué da el formulario, y el listado de ejercicios de Canvas con checklist por ejercicio. No trae ejercicios resueltos: solo indica cuáles hacer.

## Estado del Control 1

- Fecha: **jueves 27 de agosto**, durante la cátedra.
- La Ayudantía 1 (semana 3) ya la hizo. Errores detectados en su desarrollo: P1 c) quedó sin cerrar (da 0,161), P1 d) da 0,00597 y no 0,00691, P4 e) da 0,528 y no 0,0527 (coma corrida), y en P4 anotó la tasa como 9 por minuto cuando es por hora. El resto correcto.
- La prioridad para el control es el **Control 1 de agosto 2024** cronometrado y los problemas 1, 3 y 6 de la Guía del Capítulo 2.

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

## Repasos de controles y pruebas

Sección **aparte de las guías**, en `app/repasos/me.js`. Acá va, por cada control/prueba:

- **Qué materia entra** y las **fórmulas** que hay que saber
- Un **checklist de ejercicios** de Canvas: cuáles conviene hacer y por qué

Los ejercicios **no se resuelven ahí** — solo se listan. La resolución es ping-pong en el chat.

Cuando Gabo pida "arma el repaso del Control X", hay que:

1. Revisar Canvas de este ramo y ver qué controles, pruebas y ayudantías pasadas hay
2. Escribir el resumen de materia y el formulario
3. Armar el checklist indicando de cada ejercicio **por qué sirve** para esa evaluación
4. Agregarlo a `app/repasos/me.js` siguiendo la estructura que está comentada al inicio del archivo
5. Subir el `CACHE` de `app/sw.js` y el `v__` de `app/index.html`
6. Verificar: `node --check app/repasos/me.js`

**No mezclar esto con las guías.** Las guías son la materia; los repasos son la preparación de una evaluación concreta.

## Cómo agregar una guía

1. Edita `app/guias/me.js` — agrega un objeto al final del array, antes del `]);`
2. Copia la estructura de una existente. Campos: `id`, `ramo:'me'`, `tag`, `sem`, `titulo`, `bajada`, `min`, `secciones[]`
3. Cada sección lleva `t` (título) y luego `h` (HTML), `code`, `ojo` o `ej`
4. Sube la versión del `CACHE` en `app/sw.js` (el `v__` de `index.html` ya no existe)
5. Verifica: `node --check app/guias/me.js`
6. Gabo hace: `cd ~/Desktop/Semestre && git push origin master`
