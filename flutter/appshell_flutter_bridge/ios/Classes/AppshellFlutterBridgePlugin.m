#import "AppshellFlutterBridgePlugin.h"
#if __has_include(<appshell_flutter_bridge/appshell_flutter_bridge-Swift.h>)
#import <appshell_flutter_bridge/appshell_flutter_bridge-Swift.h>
#else
// Support project import fallback if the generated compatibility header
// is not copied when this plugin is created as a library.
// https://forums.swift.org/t/swift-static-libraries-dont-copy-generated-objective-c-header/19816
#import "appshell_flutter_bridge-Swift.h"
#endif

@implementation AppshellFlutterBridgePlugin
+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
  [SwiftAppshellFlutterBridgePlugin registerWithRegistrar:registrar];
}
@end
