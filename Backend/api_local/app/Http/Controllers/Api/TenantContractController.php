<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\tenantInfo\TenantContract;
use App\Models\tenantInfo\Tenant;
use App\Models\tenantInfo\Rent;
use App\Http\Requests\StoreContractRequest;
use App\Transformers\TenantContractTransformer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class TenantContractController extends Controller
{
    private $contract;
    private $tenant;
    private $rent;

    public function __construct(TenantContract $contract, Tenant $tenant, Rent $rent)
    {
        $this->contract = $contract;
        $this->tenant = $tenant;
        $this->rent = $rent;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->contract->where('is_deleted', 0)->get();

        return fractal($all, new TenantContractTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContractRequest $request)
    {
        $invoice_ref = $this->rent->where('tenant_id', $request->tenant_id)->first();
        // $building = $invoice_ref->buildingName;
        // $build = strtoupper(substr($building,0,3));
        // $startDate = $invoice_ref->startDate;


        $input = new TenantContract;
        $input->tenant_id = $request->tenant_id;
        $input->contractForm = $request->contractForm;
        $input->landingInvoiceRef = $request->landingInvoiceRef;
        $input->deposit = $request->deposit;
        $input->monthAdvance = $request->monthAdvance;
        $input->validId1 = $request->validId1;
        $input->IdType1 = $request->IdType1;
        $input->validId2 = $request->validId2;
        $input->IdType2 = $request->IdType2;
        $input->confirmDetails = $request->confirmDetails;
        $input->confirmUtilitiesRates = $request->confirmUtilitiesRates;
        $input->confirmTermsConditions = $request->confirmTermsConditions;
        $input->hearMyTown = $request->hearMyTown;
        $input->is_deleted = 0;
        $input->save();

        return response()->json([
            'message' => 'Tenant\'s Contract Submitted'
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
        $tenCon = $this->contract->where('is_deleted', 0)->find($id);

        if (is_null($tenCon)) {
            return response()->json([
                'message' => 'Data not Found'
            ],404);
        }
        else {
            return response()->json($tenCon,200);
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
        $input = $this->contract->where('is_deleted', 0)->find($id);

        if (is_null($input)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }
        else {

            $input->tenant_id = $request->tenant_id;
            $input->contractForm = $request->contractForm;
            $input->landingInvoiceRef = $request->landingInvoiceRef;
            $input->deposit = $request->deposit;
            $input->monthAdvance = $request->monthAdvance;
            $input->validId1 = $request->validId1;
            $input->IdType1 = $request->IdType1;
            $input->validId2 = $request->validId2;
            $input->IdType2 = $request->IdType2;
            $input->confirmDetails = $request->confirmDetails;
            $input->confirmUtilitiesRates = $request->confirmUtilitiesRates;
            $input->confirmTermsConditions = $request->confirmTermsConditions;
            $input->hearMyTown = $request->hearMyTown;
            $input->is_deleted = 0;
            $input->save();

            return response()->json([
                'message' => 'tenant Contract Updates Successfully'
            ],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $iddelete = $this->contract->destroy($id);

        if (is_null($iddelete)) {
            return response()->json([
                'message' => 'data not found'
            ]);
        }
        else {
            return response()->json([
                'message' => 'tenant\'s contract has been removed'
            ],200);
        }

    }
}
