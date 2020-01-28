<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    protected $table = 'tenants';
    protected $primaryKey = 'tenant_id';
    protected $fillable = [
        'profilePic',
        'firstname',
        'middlename',
        'lastname',
        'nickname',
        'contactNum',
        'landline',
        'birthdate',
        'birthplace',
        'tenantType',
        'primaryEmail',
        'gender',
        'country',
        'province',
        'city',
        'houseNumStr'
    ];
}
