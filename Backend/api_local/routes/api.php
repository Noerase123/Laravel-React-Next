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

Route::group([ 'prefix' => 'auth'], function (){
    Route::group(['middleware' => ['guest:api']], function () {
        Route::post('login', 'Api\AuthController@login');
        Route::post('signup', 'Api\AuthController@signup');
    });
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'Api\AuthController@logout');
        Route::get('getuser', 'Api\AuthController@getUser');
    });
});

Route::group(['prefix' => 'post'], function () {

    Route::get('/', 'Api\PostController@index');
    Route::post('/', 'Api\PostController@store');
    Route::get('/{id}', 'Api\PostController@show');
    Route::patch('/{id}', 'Api\PostController@update');
    Route::delete('/{id}','Api\PostController@destroy');
});

Route::group(['prefix' => 'comments'], function () {

    Route::get('/viewPost/{postid}','Api\CommentController@viewComments');
    Route::post('/addComment/{postid}', 'Api\CommentController@addComment');
    Route::delete('/deleteComment/{postid}', 'Api\CommentController@deleteComment');

    Route::get('/viewPost', 'Api\CommentController@viewAllComments');
});
