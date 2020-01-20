type NativeFunc = (msg: { 
  callId: string 
  scheme: string
  params: any
}) => Promise<any>


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

// call native
export function callNative(scheme: string, params: any) {
  let callId =  callIdGen()
  nativeApi.nativeFunc({
    callId,
    scheme,
    params
  })
}
