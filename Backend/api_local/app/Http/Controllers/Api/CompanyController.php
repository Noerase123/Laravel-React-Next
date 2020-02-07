<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCompanyRequest;
use App\Models\tenantInfo\Company;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Transformers\CompanyTransformer;

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
        $input = new Company;
        $input->tenant_id = $request->tenant_id;
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
        $com = $this->company->find($id);

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
        $item = $this->company->find($id);

        $input = $request->all();

        $item->update($input);

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
        $this->company->destroy($id);

        return response()->json([
            'message' => 'tenant\'s company removed successfully'
        ],200);
    }
}
