<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company', function (Blueprint $table) {
            $table->bigIncrements('company_id');
            $table->integer('tenant_id');
            $table->string('companyName');
            $table->string('companyLocation');
            $table->string('industry');
            $table->string('position');
            $table->string('monthlySalary');
            $table->string('hrContactName');
            $table->string('hrContactNumber');
            $table->string('workEmail');
            $table->string('workingHours');
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
        Schema::dropIfExists('company');
    }
}
