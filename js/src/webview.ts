import { setNativeFunc } from './index'

declare var window: any

setNativeFunc(msg => {

  // iOS WKWebView
  if (window.webkit && window.webkit.messageHandlers) {
    return window.webkit.messageHandlers.appShell.postMessage(msg)
  } 

  // android bridge
  if (window.appShellBridge) {
    return window.appShellBridge.callNative(msg.callId, msg.scheme, JSON.stringify(msg.params))
  }

  // TODO we will support more webview later

})

export * from './index'