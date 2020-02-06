<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Issues;

class IssueTransformer extends TransformerAbstract
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
    public function transform(Issues $issue)
    {
        return [
            'id' => $issue->getKey(),
            'tenant_id' => $issue->tenant_id,
            'unit_no' => $issue->unit_no,
            'image' => $issue->image,
            'datePosted' => $issue->created_at->format('Y/m/d h:i:s a'),
            'issueDetails' => $issue->issueDetails,
            'category' => $issue->category,
            'dateVisited' => isset($issue->dateVisited) ? $issue->dateVisited : '',
            'dateFixed' => isset($issue->dateFixed) ? $issue->dateFixed : '',
            'status' => $issue->status,
        ];
    }
}
