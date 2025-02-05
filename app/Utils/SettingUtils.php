<?php

namespace App\Utils;

use App\Models\Setting;

class SettingUtils
{
    private static $settings;

    private static function loadSettings(){
        self::$settings = Setting::pluck('value', 'key')->all();
    }

    public static function get($key, $default = NULL){
        if(!isset(self::$settings)){
            self::loadSettings();
        }

        return array_key_exists($key, self::$settings)? self::$settings[$key]: $default;

    }

    public static function set($key, $value){
        if(!isset(self::$settings)){
            self::loadSettings();
        }

        Setting::updateOrCreate(['key' => $key], ['value' => $value]);
        self::$settings[$key] = $value;
        return true;

    }

    public static function settings(){
        return self::loadSettings();
    }
}
