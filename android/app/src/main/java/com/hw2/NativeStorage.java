package com.hw2;

import android.content.Context;
import android.content.SharedPreferences;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class NativeStorage extends ReactContextBaseJavaModule {

    public static final String NATIVE_STORAGE = "native_storage";

    private SharedPreferences sharedPreferences;

    public NativeStorage(ReactApplicationContext context) {
        super(context);
        sharedPreferences = context.getSharedPreferences(NATIVE_STORAGE, Context.MODE_PRIVATE);
    }

    @ReactMethod
    public void saveString(String key, String value){
        sharedPreferences.edit().putString(key, value).apply();
    }

    @ReactMethod
    public String loadString(String key) {
        return sharedPreferences.getString(key, "");
    }

    @Override
    public String getName() {
        return "NativeStorage";
    }
}
