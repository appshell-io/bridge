import 'dart:async';

import 'package:flutter/services.dart';

class AppshellFlutterBridge {
  static const MethodChannel _channel =
      const MethodChannel('appshell_flutter_bridge');

  static Future<String> get platformVersion async {
    final String version = await _channel.invokeMethod('getPlatformVersion');
    return version;
  }
}
