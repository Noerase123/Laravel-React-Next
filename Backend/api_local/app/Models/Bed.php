<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    protected $table = 'beds';

    protected $primaryKey = 'bed_id';

    protected $fillable = [
        'room_id',
        'bed_letter',
        'bed_count',
        'bed_vacant',
        'is_deleted'
    ];
}
