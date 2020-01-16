import { NativeModules } from 'react-native'
import { setNativeFunc } from './index'

setNativeFunc(msg => {
  NativeModules.AppShell.callNative(JSON.stringify(msg))
})

export * from './index'