<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rent', function (Blueprint $table) {
            $table->bigIncrements('rent_id');
            $table->integer('tenant_id');
            $table->date('startDate');
            $table->string('buildingName');
            $table->integer('roomNumber');
            $table->float('roomPrice');
            $table->string('bed');
            $table->string('roomType');
            $table->string('contractDuration');
            $table->date('endDate');
            $table->integer('standardRate');
            $table->float('monthlyDiscount');
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
        Schema::dropIfExists('rent');
    }
}
