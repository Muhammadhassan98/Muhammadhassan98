export default function Toolbar({
  t,
  lang,
  template,
  accent,
  templates,
  accents,
  savedFlash,
  onToggleLang,
  onTemplate,
  onAccent,
  onReset,
  onDownload,
}) {
  return (
    <header className="toolbar">
      <div className="toolbar__brand">
        <span className="toolbar__logo" aria-hidden="true">
          CV
        </span>
        <div>
          <h1 className="toolbar__title">{t.appName}</h1>
          <p className="toolbar__tagline">{t.tagline}</p>
        </div>
      </div>

      <div className="toolbar__controls">
        <div className="control">
          <label className="control__label">{t.template}</label>
          <div className="seg">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                className={`seg__btn ${template === tpl.id ? 'is-active' : ''}`}
                onClick={() => onTemplate(tpl.id)}
                type="button"
              >
                {tpl.name[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="control">
          <label className="control__label">{t.accent}</label>
          <div className="swatches">
            {accents.map((c) => (
              <button
                key={c}
                type="button"
                className={`swatch ${accent === c ? 'is-active' : ''}`}
                style={{ background: c }}
                aria-label={c}
                onClick={() => onAccent(c)}
              />
            ))}
          </div>
        </div>

        <div className="toolbar__actions">
          <span className={`saved ${savedFlash ? 'is-on' : ''}`}>● {t.saved}</span>
          <button className="btn btn--ghost" type="button" onClick={onToggleLang}>
            {t.language}
          </button>
          <button className="btn btn--ghost" type="button" onClick={onReset}>
            {t.reset}
          </button>
          <button className="btn btn--primary" type="button" onClick={onDownload}>
            ⬇ {t.download}
          </button>
        </div>
      </div>
    </header>
  )
}
