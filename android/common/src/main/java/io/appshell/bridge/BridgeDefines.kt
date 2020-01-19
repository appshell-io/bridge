package io.appshell.bridge

data class BridgeCall(
    val callId: String,
    val scheme: String,
    val params: String
)