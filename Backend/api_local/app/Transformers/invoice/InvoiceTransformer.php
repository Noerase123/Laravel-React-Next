<?php

namespace App\Transformers\invoice;

use League\Fractal\TransformerAbstract;
use App\Models\Invoice;
use App\Models\tenantInfo\Tenant;

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
        $tenant = Tenant::where(['is_deleted' => 0, 'tenant_id' => $invoice->tenant_id])->first();

        return [
            'invoiceID' => $invoice->getKey(),
            'tenant' => $tenant->firstname.' '.$tenant->lastname,
            'ref_no' => $invoice->ref_no,
            'unit_no' => $invoice->unit_no,
            'billingDate' => $invoice->billingDate,
            'dueDate' => $invoice->dueDate,
            'amount' => $invoice->amount,
            'remaining' => $invoice->remaining,
            'payment_status' => $invoice->payment_status,
            'created_at' => $invoice->created_at->format('Y/m/d h:i:s a'),
            'updated_at' => $invoice->updated_at->format('Y/m/d h:i:s a')
        ];
    }
}
