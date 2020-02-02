<?php

namespace App\Repositories\Eloquent;

use App\Models\Tenant;
use App\Repositories\Contracts\TenantRepository;

use Kurt\Repoist\Repositories\Eloquent\AbstractRepository;

class EloquentTenantRepository extends AbstractRepository implements TenantRepository
{
    public function entity()
    {
        return Tenant::class;
    }

    public function getAll()
    {
        return $this->entity();
    }

    public function store(array $arr) 
    {
        // $model = $this->entity();
        $model = new Tenant;

        foreach ($arr as $key => $value) {
            $model->setAttribute($arr, $value);
        }

        return ($model->save()) ? $model : null;
    }
}
