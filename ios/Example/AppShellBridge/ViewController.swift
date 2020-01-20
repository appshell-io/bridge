//
//  ViewController.swift
//  AppShellBridge
//
//  Created by zzmingo on 01/19/2020.
//  Copyright (c) 2020 zzmingo. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        let pFrame = self.view.frame
        
        let webViewBtn = UIButton(frame: CGRect(x: 0, y: pFrame.height / 2 - 100, width: pFrame.width, height: 80))
        webViewBtn.setTitle("WebView", for: .normal)
        webViewBtn.setTitleColor(.black, for: .normal)
        webViewBtn.addTarget(self, action: #selector(onClickWebViewBtn), for: .touchUpInside)
        self.view.addSubview(webViewBtn)
        
        let rnBtn = UIButton(frame: CGRect(x: 0, y: pFrame.height / 2 + 100, width: pFrame.width, height: 80))
        rnBtn.setTitle("ReactNative", for: .normal)
        rnBtn.setTitleColor(.black, for: .normal)
        rnBtn.addTarget(self, action: #selector(onClickReactNativeBtn), for: .touchUpInside)
        self.view.addSubview(rnBtn)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @objc private func onClickWebViewBtn() {
        self.present(WebViewController(), animated: true) {}
    }
    
    @objc private func onClickReactNativeBtn() {
        self.present(ReactNativeController(), animated: true) {}
    }

}

