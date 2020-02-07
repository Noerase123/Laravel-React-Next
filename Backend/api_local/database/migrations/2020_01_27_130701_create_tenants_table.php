<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTenantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant', function (Blueprint $table) {
            $table->bigIncrements('tenant_id');
            $table->string('profilePic');
            $table->string('firstname');
            $table->string('middlename');
            $table->string('lastname');
            $table->string('nickname');
            $table->string('contactNum');
            $table->string('landline');
            $table->string('birthdate');
            $table->string('birthplace');
            $table->integer('tenantType');
            $table->string('primaryEmail');
            $table->string('gender');
            $table->string('country');
            $table->string('province');
            $table->string('city');
            $table->string('houseNumStr');
            $table->string('slug');
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
        Schema::dropIfExists('tenant');
    }
}
