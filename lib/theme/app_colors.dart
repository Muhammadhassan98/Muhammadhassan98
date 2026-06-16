import 'package:flutter/material.dart';

/// ألوان تطبيق Rovi المستخرجة من تصميم Figma.
class AppColors {
  AppColors._();

  // الخلفيات الغامقة
  static const Color background = Color(0xFF0E0A14);
  static const Color surface = Color(0xFF171221);
  static const Color surfaceLight = Color(0xFF221A30);

  // ألوان الجراديانت الأساسي (بمبي -> موف)
  static const Color pink = Color(0xFFFF1B8D);
  static const Color purple = Color(0xFFA020F0);
  static const Color deepPurple = Color(0xFF6A1B9A);

  // نصوص
  static const Color textPrimary = Color(0xFFFFFFFF);
  static const Color textSecondary = Color(0xFFB9AEC9);
  static const Color textMuted = Color(0xFF6E6480);

  // حدود
  static const Color border = Color(0xFF2E2640);

  /// الجراديانت الأساسي المستخدم في الأزرار والعناصر المميّزة.
  static const LinearGradient primaryGradient = LinearGradient(
    begin: Alignment.centerRight,
    end: Alignment.centerLeft,
    colors: [pink, purple],
  );

  /// جراديانت الخلفية العام للشاشات.
  static const LinearGradient backgroundGradient = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [Color(0xFF1A0F26), background],
  );
}
