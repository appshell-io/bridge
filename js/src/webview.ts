import { setNativeFunc } from './index'

const win = window as any

setNativeFunc(msg => {

  // iOS WKWebView
  if (win.webkit && win.webkit.messageHandlers) {
    return win.webkit.messageHandlers.appShell.postMessage(msg)
  } 

  // android bridge
  if (win.appShellBridge) {
    return win.appShellBridge.callNative(JSON.stringify(msg))
  }

  // TODO we will support more webview later

})

export * from './index'