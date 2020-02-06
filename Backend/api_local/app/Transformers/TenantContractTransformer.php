<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\tenantInfo\TenantContract;
use App\Models\tenantInfo\Tenant;

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
        $val = Tenant::where('tenant_id', $tenCon->tenant_id)->first();

        return [
            'contractID' => $tenCon->getKey(),
            'tenant' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
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
            'hearFromMyTown' => $tenCon->hearFromMyTown,
            'created_at' => $tenCon->created_at->format('Y/m/d h:i:s a'),
            'updated_at' => $tenCon->updated_at->format('Y/m/d h:i:s a')
        ];
    }
}
