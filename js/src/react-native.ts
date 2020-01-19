import { NativeModules } from 'react-native'
import { setNativeFunc } from './index'

setNativeFunc(msg => {
  NativeModules.AppShell.callNative(msg.callId, msg.scheme, msg.params)
})

export * from './index'