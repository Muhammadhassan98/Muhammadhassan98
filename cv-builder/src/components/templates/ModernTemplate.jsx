import { dateRange, LevelBar, has } from './shared.jsx'

// قالب عصري بعمودين: شريط جانبي ملوّن + المحتوى الرئيسي
export default function ModernTemplate({ data, t, accent }) {
  const p = data.personal
  return (
    <div className="cv cv--modern" style={{ '--accent': accent }}>
      <aside className="cv__side">
        {p.photo ? <img className="cv__photo" src={p.photo} alt="" /> : <div className="cv__avatar">{(p.fullName || '?').charAt(0)}</div>}
        <h1 className="cv__name">{p.fullName || t.you}</h1>
        <p className="cv__role">{p.jobTitle || t.yourTitle}</p>

        <div className="cv__side-block">
          {p.email && <div className="cv__contact">✉ {p.email}</div>}
          {p.phone && <div className="cv__contact">☎ {p.phone}</div>}
          {p.location && <div className="cv__contact">⚲ {p.location}</div>}
          {p.website && <div className="cv__contact">🔗 {p.website}</div>}
        </div>

        {has(data.skills) && (
          <div className="cv__side-block">
            <h2 className="cv__h2 cv__h2--side">{t.sections.skills}</h2>
            {data.skills.map((s) => (
              <div className="cv__skill" key={s.id}>
                <span>{s.name}</span>
                <LevelBar level={s.level} accent={accent} />
              </div>
            ))}
          </div>
        )}

        {has(data.languages) && (
          <div className="cv__side-block">
            <h2 className="cv__h2 cv__h2--side">{t.sections.languages}</h2>
            {data.languages.map((l) => (
              <div className="cv__skill" key={l.id}>
                <span>{l.name}</span>
                <LevelBar level={l.level} accent={accent} />
              </div>
            ))}
          </div>
        )}

        {has(data.links) && (
          <div className="cv__side-block">
            <h2 className="cv__h2 cv__h2--side">{t.sections.links}</h2>
            {data.links.map((l) => (
              <div className="cv__contact" key={l.id}>
                {l.label}: {l.url}
              </div>
            ))}
          </div>
        )}
      </aside>

      <main className="cv__main">
        {data.summary && (
          <section className="cv__section">
            <h2 className="cv__h2">{t.sections.summary}</h2>
            <p className="cv__summary">{data.summary}</p>
          </section>
        )}

        {has(data.experience) && (
          <section className="cv__section">
            <h2 className="cv__h2">{t.sections.experience}</h2>
            {data.experience.map((e) => (
              <div className="cv__item" key={e.id}>
                <div className="cv__item-row">
                  <strong>{e.role}</strong>
                  <span className="cv__date">{dateRange(e, t)}</span>
                </div>
                <div className="cv__sub">{e.company}</div>
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
                  <strong>{e.degree}</strong>
                  <span className="cv__date">{dateRange(e, t)}</span>
                </div>
                <div className="cv__sub">{e.school}</div>
                {e.description && <p className="cv__desc">{e.description}</p>}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  )
}
