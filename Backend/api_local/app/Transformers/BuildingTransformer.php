<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Building;

class BuildingTransformer extends TransformerAbstract
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
    public function transform(Building $building)
    {
        return [
            'buildingID' => $building->getKey(),
            'name' => $building->buildingName,
            'category' => $building->category,
            'location' => $building->location
        ];
    }
}
