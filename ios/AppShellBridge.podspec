Pod::Spec.new do |s|
  s.name             = 'AppShellBridge'
  s.version          = '0.1.0'
  s.summary          = 'A bridge library.'
  s.homepage         = 'https://github.com/appshell-io/AppShellBridge'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'zzmingo' => 'zzmingo@qq.com' }
  s.source        = { 
    :git => 'https://github.com/appshell-io/AppShellBridge.git',
    :tag => '0.1.0'
  }

  s.ios.deployment_target = '8.0'
  s.source_files = 'AppShellBridge/Classes/**/*'

  s.subspec 'WebView' do |webview|
    webview.source_files = 'AppShellBridge/WebView/**/*'
    webview.frameworks = 'WebKit'
  end

  s.subspec 'ReactNative' do |rn|
    rn.source_files = 'AppShellBridge/ReactNative/**/*'
    # rn.dependency 'Facebook-iOS-SDK'
  end
end
