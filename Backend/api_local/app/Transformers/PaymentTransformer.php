<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Payment;

class PaymentTransformer extends TransformerAbstract
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
    public function transform(Payment $payment)
    {
        return [
            'payID' => $payment->getKey(),
            'tenant_id' => $payment->tenant_id,
            'invoice_id' => $payment->invoice_id,
            'tenant' => $payment->tenant,
            'paymentSlip' => $payment->paymentSlip,
            'amount' => $payment->amount,
            'amountByFinance' => $payment->amountByFinance,
            'approved' => $payment->approved,
            'created_at' => $payment->created_at->format('Y/m/d h:i:s a'),
            'updated_at' => $payment->updated_at->format('Y/m/d h:i:s a'),
        ];
    }
}
