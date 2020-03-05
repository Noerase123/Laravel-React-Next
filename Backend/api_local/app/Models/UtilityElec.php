<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UtilityElec extends Model
{
    protected $table = 'utility_elecs';
    protected $primaryKey = 'elec_id';
    protected $fillable = [
        'bldg_id',
        'room_id',
        'electricityRate',
        'electricitySum',
        'electricityConsumption',
        'is_deleted'
    ];
}
