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
    
    Route::group(['prefix' => 'post'], function ($route) {
    
        $route->get('/', 'Api\PostController@index');
        $route->post('/', 'Api\PostController@store');
        $route->get('/{id}', 'Api\PostController@show');
        $route->patch('/{id}', 'Api\PostController@update');
        $route->delete('/{id}','Api\PostController@destroy');
    });
    
    Route::group(['prefix' => 'comments'], function ($route) {
    
        $route->get('/viewPost/{postid}','Api\CommentController@viewComments');
        $route->post('/addComment/{postid}', 'Api\CommentController@addComment');
        $route->delete('/deleteComment/{postid}', 'Api\CommentController@deleteComment');
    
        $route->get('/viewPost', 'Api\CommentController@viewAllComments');
    });


