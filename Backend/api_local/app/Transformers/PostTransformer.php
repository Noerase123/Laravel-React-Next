<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\PostModel;

class PostTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(PostModel $post)
    {
        return [
            'id' => $post->getKey(),
            'title' => $post->title,
            'description' => $post->description,
            'created_at' => $post->created_at->format(config('app.default_datetime_format')),
        ];
    }
}
