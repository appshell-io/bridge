import * as Bridge from '../src/index'

describe('index.ts', () => {

  it('setNativeFunc OK', () => {
      Bridge.setNativeFunc(() => {})
  })
  
  it('callNative ok', () => {
    Bridge.setNativeFunc(() => {})
    Bridge.callNative({ channel: 'test', method: 'call' })
  })

  it('callNative result success', () => {
    Bridge.setNativeFunc((msg) => {
      Bridge.onNativeResult({
        callId: msg.callId,
        success: true,
        result: {}
      })
    })
    return Bridge.callNativeForResult({ channel: 'test', method: 'call' })
  })

  it('callNative result success, string result', () => {
    Bridge.setNativeFunc((msg) => {
      Bridge.onNativeResult(JSON.stringify({
        callId: msg.callId,
        success: true,
        result: {}
      }))
    })
    return Bridge.callNativeForResult({ channel: 'test', method: 'call' })
  })

  it('callNative result error', () => {
    Bridge.setNativeFunc((msg) => {
      Bridge.onNativeResult({
        callId: msg.callId,
        success: false,
        message: 'Fail'
      })
    })
    return Bridge.callNativeForResult({ channel: 'test', method: 'call' }).catch(error => {})
  })

})