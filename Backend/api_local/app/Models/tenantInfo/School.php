<?php

namespace App\Models\tenantInfo;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table = 'schools';
    protected $primaryKey = 'school_id';
    protected $fillable = [
        'tenant_id',
        'schoolName',
        'schoolLocation',
        'course',
        'schoolYear',
        'uaap',
        'ncaa',
        'weeklyOff',
        'deptHeadname',
        'deptHeadnumber'
    ];
}
