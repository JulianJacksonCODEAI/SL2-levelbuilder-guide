/* Blocks page: filter rows by name, type or description, and by status. */
(function () {
  function init() {
    var mount = document.getElementById("block-filter");
    if (!mount || mount.dataset.ready) return;
    mount.dataset.ready = "1";

    var article = mount.closest("article") || document;
    var tables = Array.prototype.filter.call(article.querySelectorAll("table"), function (t) {
      return t.querySelector(".block-name");
    });
    var rows = [];
    tables.forEach(function (t) {
      Array.prototype.forEach.call(t.tBodies[0].rows, function (tr) {
        var chip = tr.cells[tr.cells.length - 1].querySelector(".status");
        rows.push({ tr: tr, text: tr.textContent.toLowerCase(), status: chip ? chip.textContent.trim() : "" });
      });
    });
    if (!rows.length) return;

    // Each h2 section: the heading and everything up to the next h2
    var sections = [];
    var h2s = article.querySelectorAll("h2");
    Array.prototype.forEach.call(h2s, function (h) {
      var els = [h], el = h.nextElementSibling;
      while (el && el.tagName !== "H2") { els.push(el); el = el.nextElementSibling; }
      var table = null;
      els.forEach(function (e) { var t = e.querySelector ? e.querySelector("table") : null; if (tables.indexOf(t) > -1) table = t; });
      sections.push({ els: els, table: table });
    });

    var statuses = [];
    rows.forEach(function (r) { if (r.status && statuses.indexOf(r.status) < 0) statuses.push(r.status); });

    var label = document.createElement("label");
    label.className = "block-filter__label";
    label.htmlFor = "block-filter-input";
    label.textContent = "Find a block";
    var input = document.createElement("input");
    input.type = "search";
    input.id = "block-filter-input";
    input.className = "block-filter__input";
    input.placeholder = "Name, type or what it does";
    input.autocomplete = "off";
    input.spellcheck = false;

    var group = document.createElement("div");
    group.className = "block-filter__statuses";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "Show only blocks with status");
    var classFor = { "Tested": "tested", "Check by hand": "untested", "Not yet tested": "untested", "Not available": "no" };
    var buttons = statuses.map(function (s) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "block-filter__chip status " + (classFor[s] || "untested");
      b.textContent = s;
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
        apply();
      });
      group.appendChild(b);
      return b;
    });

    var count = document.createElement("p");
    count.className = "block-filter__count";
    count.setAttribute("aria-live", "polite");

    var empty = document.createElement("p");
    empty.className = "block-filter__empty";
    empty.hidden = true;
    var emptyText = document.createElement("span");
    var clear = document.createElement("button");
    clear.type = "button";
    clear.className = "block-filter__clear";
    clear.textContent = "Clear the filter";
    clear.addEventListener("click", reset);
    empty.appendChild(emptyText);
    empty.appendChild(document.createTextNode(" "));
    empty.appendChild(clear);

    var row = document.createElement("div");
    row.className = "block-filter__row";
    row.appendChild(input);
    row.appendChild(group);
    mount.appendChild(label);
    mount.appendChild(row);
    mount.appendChild(count);
    mount.appendChild(empty);

    // Floating button back to the filter, shown once the filter is scrolled past
    var jump = document.createElement("button");
    jump.type = "button";
    jump.className = "block-filter__jump";
    jump.textContent = "Find a block";
    jump.hidden = true;
    jump.addEventListener("click", function () {
      mount.scrollIntoView({ block: "start" });
      input.focus({ preventScroll: true });
    });
    mount.parentNode.appendChild(jump);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        var e = entries[0];
        jump.hidden = e.isIntersecting || e.boundingClientRect.top > 0;
      }).observe(mount);
    }

    function reset() {
      input.value = "";
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      apply();
      input.focus();
    }

    function apply() {
      var q = input.value.trim().toLowerCase();
      var on = buttons.filter(function (b) { return b.getAttribute("aria-pressed") === "true"; })
        .map(function (b) { return b.textContent; });
      var active = q !== "" || on.length > 0;
      var shown = 0;
      rows.forEach(function (r) {
        var ok = (!q || r.text.indexOf(q) > -1) && (!on.length || on.indexOf(r.status) > -1);
        r.tr.hidden = !ok;
        if (ok) shown++;
      });
      sections.forEach(function (s) {
        var visible = !active || (s.table && Array.prototype.some.call(s.table.tBodies[0].rows, function (tr) { return !tr.hidden; }));
        s.els.forEach(function (e) { e.hidden = !visible; });
      });
      count.textContent = active ? shown + " of " + rows.length + " blocks" : rows.length + " blocks";
      empty.hidden = !(active && shown === 0);
      emptyText.textContent = q ? "No blocks match “" + input.value.trim() + "”." : "No blocks have that status.";
    }

    input.addEventListener("input", apply);
    input.addEventListener("keydown", function (e) { if (e.key === "Escape" && input.value) { e.preventDefault(); reset(); } });
    apply();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
