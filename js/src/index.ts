type CallNativeResult = {
  callId: string
  success: boolean
  message?: string
  result?: any
}

type NativeFunc = (msg: { 
  callId: string 
  scheme: string
  params: any
}) => void


let nativeApi: {
  nativeFunc: NativeFunc
}

// provide by platform
export function setNativeFunc(nativeFunc: NativeFunc) {
  nativeApi = { nativeFunc: nativeFunc }
}

// generate unique call id
const callIdGen = (() => {
  let id = 0
  return () => `AppShell_call_${id++}`
})()

const callPromiseCahce: any = {}

// call native async for result
export function callNativeForResult<T>(scheme: string, params: any): Promise<T> {
  return new Promise((resolve, reject) => {
    let callId =  callIdGen()
    callPromiseCahce[callId] = { resolve, reject }
    nativeApi.nativeFunc({
      callId,
      scheme,
      params
    })
  })
}

// call native
export function callNative(scheme: string, params: any) {
  let callId =  callIdGen()
  nativeApi.nativeFunc({
    callId,
    scheme,
    params
  })
}

// this function is called by platform
export function onNativeResult(r: string | CallNativeResult) {
  let res: CallNativeResult
  if (typeof r == 'string') {
    res = JSON.parse(r)
  } else {
    res = r
  }
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
