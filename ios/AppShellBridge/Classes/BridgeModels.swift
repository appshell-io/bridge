//
//  File.swift
//  AppShellBridge
//
//  Created by mingo on 2020/1/20.
//

import Foundation

class BridgeCall {
    
    let callId: String
    let scheme: String
    let params: NSDictionary?
    
    init(callId: String, scheme: String, params: NSDictionary? = nil) {
        self.callId = callId
        self.scheme = scheme
        self.params = params
    }
    
}
