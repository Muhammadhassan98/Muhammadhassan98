import 'package:flutter/material.dart';

import '../theme/app_colors.dart';
import '../widgets/gradient_button.dart';
import '../widgets/selectable_chip.dart';

/// شاشة تحديد الهوايات (اختيار متعدّد بشكل شيبس).
class HobbiesScreen extends StatefulWidget {
  const HobbiesScreen({super.key});

  @override
  State<HobbiesScreen> createState() => _HobbiesScreenState();
}

class _HobbiesScreenState extends State<HobbiesScreen> {
  static const List<String> _hobbies = [
    'السفر',
    'الموسيقى',
    'الرياضة',
    'القراءة',
    'الطبخ',
    'التصوير',
    'الألعاب',
    'الأفلام',
    'الرسم',
    'الرقص',
    'الكتابة',
    'الموضة',
    'التقنية',
    'السيارات',
    'الطبيعة',
    'القهوة',
    'اليوغا',
    'التسوّق',
    'الحيوانات',
    'الفنون',
  ];

  final Set<String> _selected = {};

  void _toggle(String hobby) {
    setState(() {
      if (!_selected.add(hobby)) _selected.remove(hobby);
    });
  }

  void _finish() {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('تم اختيار ${_selected.length} هواية 🎉')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        decoration: const BoxDecoration(gradient: AppColors.backgroundGradient),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const SizedBox(height: 8),
                const Text(
                  'حدّد هواياتك',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.w800),
                ),
                const SizedBox(height: 8),
                const Text(
                  'اختر ما يناسب اهتماماتك',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: AppColors.textSecondary),
                ),
                const SizedBox(height: 24),
                Expanded(
                  child: SingleChildScrollView(
                    child: Wrap(
                      spacing: 10,
                      runSpacing: 12,
                      children: _hobbies
                          .map((h) => SelectableChip(
                                label: h,
                                selected: _selected.contains(h),
                                onTap: () => _toggle(h),
                              ))
                          .toList(),
                    ),
                  ),
                ),
                GradientButton(
                  label: 'إنهاء',
                  enabled: _selected.isNotEmpty,
                  onPressed: _finish,
                ),
                const SizedBox(height: 28),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
