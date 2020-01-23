<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TenantModel extends Model
{
    protected $primaryKey = 'tenantId';

    protected $table = 'tenant_models';

    protected $fillable = [
        'firstname',
        'lastname',
        'companyname',
        'cityLocation',
        'officeAddress',
        'hrHeadname',
        'workPosition',
        'salaryRange',
        'workingSchedule',
        'shift',
        'gender',
        'email',
        'phoneNumber',
        'age',
        'birthday',
        'permanentAddress',
        'birthPlace',
        'remarks'
    ];
}
