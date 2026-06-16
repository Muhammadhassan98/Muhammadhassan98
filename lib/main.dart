import 'package:flutter/material.dart';

import 'theme/app_theme.dart';
import 'screens/splash_screen.dart';

void main() {
  runApp(const RoviApp());
}

class RoviApp extends StatelessWidget {
  const RoviApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Rovi',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.dark,
      // فرض الاتجاه من اليمين لليسار لكامل التطبيق.
      builder: (context, child) => Directionality(
        textDirection: TextDirection.rtl,
        child: child!,
      ),
      home: const SplashScreen(),
    );
  }
}
