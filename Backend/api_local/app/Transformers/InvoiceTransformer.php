<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Invoice;

class InvoiceTransformer extends TransformerAbstract
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
    public function transform(Invoice $invoice)
    {
        return [
            'id' => $invoice->getKey(),
            'tenant_id' => $invoice->tenant_id,
            'ref_no' => $invoice->ref_no,
            'billingDate' => $invoice->billingDate,
            'dueDate' => $invoice->dueDate,
            'tenant' => $invoice->tenant,
            'amount' => $invoice->amount,
            'remaining' => $invoice->remaining,
            'payment_status' => $invoice->payment_status,
            'unit_no' => $invoice->unit_no,
            'created_at' => $invoice->created_at->format('Y/m/d h:i:s a'),
            'updated_at' => $invoice->updated_at->format('Y/m/d h:i:s a')
        ];
    }
}
