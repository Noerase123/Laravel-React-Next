<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTenantModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_models', function (Blueprint $table) {
            $table->bigIncrements('tenantId');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('companyname');
            $table->string('citylocation');
            $table->string('officeaddress');
            $table->string('hrheadname');
            $table->string('workposition');
            $table->integer('salaryrange');
            $table->string('workingschedule');
            $table->string('shift');
            $table->string('gender');
            $table->string('email');
            $table->string('phoneNumber');
            $table->integer('age');
            $table->date('birthday');
            $table->string('permanentAddress');
            $table->string('birthPlace');
            $table->string('remarks');
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
        Schema::dropIfExists('tenant_models');
    }
}
