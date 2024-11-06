<?php

namespace App\Http\Requests\Api;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;



class MembershipRequest extends FormRequest
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
        //dd(   $this->route('membership'),$this->route()->getAction(),  $this->get('id') ); // ,Request::get('id') $this->get('id')
        if($this->route('membership') != null)
        {
            return [
                'title' => "required|unique:memberships,title,".$this->route('membership'),
                'slug'          => 'nullable|unique:memberships,slug,'.$this->route('membership'),
                'subtitle'      => "required",
                'description'   => 'required',
                'price'         => "required|decimal:0,2",
                'status'        => 'required',
            ];
        }
        else{
            return [
                'title' => "required|unique:memberships,title",
                'slug'  => 'nullable|unique:memberships,slug',
                'subtitle' => "required",
                'description' => "required",
                'price' => "required|decimal:0,2",
                //'discount' => "",
                //'dicounttype' => "",
                //'status' => "required",
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

    /* public function messages()
    {
        return [
            'title.required' => 'Title is required',
            'body.required' => 'Body is required'
        ];
    } */
}
