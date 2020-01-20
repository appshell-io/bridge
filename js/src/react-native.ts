import { NativeModules } from 'react-native'
import { setNativeFunc } from './index'

setNativeFunc(msg => {
  return NativeModules.AppShell.callNative(msg.callId, msg.scheme, JSON.stringify(msg.params))
    .then((jsonStr: string) => JSON.parse(jsonStr))
})

export * from './index'