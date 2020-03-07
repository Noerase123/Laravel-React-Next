<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Building;
use App\Models\Room;
use App\Models\Bed;
use App\Http\Requests\StoreRoomRequest;
use App\Transformers\RoomTransformer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class RoomController extends Controller
{
    private $room;
    private $building;
    private $bed;
    public function __construct(Room $room, Building $building, Bed $bed)
    {
        $this->middleware('auth:api');
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
        $all = $this->room->where('is_deleted', 0)->paginate(10);

        return fractal($all, new RoomTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRoomRequest $request)
    {
        $build = $this->building->where(['is_deleted' => 0, 'building_id' => $request->building_id])->first();
        $bed = $this->bed->where(['is_deleted' => 0, 'bed_id' => $request->bed_id])->first();

        $room = new Room;
        $room->building_id = $build->building_id;
        $room->bed_id = $bed->bed_id;
        $room->roomNum = $request->roomNum;
        $room->roomType = $request->roomType;
        $room->roomPrice = $request->roomPrice;
        $room->maxPerson = $request->maxPerson;
        $room->vacant = $request->vacant;
        $room->is_deleted = 0;
        $room->save();

        return response()->json([
            'message' => 'Room added Successfully'
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
        $get = $this->room->where('is_deleted', 0)->find($id);

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
    public function update(StoreRoomRequest $request, $id)
    {
        $room = $this->room->where('is_deleted', 0)->find($id);

        if (is_null($room)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {

            $room->update([
                'building_id' => $request->building_id,
                'bed_id' => $request->bed_id,
                'roomNum' => $request->roomNum,
                'roomType' => $request->roomType,
                'roomPrice' => $request->roomPrice,
                'maxPerson' => $request->maxPerson,
                'is_deleted' => 0,
            ]);

            return response()->json([
                'message' => 'Room Updated Successfully'
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
        $room = $this->room->where('is_deleted', 0)->find($id);

        if (is_null($room)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }

        $room->update([
            'is_deleted' => 1
        ]);

        return response()->json([
            'message' => 'Room Deleted Successfully'
        ],200);
    }
}
