package io.appshell.bridge

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.soloader.SoLoader


class MainApplication : Application() {

    override fun onCreate() {
        super.onCreate()

        SoLoader.init(this, /* native exopackage */ false)
    }
}