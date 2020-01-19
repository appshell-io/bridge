package io.appshell.bridge

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        item_webView.setOnClickListener {
            toActivity(WebViewActivity::class.java)
        }
        item_rn.setOnClickListener {

        }
    }

    private fun toActivity(clazz: Class<*>) {
        startActivity(Intent(this, clazz))
    }

}
