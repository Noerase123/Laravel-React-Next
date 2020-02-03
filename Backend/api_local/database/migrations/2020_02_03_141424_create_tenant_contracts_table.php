<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTenantContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_contracts', function (Blueprint $table) {
            $table->bigIncrements('contract_id');
            $table->integer('tenant_id');
            $table->string('contractForm');
            $table->string('landingInvoiceRef');
            $table->float('deposit');
            $table->float('monthAdvance');
            $table->string('validId1');
            $table->string('IdType1');
            $table->string('validId2');
            $table->string('IdType2');
            $table->boolean('confirmDetails');
            $table->boolean('confirmMonthlyPayment');
            $table->boolean('confirmUtilitiesRates');
            $table->boolean('confirmTermsConditions');
            $table->string('hearFromMyTown');
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
        Schema::dropIfExists('tenant_contracts');
    }
}
