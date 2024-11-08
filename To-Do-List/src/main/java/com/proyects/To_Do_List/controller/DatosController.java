/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.proyects.To_Do_List.controller;

import com.proyects.To_Do_List.model.Datos;
import com.proyects.To_Do_List.service.DatosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author ElAdagioDeJP
 */
@Controller
  @RequestMapping("/datos")
  public class DatosController {
  
      @Autowired
      private DatosService datosService;
  
      @GetMapping
      public String listarPersonas(Model model) {
          model.addAttribute("datos", datosService.listarTodas());
          return "datos-list";
      }
  
      @GetMapping("/nuevo")
      public String mostrarFormularioNuevaPersona(Model model) {
          model.addAttribute("datos", new Datos());
          return "datos-form";
      }
  
      @PostMapping
      public String guardarPersona(Datos dato) {
          datosService.guardar(dato);
          return "redirect:/datos";
      }
  
      @GetMapping("/editar/{id}")
      public String mostrarFormularioEditarPersona(@PathVariable Long id, Model model) {
          model.addAttribute("datos", datosService.obtenerPorId(id));
          return "datos-form";
      }
  
      @GetMapping("/eliminar/{id}")
      public String eliminarPersona(@PathVariable Long id) {
          datosService.eliminar(id);
          return "redirect:/datos";
      }
  }