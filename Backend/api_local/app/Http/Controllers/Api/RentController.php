<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRentRequest;
use App\Models\tenantInfo\Rent;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Transformers\RentTransformer;

class RentController extends Controller
{
    private $rent;

    public function __construct(Rent $rent){
        $this->rent = $rent;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->rent->all();

        return fractal($all, new RentTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRentRequest $request)
    {
        $input = new Rent;
        $input->tenant_id = $request->tenant_id;
        $input->startDate = $request->startDate;
        $input->buildingName = $request->buildingName;
        $input->roomNumber = $request->roomNumber;
        $input->roomPrice = $request->roomPrice;
        $input->bed = $request->bed;
        $input->roomType = $request->roomType;
        $input->contractDuration = $request->contractDuration;
        $input->endDate = $request->endDate;
        $input->standardRate = $request->standardRate;
        $input->monthlyDiscount = $request->monthlyDiscount;
        $input->is_deleted = 0;
        $input->save();

        return response()->json([
            'message' => 'Tenant\'s Rent Details Added'
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
        $rent = $this->rent->find($id);
        // $rent = $this->rent->where('tenant_id',$id)->get();

        if (is_null($rent)){
            return response()->json([
                'message' => 'Data Not Found'
            ],404);
        } else {
            return response()->json($rent,200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreRentRequest $request, $id)
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
        $this->rent->destroy($id);

        return response()->json([
            'message' => 'Tenant\'s Rent Details Removed'
        ],200);
    }
}
