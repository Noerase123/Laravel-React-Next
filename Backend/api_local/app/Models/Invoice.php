<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $table = 'invoices';
    protected $primaryKey = 'invoice_id';
    protected $fillable = [
        'tenant_id',
        'ref_no',
        'unit_no',
        'billingDate',
        'dueDate',
        'amount',
        'remaining',
        'payment_status',
        'is_deleted'
    ];
}
