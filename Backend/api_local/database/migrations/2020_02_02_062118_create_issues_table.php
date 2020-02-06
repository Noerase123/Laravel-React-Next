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
            $table->string('dateVisited');
            $table->string('dateFixed');
            $table->integer('anytime');
            $table->date('date1');
            $table->date('date2');
            $table->date('date3');
            $table->integer('status');
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
