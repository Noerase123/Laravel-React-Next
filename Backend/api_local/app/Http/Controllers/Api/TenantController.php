<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TenantModel;

class TenantController extends Controller
{
    private $tenant;
    public function __construct(TenantModel $tenant) 
    {
        $this->tenant = $tenant;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->tenant->all();

        foreach ($all as $key => $value) {
            $data[] = [
                'tenantId' => $value->tenantId,
                'created_at' => $value->created_at,
                'updated_at' => $value->updated_at,
                'basic_info' => [
                    'fullname' => $value->firstname.' '.$value->lastname,
                    'age' => $value->age,
                    'gender' => $value->gender,
                    'birthday' => $value->birthday,
                    'birthPlace' => $value->birthPlace,
                    'remarks' => $value->remarks,
                    'cityLocation' => $value->citylocation,
                    'permanentAddress' => $value->permanentAddress,
                ],
                'contact_info' => [
                    'email' => $value->email,
                    'phoneNumber' => $value->phoneNumber
                ],
                'company_info' => [
                    'companyName' => $value->companyname,
                    'officeAddress' => $value->officeaddress,
                    'hrHeadname' => $value->hrheadname,
                    'workPosition' => $value->workposition,
                    'salaryRange' => $value->salaryrange,
                    'workingSchedule' => $value->workingschedule,
                    'shift' => $value->shift,
                ]
                ];
        }

        return response()->json([
            'tenants' => $data
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $this->validate($req, [
            'firstname' => 'required',
            'lastname' => 'required',
            'companyname' => 'required',
            'cityLocation' => 'required',
            'officeAddress' => 'required',
            'hrHeadname' => 'required',
            'workPosition' => 'required',
            'salaryRange' => 'required',
            'workingSchedule' => 'required',
            'shift' => 'required',
            'gender' => 'required',
            'email' => 'required',
            'phoneNumber' => 'required',
            'age' => 'required',
            'birthday' => 'required',
            'permanentAddress' => 'required',
            'birthPlace' => 'required',
            'remarks' => 'required'
        ]);
        $ten = new TenantModel;
        $ten->firstname = $req->firstname;
        $ten->lastname = $req->lastname;
        $ten->companyname = $req->companyname;
        $ten->cityLocation = $req->cityLocation;
        $ten->officeAddress = $req->officeAddress;
        $ten->hrHeadname = $req->hrHeadname;
        $ten->workPosition = $req->workPosition;
        $ten->salaryRange = $req->salaryRange;
        $ten->workingSchedule = $req->workingSchedule;
        $ten->shift = $req->shift;
        $ten->gender = $req->gender;
        $ten->email = $req->email;
        $ten->phoneNumber = $req->phoneNumber;
        $ten->age = $req->age;
        $ten->birthday = $req->birthday;
        $ten->permanentAddress = $req->permanentAddress;
        $ten->birthPlace = $req->birthPlace;
        $ten->remarks = $req->remarks;
        $ten->save();

        return response()->json([
            'message' => 'Tenant added successfully'
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
        $value = $this->tenant->find($id);

        if (is_null($value)) {
            return response()->json([
                'data' => 'Not Found'
            ],404);
        }
        else {

            $data = [
                'tenantId' => $value->tenantId,
                'created_at' => $value->created_at,
                'updated_at' => $value->updated_at,
                'basic_info' => [
                    'firstname' => $value->firstname,
                    'lastname' => $value->lastname,
                    'age' => $value->age,
                    'gender' => $value->gender,
                    'birthday' => $value->birthday,
                    'birthPlace' => $value->birthPlace,
                    'remarks' => $value->remarks,
                    'cityLocation' => $value->citylocation,
                    'permanentAddress' => $value->permanentAddress
                ],
                'contact_info' => [
                    'email' => $value->email,
                    'phoneNumber' => $value->phoneNumber
                ],
                'company_info' => [
                    'companyName' => $value->companyname,
                    'officeAddress' => $value->officeaddress,
                    'hrHeadname' => $value->hrheadname,
                    'workPosition' => $value->workposition,
                    'salaryRange' => $value->salaryrange,
                    'workingSchedule' => $value->workingschedule,
                    'shift' => $value->shift,
                ]
            ];

            return response()->json($data, 200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $id)
    {
        $getFirst = $this->tenant->where('tenantId',$id)->first();

        if (is_null($getFirst)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }

        $data = [
        'firstname' => $req->firstname,
        'lastname' => $req->lastname,
        'companyname' => $req->companyname,
        'cityLocation' => $req->cityLocation,
        'officeAddress' => $req->officeAddress,
        'hrHeadname' => $req->hrHeadname,
        'workPosition' => $req->workPosition,
        'salaryRange' => $req->salaryRange,
        'workingSchedule' => $req->workingSchedule,
        'shift' => $req->shift,
        'gender' => $req->gender,
        'email' => $req->email,
        'phoneNumber' => $req->phoneNumber, 
        'age' => $req->age,
        'birthday' => $req->birthday,
        'permanentAddress' => $req->permanentAddress,
        'birthPlace' => $req->birthPlace,
        'remarks' => $req->remarks
        ];
        
        $getFirst->update($data);

        return response()->json([
            'message' => 'tenant updated successfully'
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $content = $this->tenant->destroy($id);

        if (is_null($content)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }

        return response()->json([
            'message' => 'tenant removed successfully'
        ],200);

    }
}
