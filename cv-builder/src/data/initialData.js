// نموذج البيانات الافتراضي للسيرة الذاتية
export const emptyData = {
  personal: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    photo: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  languages: [],
  links: [],
}

// بيانات تجريبية تظهر أول مرة لتوضيح الشكل
export const sampleData = {
  personal: {
    fullName: 'محمد حسن',
    jobTitle: 'مطوّر واجهات أمامية',
    email: 'mohamed@email.com',
    phone: '+20 100 123 4567',
    location: 'القاهرة، مصر',
    website: 'mohamed.dev',
    photo: '',
  },
  summary:
    'مطوّر واجهات أمامية بخبرة 4 سنوات في بناء تطبيقات ويب سريعة وسهلة الاستخدام باستخدام React وحلول حديثة. شغوف بتجربة المستخدم وجودة الكود.',
  experience: [
    {
      id: 'exp-1',
      role: 'مطوّر واجهات أول',
      company: 'شركة التقنية',
      start: '2022',
      end: '',
      current: true,
      description: 'قيادة تطوير لوحة تحكم بـ React وتحسين الأداء بنسبة 40%.',
    },
    {
      id: 'exp-2',
      role: 'مطوّر واجهات',
      company: 'استوديو ويب',
      start: '2020',
      end: '2022',
      current: false,
      description: 'بناء مواقع متجاوبة لعملاء متعددين بمعايير وصول عالية.',
    },
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'بكالوريوس علوم حاسب',
      school: 'جامعة القاهرة',
      start: '2016',
      end: '2020',
      current: false,
      description: '',
    },
  ],
  skills: [
    { id: 'sk-1', name: 'React', level: 3 },
    { id: 'sk-2', name: 'JavaScript', level: 3 },
    { id: 'sk-3', name: 'CSS / Tailwind', level: 2 },
    { id: 'sk-4', name: 'Git', level: 2 },
  ],
  languages: [
    { id: 'lng-1', name: 'العربية', level: 3 },
    { id: 'lng-2', name: 'الإنجليزية', level: 2 },
  ],
  links: [
    { id: 'ln-1', label: 'GitHub', url: 'github.com/username' },
    { id: 'ln-2', label: 'LinkedIn', url: 'linkedin.com/in/username' },
  ],
}

export const templates = [
  { id: 'classic', name: { ar: 'كلاسيكي', en: 'Classic' } },
  { id: 'modern', name: { ar: 'عصري', en: 'Modern' } },
  { id: 'minimal', name: { ar: 'بسيط', en: 'Minimal' } },
]

export const accents = ['#4f46e5', '#0ea5e9', '#059669', '#db2777', '#ea580c', '#0f172a']

// مولّد معرّفات بسيط
export const uid = (prefix = 'id') =>
  `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
