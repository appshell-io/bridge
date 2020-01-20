//
//  WebViewController.swift
//  AppShellBridge
//
//  Created by zzmingo on 01/19/2020.
//  Copyright (c) 2020 zzmingo. All rights reserved.
//

import UIKit
import WebKit
import AppShellBridge

class WebViewController: UIViewController {
    
    var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        let pFrame = self.view.frame
        
        let config = WKWebViewConfiguration()
        webView = WKWebView(frame: pFrame, configuration: config)
        webView.addWebViewBridge()
        self.view.addSubview(webView)
        
        webView.load(URLRequest(url: URL(string: "http://localhost:1234")!))
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

