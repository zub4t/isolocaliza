package com.example.zub4t.gettingcurrentlocation;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

public class AlarmReceiver extends BroadcastReceiver {

    public AlarmReceiver() {
        // TODO Auto-generated constructor stub
    }

    @Override
    public void onReceive(Context context, Intent arg1) {


        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            context.startForegroundService(new Intent(context, AndroidLocationServices.class));
        } else {
            context.startService(new Intent(context, AndroidLocationServices.class));
        }


    }

}