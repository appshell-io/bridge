package io.appshell.bridge

import com.facebook.react.ReactActivity


class ReactNativeActivity : ReactActivity() {



    override fun getMainComponentName(): String? {
        return "RNSample"
    }
}
