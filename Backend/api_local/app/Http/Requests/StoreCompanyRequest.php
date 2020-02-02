<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCompanyRequest extends FormRequest
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
            'tenant_id' => [
                'required',
            ],
            'companyName' => [
                'required',
            ],
            'companyLocation' => [
                'required',
            ],
            'industry' => [
                'required',
            ],
            'position' => [
                'required',
            ],
            'monthlySalary' => [
                'required',
            ],
            'hrContactName' => [
                'required',
            ],
            'hrContactNumber' => [
                'required',
            ],
            'workEmail' => [
                'required',
            ],
            'workingHours' => [
                'required',
            ]
        ];
    }
}
