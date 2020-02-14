<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Building;
use App\Transformers\BuildingTransformer;
use App\Http\Requests\StoreBuildingRequest;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class BuildingController extends Controller
{
    private $building;

    public function __construct(Building $building)
    {
        $this->building = $building;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->building->where('is_deleted', 0)->all();

        return fractal($all, new BuildingTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBuildingRequest $request)
    {
        $build = new Building;
        $build->buildingName = $request->buildingName;
        $build->category = $request->category;
        $build->location = $request->location;
        $build->is_deleted = 0;
        $build->save();

        return response()->json([
            'message' => 'Building Added Successfully'
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
        $get = $this->building->where('is_deleted', 0)->find($id);

        if (is_null($get)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {
            return response()->json($get,200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreBuildingRequest $request, $id)
    {
        $build = $this->building->where('is_deleted', 0)->find($id);

        if(is_null($build)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }

        $build->update([
            'buildingName' => $request->buildingName,
            'category' => $request->category,
            'location' => $request->location,
            'is_deleted' => 0
        ]);

        return response()->json([
            'message' => 'Building Update Successfully'
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
        $get = $this->building->where('is_deleted', 0)->find($id);

        if (is_null($get)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }

        $get->update([
            'is_deleted' => 1
        ]);

        return response()->json([
            'message' => 'Building removed successfully'
        ],200);
    }
}
