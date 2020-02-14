<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\tenantInfo\Emergency;
use App\Models\tenantInfo\Tenant;

class EmergencyTransformer extends TransformerAbstract
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
    public function transform(Emergency $emer)
    {
        $tenant = Tenant::where('tenant_id', $emer->tenant_id)->first();

        return [
            'emergencyID' => $emer->getKey(),
            'tenant' => $tenant->firstname.' '.$tenant->lastname,
            'name' => $emer->name,
            'number' => $emer->number,
            'relationship' => $emer->relationship
        ];
    }
}
