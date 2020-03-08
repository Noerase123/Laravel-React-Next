<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Role;

class RoleTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];
    
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Role $role)
    {
        return [
            'roleID' => $role->getKey(),
            'roleName' => $role->role_name,
            'created_at' => $role->created_at->format('Y-m-d H:i:s a')
        ];
    }
}
