<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\tenantInfo\Rent;
use App\Models\tenantInfo\Tenant;

class RentTransformer extends TransformerAbstract
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
    public function transform(Rent $rent)
    {
        $val = Tenant::where('tenant_id',$rent->tenant_id)->first();

        return [
            'rentID' => $rent->getKey(),
            'tenant' => isset($val) ? $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname : '',
            'startDate' => $rent->startDate,
            'endDate' => $rent->endDate,
            'buildingName' => $rent->buildingName,
            'roomNumber' => $rent->roomNumber,
            'roomPrice' => $rent->roomPrice,
            'bed' => $rent->bed,
            'roomType' => $rent->roomType,
            'contractDuration' => $rent->contractDuration,
            'standardRate' => $rent->standardRate,
            'created_at' => $rent->created_at->format('Y/m/d h:i a'),
            'updated_at' => $rent->updated_at->format('Y/m/d h:i a'),
        ];
    }
}
