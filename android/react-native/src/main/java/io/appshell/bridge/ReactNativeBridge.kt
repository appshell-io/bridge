package io.appshell.bridge

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ReactNativeBridge(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "AppShell"
    }

    @ReactMethod
    fun callNative(messageStr: String) {

    }

}