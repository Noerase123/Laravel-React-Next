<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\TenantContract;

class TenantContractTransformer extends TransformerAbstract
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
    public function transform(TenantContract $tenCon)
    {
        return [
            'contractID' => $tenCon->getKey(),
            'tenant_id' => $tenCon->tenant_id,
            'contractForm' => $tenCon->contractForm,
            'landingInvoiceRef' => $tenCon->landingInvoiceRef,
            'deposit' => $tenCon->deposit,
            'monthAdvance' => $tenCon->monthAdvance,
            'validID1' => $tenCon->validId1,
            'IDtype1' => $tenCon->IdType1,
            'validID2' => $tenCon->validId2,
            'IDtype2' => $tenCon->IdType2,
            'confirmDetails' => $tenCon->confirmDetails,
            'confirmMonthlyPayment' => $tenCon->confirmMonthlyPayment,
            'confirmUtilitiesRates' => $tenCon->confirmUtilitiesRates,
            'confirmTermsConditions' => $tenCon->confirmTermsConditions,
            'hearFromMyTown' => $tenCon->hearFromMyTown
            
        ];
    }
}
