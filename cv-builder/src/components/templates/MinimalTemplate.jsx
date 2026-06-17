import { dateRange, has } from './shared.jsx'

// قالب بسيط أنيق بخط واضح ومساحات واسعة
export default function MinimalTemplate({ data, t, accent }) {
  const p = data.personal
  const levelText = (lvl) => t.levels[lvl]
  return (
    <div className="cv cv--minimal" style={{ '--accent': accent }}>
      <header className="cv__header">
        <h1 className="cv__name">{p.fullName || t.you}</h1>
        <p className="cv__role">{p.jobTitle || t.yourTitle}</p>
        <div className="cv__contacts">
          {[p.email, p.phone, p.location, p.website].filter(Boolean).join('  ·  ')}
        </div>
      </header>

      {data.summary && <p className="cv__summary">{data.summary}</p>}

      {has(data.experience) && (
        <section className="cv__section">
          <h2 className="cv__h2">{t.sections.experience}</h2>
          {data.experience.map((e) => (
            <div className="cv__item" key={e.id}>
              <div className="cv__item-row">
                <span><strong>{e.role}</strong>{e.company ? ` — ${e.company}` : ''}</span>
                <span className="cv__date">{dateRange(e, t)}</span>
              </div>
              {e.description && <p className="cv__desc">{e.description}</p>}
            </div>
          ))}
        </section>
      )}

      {has(data.education) && (
        <section className="cv__section">
          <h2 className="cv__h2">{t.sections.education}</h2>
          {data.education.map((e) => (
            <div className="cv__item" key={e.id}>
              <div className="cv__item-row">
                <span><strong>{e.degree}</strong>{e.school ? ` — ${e.school}` : ''}</span>
                <span className="cv__date">{dateRange(e, t)}</span>
              </div>
              {e.description && <p className="cv__desc">{e.description}</p>}
            </div>
          ))}
        </section>
      )}

      <div className="cv__cols">
        {has(data.skills) && (
          <section className="cv__section">
            <h2 className="cv__h2">{t.sections.skills}</h2>
            <p className="cv__inline">{data.skills.map((s) => s.name).join('  ·  ')}</p>
          </section>
        )}
        {has(data.languages) && (
          <section className="cv__section">
            <h2 className="cv__h2">{t.sections.languages}</h2>
            <p className="cv__inline">
              {data.languages.map((l) => `${l.name} (${levelText(l.level)})`).join('  ·  ')}
            </p>
          </section>
        )}
      </div>

      {has(data.links) && (
        <section className="cv__section">
          <h2 className="cv__h2">{t.sections.links}</h2>
          <p className="cv__inline">
            {data.links.map((l) => `${l.label}: ${l.url}`).join('  ·  ')}
          </p>
        </section>
      )}
    </div>
  )
}
