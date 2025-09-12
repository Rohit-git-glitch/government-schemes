(function() {
  const dom = {
    languageSelect: document.getElementById('language-select'),
    stateFilter: document.getElementById('state-filter'),
    typeFilter: document.getElementById('type-filter'),
    searchInput: document.getElementById('search-input'),
    schemesContainer: document.getElementById('schemes-container'),
    noResults: document.getElementById('no-results'),
    resultsCount: document.getElementById('results-count'),
    year: document.getElementById('year')
  };

  function init() {
    if (dom.year) dom.year.textContent = new Date().getFullYear();
    const savedLang = I18N.getLanguage();
    dom.languageSelect.value = savedLang;
    I18N.setLanguage(savedLang);
    translateUI();

    populateFilters();
    bindEvents();
    renderSchemes();
  }

  function bindEvents() {
    dom.languageSelect.addEventListener('change', () => {
      const lang = dom.languageSelect.value;
      I18N.setLanguage(lang);
      translateUI();
      renderSchemes();
    });

    dom.stateFilter.addEventListener('change', renderSchemes);
    dom.typeFilter.addEventListener('change', renderSchemes);
    dom.searchInput.addEventListener('input', debounce(renderSchemes, 150));
  }

  function translateUI() {
    const lang = I18N.getLanguage();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = I18N.t(key, lang);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', I18N.t(key, lang));
    });
    updateResultsCount(0, window.SCHEMES.length);
  }

  function populateFilters() {
    const states = new Set([ 'All India' ]);
    const types = new Set();
    for (const s of window.SCHEMES) {
      states.add(s.state);
      types.add(s.type);
    }

    // State filter options
    const allStatesOption = document.createElement('option');
    allStatesOption.value = 'all';
    allStatesOption.textContent = I18N.t('all_states');
    dom.stateFilter.appendChild(allStatesOption);
    [...states].sort().forEach(st => {
      if (st === 'All India') return; // keep special handling only in filtering
      const opt = document.createElement('option');
      opt.value = st;
      opt.textContent = st;
      dom.stateFilter.appendChild(opt);
    });

    // Type filter options
    const allTypesOption = document.createElement('option');
    allTypesOption.value = 'all';
    allTypesOption.textContent = I18N.t('all_types');
    dom.typeFilter.appendChild(allTypesOption);
    [...types].sort().forEach(tp => {
      const opt = document.createElement('option');
      opt.value = tp;
      opt.textContent = tp;
      dom.typeFilter.appendChild(opt);
    });
  }

  function renderSchemes() {
    const lang = I18N.getLanguage();
    const state = dom.stateFilter.value;
    const type = dom.typeFilter.value;
    const query = (dom.searchInput.value || '').trim().toLowerCase();

    const filtered = window.SCHEMES.filter(s => {
      const inState = state === 'all' || s.state === 'All India' || s.state === state;
      const inType = type === 'all' || s.type === type;
      if (!inState || !inType) return false;
      if (!query) return true;

      const hay = [
        s.name?.[lang], s.description?.[lang], s.eligibility?.[lang], s.benefits?.[lang],
        s.name?.en, s.description?.en // fallback searchable
      ].filter(Boolean).join(' ').toLowerCase();
      return hay.includes(query);
    });

    dom.schemesContainer.innerHTML = '';
    if (filtered.length === 0) {
      dom.noResults.hidden = false;
      updateResultsCount(0, window.SCHEMES.length);
      return;
    }
    dom.noResults.hidden = true;

    const frag = document.createDocumentFragment();
    filtered.forEach(s => frag.appendChild(renderCard(s, lang)));
    dom.schemesContainer.appendChild(frag);
    updateResultsCount(filtered.length, window.SCHEMES.length);
  }

  function renderCard(scheme, lang) {
    const card = document.createElement('article');
    card.className = 'scheme-card';
    card.setAttribute('tabindex', '0');

    const title = document.createElement('h3');
    title.textContent = scheme.name?.[lang] || scheme.name?.en || '';

    const meta = document.createElement('div');
    meta.className = 'scheme-meta';
    meta.innerHTML = `
      <span class="badge">${scheme.state}</span>
      <span class="badge">${scheme.type}</span>
    `;

    const desc = document.createElement('p');
    desc.className = 'scheme-desc';
    desc.textContent = scheme.description?.[lang] || scheme.description?.en || '';

    const eligibility = document.createElement('p');
    eligibility.className = 'scheme-desc';
    eligibility.innerHTML = `<strong>${I18N.t('eligibility', lang)}: </strong>` + (scheme.eligibility?.[lang] || scheme.eligibility?.en || '');

    const benefits = document.createElement('p');
    benefits.className = 'scheme-desc';
    benefits.innerHTML = `<strong>${I18N.t('benefits', lang)}: </strong>` + (scheme.benefits?.[lang] || scheme.benefits?.en || '');

    const footer = document.createElement('div');
    footer.className = 'card-footer';
    const link = document.createElement('a');
    link.href = scheme.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'link-btn';
    link.textContent = I18N.t('official_link', lang);
    footer.appendChild(link);

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(desc);
    card.appendChild(eligibility);
    card.appendChild(benefits);
    card.appendChild(footer);
    return card;
  }

  function updateResultsCount(count, total) {
    const lang = I18N.getLanguage();
    const template = I18N.t('results_count', lang);
    dom.resultsCount.textContent = template
      .replace('{count}', String(count))
      .replace('{total}', String(total));
  }

  function debounce(fn, ms) {
    let t = null;
    return function(...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  document.addEventListener('DOMContentLoaded', init);
})();


