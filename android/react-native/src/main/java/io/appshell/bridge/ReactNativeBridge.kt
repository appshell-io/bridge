package io.appshell.bridge

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ReactNativeBridge(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    private val bridgeMgr = BridgeManager(BridgeRegistry)

    override fun getName(): String {
        return "AppShell"
    }

    @ReactMethod
    fun callNative(callId: String, scheme: String, params: String, promise: Promise) {
        Log.e("JSB", "%s %s %s".format(callId, scheme, params))
        bridgeMgr.callNative(RNBridgeCall(callId, scheme, params, promise))
    }

    private inner class RNBridgeCall(
        callId: String,
        scheme: String,
        params: String,
        val promise: Promise) : BridgeCall(callId, scheme, params)
    {
        override fun success(data: BridgeJsonResult) {
            promise.resolve(data.toJsonString())
        }

        override fun error(error: Throwable) {
            promise.reject(error)
        }
    }

}