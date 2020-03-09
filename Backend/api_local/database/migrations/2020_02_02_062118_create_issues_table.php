<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->bigIncrements('issue_id');
            $table->integer('tenant_id');
            $table->string('tenant');
            $table->string('unit_no');
            $table->string('image');
            $table->string('issueDetails');
            $table->string('category');
            $table->dateTime('dateVisited');
            $table->dateTime('dateFixed');
            $table->integer('anytime');
            $table->dateTime('date1');
            $table->dateTime('date2');
            $table->dateTime('date3');
            $table->integer('status');
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
        Schema::dropIfExists('issues');
    }
}
