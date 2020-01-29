<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PostModel;
use App\Transformers\PostTransformer;
use App\Http\Requests\StorePostRequest;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class PostController extends Controller
{
    private $post;
    public function __construct(PostModel $post)
    {
        // $this->middleware('guest:api');

        $this->post = $post;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->post->all();

        // return response()->json([
        //     'data' => $all
        // ],200);

        return fractal($all, new PostTransformer)
            ->serializeWith(new ArraySerializer)
            ->response(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $req)
    {
        // $this->validate($req,[
        //     'title' => 'required',
        //     'description' => 'required|min:10'
        // ]);

        $post = new PostModel;

        $post->title = $req->title;
        $post->description = $req->description;
        $post->save();

        return response()->json([
            'message' => 'post added'
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
        $model = PostModel::find($id);

        if (is_null($model)) {
            return response()->json([
                'data' => 'Not found'
            ],404);
        }
        else {
            return response()->json($model,200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StorePostRequest $request, $id)
    {
        $res = $this->model->where('id', $id)->first();

        if (is_null($res)) {
            return response()->json([
                'message' => 'Not found'
            ],404);
        }

        $data = [
            'title' => $request->title,
            'description' => $request->description,
        ];

        $res->update($data);

        return response()->json([
            'message' => 'post updated'
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
        PostModel::destroy($id);

        return response()->json([
            'message' => 'post deleted'
        ],200);
    }
}
