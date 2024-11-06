<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class TrainerRequest extends FormRequest
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
        if($this->route('trainer') != null)
        {
            return [
                'firstname' => "required",
                'lastname' => "required",
                'gender' => "required",
                'email' => "required|email|unique:trainers,email,".$this->route('trainer'),
                'phone' => "required",
                'dob' => "required|date",
                'status' => "required",
            ];
        }
        else{
            return [
                'firstname' => "required",
                'lastname' => "required",
                'gender' => "required",
                'email' => "required|email|unique:trainers,email",
                'phone' => "required",
                'dob' => "required|date",
                //'status' => "required",

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
