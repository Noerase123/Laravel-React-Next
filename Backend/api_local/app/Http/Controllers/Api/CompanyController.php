<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCompanyRequest;
use App\Models\tenantInfo\Company;
use App\Models\tenantInfo\Tenant;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Transformers\CompanyTransformer;

class CompanyController extends Controller
{
    private $company;
    private $tenant;

    public function __construct(Company $company, Tenant $tenant)
    {
        $this->middleware('auth:api');
        $this->company = $company;
        $this->tenant = $tenant;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->company->where('is_deleted', 0)->get();

        return fractal($all, new CompanyTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCompanyRequest $request)
    {
        $tenant = $this->tenant->where(['is_deleted' => 0, 'tenant_id' => $request->tenant_id])->first();

        $input = new Company;
        $input->tenant_id = $tenant->tenant_id;
        $input->companyName = $request->companyName;
        $input->companyLocation = $request->companyLocation;
        $input->industry = $request->industry;
        $input->position = $request->position;
        $input->monthlySalary = $request->monthlySalary;
        $input->hrContactName = $request->hrContactName;
        $input->hrContactNumber = $request->hrContactNumber;
        $input->workEmail = $request->workEmail;
        $input->workingHours = $request->workingHours;
        $input->is_deleted = 0;
        $input->save();

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
        $com = $this->company->where('is_deleted', 0)->find($id);

        if (is_null($com)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {
            return response()->json($com,200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreCompanyRequest $request, $id)
    {
        $tenant = $this->tenant->where(['is_deleted' => 0, 'tenant_id' => $request->tenant_id])->first();
        $input = $this->company->where('is_deleted', 0)->find($id);

        if (is_null($input)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }

        $input->update([
            'tenant_id' => $tenant->tenant_id,
            'companyName' => $request->companyName,
            'companyLocation' => $request->companyLocation,
            'industry' => $request->industry,
            'position' => $request->position,
            'monthlySalary' => $request->monthlySalary,
            'hrContactName' => $request->hrContactName,
            'hrContactNumber' => $request->hrContactNumber,
            'workEmail' => $request->workEmail,
            'workingHours' => $request->workingHours
        ]);

        return response()->json([
            'message' => 'tenant\'s company updated successfully'
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
        // $this->company->destroy($id);
        $company = $this->company->where('is_deleted', 0)->find($id);

        if (is_null($company)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }

        $company->update([
            'is_deleted' => 1
        ]);

        return response()->json([
            'message' => 'tenant\'s company removed successfully'
        ],200);
    }
}
