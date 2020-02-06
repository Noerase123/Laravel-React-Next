<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\tenantInfo\School;
use App\Models\tenantInfo\Tenant;

class SchoolTransformer extends TransformerAbstract
{
    private $tenant;
    public function __construct(Tenant $tenant)
    {
        $this->tenant = $tenant;
    }
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
    public function transform(School $school)
    {
        $val = $this->tenant->where('tenant_id', $school->tenant_id)->first();

        return [
            'schoolID' => $school->getKey(),
            'tenant' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
            'schoolName' => $school->schoolName,
            'schoolLocation' => $school->schoolLocation,
            'course' => $school->course,
            'schoolYear' => $school->schoolYear,
            'uaap' => $school->uaap,
            'ncaa' => $school->ncaa,
            'weeklyOff' => $school->weeklyOff,
            'deptHeadname' => $school->deptHeadname,
            'deptHeadnumber' => $school->deptHeadnumber,
            'created_at' => $school->created_at->format('Y/m/d h:i:s a'),
            'updated_at' => $school->updated_at->format('Y/m/d h:i:s a')
        ];
    }
}
