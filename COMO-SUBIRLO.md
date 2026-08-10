# Semestre 2026-II — despliegue y sincronización

## Parte 1 — Publicación automática con GitHub (recomendado)

La carpeta `Semestre` ya es un repositorio Git con el primer commit hecho. Solo falta conectarla.

**Una sola vez:**

1. Descarga **GitHub Desktop** desde desktop.github.com e inicia sesión con tu cuenta **gscky**.
2. Menú `File → Add Local Repository`. Elige la carpeta `Escritorio/Semestre`. Va a reconocer que ya es un repo.
3. Botón **Publish repository**. Nombre: `semestre`. Puedes dejarlo privado si quieres — Netlify igual lo lee.
4. Entra a Netlify → tu sitio → `Site configuration → Build & deploy → Continuous deployment` → **Link repository** → GitHub → autoriza → elige `gscky/semestre`.
5. En la configuración de build:
   - **Build command:** déjalo vacío
   - **Publish directory:** escribe `app`
6. Deploy.

**De ahí en adelante**, cada vez que actualice algo:

1. Abres GitHub Desktop
2. Ves los cambios listados, botón **Commit to main**
3. Botón **Push origin**
4. Netlify publica solo en ~30 segundos

Tres clics, sin buscar archivos ni arrastrar carpetas.

> El publish directory tiene que ser `app` porque el sitio vive en esa subcarpeta. Si lo dejas vacío, Netlify va a servir el repositorio completo y la app no cargará.

---

## Parte 2 — Instalarla como app en el celular

**iPhone:** abre la URL en **Safari** (no Chrome) → botón compartir → *Añadir a pantalla de inicio*.

**Android:** abre la URL en Chrome → menú de tres puntos → *Instalar app*.

Queda con ícono propio, a pantalla completa y funciona sin internet.

Si después de una actualización sigue mostrando la versión vieja: cierra la app del todo. Si insiste, borra el ícono y vuelve a agregarla. Puedes confirmar qué versión estás viendo mirando el número arriba a la derecha.

---

## Parte 3 — Sincronización entre celular y computador

Ya está configurada. Los datos viven en tu proyecto de Supabase:

```
https://dgyorqgaacjmfvbxujup.supabase.co
```

**Cómo funciona:**

- Lo que escribes se sube solo, más o menos un segundo después
- Se baja solo al abrir la app, al volver a la pestaña, y cada 45 segundos
- Si lo que tienes local es más nuevo que la nube, no te lo sobrescribe
- Los botones *Subir* y *Bajar* son el modo manual por si algo se traba

**Si sale error**, usa `⚙ Probar conexión` en la pestaña Notas:

| Mensaje | Qué significa |
|---|---|
| HTTP 404 | No existe la tabla `estado` en ese proyecto |
| HTTP 401 o 403 | La clave está mal copiada, o falta la política RLS |
| No se pudo conectar | La URL está mal. Tiene que ser `https://xxxx.supabase.co`, sin `/rest` ni barra final |

SQL de referencia, seguro de correr las veces que sea:

```sql
alter table public.estado enable row level security;
drop policy if exists p on public.estado;
create policy p on public.estado for all using (true) with check (true);
grant all on public.estado to anon, authenticated;
notify pgrst, 'reload schema';
```

---

## Estructura de la carpeta

```
Semestre/
├── app/                 ← esto es lo que se publica
│   ├── index.html       la app completa
│   ├── guias.js         contenido de las guías de estudio
│   ├── sw.js            permite que funcione sin internet
│   ├── manifest.json    para instalarla como app
│   └── icon.svg
├── semestre.zip         respaldo por si prefieres subir a mano
└── COMO-SUBIRLO.md      este archivo
```
