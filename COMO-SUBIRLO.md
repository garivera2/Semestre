# Cómo tener el dashboard en tu celular

## Parte 1 — Publicarlo (2 minutos, gratis, sin cuenta)

1. Abre **netlify.com/drop** en tu computador.
2. Arrastra la carpeta completa **`semestre`** (no los archivos sueltos, la carpeta entera) a la zona que dice "Drag and drop your site output folder here".
3. Espera ~20 segundos. Netlify te da una URL tipo `https://algo-random-123.netlify.app`.
4. Copia esa URL.

**Ojo:** sin cuenta, el sitio dura unas horas. Para que sea permanente, dale a "Sign up" (con Google o GitHub, gratis) y el sitio queda tuyo para siempre. También podrás cambiarle el nombre a algo como `gabo-semestre.netlify.app` en Site settings → Change site name.

## Parte 2 — Instalarlo como app

**iPhone:**
1. Abre la URL en **Safari** (tiene que ser Safari, no Chrome).
2. Toca el botón compartir (el cuadrito con la flecha hacia arriba).
3. "Añadir a pantalla de inicio" → Añadir.

**Android:**
1. Abre la URL en Chrome.
2. Menú de tres puntos → "Instalar app" o "Añadir a pantalla de inicio".

Queda con ícono propio, se abre a pantalla completa sin barra del navegador, y funciona sin internet.

## Parte 3 — Sincronizar entre celular y computador

Sin esto, cada dispositivo guarda sus propias notas por separado.

1. Crea una cuenta gratis en **supabase.com** y un proyecto nuevo (elige la región más cercana, South America si aparece).
2. Menú lateral → **SQL Editor** → New query. Pega esto y dale Run:

```sql
create table estado (
  id text primary key,
  data jsonb,
  updated_at timestamptz default now()
);
alter table estado enable row level security;
create policy p on estado for all using (true) with check (true);
```

3. Consigue la **Project URL**. La forma más rápida: mira la barra de direcciones estando dentro del proyecto. Si dice `supabase.com/dashboard/project/abcdxyz`, tu URL es `https://abcdxyz.supabase.co`. También aparece en el botón **Connect** del header, o en **Settings (⚙️) → API Keys**.
4. Copia la **clave pública**. En Settings → API Keys verás una de estas dos, cualquiera sirve:
   - `sb_publishable_...` (la nueva)
   - `anon` / `eyJ...` (la antigua, en la pestaña *Legacy API Keys*)
5. En el dashboard, pestaña **Notas** → "Sincronizar entre dispositivos". Pega la URL y la clave, escribe un código propio (por ejemplo `gabo-2026-x7k`) y dale a **⚙ Probar conexión**. Te dirá exactamente qué falla si algo falla.
6. Repite el paso 5 en el celular con **los mismos tres valores**.

Listo: anotas algo en el celular y aparece en el computador.

### Si sale error

Dale a **⚙ Probar conexión** y lee el mensaje:

| Mensaje | Qué pasa |
|---|---|
| HTTP 404 | No existe la tabla `estado`. Falta correr el SQL del paso 2. |
| HTTP 401 o 403 | La clave está incompleta o no corriste la línea del `create policy`. |
| No se pudo conectar | La URL está mal escrita. Tiene que ser `https://xxxx.supabase.co`, sin `/rest` ni barra al final. |

**Sobre seguridad:** la clave `anon` está diseñada para vivir dentro de apps de navegador, no es un secreto grave. Pero con la política de arriba, cualquiera que tenga tu URL + clave + código podría leer o escribir tus notas. Por eso conviene que el código no sea obvio: usa algo como `gabo-2026-x7k`, no `gabo`.

---

## Si prefieres no publicar nada

El archivo funciona abriéndolo directo con doble clic en el computador. Guarda tus datos igual. Lo que no puedes hacer así es tenerlo en el celular ni sincronizar — para eso necesitas la URL.
