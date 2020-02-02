<?php

return [

    /**
     * Namespaces are being prefixed with the applications base namespace.
     */

    // 'namespaces' => [
    //     'contracts'    => 'Repositories\Contracts',
    //     'repositories' => 'Repositories\Eloquent',
    // ],

    /**
     * Paths will be used with the `app()->basePath().'/app/'` function to reach app directory.
     */

    // 'paths' => [
    //     'contracts'    => 'Repositories/Contracts/',
    //     'repositories' => 'Repositories/Eloquent/',
    // ],

    'path' => 'Repositories',
    'model_path' => '',

    'fileNames' => [
        'contract' => '{name}Repository',
        'eloquent' => 'Eloquent{name}Repository',
    ]

];
