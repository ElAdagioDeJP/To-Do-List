/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.proyects.To_Do_List.repository;

import com.proyects.To_Do_List.model.Datos;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author ElAdagioDeJP
 */
public interface DatoRepository extends JpaRepository <Datos,Long>{
    
}
