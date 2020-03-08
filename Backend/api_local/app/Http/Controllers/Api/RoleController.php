<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Http\Requests\StoreRoleRequest;
use App\Transformers\RoleTransformer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class RoleController extends Controller
{
    private $role;
    public function __construct(Role $role)
    {
        // $this->middleware('auth:api');
        $this->role = $role;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->role->where('is_deleted', 0)->get();

        return fractal($all, new RoleTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    public function addDefaultRoles() 
    {
        $role_names = ['Administrator','Finance','Maintenance',
                'Property Management','Sales/Marketing','Security',
                'Tenant Engagement','Housekeeping'];

        for ($i=0; $i < count($role_names); $i++) { 
            $role = new Role;
            $role->role_name = $role_names[$i];
            $role->is_deleted = 0;
            $role->save();
        }

        return response()->json([
            'message' => 'Default Roles Added'
        ],200);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRoleRequest $request)
    {
        $existed_role = $this->role->where('role_name', $request->role_name)->first();

        if ($existed_role) {
            return response()->json([
                'message' => 'Role Name Existed'
            ],409);
        }
        else {

            $role = new Role;
            $role->role_name = $request->role_name;
            $role->is_deleted = 0;
            $role->save();

            return response()->json([
                'message' => 'role added successfully'
            ],200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role = $this->role->where('is_deleted', 0)->find($id);

        if (is_null($role)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {

            return response()->json($role, 200);

        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreRoleRequest $request, $id)
    {
        $role = $this->role->where('is_deleted', 0)->find($id);

        if (is_null($role)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }
        else {

            $role->update([
                'role_name' => $request->role_name,
                'is_deleted' => 0
            ]);

            return response()->json([
                'message' => 'role updated successfully'
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
        $role = $this->role->where('is_deleted', 0)->find($id);

        if (is_null($role)) {
            return response()->json([
                'message' => 'Not Found'
            ],404);
        }

        $role->update([
            'is_deleted' => 1
        ]);

        return response()->json([
            'message' => 'Role Deleted Successfully'
        ],200);
    }
}
