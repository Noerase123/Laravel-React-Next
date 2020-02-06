<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Emergency extends Model
{
    protected $table = 'emergencies';
    protected $primaryKey = 'emergency_id';
    protected $fillable = [
        'tenant_id',
        'name',
        'number',
        'relationship'
    ];
}
