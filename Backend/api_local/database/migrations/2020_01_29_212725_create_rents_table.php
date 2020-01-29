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
        Schema::create('rents', function (Blueprint $table) {
            $table->bigIncrements('rent_id');
            $table->date('startDate');
            $table->string('buildingName');
            $table->integer('bedNumber');
            $table->float('roomPrice');
            $table->string('roomType');
            $table->string('contractDuration');
            $table->date('endDate');
            $table->boolean('standardRate');
            $table->string('monthlyDiscount');
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
        Schema::dropIfExists('rents');
    }
}
