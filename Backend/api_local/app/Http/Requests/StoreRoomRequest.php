<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRoomRequest extends FormRequest
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
            'building_id' => [
                'required',
            ],
            'bed_id' => [
                'required',
            ],
            'roomNum' => [
                'required',
            ],
            'roomPrice' => [
                'required',
            ],
            'maxPerson' => [
                'required',
            ],
        ];
    }
}
