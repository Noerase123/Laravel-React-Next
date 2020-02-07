<?php

namespace App\Models\tenantInfo;

use Illuminate\Database\Eloquent\Model;

class TenantContract extends Model
{
    protected $table = 'tenant_contracts';
    protected $primaryKey = 'contract_id';
    protected $fillable = [
        'tenant_id',
        'contractForm',
        'landingInvoiceRef',
        'deposit',
        'monthAdvance',
        'validId1',
        'validId2',
        'IdType1',
        'IdType2',
        'confirmDetails',
        'confirmMonthlyPayment',
        'confirmUtilitiesRates',
        'confirmTermsConditions',
        'hearFromMyTown',
        'is_deleted'
    ];
}
