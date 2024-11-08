/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.proyects.To_Do_List.service;

import com.proyects.To_Do_List.model.Datos;
import com.proyects.To_Do_List.repository.DatoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

      
      @Service
      public class DatosService {
      
          @Autowired
          private DatoRepository DatoRepository;
      
          public List<Datos> listarTodas() {
              return DatoRepository.findAll();
          }
      
          public Datos guardar(Datos dato) {
              return DatoRepository.save(dato);
          }
      
          public Datos obtenerPorId(Long id) {
              return DatoRepository.findById(id).orElse(null);
          }
      
          public void eliminar(Long id) {
              DatoRepository.deleteById(id);
          }
      }