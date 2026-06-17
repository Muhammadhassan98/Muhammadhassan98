import { uid } from '../data/initialData.js'
import { Text, Area, Check, LevelSelect, Card } from './form/Inputs.jsx'

// قسم قابل للطي مع عنوان
function Section({ title, children }) {
  return (
    <details className="section" open>
      <summary className="section__head">{title}</summary>
      <div className="section__body">{children}</div>
    </details>
  )
}

export default function Editor({ t, data, setData }) {
  // تعديل حقل شخصي
  const setPersonal = (key, value) =>
    setData((d) => ({ ...d, personal: { ...d.personal, [key]: value } }))

  // مساعدات للقوائم المتكررة (experience / education / skills / languages / links)
  const addItem = (key, item) => setData((d) => ({ ...d, [key]: [...d[key], item] }))
  const updateItem = (key, id, patch) =>
    setData((d) => ({
      ...d,
      [key]: d[key].map((it) => (it.id === id ? { ...it, ...patch } : it)),
    }))
  const removeItem = (key, id) =>
    setData((d) => ({ ...d, [key]: d[key].filter((it) => it.id !== id) }))

  const f = t.fields
  const p = t.placeholders

  return (
    <div className="editor">
      {/* البيانات الشخصية */}
      <Section title={t.sections.personal}>
        <div className="grid2">
          <Text label={f.fullName} value={data.personal.fullName} placeholder={p.fullName}
            onChange={(v) => setPersonal('fullName', v)} />
          <Text label={f.jobTitle} value={data.personal.jobTitle} placeholder={p.jobTitle}
            onChange={(v) => setPersonal('jobTitle', v)} />
          <Text label={f.email} type="email" value={data.personal.email} placeholder={p.email}
            onChange={(v) => setPersonal('email', v)} />
          <Text label={f.phone} value={data.personal.phone} placeholder={p.phone}
            onChange={(v) => setPersonal('phone', v)} />
          <Text label={f.location} value={data.personal.location} placeholder={p.location}
            onChange={(v) => setPersonal('location', v)} />
          <Text label={f.website} value={data.personal.website} placeholder={p.website}
            onChange={(v) => setPersonal('website', v)} />
          <Text label={f.photo} value={data.personal.photo} placeholder="https://..."
            onChange={(v) => setPersonal('photo', v)} />
        </div>
      </Section>

      {/* النبذة */}
      <Section title={t.sections.summary}>
        <Area label={t.sections.summary} value={data.summary} placeholder={f.summaryText} rows={5}
          onChange={(v) => setData((d) => ({ ...d, summary: v }))} />
      </Section>

      {/* الخبرات */}
      <Section title={t.sections.experience}>
        {data.experience.map((exp) => (
          <Card key={exp.id} removeLabel={t.remove}
            onRemove={() => removeItem('experience', exp.id)}>
            <div className="grid2">
              <Text label={f.role} value={exp.role}
                onChange={(v) => updateItem('experience', exp.id, { role: v })} />
              <Text label={f.company} value={exp.company}
                onChange={(v) => updateItem('experience', exp.id, { company: v })} />
              <Text label={f.start} value={exp.start}
                onChange={(v) => updateItem('experience', exp.id, { start: v })} />
              <Text label={f.end} value={exp.end}
                onChange={(v) => updateItem('experience', exp.id, { end: v })} />
            </div>
            <Check label={f.current} checked={exp.current}
              onChange={(v) => updateItem('experience', exp.id, { current: v })} />
            <Area label={f.description} value={exp.description} rows={3}
              onChange={(v) => updateItem('experience', exp.id, { description: v })} />
          </Card>
        ))}
        <button className="btn btn--add" type="button"
          onClick={() => addItem('experience', { id: uid('exp'), role: '', company: '', start: '', end: '', current: false, description: '' })}>
          + {t.add}
        </button>
      </Section>

      {/* التعليم */}
      <Section title={t.sections.education}>
        {data.education.map((edu) => (
          <Card key={edu.id} removeLabel={t.remove}
            onRemove={() => removeItem('education', edu.id)}>
            <div className="grid2">
              <Text label={f.degree} value={edu.degree}
                onChange={(v) => updateItem('education', edu.id, { degree: v })} />
              <Text label={f.school} value={edu.school}
                onChange={(v) => updateItem('education', edu.id, { school: v })} />
              <Text label={f.start} value={edu.start}
                onChange={(v) => updateItem('education', edu.id, { start: v })} />
              <Text label={f.end} value={edu.end}
                onChange={(v) => updateItem('education', edu.id, { end: v })} />
            </div>
            <Area label={f.description} value={edu.description} rows={2}
              onChange={(v) => updateItem('education', edu.id, { description: v })} />
          </Card>
        ))}
        <button className="btn btn--add" type="button"
          onClick={() => addItem('education', { id: uid('edu'), degree: '', school: '', start: '', end: '', current: false, description: '' })}>
          + {t.add}
        </button>
      </Section>

      {/* المهارات */}
      <Section title={t.sections.skills}>
        {data.skills.map((sk) => (
          <Card key={sk.id} removeLabel={t.remove} onRemove={() => removeItem('skills', sk.id)}>
            <div className="grid2">
              <Text label={f.skillName} value={sk.name}
                onChange={(v) => updateItem('skills', sk.id, { name: v })} />
              <LevelSelect label={f.level} value={sk.level} options={t.levels}
                onChange={(v) => updateItem('skills', sk.id, { level: v })} />
            </div>
          </Card>
        ))}
        <button className="btn btn--add" type="button"
          onClick={() => addItem('skills', { id: uid('sk'), name: '', level: 2 })}>
          + {t.add}
        </button>
      </Section>

      {/* اللغات */}
      <Section title={t.sections.languages}>
        {data.languages.map((lng) => (
          <Card key={lng.id} removeLabel={t.remove} onRemove={() => removeItem('languages', lng.id)}>
            <div className="grid2">
              <Text label={f.languageName} value={lng.name}
                onChange={(v) => updateItem('languages', lng.id, { name: v })} />
              <LevelSelect label={f.level} value={lng.level} options={t.levels}
                onChange={(v) => updateItem('languages', lng.id, { level: v })} />
            </div>
          </Card>
        ))}
        <button className="btn btn--add" type="button"
          onClick={() => addItem('languages', { id: uid('lng'), name: '', level: 2 })}>
          + {t.add}
        </button>
      </Section>

      {/* الروابط */}
      <Section title={t.sections.links}>
        {data.links.map((ln) => (
          <Card key={ln.id} removeLabel={t.remove} onRemove={() => removeItem('links', ln.id)}>
            <div className="grid2">
              <Text label={f.label} value={ln.label}
                onChange={(v) => updateItem('links', ln.id, { label: v })} />
              <Text label={f.url} value={ln.url}
                onChange={(v) => updateItem('links', ln.id, { url: v })} />
            </div>
          </Card>
        ))}
        <button className="btn btn--add" type="button"
          onClick={() => addItem('links', { id: uid('ln'), label: '', url: '' })}>
          + {t.add}
        </button>
      </Section>
    </div>
  )
}
