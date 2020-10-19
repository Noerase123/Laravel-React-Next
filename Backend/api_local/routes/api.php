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

        $route->group(['prefix' => '/tenant'], function ($route) {

            $route->get('/', 'TenantController@index');
            $route->post('/', 'TenantController@store');
            $route->get('/{id}', 'TenantController@show');
            $route->patch('/{id}', 'TenantController@update');
            $route->delete('/{id}','TenantController@destroy');

            $route->get('/club/{id}','TenantController@accessMembership');
            $route->post('/registerfcm/{id}', 'TenantController@registerTokenfcm');

            $route->get('/full/{tenantId}', 'GenTenantController@getRenter');
            $route->get('/contract/{tenantId}', 'GenTenantController@getContract');
        });

        $route->group(['prefix' => '/contract'], function ($route) {

            $route->get('/', 'TenantContractController@index');
            $route->post('/', 'TenantContractController@store');
            $route->get('/{id}', 'TenantContractController@show');
            $route->patch('/{id}', 'TenantContractController@update');
            $route->delete('/{id}','TenantContractController@destroy');
        });

        $route->group(['prefix' => '/company'], function ($route) {

            $route->get('/', 'CompanyController@index');
            $route->post('/', 'CompanyController@store');
            $route->get('/{id}', 'CompanyController@show');
            $route->patch('/{id}', 'CompanyController@update');
            $route->delete('/{id}','CompanyController@destroy');
        });

        $route->group(['prefix' => '/school'], function ($route) {

            $route->get('/', 'SchoolController@index');
            $route->post('/', 'SchoolController@store');
            $route->get('/{id}', 'SchoolController@show');
            $route->patch('/{id}', 'SchoolController@update');
            $route->delete('/{id}','SchoolController@destroy');
        });

        $route->group(['prefix' => '/emergency'], function ($route) {

            $route->get('/', 'EmergencyController@index');
            $route->post('/', 'EmergencyController@store');
            $route->get('/{id}', 'EmergencyController@show');
            $route->patch('/{id}', 'EmergencyController@update');
            $route->delete('/{id}','EmergencyController@destroy');
        });

        $route->group(['prefix' => '/rent'], function ($route) {

            $route->get('/', 'RentController@index');
            $route->post('/', 'RentController@store');
            $route->get('/{id}', 'RentController@show');
            $route->patch('/{id}', 'RentController@update');
            $route->delete('/{id}','RentController@destroy');

            $route->get('/getTenant/{id}', 'RentController@getTenantRent');
        });

        $route->group(['prefix' => '/bed'], function ($route) {

            $route->get('/', 'BedController@index');
            $route->post('/', 'BedController@store');
            $route->get('/{id}', 'BedController@show');
            $route->patch('/{id}', 'BedController@update');
            $route->delete('/{id}','BedController@destroy');

            $route->post('/extra/insertAll', 'BedController@insertAll');
            $route->delete('/extra/deleteAll', 'BedController@deleteAll');
        });

        $route->group(['prefix' => '/building'], function ($route) {

            $route->get('/', 'BuildingController@index');
            $route->post('/', 'BuildingController@store');
            $route->get('/{id}', 'BuildingController@show');
            $route->patch('/{id}', 'BuildingController@update');
            $route->delete('/{id}','BuildingController@destroy');

            $route->post('/extra/insertAll', 'BuildingController@insertAll');
            $route->delete('/extra/deleteAll', 'BuildingController@deleteAll');
        });

        $route->group(['prefix' => '/room'], function ($route) {

            $route->get('/', 'RoomController@index');
            $route->post('/', 'RoomController@store');
            $route->get('/{id}', 'RoomController@show');
            $route->patch('/{id}', 'RoomController@update');
            $route->delete('/{id}','RoomController@destroy');
        });

        $route->group(['prefix' => '/role'], function ($route) {

            $route->get('/', 'RoleController@index');
            $route->post('/', 'RoleController@store');
            $route->get('/{id}', 'RoleController@show');
            $route->patch('/{id}', 'RoleController@update');
            $route->delete('/{id}','RoleController@destroy');

            $route->post('/extra/addRoles', 'RoleController@addDefaultRoles');
        });

        $route->group(['prefix' => '/payment'], function ($route) {

            $route->get('/', 'PaymentController@index');
            $route->post('/', 'PaymentController@store');
            $route->get('/{id}', 'PaymentController@show');
            $route->patch('/{id}', 'PaymentController@update');
            $route->delete('/{id}','PaymentController@destroy');
        });

        $route->group(['prefix' => '/invoice'], function ($route) {

            $route->get('/', 'InvoiceController@index');
            $route->post('/', 'InvoiceController@store');
            $route->get('/{id}', 'InvoiceController@show');
            $route->patch('/{id}', 'InvoiceController@update');
            $route->delete('/{id}','InvoiceController@destroy');

            $route->get('/getTenant/{id}', 'InvoiceController@getTenantInvoice');
            $route->post('/extra/addInvoice', 'InvoiceController@sampleInvoice');
        });

        $route->group(['prefix' => '/issue'], function ($route) {

            $route->get('/', 'IssueController@index');
            $route->post('/', 'IssueController@store');
            $route->get('/{id}', 'IssueController@show');
            $route->patch('/{id}', 'IssueController@update');
            $route->delete('/{id}','IssueController@destroy');
        });


    });

