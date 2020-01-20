import { setNativeFunc } from './index'

declare var window: any

const callPromiseCahce: any = {}

type CallNativeResult = {
  callId: string
  success: boolean
  message?: string
  result?: any
}

// this function is called by platform
export function onNativeResult(res: CallNativeResult) {
  const promise = callPromiseCahce[res.callId]
  if (!promise) {
    return
  }
  if (res.success) {
    promise.resolve(res.result)
  } else {
    promise.reject(new Error(res.message || 'unknow reject'))
  }
}

window.onAppShellNativeResult = onNativeResult

setNativeFunc(msg => {
  return new Promise((resolve, reject) => {
    callPromiseCahce[msg.callId] = { resolve, reject }

    // iOS WKWebView
    if (window.webkit && window.webkit.messageHandlers) {
      window.webkit.messageHandlers.appShell.postMessage(msg)
    } 

    // android bridge
    if (window.appShellBridge) {
      window.appShellBridge.callNative(msg.callId, msg.scheme, JSON.stringify(msg.params))
    }

    // TODO we will support more webview later
  })
})

export * from './index'