<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRentRequest extends FormRequest
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
            'startDate' => [
                'required',
            ],
            'buildingName' => [
                'required',
            ],
            'bedNumber' => [
                'required',
            ],
            'roomPrice' => [
                'required',
            ],
            'roomType' => [
                'required',
            ],
            'contractDuration' => [
                'required',
            ],
            'endDate' => [
                'required',
            ],
            'standardRate' => [
                'required',
            ],
            'monthlyDiscount' => [
                'required',
            ]
        ];
    }
}
