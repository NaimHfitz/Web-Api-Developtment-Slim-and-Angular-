<?php 
//get all vehicle 
function getAllvehicle($db) {

    
    $sql = 'Select * FROM vehicle '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get vehicle by id 
function getvehicle($db, $vehicleId) {

    $sql = 'Select o.vehicleName, o.vehiclePlatNo, o.vehicleStatus, o.vehicleDriver FROM vehicle o  ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $vehicleId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
}

//add new vehicle 
function createvehicle($db, $form_data) { 
    //stop at sisni
    $sql = 'Insert into vehicle ( vehicleName, vehiclePlatNo, vehicleStatus, vehicleDriver)'; 
    $sql .= 'values (:vehicleName, :vehiclePlatNo, :vehicleStatus, :vehicleDriver)';  
    $stmt = $db->prepare ($sql);  
    $stmt->bindParam(':vehicleName', ($form_data['vehicleName']));
    $stmt->bindParam(':vehiclePlatNo', ($form_data['vehiclePlatNo']));
    $stmt->bindParam(':vehicleStatus', ($form_data['vehicleStatus']));
    $stmt->bindParam(':vehicleDriver', ($form_data['vehicleDriver']));
    $stmt->execute(); 
    return $db->lastInsertID();
}


//delete vehicle by id 
function deletevehicle($db,$vehicleId) { 

    $sql = ' Delete from vehicle where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$vehicleId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update vehicle by id 
function updatevehicle($db,$form_dat,$vehicleId) { 

    
    $sql = 'UPDATE vehicle SET vehicleName = :vehicleName , vehiclePlatNo = :vehiclePlatNo , vehicleStatus = :vehicleStatus, vehicleDriver = :vehicleDriver'; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$vehicleId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);   
    $stmt->bindParam(':vehicleName', ($form_dat['vehicleName']));
    $stmt->bindParam(':vehiclePlatNo', ($form_dat['vehiclePlatNo']));
    $stmt->bindParam(':vehicleStatus', ($form_data['vehicleStatus']));
    $stmt->bindParam(':vehicleDriver', ($form_data['vehicleDriver']));
    $stmt->execute(); 
}