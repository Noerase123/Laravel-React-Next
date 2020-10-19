<?php

namespace App\Models\tenantInfo;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    protected $table = 'tenant';
    protected $primaryKey = 'tenant_id';
    protected $fillable = [
        'profilePic',
        'push_token',
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
        'houseNumStr',
        'slug',
        'is_deleted'
    ];
}
