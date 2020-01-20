//
//  WebViewBridge.swift
//  AppShellBridge
//
//  Created by mingo on 2020/1/19.
//

import Foundation
import WebKit

public class WebViewBridge : NSObject, WKScriptMessageHandler {
    
    weak var webView: WKWebView?
    var bridgeMgr = BridgeManager(registry: .shared)
    
    init(webView: WKWebView) {
        super.init()
        self.webView = webView
    }
    
    public func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let msg = message.body as? NSDictionary else {
            return
        }
        
        let callId = msg["callId"] as! String
        let scheme = msg["scheme"] as! String
        let params = msg["params"] as? NSDictionary
        
        bridgeMgr.callNative(call: BridgeCall(callId: callId, scheme: scheme, params: params))
    }
    
}

public extension WKWebView {
    
    func addWebViewBridge() {
        self.addWebViewBridge(WebViewBridge(webView: self))
    }
    
    func addWebViewBridge(_ bridge: WebViewBridge) {
        self.configuration.userContentController.add(bridge, name: "appShell")
    }
    
}
