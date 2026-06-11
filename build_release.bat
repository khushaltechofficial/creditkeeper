@echo off
echo Building optimized APK...

REM Clean previous builds
flutter clean

REM Get dependencies
flutter pub get

REM Build optimized APK with size reduction flags
flutter build apk --release ^
  --dart-define=flutter.inspector.structuredErrors=false ^
  --dart-define=dart.vm.product=true ^
  --tree-shake-icons ^
  --shrink ^
  --obfuscate ^
  --split-debug-info=debug-symbols

echo Build completed! Check build/app/outputs/flutter-apk/ for APK files.
pause
