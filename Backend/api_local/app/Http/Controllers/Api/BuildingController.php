<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Building;
use App\Transformers\BuildingTransformer;
use App\Http\Requests\StoreBuildingRequest;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use Illuminate\Support\Facades\DB;

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
        $all = $this->building->where('is_deleted', 0)->get();

        return fractal($all, new BuildingTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    public function insertAll() {

        $buildingName = ['Sydney','Auckland','Amsterdam','Kyoto','Tokyo',
                        'Seoul','New York','Milan','London','Singapore','Istanbul',
                        'Athens','Hong Kong','Capetown','Rio','Paris'];
        $buildingType = ['First Class','First Class','First Class','Deluxe','Deluxe',
                        'Deluxe','First Class','Deluxe','Deluxe','Deluxe','Deluxe',
                        'Deluxe','Deluxe','Deluxe','Deluxe','Deluxe'];
        $buildingLocation = [
            '3376 Harvard Street, Makati, 1213 Metro Manila',
            'Harvard Street, Makati, Metro Manila',
            '359 Panay St., Makati, Metro Manila',
            '359 Panay St., Makati, Metro Manila',
            'Panay St., Makati, Metro Manila',
            '338 Panay St., Makati, Metro Manila',
            '1244 Gen. Jacinto St., Makati, Metro Manila',
            '23 Kalayaan Ave., Makati, Metro Manila',
            '1224 Kalayaan Ave., Makati 1212 Metro Manila',
            'Capas, Makati, Kalakhang Manila',
            'Visaya, Makati, Kalakhang Manila',
            '476 Narra St., Road lot 122, Brgy., Makati, Metro Manila',
            '153 Lot 6 Teacher Cpmd, Makati, Metro Manila',
            '204 Lot 14B, 13B, 16 & 15, Blk 36 Kalayaan Ave., Makati, 1214 Metro Manila',
            '47 Lot 11 Blk 184, cor. Jasmin St. & C-5, Makati, Metro Manila',
            'St. Extn, Camia, Makati, Metro Manila'
        ];        
        for ($i=0; $i < 17; $i++) { 
            $build = new Building;
            $build->buildingName = $buildingName[$i];
            $build->category = $buildingType[$i];
            $build->location = $buildingLocation[$i];
            $build->is_deleted = 0;
            $build->save();
        }

        return response()->json([
            'message' => 'Test Success'
        ],200);
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

    public function deleteAll() 
    {
        DB::delete('delete from buildings');

        return response()->json([
            'message' => 'All Deleted'
        ],200);
    }
}
