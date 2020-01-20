package io.appshell.bridge

interface BridgeJsonResult {
    fun toJsonString(): String
}

abstract class BridgeCall(
    val callId: String,
    val scheme: String,
    val params: String
) {

    abstract fun success(data: BridgeJsonResult)
    abstract fun error(error: Throwable)

}