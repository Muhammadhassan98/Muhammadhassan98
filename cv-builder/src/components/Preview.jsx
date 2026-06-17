import ClassicTemplate from './templates/ClassicTemplate.jsx'
import ModernTemplate from './templates/ModernTemplate.jsx'
import MinimalTemplate from './templates/MinimalTemplate.jsx'

const MAP = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
}

// يعرض القالب المختار داخل صفحة بمقاس A4 (هي نفسها التي تُطبع)
export default function Preview({ t, data, template, accent, lang }) {
  const Template = MAP[template] || ClassicTemplate
  return (
    <div className="page" id="cv-page" dir={t.dir} lang={lang}>
      <Template data={data} t={t} accent={accent} />
    </div>
  )
}
