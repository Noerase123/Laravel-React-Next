<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Bed;
use App\Http\Requests\StoreBedRequest;
use App\Transformers\BedTransformer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class BedController extends Controller
{
    private $bed;

    public function __construct(Bed $bed)
    {
        $this->bed = $bed;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->bed->where('is_deleted', 0)->get();

        return fractal($all, new BedTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBedRequest $request)
    {
        $bed = new Bed;
        $bed->room_id = $request->room_id;
        $bed->bed_letter = $request->bed_letter;
        $bed->bed_count = $request->bed_count;
        $bed->bed_vacant = $request->bed_vacant;
        $bed->is_deleted = 0;
        $bed->save();

        return response()->json([
            'message' => 'Bed Successfully added'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bed = $this->bed->where('is_deleted', 0)->find($id);

        if (is_null($bed)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {
            return response()->json($bed, 200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreBedRequest $request, $id)
    {
        $bed = $this->bed->where('is_deleted', 0)->find($id);

        $message = '';

        if (is_null($bed)) {
            $message = 'Not Found';
        }
        else {

            $bed->update([
                'room_id' => $request->room_id,
                'bed_letter' => $request->bed_letter,
                'bed_count' => $request->bed_count,
                'bed_vacant' => $request->bed_vacant,
                'is_deleted' => 0
            ]);

            $message = 'Bed Updated Successfully';
        }

        return response()->json([
            'message' => $message
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
        $message = '';

        $bed = $this->bed->where('is_deleted', 0)->find($id);

        if (is_null($bed)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {
            $bed->update([
                'is_deleted' => 1
            ]);

            return response()->json([
                'message' => 'Bed Removed Successfully'
            ],200);
        }
    }
}
