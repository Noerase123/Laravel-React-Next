<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Rent;

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
        
        return response()->json([
            'rents' => $all
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
        $this->validate($request,[
            'startDate' => 'required',
            'buildingName' => 'required',
            'bedNumber' => 'required',
            'roomPrice' => 'required',
            'roomType' => 'required',
            'contractDuration' => 'required',
            'endDate' => 'required',
            'standardRate' => 'required',
            'monthlyDiscount' => 'required'
        ]);

        $rent = new Rent;
        $rent->startDate = $request->startDate;
        $rent->buildingName = $request->buildingName;
        $rent->bedNumber = $request->bedNumber;
        $rent->roomPrice = $request->roomPrice;
        $rent->roomType = $request->roomType;
        $rent->contractDuration = $request->contractDuration;
        $rent->endDate = $request->endDate;
        $rent->standardRate = $request->stardardRate;
        $rent->monthlyDiscount = $request->monthlyDiscount;
        $rent->save();

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
        $this->rent->destroy($id);

        return response()->json([
            'message' => 'Tenant\'s Rent Details Removed'
        ],200);
    }
}
