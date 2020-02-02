<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->bigIncrements('invoice_id');
            $table->integer('tenant_id');
            $table->string('ref_no');
            $table->date('billingDate');
            $table->date('dueDate');
            $table->string('tenant');
            $table->float('amount');
            $table->float('remaining');
            $table->integer('payment_status');
            $table->string('unit_no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}
