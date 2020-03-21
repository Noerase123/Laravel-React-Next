<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // if ($this->app->environment() == 'local') {
        if ($this->app->isLocal()) {
            $this->app->register('Kurt\Repoist\RepoistServiceProvider');
        } else {
            $this->app['request']->server->set('HTTPS',true);
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
