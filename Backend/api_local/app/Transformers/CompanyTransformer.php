<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\tenantInfo\Tenant;
use App\Models\tenantInfo\Company;

class CompanyTransformer extends TransformerAbstract
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
    public function transform(Company $com)
    {
        $val = Tenant::where('tenant_id', $com->tenant_id)->first();

        return [
            'companyID' => $com->getKey(),
            'tenant' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
            'companyName' => $com->companyName,
            'companyLocation' => $com->companyLocation,
            'industry' => $com->industry,
            'position' => $com->position,
            'monthlySalary' => $com->monthlySalary,
            'hrContactName' => $com->hrContactName,
            'hrContactNumber' => $com->hrContactNumber,
            'workEmail' => $com->workEmail,
            'workingHours' => $com->workingHours,
            'created_at' => $com->created_at->format('Y/m/d h:i a'),
            'updated_at' => $com->updated_at->format('Y/m/d h:i a'),
        ];
    }
}
