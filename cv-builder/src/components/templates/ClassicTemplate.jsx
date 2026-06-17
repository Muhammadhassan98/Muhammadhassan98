import { dateRange, LevelDots, has } from './shared.jsx'

export default function ClassicTemplate({ data, t, accent }) {
  const p = data.personal
  return (
    <div className="cv cv--classic" style={{ '--accent': accent }}>
      <header className="cv__header">
        {p.photo ? <img className="cv__photo" src={p.photo} alt="" /> : null}
        <div className="cv__headtext">
          <h1 className="cv__name">{p.fullName || t.you}</h1>
          <p className="cv__role">{p.jobTitle || t.yourTitle}</p>
          <div className="cv__contacts">
            {p.email && <span>✉ {p.email}</span>}
            {p.phone && <span>☎ {p.phone}</span>}
            {p.location && <span>⚲ {p.location}</span>}
            {p.website && <span>🔗 {p.website}</span>}
          </div>
        </div>
      </header>

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

      <div className="cv__cols">
        {has(data.skills) && (
          <section className="cv__section">
            <h2 className="cv__h2">{t.sections.skills}</h2>
            {data.skills.map((s) => (
              <div className="cv__line" key={s.id}>
                <span>{s.name}</span>
                <LevelDots level={s.level} accent={accent} />
              </div>
            ))}
          </section>
        )}

        {has(data.languages) && (
          <section className="cv__section">
            <h2 className="cv__h2">{t.sections.languages}</h2>
            {data.languages.map((l) => (
              <div className="cv__line" key={l.id}>
                <span>{l.name}</span>
                <LevelDots level={l.level} accent={accent} />
              </div>
            ))}
          </section>
        )}
      </div>

      {has(data.links) && (
        <section className="cv__section">
          <h2 className="cv__h2">{t.sections.links}</h2>
          <div className="cv__links">
            {data.links.map((l) => (
              <span className="cv__chip" key={l.id}>
                {l.label}: {l.url}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
