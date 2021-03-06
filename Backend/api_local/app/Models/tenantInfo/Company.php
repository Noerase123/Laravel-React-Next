<?php

namespace App\Models\tenantInfo;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'company';
    protected $primaryKey = 'company_id';
    protected $fillable = [
        'tenant_id',
        'companyName',
        'companyLocation',
        'industry',
        'position',
        'monthlySalary',
        'hrContactName',
        'hrContactNumber',
        'workEmail',
        'workingHours',
        'is_deleted'
    ];
}
