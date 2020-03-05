<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUtilityWatersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('utility_waters', function (Blueprint $table) {
            $table->bigIncrements('water_id');
            $table->integer('bldg_id');
            $table->integer('room_id');
            $table->float('waterRate');
            $table->float('waterSum');
            $table->float('waterConsumption');
            $table->integer('is_deleted');
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
        Schema::dropIfExists('utility_waters');
    }
}
