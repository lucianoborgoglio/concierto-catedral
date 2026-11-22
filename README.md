# Programa · Música de cámara en la Catedral Anglicana

Programa web del concierto del **sábado 28 de noviembre de 2026, 19.30 h**, en la Catedral Anglicana San Juan Bautista (25 de Mayo 276, CABA), en el marco de La Noche de los Templos.
Lo tocan estudiantes de la cátedra de Música de Cámara del prof. Omar Cyrulnik, del Conservatorio Superior de Música Manuel de Falla.

**Dirección pública (la del QR):** https://lucianoborgoglio.github.io/concierto-catedral/

---

## Cómo está armado

```
index.html            página del programa (las 4 estéticas en un solo archivo)
datos.js              ← TODO el contenido: obras, intérpretes, textos y versión por defecto
qr/qr.svg, qr.png     código QR (apunta a la dirección pública; no cambia nunca)
imprimir/cartel.html  cartel A4 con el QR para la entrada (las 4 estéticas)
imprimir/*.pdf        PDF listos para imprimir: cartel A4 y programa A5 de respaldo
```

| Enlace | Qué muestra |
|---|---|
| `…/concierto-catedral/` | la versión por defecto (la que ve quien escanea el QR) |
| `…/concierto-catedral/?v=1` | 1 · Cartel |
| `…/concierto-catedral/?v=2` | 2 · Fachada |
| `…/concierto-catedral/?v=3` | 3 · Nocturno |
| `…/concierto-catedral/?v=4` | 4 · Grilla |

## Instrucciones

### Elegir la versión ganadora
En `datos.js`:
```js
window.VERSION_POR_DEFECTO = 2;   // ← número ganador
window.VOTACION = false;          // ← oculta la etiqueta "borrador para votar"
```
Después: `git commit -am "Versión ganadora" && git push`. GitHub Pages se actualiza en 1–2 minutos.

### Corregir un dato (nombre, obra, orden)
Todo está en `datos.js`. El orden del programa es el orden de la lista `programa`. Guardar, commit y push.
**El QR no hay que regenerarlo:** la dirección es siempre la misma.

### Imprimir
| Qué | Archivo | Cómo |
|---|---|---|
| Cartel QR para la entrada | `imprimir/cartel_qr_A4_vN.pdf` | A4, **tamaño real / 100 %**, en color si se puede. 2 copias (una de respaldo) |
| Programas de respaldo | `imprimir/programa_A5_vN.pdf` | A5, o A4 con "2 páginas por hoja"; doble faz. 5–10 copias |

Para regenerar los PDF después de un cambio: abrir `imprimir/cartel.html?v=N` o `index.html?v=N` en Chrome → Imprimir → Guardar como PDF (márgenes: ninguno para el cartel).

### Antes de imprimir el cartel (checklist)
- [ ] Escanear el QR desde la pantalla con un Android y un iPhone: tiene que abrir el programa.
- [ ] Revisar que `VERSION_POR_DEFECTO` sea la ganadora y que `VOTACION = false`.
- [ ] Escanear también el cartel ya impreso, a 1 m de distancia.
- [ ] Llevar cinta para pegarlo a la altura de los ojos, con buena luz.

### Si algo falla el día del concierto
- La dirección escrita en el cartel permite entrar tipeándola.
- Están los programas impresos de respaldo.
- Si GitHub Pages no responde, el PDF del programa se puede mandar por WhatsApp.
