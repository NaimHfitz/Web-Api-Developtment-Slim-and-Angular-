<?php 

use Slim\Http\Request; //namespace 
use Slim\Http\Response; //namespace 

//include adminProc.php file 
include __DIR__ .'/function/vehicleProc.php';


//alow cors
// $app->options('/{routes:.+}', function ($request, $response, $args) {
//     return $response;
// });

// $app->add(function ($req, $res, $next) {
//     $response = $next($req, $res);
//     return $response
//             ->withHeader('Access-Control-Allow-Origin', '*')
//             ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
//             ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
// });
//end

// FOR vehicle

//read table vehicle
$app->get('/vehicle', function (Request $request, Response $response, array $arg){

    return $this->response->withJson(array('data' => 'success'), 200); });  
 
// read all data from table student 
$app->get('/allvehicle',function (Request $request, Response $response,  array $arg) { 

    $data = getAllvehicle($this->db); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 

//request table order by condition (student id) 
$app->get('/vehicle/[{id}]', function ($request, $response, $args){   
    $vehicleId = $args['id']; 
    if (!is_numeric($vehicleId)) { 

        return $this->response->withJson(array('error' => 'numeric paremeter required'), 500);  
} 
    $data = getvehicle($this->db, $vehicleId); 
    if (empty($data)) { 

        return $this->response->withJson(array('error' => 'no data'), 500); 
} 

return $this->response->withJson(array('data' => $data), 200);});

//post method order
$app->post('/vehicle/add', function ($request, $response, $args) { 

    $form_data = $request->getParsedBody(); 
    $data = createvehicle($this->db, $form_data); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 


//delete row Order
$app->delete('/vehicle/del/[{id}]', function ($request, $response, $args){   
    $vehicleId = $args['id']; 
    
   if (!is_numeric($vehicleId)) { 

       return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
       $data = deletevehicle($this->db,$vehicleId); 
       if (empty($data)) { 

           return $this->response->withJson(array($vehicleId=> 'is successfully deleted'), 202);}; }); 
 

   
//put table order 
$app->put('/vehicle/put/[{id}]', function ($request, $response, $args){
    $vehicleId = $args['id']; 
    
    if (!is_numeric($vehicleId)) { 
        
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
        $form_dat=$request->getParsedBody(); 
        $data=updatevehicle($this->db,$form_dat,$vehicleId); 
        if ($data <=0)
        return $this->response->withJson(array('data' => 'successfully updated'), 200); 
});
   