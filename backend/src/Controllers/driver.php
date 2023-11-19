<?php 

use Slim\Http\Request; //namespace 
use Slim\Http\Response; //namespace 

//include adminProc.php file 
include __DIR__ .'/function/driverProc.php';


//alow cors
/*$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});*/
//end

// FOR DRIVER

//read table driver
$app->get('/driver', function (Request $request, Response $response, array $arg){

    return $this->response->withJson(array('data' => 'success'), 200); });  
 
// read all data from table student 
$app->get('/alldriver',function (Request $request, Response $response,  array $arg) { 

    $data = getAlldriver($this->db); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 

//request table order by condition 
$app->get('/driver/[{id}]', function ($request, $response, $args){   
    $driverId = $args['id']; 
    if (!is_numeric($driverId)) { 

        return $this->response->withJson(array('error' => 'numeric paremeter required'), 500);  
} 
    $data = getdriver($this->db, $driverId); 
    if (empty($data)) { 

        return $this->response->withJson(array('error' => 'no data'), 500); 
} 

return $this->response->withJson(array('data' => $data), 200);});

//post method order
$app->post('/driver/add', function ($request, $response, $args) { 

    $form_data = $request->getParsedBody(); 
    $data = createdriver($this->db, $form_data); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 


//delete row Order
$app->delete('/driver/del/[{id}]', function ($request, $response, $args){   
    $driverId = $args['id']; 
    
   if (!is_numeric($driverId)) { 

       return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
       $data = deletedriver($this->db,$driverId); 
       if (empty($data)) { 

           return $this->response->withJson(array($driverId=> 'is successfully deleted'), 202);}; }); 
 

   
//put table order 
$app->put('/driver/put/[{id}]', function ($request, $response, $args){
    $driverId = $args['id']; 
    
    if (!is_numeric($driverId)) { 
        
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
        $form_dat=$request->getParsedBody(); 
        $data=updatedriver($this->db,$form_dat,$driverId); 
        if ($data <=0)
        return $this->response->withJson(array('data' => 'successfully updated'), 200); 
});
   