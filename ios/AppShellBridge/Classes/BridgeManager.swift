//
//  BridgeManager.swift
//  AppShellBridge
//
//  Created by mingo on 2020/1/20.
//

import Foundation

class BridgeManager {
    
    private let registry: BridgeRegistry
    
    init(registry: BridgeRegistry) {
        self.registry = registry
    }
    
    func callNative(call: BridgeCall) {
        
    }
    
}
