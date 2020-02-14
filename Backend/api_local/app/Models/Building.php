<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    protected $table = 'buildings';

    protected $primaryKey = 'building_id';

    protected $fillable = [
        'buildingName',
        'category',
        'location',
        'is_deleted'
    ];
}
