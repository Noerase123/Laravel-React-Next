<?php

namespace App\Repositories\Contracts;

use App\Models\Tenant;

interface TenantRepository
{
    public function store(array $arr);

    public function getAll();
}
