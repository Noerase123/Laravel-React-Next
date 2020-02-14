<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\tenantInfo\Emergency;
use App\Transformers\EmergencyTransformer;
use App\Http\Requests\StoreEmergencyRequest;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class EmergencyController extends Controller
{
    private $emergency;

    public function __construct(Emergency $emergency)
    {
        $this->emergency = $emergency;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->emergency->where('is_deleted', 0)->get();

        return fractal($all, new EmergencyTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmergencyRequest $request)
    {
        $emer = new Emergency;
        $emer->tenant_id = $request->tenant_id;
        $emer->name = $request->name;
        $emer->number = $request->number;
        $emer->relationship = $request->relationship;
        $emer->is_deleted = 0;
        $emer->save();

        return response()->json([
            'message' => 'Tenant\'s emergency contacts added'
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
        $get = $this->emergency->where('is_deleted', 0)->find($id);

        if (is_null($get)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {
            return response()->json($get, 200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreEmergencyRequest $request, $id)
    {
        $emer = $this->emergency->where('is_deleted', 0)->find($id);

        if (is_null($emer)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {

            $emer->update([
                'tenant_id' => $request->tenant_id,
                'name' => $request->name,
                'number' => $request->number,
                'relationship' => $request->relationship
            ]);

            return response()->json([
                'message' => 'Emergency updated successfully'
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
        $emer = $this->emergency->where('is_deleted', 0)->find($id);

        if (is_null($emer)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {

            $emer->update([
                'is_deleted' => 1
            ]);

            return response()->json([
                'message' => 'Emergency contact Deleted'
            ],200);
        }
    }
}
