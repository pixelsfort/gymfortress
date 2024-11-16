<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class MemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        if($this->route('member') != null)
        {
            return [
               'firstname'              => "required",
                'lastname'              => "required",
                'gender'                => "required",
                'email'                 => "required|email|unique:trainers,email,".$this->route('member'),
                'phone'                 => "required",
                'dob'                   => "required|date",

                'hear_about'            => "required",
                'emergency_phone'       => "required",
                'emergency_relation'    => "required",

                'trainer_id'            => "required",
                'membership_id'         => "required",

                'status'                => "required",
            ];
        }
        else{
            return [
                'firstname'             => "required",
                'lastname'              => "required",
                'gender'                => "required",
                'email'                 => "required|email|unique:trainers,email",
                'phone'                 => "required",
                'dob'                   => "required|date",

                'hear_about'            => "required",
                'emergency_phone'       => "required",
                'emergency_relation'    => "required",

                'trainer_id'            => "required",
                'membership_id'         => "required",
                //
            ];
        }


    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }
}
