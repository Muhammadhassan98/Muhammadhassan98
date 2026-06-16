import 'package:flutter/material.dart';

import '../theme/app_colors.dart';
import '../widgets/gradient_button.dart';
import '../widgets/selectable_tile.dart';
import 'hobbies_screen.dart';

/// شاشة تحديد الحالة الاجتماعية.
class RelationshipScreen extends StatefulWidget {
  const RelationshipScreen({super.key});

  @override
  State<RelationshipScreen> createState() => _RelationshipScreenState();
}

class _RelationshipScreenState extends State<RelationshipScreen> {
  static const List<String> _options = [
    'أعزب',
    'مرتبط',
    'مخطوب',
    'متزوج',
    'علاقة معقّدة',
    'أفضّل عدم القول',
  ];

  String? _selected;

  void _next() {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => const HobbiesScreen()),
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
                  'حدّد حالتك الاجتماعية',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.w800),
                ),
                const SizedBox(height: 24),
                Expanded(
                  child: ListView(
                    children: _options
                        .map((o) => SelectableTile(
                              label: o,
                              selected: _selected == o,
                              onTap: () => setState(() => _selected = o),
                            ))
                        .toList(),
                  ),
                ),
                GradientButton(
                  label: 'التالي',
                  enabled: _selected != null,
                  onPressed: _next,
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
