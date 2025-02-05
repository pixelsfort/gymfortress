<?php

namespace App\Http\Requests\Api;

use App\Utils\SettingUtils;
use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $logo = SettingUtils::get('logo');
        $meta_image = SettingUtils::get('meta_image');
        return [
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

            //'homepage_banner_title' => 'required',
            //'homepage_banner'       =>    $homepage_banner ? 'mimes:png,jpg,gif' : 'required|mimes:png,jpg,gif',

            //'homepage_about_content' => 'required',
            //'homepage_about_image' => $homepage_about_image ? 'mimes:png,jpg,gif' : 'required|mimes:png,jpg,gif',
            //'homepage_about_title' => 'required',
        ];
    }
}
