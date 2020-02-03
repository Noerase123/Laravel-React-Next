<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TenantContract;
use App\Http\Requests\StoreContractRequest;
use App\Transformers\TenantContractTransformer;

class TenantContractController extends Controller
{
    private $contract;

    public function __construct(TenantContract $contract)
    {
        $this->contract = $contract;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->contract->all();

        return response()->json([
            'data' => $all
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContractRequest $request)
    {
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
        //
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
        //
    }
}
