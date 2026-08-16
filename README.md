# Sistema de estudio — Semestre 2026-II

Dashboard personal de Gabo Rivera, Ingeniería Civil Industrial, Universidad de los Andes.

---

## Cómo funciona el sistema

El chat es memoria de corto plazo: cada conversación empieza de cero. **Este repositorio es la memoria permanente.** Todo lo que importa vive acá, no en el historial de un chat.

```
Semestre/
├── app/                    la aplicación web
│   ├── index.html          dashboard completo
│   ├── guias/              una guía por ramo
│   │   ├── mn.js           Métodos Numéricos
│   │   ├── bd.js           Bases de Datos
│   │   ├── me.js           Modelos Estocásticos
│   │   ├── mi.js           Microeconomía
│   │   └── pm.js           Programación Matemática
│   ├── sw.js               permite funcionar sin internet
│   ├── manifest.json       para instalarla como app
│   └── icon.svg
├── contexto/               briefing de cada ramo
│   ├── metodos-numericos.md
│   ├── modelos-estocasticos.md
│   ├── microeconomia.md
│   ├── bases-de-datos.md
│   └── programacion-matematica.md
├── COMO-SUBIRLO.md         despliegue y sincronización
└── README.md               este archivo
```

---

## Un chat por ramo

Cada ramo tiene su propia conversación. **El mensaje inicial de cada chat es siempre este**, cambiando el nombre del archivo:

> Trabajo el ramo de Métodos Numéricos. Lee `~/Desktop/Semestre/contexto/metodos-numericos.md` y `~/Desktop/Semestre/app/guias/mn.js` para ponerte al día. Después dime qué tienes cargado y seguimos.

Con eso quedo orientado leyendo dos archivos, sin que tengas que explicar nada.

| Ramo | Archivo de contexto | Archivo de guías |
|---|---|---|
| Métodos Numéricos | `contexto/metodos-numericos.md` | `app/guias/mn.js` |
| Modelos Estocásticos | `contexto/modelos-estocasticos.md` | `app/guias/me.js` |
| Microeconomía | `contexto/microeconomia.md` | `app/guias/mi.js` |
| Bases de Datos | `contexto/bases-de-datos.md` | `app/guias/bd.js` |
| Programación Matemática | `contexto/programacion-matematica.md` | `app/guias/pm.js` |

**Un chat aparte para el dashboard**, donde se tocan `index.html`, el diseño, la sincronización o cualquier cosa técnica de la app.

---

## Reglas del sistema

**Cada chat edita solo su archivo.** El de Métodos toca `guias/mn.js` y nada más. Por eso están separados: así dos chats nunca chocan.

**Un chat a la vez.** No trabajes dos ramos en paralelo editando archivos.

**Push al final de cada sesión, no por cada cambio.** El plan gratis de Netlify da 300 créditos al mes y cada deploy cuesta 15, o sea unos **20 deploys mensuales**. Si se acaban, el sitio se pausa hasta el próximo ciclo.

```
cd ~/Desktop/Semestre && git push origin master
```

**Al terminar un tema, actualiza el contexto.** La sección "Guías ya escritas" y "Pendiente" del archivo del ramo tiene que quedar al día, porque es lo que lee el próximo chat.

---

## Flujo típico de una sesión

1. Abres el chat del ramo y pegas el mensaje inicial
2. Mandas material: fotos de la pizarra, PDF de apuntes, PPT, el enunciado de un laboratorio
3. Se escribe o amplía la guía correspondiente
4. Se actualiza el archivo de contexto
5. Haces push
6. Cierras el chat

La próxima vez se parte de cero sin perder nada, porque todo quedó en el repositorio.

---

## Qué hay dentro de la app

**Hoy** — clases del día con hora y sala, pendientes con recordatorio, cuenta regresiva a la próxima evaluación.

**Calendario** — vista mensual y horario semanal editable de 06:00 a 00:00.

**Notas** — calculadora de notas de los 5 ramos con sus ponderaciones reales, registro de gastos, y ajustes de sincronización y recordatorios.

**Estudio** — plan semana a semana con checklist y apuntes.

**Guías** — ruta de estudio cronológica y todas las guías por ramo.

**Ramos** — de qué trata cada uno, por qué importa y cómo conviene estudiarlo.

Los datos se sincronizan entre computador y celular vía Supabase. Los detalles están en `COMO-SUBIRLO.md`.
