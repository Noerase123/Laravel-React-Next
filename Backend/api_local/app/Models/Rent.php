<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rent extends Model
{
    protected $table = 'rents';
    protected $primaryKey = 'rent_id';
    protected $fillable = [
        'startDate',
        'buildingName',
        'bedNumber',
        'roomPrice',
        'roomType',
        'contractDuration',
        'endDate',
        'standardRate',
        'monthlyDiscount'
    ];
}
