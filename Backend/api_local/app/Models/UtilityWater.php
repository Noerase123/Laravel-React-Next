<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UtilityWater extends Model
{
    protected $table = 'utility_waters';
    protected $primaryKey = 'water_id';
    protected $fillable = [
        'bldg_id',
        'room_id',
        'waterRate',
        'waterSum',
        'waterConsumption',
        'is_deleted'
    ];
}
