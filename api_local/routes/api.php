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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'post'], function ($route) {

    $route->get('/', 'Api\PostController@index');
    $route->post('/', 'Api\PostController@store');
    $route->get('/{id}', 'Api\PostController@show');
    $route->patch('/{id}', 'Api\PostController@update');
    $route->delete('/{id}','Api\PostController@destroy');
});

Route::group(['prefix' => 'comments'], function ($route) {
    
    Route::get('/viewPost/{postid}','Api\CommentController@viewComments');
    Route::post('/addComment/{postid}', 'Api\CommentController@addComment');
    Route::delete('/deleteComment/{postid}', 'Api\CommentController@deleteComment');

    Route::get('/viewPost', 'Api\CommentController@viewAllComments');
});
