<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Payment;
use App\Models\tenantInfo\Tenant;
use App\Models\Invoice;

class PaymentTransformer extends TransformerAbstract
{
    private $tenant;
    private $invoice;
    public function __construct(Tenant $tenant, Invoice $invoice)
    {
        $this->tenant = $tenant;
        $this->invoice = $invoice;
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
    public function transform(Payment $payment)
    {
        $val = $this->tenant->where('tenant_id', $payment->tenant_id)->first();
        $invoice = $this->invoice->where('tenant_id', $payment->tenant_id)->first();

        return [
            'payID' => $payment->getKey(),
            'invoice' => $invoice->ref_no,
            'tenant' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
            'paymentSlip' => $payment->paymentSlip,
            'amount' => $payment->amount,
            'amountByFinance' => $payment->amountByFinance,
            'approved' => $payment->approved,
            'created_at' => $payment->created_at->format('Y/m/d h:i:s a'),
            'updated_at' => $payment->updated_at->format('Y/m/d h:i:s a'),
        ];
    }
}
