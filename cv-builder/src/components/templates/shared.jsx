// أدوات مشتركة بين القوالب

// نطاق التاريخ "من - إلى" مع دعم "حتى الآن"
export function dateRange(item, t) {
  const end = item.current ? t.fields.current : item.end
  if (!item.start && !end) return ''
  return [item.start, end].filter(Boolean).join(' — ')
}

// نقاط لإظهار المستوى (0..3)
export function LevelDots({ level, accent }) {
  return (
    <span className="dots">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="dot"
          style={{ background: i <= level ? accent : 'currentColor', opacity: i <= level ? 1 : 0.18 }}
        />
      ))}
    </span>
  )
}

// شريط لإظهار المستوى
export function LevelBar({ level, accent }) {
  return (
    <span className="bar">
      <span className="bar__fill" style={{ width: `${((level + 1) / 4) * 100}%`, background: accent }} />
    </span>
  )
}

// هل القسم يحتوي بيانات فعلية؟
export const has = (arr) => Array.isArray(arr) && arr.length > 0
