<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRentRequest;
use App\Models\tenantInfo\Rent;
use App\Models\Room;
use App\Models\Building;
use App\Models\Bed;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Transformers\RentTransformer;

class RentController extends Controller
{
    private $rent;
    private $room;
    private $building;
    private $bed;

    public function __construct(Rent $rent, Room $room, Building $building, Bed $bed){
        $this->rent = $rent;
        $this->room = $room;
        $this->building = $building;
        $this->bed = $bed;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->rent->where('is_deleted', 0)->get();

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
        $bed = $request->bed;

        $input = new Rent;
        $input->tenant_id = $request->tenant_id;
        $input->startDate = $request->startDate;
        $input->buildingName = $request->buildingName;
        $input->roomNumber = $request->roomNumber;
        $input->roomPrice = $request->roomPrice;
        $input->bed = $bed;
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
        $rent = $this->rent->where('is_deleted', 0)->find($id);
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
        $rent = $this->rent->where('is_deleted', 0)->find($id);

        if (is_null($rent)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {
            $rent->update([
                'tenant_id' => $request->tenant_id,
                'startDate' => $request->startDate,
                'buildingName' => $request->buildingName,
                'roomNumber' => $request->roomNumber,
                'roomPrice' => $request->roomPrice,
                'bed' => $request->bed,
                'roomType' => $request->roomType,
                'contractDuration' => $request->contractDuration,
                'endDate' => $request->endDate,
                'standardRate' => $request->standardRate,
                'monthlyDiscount' => $request->monthlyDiscount,
                'is_deleted' => 0
            ]);

            return response()->json([
                'message' => 'Rent\'s Updated Successfully'
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
        // $this->rent->destroy($id);
        $rent = $this->rent->where('is_deleted', 0)->find($id);

        $rent->update([
            'is_deleted' => 1
        ]);

        return response()->json([
            'message' => 'Tenant\'s Rent Details Removed'
        ],200);
    }
}
