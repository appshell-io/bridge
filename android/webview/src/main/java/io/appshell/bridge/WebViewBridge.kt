package io.appshell.bridge

import android.annotation.SuppressLint
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import java.lang.ref.WeakReference

@SuppressLint("SetJavaScriptEnabled")
class WebViewBridge(private val webView: WebView) : BridgeManager(BridgeRegistry) {

    init {
        webView.settings.javaScriptEnabled = true
        webView.addJavascriptInterface(this, "appShellBridge")
    }

    @JavascriptInterface
    fun callNative(callId: String, channel: String, params: String) {
        Log.e("JSB", "%s %s %s".format(callId, channel, params))
        callNative(WebViewCall(callId, channel, params, webView))
    }

    private inner class WebViewCall(
        callId: String,
        scheme: String,
        params: String,
        webView: WebView) : BridgeCall(callId, scheme, params)
    {

        private val webViewRef = WeakReference<WebView>(webView)

        override fun success(data: BridgeJsonResult) {
            val webView = webViewRef.get()
            webView?.let {
                it.evaluateJavascript("window.onAppShellNativeResult({ success: true, result: ${data.toJsonString()} })") {}
            }
        }

        override fun error(error: Throwable) {
            val webView = webViewRef.get()
            webView?.let {
                it.evaluateJavascript("window.onAppShellNativeResult({ success: false, message: '${error.localizedMessage}' })") {}
            }
        }
    }

}