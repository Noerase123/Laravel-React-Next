<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

    Route::group([ 'prefix' => 'auth'], function ($route){
        $route->group(['middleware' => ['guest:api']], function ($route) {
            $route->post('login', 'Api\AuthController@login');
            $route->post('signup', 'Api\AuthController@signup');
        });
        $route->group(['middleware' => 'auth:api'], function($route) {
            $route->get('logout', 'Api\AuthController@logout');
            $route->get('getuser', 'Api\AuthController@getUser');
        });
    });
    
    Route::group(['namespace' => 'Api'],function ($route) {
        $route->group(['prefix' => 'post'], function ($route) {
    
            $route->get('/', 'PostController@index');
            $route->post('/', 'PostController@store');
            $route->get('/{id}', 'PostController@show');
            $route->patch('/{id}', 'PostController@update');
            $route->delete('/{id}','PostController@destroy');
        });
        
        
        $route->group(['prefix' => 'comment'], function ($route) {
        
            $route->get('/viewPost/{postid}','CommentController@viewComments');
            $route->post('/addComment/{postid}', 'CommentController@addComment');
            $route->delete('/deleteComment/{postid}', 'CommentController@deleteComment');
        
            $route->get('/viewPost', 'Api\CommentController@viewAllComments');
        });

        $route->group(['prefix' => '/tenant'], function ($route) {

            $route->get('/', 'TenantController@index');
            $route->post('/', 'TenantController@store');
            $route->get('/{id}', 'TenantController@show');
            $route->patch('/{id}', 'TenantController@update');
            $route->delete('/{id}','TenantController@destroy');
        });

        $route->group(['prefix' => '/company'], function ($route) {

            $route->get('/', 'CompanyController@index');
            $route->post('/', 'CompanyController@store');
            $route->get('/{id}', 'CompanyController@show');
            $route->patch('/{id}', 'CompanyController@update');
            $route->delete('/{id}','CompanyController@destroy');
        });

        $route->group(['prefix' => '/rent'], function ($route) {

            $route->get('/', 'RentController@index');
            $route->post('/', 'RentController@store');
            $route->get('/{id}', 'RentController@show');
            $route->patch('/{id}', 'RentController@update');
            $route->delete('/{id}','RentController@destroy');
        });


    });

