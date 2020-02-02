<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Issues extends Model
{
    protected $table = 'issues';
    protected $primaryKey = 'issue_id';
    protected $fillable = [
        'tenant_id',
        'tenant',
        'unit_no',
        'image',
        'issueDetails',
        'category',
        // 'dateVisited',
        // 'dateFixed',
        'status'
    ];
}
