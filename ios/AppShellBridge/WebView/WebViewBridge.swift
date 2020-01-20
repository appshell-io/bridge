//
//  WebViewBridge.swift
//  AppShellBridge
//
//  Created by mingo on 2020/1/19.
//

import Foundation
import WebKit

public class WebViewBridge : NSObject, WKScriptMessageHandler {
    
    public func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        
    }
    
}

public extension WKWebView {
    
    func addWebViewBridge(_ bridge: WebViewBridge) {
        
    }
    
}
