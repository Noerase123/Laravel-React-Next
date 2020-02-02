<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rent extends Model
{
    protected $table = 'rent';
    protected $primaryKey = 'rent_id';
    protected $fillable = [
        'tenant_id',
        'startDate',
        'buildingName',
        'roomNumber',
        'roomPrice',
        'bed',
        'roomType',
        'contractDuration',
        'endDate',
        'standardRate',
        'monthlyDiscount'
    ];
}
