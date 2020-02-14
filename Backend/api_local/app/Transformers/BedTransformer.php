<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Bed;
use App\Models\Room;
use App\Models\Building;

class BedTransformer extends TransformerAbstract
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
    public function transform(Bed $bed)
    {
        $room = Room::where('room_id', $bed->room_id)->first();
        $build = Building::where('building_id', $room->building_id)->first();
        $name = $build->buildingName;
        return [
            'bedID' => $bed->getKey(),
            'room' => $name.' '.$room->roomNum,
            'bedLetter' => $bed->bed_letter,
            'bedCount' => $bed->bed_count,
            'bedVacant' => $bed->bed_vacant
        ];
    }
}
