<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $table = 'rooms';

    protected $primaryKey = 'room_id';

    protected $fillable = [
        'building_id',
        'bed_id',
        'roomNum',
        'roomType',
        'roomPrice',
        'maxPerson',
        'is_deleted'
    ];
}
