<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTenantRequest;
use App\Transformers\TenantTransformer;
use App\Transformers\TenantOneTransformer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Repositories\Eloquent\EloquentTenantRepository;

use App\Models\Tenant;
use App\Models\Company;
use App\Models\Rent;

class TenantController extends Controller
{
    private $tenants;
    private $company;
    private $rent;
    private $tenRepo;

    public function __construct(Tenant $tenant, 
                    Company $company, Rent $rent,
                    EloquentTenantRepository $tenRepo) {
        $this->tenants = $tenant;
        $this->company = $company;
        $this->rent = $rent;
        $this->tenRepo = $tenRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->tenants->paginate(10);

        return fractal($all, new TenantTransformer)
            ->serializeWith(new ArraySerializer)
            // ->paginateWith(new IlluminatePaginatorAdapter($all))
            ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTenantRequest $request)
    {
        $input = $request->all();

        $this->tenants->create($input);

        return response()->json([
            'message' => 'tenant added successfully'
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
        $tenant = $this->tenants->find($id);

        if (is_null($tenant)) {
            return response()->json([
                'message' => 'Not found'
            ],404);
        }
        else {
            return response()->json($tenant,200);
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
        $tenant = Tenant::findOrFail($id);

        $input = $request->all();

        $tenant->fill($input)->save();

        return response()->json([
            'message' => 'tenant updated successfully'
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
        $this->tenants->destroy($id);

        return response()->json([
            'message' => 'tenant has been removed'
        ],200);
    }
}
