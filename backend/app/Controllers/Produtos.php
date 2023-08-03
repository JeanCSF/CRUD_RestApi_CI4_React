<?php

namespace App\Controllers;

use App\Models\ProdutosModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class Produtos extends ResourceController
{
    use ResponseTrait;
    private $produtosModel;
    public function __construct()
    {
         $this->produtosModel = new ProdutosModel();
    }

    public function index()
    {
        $data = $this->produtosModel->findAll();

        return $this->respond($data);
    }
}
