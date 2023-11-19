<?php 
//get all driver 
function getAlldriver($db) {

    
    $sql = 'Select * FROM driver '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get driver by id 
function getdriver($db, $driverId) {

    $sql = 'Select o.driverName, o.driverIC, o.driverPhone FROM driver o ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $driverId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new driver 
function createdriver($db, $form_data) { 
    //stop at sisni
    $sql = 'Insert into driver ( driverName, driverIC, driverPhone)'; 
    $sql .= 'values (:driverName, :driverIC, :driverPhone)';  
    $stmt = $db->prepare ($sql); 
    $stmt->bindParam(':driverName', ($form_data['driverName']));
    $stmt->bindParam(':driverIC', ($form_data['driverIC']));
    $stmt->bindParam(':driverPhone', ($form_data['driverPhone']));
    $stmt->execute(); 
    return $db->lastInsertID();
}

//delete driver by id 
function deletedriver($db,$driverId) { 

    $sql = ' Delete from driver where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$driverId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update driver by id 
function updatedriver($db,$form_dat,$driverId) { 

    
    $sql = 'UPDATE driver SET driverName = :driverName , driverIC = :driverIC , driverPhone = :driverPhone '; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$driverId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);   
    $stmt->bindParam(':driverName', ($form_dat['driverName']));
    $stmt->bindParam(':driverIC', ($form_dat['driverIC']));
    $stmt->bindParam(':driverPhone', ($form_dat['driverPhone']));
    $stmt->execute(); 
}