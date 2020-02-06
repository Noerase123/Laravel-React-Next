<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->bigIncrements('school_id');
            $table->integer('tenant_id');
            $table->string('schoolName');
            $table->string('schoolLocation');
            $table->string('course');
            $table->integer('schoolYear');
            $table->integer('uaap');
            $table->integer('ncaa');
            $table->integer('weeklyOff');
            $table->string('deptHeadname');
            $table->string('deptHeadnumber');
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
        Schema::dropIfExists('schools');
    }
}
