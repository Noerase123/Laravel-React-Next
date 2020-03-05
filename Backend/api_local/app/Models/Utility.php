<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Utility extends Model
{
    protected $table = 'utilities';
    protected $primaryKey = 'utility_id';
    protected $fillable = [
        'bldg_id',
        'room_id',
        'electricityRate',
        'electricitySum',
        'electricityConsumption',
        'is_deleted'
    ];
}
