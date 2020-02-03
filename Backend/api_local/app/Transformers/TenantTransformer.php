<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Tenant;
use App\Models\Rent;

class TenantTransformer extends TransformerAbstract
{
    public $baseUrl = 'http://localhost:8000/api/tenant/';
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
    public function transform(Tenant $val)
    {
        $rent = Rent::where('tenant_id',$val->tenant_id)->first();

        return [
            'tenantID' => $val->getKey(),
            'name' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
            'url' => $this->baseUrl.$val->tenant_id,
            'bedPrice' => $rent['roomPrice'],
            'roomNumber' => $rent['buildingName'].' '.$rent['roomNumber'].' '.$rent['bed'],
            'moveIn' => $rent['startDate'],
            'moveOut' => $rent['endDate'],
            'created_at' => $val->created_at->format('Y/m/d h:i a'),
            'updated_at' => $val->updated_at->format('Y/m/d h:i a'),
        ];
    }
}
