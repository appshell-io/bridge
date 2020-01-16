package io.appshell.bridge

import android.webkit.JavascriptInterface
import android.webkit.WebView

class WebViewBridge(private val webView: WebView) {

    @JavascriptInterface
    fun callNative(messageStr: String) {

    }

}