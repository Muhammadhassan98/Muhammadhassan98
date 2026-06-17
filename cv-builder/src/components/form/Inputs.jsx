// مكوّنات إدخال صغيرة قابلة لإعادة الاستخدام

export function Text({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <input
        className="field__input"
        type={type}
        value={value || ''}
        placeholder={placeholder || ''}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

export function Area({ label, value, onChange, placeholder, rows = 4 }) {
  return (
    <label className="field field--full">
      <span className="field__label">{label}</span>
      <textarea
        className="field__input field__area"
        rows={rows}
        value={value || ''}
        placeholder={placeholder || ''}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

export function Check({ label, checked, onChange }) {
  return (
    <label className="check">
      <input type="checkbox" checked={!!checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  )
}

export function LevelSelect({ label, value, options, onChange }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <select
        className="field__input"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((opt, i) => (
          <option key={i} value={i}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}

// غلاف لكل عنصر متكرر مع زر حذف
export function Card({ children, onRemove, removeLabel }) {
  return (
    <div className="repeat-card">
      <button
        type="button"
        className="repeat-card__remove"
        onClick={onRemove}
        title={removeLabel}
        aria-label={removeLabel}
      >
        ✕
      </button>
      {children}
    </div>
  )
}
