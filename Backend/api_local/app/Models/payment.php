<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = 'payments';
    protected $primaryKey = 'pay_id';
    protected $fillable = [
        'tenant_id',
        'invoice_id',
        'paymentSlip',
        'amount',
        'amountByFinance',
        'approved'
    ];
}
