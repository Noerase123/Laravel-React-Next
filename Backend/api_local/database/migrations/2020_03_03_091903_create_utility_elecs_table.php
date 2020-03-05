<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUtilityElecsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('utility_elecs', function (Blueprint $table) {
            $table->bigIncrements('elec_id');
            $table->integer('bldg_id');
            $table->integer('room_id');
            $table->float('electricityRate');
            $table->float('electricitySum');
            $table->float('electricityConsumption');
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
        Schema::dropIfExists('utility_elecs');
    }
}
