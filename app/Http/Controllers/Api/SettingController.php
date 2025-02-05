<?php

namespace App\Http\Controllers\Api;

use App\Models\Setting;
use App\Utils\SettingUtils;
use Illuminate\Http\Request;
use App\Http\Resources\SettingResource;
use App\Http\Requests\Api\SettingRequest;
use Illuminate\Support\Facades\Validator;

class SettingController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(){
        $settings = Setting::pluck('value', 'key')->all();
        if(empty($settings)){
            return $this->sendError("Setting not founds!", "");
        }else{
            return $this->sendResponse(SettingResource::collection(resource: $settings),  'Settings listed successfully.');
        }
        dd($settings);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SettingRequest $request)
    {
        $validator = Validator::make($request->all(), $request->rules());

        if (!$validator->fails()) {

            $logo = SettingUtils::get('logo');

            //$homepage_about_image = SettingUtils::get('homepage_about_image');
            //$homepage_banner = SettingUtils::get('homepage_banner');

            $meta_image = SettingUtils::get('meta_image');

            /* $validated = $request->validate([
                    'company_name'          => 'required',
                    'registration_number'   => 'required',
                    'panvat_number'         => 'required',
                    'phone'                 => 'required',
                    'email'                 => 'required|email',
                    'address'               => 'required',

                    'logo'                  => $logo ? 'mimes:png,jpg,gif' : 'required|mimes:png,jpg,gif',

                    'meta_title'            => 'required',
                    'meta_description'      => 'required',
                    'meta_keywords'         => 'required',
                    'meta_image'            => $meta_image ? 'mimes:png,jpg,gif' : 'required|mimes:png,jpg,gif',

                    'social_facebook'       => 'nullable|url',
                    'social_linkedin'       => 'nullable|url',
                    'social_youtube'        => 'nullable|url',
                    'social_instagram'      => 'nullable|url',
                ],
                [
                    'company_name' => 'The name field is required.',
                ]
            ); */
            /*             'home_appointment' => 'required',
                'home_appointment_title' => 'required',
                'copyright' => 'required', */
            $logo_name = $logo ? $logo : '';
            if ($request->has('logo') && $request->file('logo')) {

                $filename = time().'_'.rand(9999, 999999).'_'.$request->file('logo')->getClientOriginalName();

                //$logo_path = public_path("uploads/settings/") ;
                $request->file('logo')->move('uploads/', $filename);

                $logo_name = $filename;
            }

            $meta_image_name = $meta_image ? $meta_image : '';
            if ($request->has('meta_image') && $request->file('meta_image')) {

                $filename_meta = time().'_'.rand(9999, 999999).'_'.$request->file('meta_image')->getClientOriginalName();
                $request->file('meta_image')->move('uploads/', $filename_meta);
                $meta_image_name = $filename_meta;
            }

            $dataCheck = false;

            $dataCheck = SettingUtils::set('company_name', $request->company_name);
            $dataCheck = SettingUtils::set('registration_number', $request->registration_number);
            $dataCheck = SettingUtils::set('panvat_number', $request->panvat_number);

            $dataCheck = SettingUtils::set('phone', $request->phone);

            $dataCheck = SettingUtils::set('email', $request->email);
            $dataCheck = SettingUtils::set('address', $request->address);

            $dataCheck = SettingUtils::set('logo', $logo_name);

            $dataCheck = SettingUtils::set('meta_title', $request->meta_title);
            $dataCheck = SettingUtils::set('meta_description', $request->meta_description);
            $dataCheck = SettingUtils::set('meta_keywords', $request->meta_keywords);

            $dataCheck = SettingUtils::set('meta_image', $meta_image_name);

            $dataCheck = SettingUtils::set('social_facebook', $request->social_facebook);
            $dataCheck = SettingUtils::set('social_linkedin', $request->social_linkedin);
            $dataCheck = SettingUtils::set('social_youtube', $request->social_youtube);
            $dataCheck = SettingUtils::set('social_instagram', $request->social_instagram);

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Setting $setting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
