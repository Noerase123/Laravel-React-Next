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
        'billingDate',
        'dueDate',
        'tenant',
        'amount',
        'remaining',
        'payment_status',
        'unit_no'
    ];
}
