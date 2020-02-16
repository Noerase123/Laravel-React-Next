<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBedRequest extends FormRequest
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
            'room_id' => [
                'required',
            ],
            'bed_letter' => [
                'required',
            ],
            'bed_count' => [
                'required',
            ],
            'bed_vacant' => [
                'required',
            ],
        ];
    }
}
