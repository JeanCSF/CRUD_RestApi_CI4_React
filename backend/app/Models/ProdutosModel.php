<?php

namespace App\Models;

use CodeIgniter\Model;

class ProdutosModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'produtos';
    protected $primaryKey       = 'id_produto';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['nome_produto', 'preco_produto'];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [
        'nome_produto'          => 'required|alpha_numeric_space|min_length[5]|is_unique[produtos.nome_produto]',
        'preco_produto'         => 'required|numeric',
    ];
    protected $validationMessages   = [
        'nome_produto' => [
            'is_unique'     => 'Ja consta no banco um produto com este nome!',
            'required'      => 'Por favor insira um nome para o produto!',
            'min_length'    => 'O nome do produto tem que ter pelo menos 5 letras!',
        ],
        'preco_produto' => [
            'required'      => 'Por favor insira um preço para o produto!',
            'numeric'       => 'Por favor insira apenas números no valor do produto!',
        ],
    ];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];
}
