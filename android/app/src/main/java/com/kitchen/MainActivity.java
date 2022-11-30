package com.kitchen;

import android.os.Bundle; // here 

import android.annotation.TargetApi;
import android.app.Activity;
import android.view.Window;
import android.os.Build; // here 

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // here 

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "kitchen";
  }
  
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here 
      super.onCreate(savedInstanceState);
  }
  
 
}
