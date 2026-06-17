import { useEffect, useRef, useState } from 'react'
import { translations } from './i18n/translations.js'
import { emptyData, sampleData, templates, accents } from './data/initialData.js'
import Toolbar from './components/Toolbar.jsx'
import Editor from './components/Editor.jsx'
import Preview from './components/Preview.jsx'

const STORAGE_KEY = 'cv-builder:v1'

// تحميل الحالة المحفوظة أو القيم الافتراضية
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        data: { ...emptyData, ...parsed.data },
        lang: parsed.lang || 'ar',
        template: parsed.template || 'classic',
        accent: parsed.accent || accents[0],
      }
    }
  } catch {
    // تجاهل أي خطأ في القراءة ونرجع للافتراضي
  }
  return { data: sampleData, lang: 'ar', template: 'classic', accent: accents[0] }
}

export default function App() {
  const [{ data, lang, template, accent }, setState] = useState(loadState)
  const [savedFlash, setSavedFlash] = useState(false)
  const firstRender = useRef(true)

  const t = translations[lang]

  // ضبط اتجاه الصفحة واللغة
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang, t.dir])

  // الحفظ التلقائي في localStorage مع إشعار خفيف
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const id = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, lang, template, accent }))
      setSavedFlash(true)
      setTimeout(() => setSavedFlash(false), 1400)
    }, 500)
    return () => clearTimeout(id)
  }, [data, lang, template, accent])

  const setData = (updater) =>
    setState((s) => ({ ...s, data: typeof updater === 'function' ? updater(s.data) : updater }))

  const update = (patch) => setState((s) => ({ ...s, ...patch }))

  const toggleLang = () => update({ lang: lang === 'ar' ? 'en' : 'ar' })

  const handleReset = () => {
    if (window.confirm(t.resetConfirm)) setData(emptyData)
  }

  const handleDownload = () => window.print()

  return (
    <div className="app">
      <Toolbar
        t={t}
        lang={lang}
        template={template}
        accent={accent}
        templates={templates}
        accents={accents}
        savedFlash={savedFlash}
        onToggleLang={toggleLang}
        onTemplate={(id) => update({ template: id })}
        onAccent={(c) => update({ accent: c })}
        onReset={handleReset}
        onDownload={handleDownload}
      />

      <main className="workspace">
        <section className="panel panel--editor" aria-label="editor">
          <Editor t={t} data={data} setData={setData} />
        </section>
        <section className="panel panel--preview" aria-label="preview">
          <div className="preview-scroll">
            <Preview t={t} data={data} template={template} accent={accent} lang={lang} />
          </div>
        </section>
      </main>
    </div>
  )
}
