import * as JSB from '../../js/dist/webview.js'


window.onClickCallNative = () => {
  console.log('yes?')
  JSB.callNative("io.appshell.bridge.test/test", { key: "value" })
}