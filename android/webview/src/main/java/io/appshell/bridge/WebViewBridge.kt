package io.appshell.bridge

import android.annotation.SuppressLint
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView

@SuppressLint("SetJavaScriptEnabled")
class WebViewBridge(private val webView: WebView) : BridgeManager(BridgeRegistry) {

    init {
        webView.settings.javaScriptEnabled = true
        webView.addJavascriptInterface(this, "appShellBridge")
    }

    @JavascriptInterface
    fun callNative(callId: String, channel: String, params: String) {
        Log.e("JSB", "%s %s %s".format(callId, channel, params))
        callNative(BridgeCall(callId, channel, params))
    }

}