package com.example.zub4t.gettingcurrentlocation;

import android.os.AsyncTask;
import android.util.Log;

import java.io.IOException;

import com.squareup.okhttp.HttpUrl;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

public class LocationWebService extends AsyncTask<String, String, String> {

    public LocationWebService() {
        // TODO Auto-generated constructor stub
    }

    @Override
    protected String doInBackground(String... arg0) {
        OkHttpClient client = new OkHttpClient();


        HttpUrl.Builder urlBuilder = HttpUrl.parse("http://isotechcameras.ddns.net/get").newBuilder();
        urlBuilder.addQueryParameter("latitude", String.valueOf(arg0[1]));
        urlBuilder.addQueryParameter("placa", "ABC1234");
        urlBuilder.addQueryParameter("velocidade", String.valueOf(arg0[2]));
        urlBuilder.addQueryParameter("longitude", String.valueOf(arg0[3]));

        String url = urlBuilder.build().toString();

        Request request = new Request.Builder()
                .url(url)
                .build();
        Log.e("Google","url "+ String.valueOf(url));


        Response response = null;
        try {
            response = client.newCall(request).execute();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            if(response!=null )
             return response.body().string();
        } catch (IOException e) {
            e.printStackTrace();
        }


        return null;
    }
}