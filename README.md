# Rovi

تطبيق اجتماعي (Flutter) مبني من تصميم Figma. واجهة عربية بالكامل (RTL) بثيم غامق وجراديانت بمبي/موف.

## الشاشات المنفّذة
- **Splash** — شاشة البداية بالشعار.
- **Onboarding** — ٤ صفحات تعريفية مع مؤشّر نقاط وزر تخطّي.
- **تحديد النوع** — اختيار ذكر / أنثى.
- **الحالة الاجتماعية** — قائمة اختيار مفرد.
- **الهوايات** — اختيار متعدّد بشكل شيبس.

## البنية
```
lib/
├── main.dart                 # نقطة الدخول + فرض RTL
├── theme/
│   ├── app_colors.dart       # الألوان والجراديانت
│   └── app_theme.dart        # الثيم العام + خط Cairo
├── widgets/
│   ├── gradient_button.dart
│   ├── selectable_tile.dart
│   └── selectable_chip.dart
└── screens/
    ├── splash_screen.dart
    ├── onboarding_screen.dart
    ├── gender_screen.dart
    ├── relationship_screen.dart
    └── hobbies_screen.dart
```

## التشغيل
```bash
flutter pub get
flutter run
```

> يتطلّب Flutter SDK 3.4 أو أحدث.
