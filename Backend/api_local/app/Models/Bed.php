<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    protected $table = 'beds';

    protected $primaryKey = 'bed_id';

    protected $fillable = [
        'bed_letter',
        'bed_count',
        'is_deleted'
    ];
}
