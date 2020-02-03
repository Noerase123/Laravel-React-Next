<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContractRequest extends FormRequest
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
            'contractForm' => [
                'required',
            ],
            'validId1' => [
                'required',
            ],
            'IdType1' => [
                'required',
            ],
            'validId2' => [
                'required',
            ],
            'IdType2' => [
                'required',
            ],
            'confirmDetails' => [
                'required',
            ],
            'confirmUtilitiesRates' => [
                'required',
            ],
            'confirmTermsConditions' => [
                'required',
            ],
            'hearFromMyTown' => [
                'required',
            ]
        ];
    }
}
