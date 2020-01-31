<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTenantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'profilePic' => [
                'required',
            ],
            'firstname' => [
                'required',
            ],
            'middlename' => [
                'required',
            ],
            'lastname' => [
                'required',
            ],
            'nickname' => [
                'required',
            ],
            'contactNum' => [
                'required',
            ],
            'landline' => [
                'required',
            ],
            'birthdate' => [
                'required',
            ],
            'birthplace' => [
                'required',
            ],
            'tenantType' => [
                'required',
            ],
            'primaryEmail' => [
                'required',
            ],
            'gender' => [
                'required',
            ],
            'country' => [
                'required',
            ],
            'province' => [
                'required',
            ],
            'city' => [
                'required',
            ],
            'houseNumStr' => [
                'required',
            ]
        ];
    }
}
