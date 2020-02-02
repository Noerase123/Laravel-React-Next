<?php

namespace App\Transformers;

use App\Models\Tenant;
use App\Models\Company;
use App\Models\Rent;

use League\Fractal\TransformerAbstract;
use Illuminate\Support\Facades\Storage;

class TenantOneTransformer extends TransformerAbstract
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
    public function transform(Tenant $val)
    {
        return [
            
        ];
    }
}
