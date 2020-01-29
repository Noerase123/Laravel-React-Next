<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tenant;

class TenantController extends Controller
{
    private $tenants;
    public function __construct(Tenant $tenant) {
        $this->tenants = $tenant;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->tenants->paginate(10);

        foreach ($all as $key => $val) {
            $data[] = [
                'tenantID' => $val->tenant_id,
                'created_at' => $val->created_at,
                'updated_at' => $val->updated_at,
                'fullname' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
                'name' => [
                    'firstname' => $val->firstname,
                    'middlename' => $val->middlename,
                    'lastname' => $val->lastname,
                    'nickname' => $val->nickname,
                ],
                'gender' => $val->gender,
                'birthdate' => $val->birthdate,
                'birthplace' => $val->birthplace,
                'tenantType' => $val->tenantType,
                'profilePic' => $val->profilePic,
                'contactInfo' => [
                    'contactNum' => $val->contactNum,
                    'landline' => $val->landline,
                    'primaryEmail' => $val->primaryEmail
                ],
                'locationInfo' => [
                    'houseNumStr' => $val->houseNumStr,
                    'city' => $val->city,
                    'province' => $val->province,
                    'country' => $val->country
                ],
            ];
        }

        return response()->json([
            'allTenants' => $data
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'profilePic' => 'required',
            'firstname' => 'required',
            'middlename' => 'required',
            'lastname' => 'required',
            'nickname' => 'required',
            'contactNum' => 'required',
            'landline' => 'required',
            'birthdate' => 'required',
            'birthplace' => 'required',
            'tenantType' => 'required',
            'primaryEmail' => 'required',
            'gender' => 'required',
            'country' => 'required',
            'province' => 'required',
            'city' => 'required',
            'houseNumStr' => 'required'
        ]);

        $ten = new Tenant;
        $ten->profilePic = $request->profilePic;
        $ten->firstname = $request->firstname;
        $ten->middlename = $request->middlename;
        $ten->lastname = $request->lastname;
        $ten->nickname = $request->nickname;
        $ten->contactNum = $request->contactNum;
        $ten->landline = $request->landline;
        $ten->birthdate = $request->birthdate;
        $ten->birthplace = $request->birthplace;
        $ten->tenantType = $request->tenantType;
        $ten->primaryEmail = $request->primaryEmail;
        $ten->gender = $request->gender;
        $ten->country = $request->country;
        $ten->province = $request->province;
        $ten->city = $request->city;
        $ten->houseNumStr = $request->houseNumStr;
        $ten->save();

        return response()->json([
            'message' => 'inserted successfully!'
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $val = $this->tenants->find($id);

        if (is_null($val)) {
            return response()->json([
                'message' => 'Not found'
            ],404);
        }
        else {
            return response()->json([
                'fullname' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
                'name' => [
                    'firstname' => $val->firstname,
                    'middlename' => $val->middlename,
                    'lastname' => $val->lastname,
                    'nickname' => $val->nickname,
                ],
                'gender' => $val->gender,
                'birthdate' => $val->birthdate,
                'birthplace' => $val->birthplace,
                'tenantType' => $val->tenantType,
                'profilePic' => $val->profilePic,
                'contactInfo' => [
                    'contactNum' => $val->contactNum,
                    'landline' => $val->landline,
                    'primaryEmail' => $val->primaryEmail
                ],
                'locationInfo' => [
                    'houseNumStr' => $val->houseNumStr,
                    'city' => $val->city,
                    'province' => $val->province,
                    'country' => $val->country
                ],
            ],200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Tenant::destroy($id);

        return response()->json([
            'message' => 'tenant has been removed'
        ],200);
    }
}
