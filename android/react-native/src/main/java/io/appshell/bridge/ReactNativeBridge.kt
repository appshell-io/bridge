package io.appshell.bridge

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ReactNativeBridge(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    private val bridgeMgr = BridgeManager(BridgeRegistry)

    override fun getName(): String {
        return "AppShell"
    }

    @ReactMethod
    fun callNative(callId: String, channel: String, params: String) {
        Log.e("JSB", "%s %s %s".format(callId, channel, params))
        bridgeMgr.callNative(BridgeCall(callId, channel, params))
    }

}