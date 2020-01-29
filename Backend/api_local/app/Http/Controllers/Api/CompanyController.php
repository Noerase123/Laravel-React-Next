<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Company;

class CompanyController extends Controller
{
    private $company;

    public function __construct(Company $company)
    {
        $this->company = $company;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->company->all();

        return response()->json([
            'companies' => $all
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
            'companyName' => 'required',
            'companyLocation' => 'required',
            'industry' => 'required',
            'position' => 'required',
            'monthlySalary' => 'required',
            'hrContactName' => 'required',
            'hrContactNumber' => 'required',
            'workEmail' => 'required',
            'workingHours' => 'required'
        ]);
        
        $com = new Company;
        $com->companyName = $request->companyName;
        $com->companyLocation = $request->companyLocation;
        $com->industry = $request->industry;
        $com->position = $request->position;
        $com->monthlySalary = $request->monthlySalary;
        $com->hrContactName = $request->hrContactName;
        $com->hrContactNumber = $request->hrContactNumber;
        $com->workEmail = $request->workEmail;
        $com->workingHours = $request->workingHours;
        $com->save();

        return response()->json([
            'message' => 'tenant\'s company added successfully'
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
        $com = $this->company->find($id);

        if (is_null($com)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {
            return response()->json([
                    'name' => $com->companyName,
                    'location' => $com->companyLocation,
                    'industry' => $com->industry,
                    'position' => $com->position,
                    'monthlySalary' => $com->monthlySalary,
                    'workEmail' => $com->workEmail,
                    'workingHours' => $com->workingHours,
                    'hr' => [
                        'ContactName' => $com->hrContactName,
                        'ContactNumber' => $com->hrContactNumber,
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
        $this->company->destroy($id);

        return response()->json([
            'message' => 'tenant\'s company removed successfully'
        ],200);
    }
}
