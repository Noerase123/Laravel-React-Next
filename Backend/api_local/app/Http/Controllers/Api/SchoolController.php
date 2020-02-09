<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\tenantInfo\School;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Http\Requests\StoreSchoolRequest;
use App\Transformers\SchoolTransformer;

class SchoolController extends Controller
{
    private $school;

    public function __construct(School $school)
    {
        $this->school = $school;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->school->where('is_deleted', 0)->all();

        return fractal($all, new SchoolTransformer)
            ->serializeWith(new ArraySerializer)
            ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSchoolRequest $request)
    {
        $input = new School;
        $input->tenant_id = $request->tenant_id;
        $input->schoolName = $request->schoolName;
        $input->schoolLocation = $request->schoolLocation;
        $input->course = $request->course;
        $input->schoolYear = $request->schoolYear;
        $input->uaap = $request->uaap;
        $input->ncaa = $request->ncaa;
        $input->weeklyOff = $request->weeklyOff;
        $input->deptHeadname = $request->deptHeadname;
        $input->deptHeadnumber = $request->deptHeadnumber;
        $input->is_deleted = 0;
        $input->save();

        return response()->json([
            'message' => 'Tenant\'s School Details Added'
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
        $school = $this->school->where('is_deleted', 0)->find($id);

        if (is_null($school)) {
            return response()->json([
                'message' => 'Data Not Found'
            ],404);
        }
        else {
            return response()->json($school,200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreSchoolRequest $request, $id)
    {
        $input = $this->school->where('is_deleted', 0)->find($id);

        if (is_null($input)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }

        $input->update($request->all());

        return response()->json([
            'message' => 'school info updated successfully'
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
        // $school = $this->school->destroy($id);
        $school = $this->school->where('is_deleted', 0)->find($id);

        if(is_null($school)) {
            return response()->json([
                'message' => 'Data not found'
            ],404);
        } else {

            $school->update([
                'is_deleted' => 1
            ]);

            return response()->json([
                'message' => 'tenant\'s school info has been removed'
            ],200);
        }
    }
}
