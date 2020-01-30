<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTenantRequest;
use App\Models\Tenant;
use App\Models\Company;
use App\Models\Rent;

class TenantController extends Controller
{
    private $tenants;
    private $company;
    private $rent;

    public $baseUrl = 'http://localhost:8000/api/tenant/';

    public function __construct(Tenant $tenant, Company $company, Rent $rent) {
        $this->tenants = $tenant;
        $this->company = $company;
        $this->rent = $rent;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->tenants->all();

        $data = [];

        foreach ($all as $key => $val) {
                $data[] = [
                    'tenantID' => $val->tenant_id,
                    'name' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
                    'url' => $this->baseUrl.$val->tenant_id,
                    'created_at' => $val->created_at,
                    'updated_at' => $val->updated_at,
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
    public function store(StoreTenantRequest $request)
    {
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
            'message' => 'tenant added successfully'
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
        $com = $this->company->find($id);
        $rent = $this->rent->find($id);

        if (is_null($val)) {
            return response()->json([
                'message' => 'Not found'
            ],404);
        }
        else {
            return response()->json([
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
                    'personal' => [
                        'contactNum' => $val->contactNum,
                        'landline' => $val->landline,
                        'primaryEmail' => $val->primaryEmail
                    ],
                    'company' => [
                        'workEmail' => $com->workEmail,
                        'workContactNum' => $com->hrContactNumber
                    ]
                ],
                'locationInfo' => [
                    'houseNumStr' => $val->houseNumStr,
                    'city' => $val->city,
                    'province' => $val->province,
                    'country' => $val->country
                ],
                'companyInfo' => [
                    'name' => $com->companyName,
                    'location' => $com->companyLocation,
                    'industry' => $com->industry,
                    'position' => $com->position,
                    'monthlySalary' => $com->monthlySalary,
                    'hr' => [
                        'Name' => $com->hrContactName,
                        'ContactNum' => $com->hrContactNumber,
                    ],
                    'workEmail' => $com->workEmail,
                    'workingHours' => $com->workingHours,
                ],
                'rentInfo' => [
                    'building' => [
                        'name' => $rent->buildingName,
                        'bedNum' => $rent->bedNumber,
                    ],
                    'room' => [
                        'price' => $rent->roomPrice,
                        'type' => $rent->roomType,
                    ],
                    'startDate' => $rent->startDate,
                    'endDate' => $rent->endDate,
                    'standardRate' => $rent->standardRate,
                    'monthlyDiscount' => $rent->monthlyDiscount
                ]
                
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
    public function update(StoreTenantRequest $request, $id)
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
        $this->tenants->destroy($id);

        return response()->json([
            'message' => 'tenant has been removed'
        ],200);
    }
}
