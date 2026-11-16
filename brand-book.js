(() => {
  const PAGE_SIZE = 5;

  function paginate(items, page, pageSize = PAGE_SIZE) {
    const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
    const currentPage = Math.min(Math.max(1, page), pageCount);
    const start = (currentPage - 1) * pageSize;
    const end = Math.min(start + pageSize, items.length);
    return { pageCount, currentPage, start, end, rows: items.slice(start, end) };
  }

  /* —— Paginación demo —— */
  const records = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    title: `CMP-${3200 + i} · Compromiso ambiental`,
    meta: i % 3 === 0 ? "En riesgo" : i % 2 === 0 ? "Vigente" : "Programado",
    tone: i % 3 === 0 ? "warn" : i % 2 === 0 ? "ok" : "info",
  }));

  let page = 1;
  const listEl = document.getElementById("demo-pager-list");
  const metaEl = document.getElementById("demo-pager-meta");
  const prevBtn = document.getElementById("demo-pager-prev");
  const nextBtn = document.getElementById("demo-pager-next");

  function renderPager() {
    if (!listEl || !metaEl) return;
    const p = paginate(records, page);
    page = p.currentPage;
    listEl.innerHTML = p.rows
      .map(
        (r) => `<div class="record-row">
        <div><strong>${r.title}</strong><small>${r.meta}</small></div>
        <span class="badge badge-${r.tone}">${r.meta}</span>
      </div>`
      )
      .join("");
    metaEl.textContent = `${p.start + 1}–${p.end} de ${records.length}`;
    if (prevBtn) prevBtn.disabled = p.currentPage <= 1;
    if (nextBtn) nextBtn.disabled = p.currentPage >= p.pageCount;
  }

  prevBtn?.addEventListener("click", () => {
    page -= 1;
    renderPager();
  });
  nextBtn?.addEventListener("click", () => {
    page += 1;
    renderPager();
  });
  renderPager();

  /* —— Filtros demo —— */
  const filterData = [
    { title: "Permiso sanitario", status: "vigente" },
    { title: "RCA Almagro", status: "riesgo" },
    { title: "Plan Q4 muestreo", status: "programado" },
    { title: "OIA descarga", status: "vigente" },
    { title: "Compromiso ruido", status: "riesgo" },
  ];
  const search = document.getElementById("demo-filter-search");
  const chips = document.querySelectorAll("[data-filter-chip]");
  const filterList = document.getElementById("demo-filter-list");
  const filterCount = document.getElementById("demo-filter-count");
  let activeChip = "all";

  function renderFilters() {
    if (!filterList) return;
    const q = (search?.value || "").toLowerCase().trim();
    const rows = filterData.filter((r) => {
      const okChip = activeChip === "all" || r.status === activeChip;
      const okQ = !q || r.title.toLowerCase().includes(q);
      return okChip && okQ;
    });
    if (filterCount) filterCount.textContent = String(rows.length);
    if (!rows.length) {
      filterList.innerHTML = `<div class="empty-state">
        <div class="empty-icon">∅</div>
        <strong>Sin coincidencias</strong>
        <p>Ajusta la búsqueda o los filtros.</p>
      </div>`;
      return;
    }
    filterList.innerHTML = rows
      .map(
        (r) => `<div class="record-row">
        <div><strong>${r.title}</strong><small>${r.status}</small></div>
        <span class="badge badge-${r.status === "riesgo" ? "warn" : r.status === "programado" ? "info" : "ok"}">${r.status}</span>
      </div>`
      )
      .join("");
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeChip = chip.getAttribute("data-filter-chip") || "all";
      chips.forEach((c) => c.classList.toggle("is-active", c === chip));
      renderFilters();
    });
  });
  search?.addEventListener("input", renderFilters);
  renderFilters();

  /* —— Dialog demo —— */
  const dialog = document.getElementById("demo-dialog");
  const openDialog = document.getElementById("demo-dialog-open");
  const closeEls = document.querySelectorAll("[data-dialog-close]");

  function setDialog(open) {
    if (!dialog) return;
    dialog.hidden = !open;
    dialog.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }

  openDialog?.addEventListener("click", () => setDialog(true));
  closeEls.forEach((el) => el.addEventListener("click", () => setDialog(false)));
  dialog?.addEventListener("click", (e) => {
    if (e.target === dialog) setDialog(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setDialog(false);
  });

  /* —— Empty toggle (ficha Premium + marca Mayti) —— */
  const emptyHost = document.getElementById("demo-empty-host");
  const emptyToggle = document.getElementById("demo-empty-toggle");
  let showEmpty = true;

  function emptyShell(bodyHtml) {
    return `<div class="empty-ficha-head">
        <div class="empty-tabs" role="tablist">
          <span class="empty-tab">Detalle</span>
          <span class="empty-tab is-active">Verificadores <span class="count">${showEmpty ? "0" : "1"}</span></span>
          <span class="empty-tab">Planes de acción <span class="count">0</span></span>
          <span class="empty-tab">Evidencias <span class="count">0</span></span>
          <span class="empty-tab">Historial <span class="count">0</span></span>
        </div>
        <button type="button" class="btn-mayti-primary">+ Nuevo verificador</button>
      </div>
      <div class="empty-panel">${bodyHtml}</div>`;
  }

  function renderEmpty() {
    if (!emptyHost) return;
    if (showEmpty) {
      emptyHost.innerHTML = emptyShell(`<div class="empty-state-premium">
          <span class="empty-mayti-mark" aria-hidden="true">
            <img src="./assets/mayti/favicon-mayti.png" alt="" />
          </span>
          <strong>Sin verificadores</strong>
          <p>No hay medios de verificación asociados a este compromiso.</p>
          <button type="button" class="btn-mayti-outline">+ Crear verificador</button>
        </div>`);
    } else {
      emptyHost.innerHTML = emptyShell(`<div style="width:100%">
          <div class="record-row" style="margin:0">
            <div><strong>Verificador documental · RCA</strong><small>Integridad alta · caduca en 18d</small></div>
            <span class="badge badge-ok">Vigente</span>
          </div>
        </div>`);
    }
  }
  emptyToggle?.addEventListener("click", () => {
    showEmpty = !showEmpty;
    emptyToggle.textContent = showEmpty ? "Ver con datos" : "Ver vacío";
    renderEmpty();
  });
  renderEmpty();

  /* —— Skeleton toggle —— */
  const skelHost = document.getElementById("demo-skeleton-host");
  const skelToggle = document.getElementById("demo-skeleton-toggle");
  let loading = true;
  function renderSkeleton() {
    if (!skelHost) return;
    if (loading) {
      skelHost.innerHTML = Array.from({ length: 3 })
        .map(
          () => `<div class="skel-row">
          <div class="skel-block skel-title shimmer"></div>
          <div class="skel-block skel-meta shimmer"></div>
        </div>`
        )
        .join("");
    } else {
      skelHost.innerHTML = `<div class="record-row"><div><strong>Carga completa</strong><small>3 registros</small></div><span class="badge badge-ok">Listo</span></div>`;
    }
  }
  skelToggle?.addEventListener("click", () => {
    loading = !loading;
    skelToggle.textContent = loading ? "Simular listo" : "Simular carga";
    renderSkeleton();
  });
  renderSkeleton();

  /* —— Toast demo —— */
  const toastStack = document.getElementById("demo-toast-stack");
  document.getElementById("demo-toast-ok")?.addEventListener("click", () => pushToast("Permiso guardado", "ok"));
  document.getElementById("demo-toast-err")?.addEventListener("click", () => pushToast("No se pudo guardar", "err"));

  function pushToast(msg, tone) {
    if (!toastStack) return;
    const el = document.createElement("div");
    el.className = `demo-toast demo-toast-${tone}`;
    el.textContent = msg;
    toastStack.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }

  /* —— Motion reveal —— */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* —— Chart animations (EASE like charts.tsx) —— */
  const EASE_CSS = "cubic-bezier(0.16, 1, 0.3, 1)";
  const chartsRoot = document.getElementById("demo-charts");

  function playCharts() {
    if (!chartsRoot) return;
    chartsRoot.querySelectorAll(".chart-svg").forEach((svg) => {
      svg.classList.remove("is-playing");
      // force reflow
      void svg.offsetWidth;
      svg.classList.add("is-playing");
    });

    const donut = chartsRoot.querySelector(".chart-anim-donut");
    const donutB = chartsRoot.querySelector(".chart-anim-donut-b");
    if (donut) {
      donut.style.transition = "none";
      donut.setAttribute("stroke-dasharray", "0 264");
      requestAnimationFrame(() => {
        donut.style.transition = `stroke-dasharray 1.4s ${EASE_CSS}`;
        donut.setAttribute("stroke-dasharray", "198 264");
      });
    }
    if (donutB) {
      donutB.style.transition = "none";
      donutB.setAttribute("stroke-dasharray", "0 264");
      donutB.setAttribute("stroke-dashoffset", "0");
      requestAnimationFrame(() => {
        donutB.style.transition = `stroke-dasharray 1.2s ${EASE_CSS} 0.15s`;
        donutB.setAttribute("stroke-dasharray", "66 264");
        donutB.setAttribute("stroke-dashoffset", "-198");
      });
    }

    chartsRoot.querySelectorAll(".chart-anim-bar").forEach((bar, i) => {
      const h = Number(bar.getAttribute("data-h") || 0);
      bar.style.transition = "none";
      bar.setAttribute("height", "0");
      bar.setAttribute("y", "110");
      requestAnimationFrame(() => {
        bar.style.transition = `height 1s ${EASE_CSS} ${0.1 + i * 0.06}s, y 1s ${EASE_CSS} ${0.1 + i * 0.06}s`;
        bar.setAttribute("height", String(h));
        bar.setAttribute("y", String(110 - h));
      });
    });

    const areaFill = chartsRoot.querySelector(".chart-anim-area-fill");
    const areaLine = chartsRoot.querySelector(".chart-anim-area-line");
    const areaDot = chartsRoot.querySelector(".chart-anim-dot");
    if (areaLine) {
      areaLine.style.transition = "none";
      areaLine.setAttribute("stroke-dashoffset", "1");
      if (areaFill) {
        areaFill.style.transition = "none";
        areaFill.setAttribute("opacity", "0");
      }
      if (areaDot) {
        areaDot.style.transition = "none";
        areaDot.setAttribute("r", "0");
      }
      requestAnimationFrame(() => {
        areaLine.style.transition = `stroke-dashoffset 1.5s ${EASE_CSS}`;
        areaLine.setAttribute("stroke-dashoffset", "0");
        if (areaFill) {
          areaFill.style.transition = `opacity 1s ${EASE_CSS} 0.5s`;
          areaFill.setAttribute("opacity", "1");
        }
        if (areaDot) {
          areaDot.style.transition = `r 0.45s ${EASE_CSS} 1.35s`;
          areaDot.setAttribute("r", "4");
        }
      });
    }

    const gauge = chartsRoot.querySelector(".chart-anim-gauge");
    if (gauge) {
      gauge.style.transition = "none";
      gauge.setAttribute("stroke-dasharray", "0 100");
      requestAnimationFrame(() => {
        gauge.style.transition = `stroke-dasharray 1.4s ${EASE_CSS}`;
        gauge.setAttribute("stroke-dasharray", "68 100");
      });
    }
  }

  document.getElementById("demo-charts-replay")?.addEventListener("click", playCharts);

  if ("IntersectionObserver" in window && chartsRoot) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            playCharts();
            cio.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    cio.observe(chartsRoot);
  } else {
    playCharts();
  }

  /* —— MapLibre demo (Santiago + GeoJSON) —— */
  function showMapError(el, msg) {
    if (!el) return;
    el.innerHTML = `<div style="height:100%;display:grid;place-items:center;padding:1.25rem;text-align:center;color:#64748b;font-size:0.85rem;background:linear-gradient(160deg,#e2e8f0,#f8fafc)">
      <div><strong style="display:block;color:#0f172a;margin-bottom:0.35rem">Mapa no disponible</strong>${msg}</div>
    </div>`;
  }

  function initDemoMap() {
    const el = document.getElementById("demo-map");
    if (!el) return;
    if (typeof maplibregl === "undefined") {
      showMapError(el, "No se pudo cargar maplibre-gl desde el CDN.");
      return;
    }

    const demoData = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: { name: "Permiso-104", status: "Vigente", kind: "permisos", place: "Almagro" },
          geometry: { type: "Point", coordinates: [-70.6483, -33.4372] },
        },
        {
          type: "Feature",
          properties: { name: "Permiso-218", status: "En riesgo", kind: "permisos", place: "Providencia" },
          geometry: { type: "Point", coordinates: [-70.6102, -33.4263] },
        },
        {
          type: "Feature",
          properties: { name: "RCA-22", status: "Vigente", kind: "rca", place: "Ñuñoa" },
          geometry: { type: "Point", coordinates: [-70.5985, -33.4569] },
        },
        {
          type: "Feature",
          properties: { name: "RCA-09", status: "Observada", kind: "rca", place: "Maipú" },
          geometry: { type: "Point", coordinates: [-70.7581, -33.511] },
        },
        {
          type: "Feature",
          properties: { name: "OIA- Norte", status: "Activa", kind: "oia", place: "Quilicura" },
          geometry: { type: "Point", coordinates: [-70.735, -33.36] },
        },
        {
          type: "Feature",
          properties: { name: "OIA- Sur", status: "Activa", kind: "oia", place: "San Bernardo" },
          geometry: { type: "Point", coordinates: [-70.699, -33.592] },
        },
      ],
    };

    // OpenFreeMap bright (detalle ciudad). Fallback demotiles si el style falla.
    const stylePrimary = "https://tiles.openfreemap.org/styles/bright";
    const styleFallback = "https://demotiles.maplibre.org/style.json";

    let map;
    try {
      map = new maplibregl.Map({
        container: el,
        style: stylePrimary,
        center: [-70.65, -33.45],
        zoom: 10.2,
        attributionControl: true,
      });
    } catch (err) {
      showMapError(el, String(err && err.message ? err.message : err));
      return;
    }

    let usedFallback = false;
    map.once("error", () => {
      if (usedFallback) return;
      usedFallback = true;
      try {
        map.setStyle(styleFallback);
      } catch (_) {
        /* ignore */
      }
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    if ("IntersectionObserver" in window) {
      const mio = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) map.resize();
        });
      });
      mio.observe(el);
    }

    map.on("error", (e) => {
      console.error("[demo-map]", e && e.error);
    });

    map.on("load", () => {
      map.resize();
      map.addSource("cobertura", { type: "geojson", data: demoData });
      map.addLayer({
        id: "cobertura-glow",
        type: "circle",
        source: "cobertura",
        paint: {
          "circle-radius": 14,
          "circle-color": [
            "match",
            ["get", "kind"],
            "permisos",
            "#0ea5e9",
            "rca",
            "#fb923c",
            "oia",
            "#14b8a6",
            "#64748b",
          ],
          "circle-opacity": 0.22,
        },
      });
      map.addLayer({
        id: "cobertura-points",
        type: "circle",
        source: "cobertura",
        paint: {
          "circle-radius": 7,
          "circle-color": [
            "match",
            ["get", "kind"],
            "permisos",
            "#0284c7",
            "rca",
            "#ea580c",
            "oia",
            "#0d9488",
            "#64748b",
          ],
          "circle-stroke-width": 2,
          "circle-stroke-color": "#fff",
        },
      });

      map.on("click", "cobertura-points", (e) => {
        const f = e.features && e.features[0];
        if (!f) return;
        const coords = f.geometry.coordinates.slice();
        const p = f.properties || {};
        new maplibregl.Popup({ offset: 12 })
          .setLngLat(coords)
          .setHTML(
            "<strong>" +
              (p.name || "Punto") +
              "</strong>" +
              (p.status || "") +
              " · " +
              (p.place || "") +
              "<br/>Capa: " +
              (p.kind || "—")
          )
          .addTo(map);
      });
      map.on("mouseenter", "cobertura-points", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "cobertura-points", () => {
        map.getCanvas().style.cursor = "";
      });

      document.querySelectorAll("[data-layer]").forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("is-active");
          const active = [...document.querySelectorAll("[data-layer].is-active")].map((b) =>
            b.getAttribute("data-layer")
          );
          const filter =
            active.length === 0
              ? ["==", ["get", "kind"], "__none__"]
              : ["in", ["get", "kind"], ["literal", active]];
          map.setFilter("cobertura-points", filter);
          map.setFilter("cobertura-glow", filter);
        });
      });
    });
  }

  initDemoMap();
})();
