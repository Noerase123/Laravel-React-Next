<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreIssueRequest;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Transformers\IssueTransformer;
use App\Models\Issues;
use App\Models\tenantInfo\Tenant;
use App\Models\tenantInfo\Rent;

class IssueController extends Controller
{
    private $issues;
    private $tenant;
    private $rent;

    public function __construct(Issues $issues, Tenant $tenant, Rent $rent)
    {
        $this->issues = $issues;
        $this->tenant = $tenant;
        $this->rent = $rent;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->issues->where('is_deleted', 0)->paginate(10);

        return fractal($all, new IssueTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreIssueRequest $request)
    {
        $id = $request->tenant_id;
        $ten = $this->tenant->find($id);
        $rent = $this->rent->where('tenant_id', $ten->tenant_id)->first();

        $issue = new Issues;
        $issue->tenant_id = $id;
        $issue->unit_no = $rent->buildingName.' '.$rent->roomNumber;
        $issue->image = $request->image;
        $issue->issueDetails = $request->issueDetails;
        $issue->category = $request->category;
        $issue->dateVisited = "0000-00-00 00:00:00";
        $issue->dateFixed = "0000-00-00 00:00:00";
        $issue->anytime = $request->anytime;
        $issue->date1 = $request->date1;
        $issue->date2 = $request->date2;
        $issue->date3 = $request->date3;
        $issue->status = 0;
        $issue->is_deleted = 0;
        $issue->save();


        return response()->json([
            'message' => 'issue added'
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
        $issue = $this->issues->where('is_deleted', 0)->find($id);

        if (is_null($issue)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }

        return response()->json($issue, 200);
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
        $issue = $this->issues->where('is_deleted', 0)->find($id);

        if (is_null($issue)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }

        $id = $request->tenant_id;
        $ten = $this->tenant->find($id);
        $rent = $this->rent->where('tenant_id', $ten->tenant_id)->first();

        $issue->tenant_id = $id;
        $issue->unit_no = $rent->buildingName.' '.$rent->roomNumber;
        $issue->image = $request->image;
        $issue->issueDetails = $request->issueDetails;
        $issue->category = $request->category;
        $issue->dateVisited = $request->dateFixed;
        $issue->dateFixed = $request->dateFixed;
        $issue->anytime = $request->anytime;
        $issue->date1 = $request->date1;
        $issue->date2 = $request->date2;
        $issue->date3 = $request->date3;
        $issue->status = $request->status;
        $issue->is_deleted = 0;
        $issue->save();

        return response()->json([
            'message' => 'issue Updated Successfully'
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
        $issue = $this->issues->where('is_deleted', 0)->find($id);

        if (is_null($issue)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }

        $issue->update([
            'is_deleted' => 1
        ]);

        return response()->json([
            'message' => 'issue removed successfully'
        ],200);
    }
}
