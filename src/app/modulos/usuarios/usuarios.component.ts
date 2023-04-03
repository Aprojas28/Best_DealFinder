import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  //variables globales
  verf =false;
  usuario:any;
  user = {
    Usuario:"",
    Nombre:"",
    Clave:"",
    Tipo:""
  };
//para validar
validnombre=true;
validusuario=true;
validclave=true;
validtipo=true;

  constructor (private suser: UsuarioService) {}

  ngOnInit(): void {
    this.consulta();
    this.limpiar ();
  }

  //mostrar formulario
  mostrar (dato:any) {
    switch (dato){
    case 0:
      this.verf = false;
    break;
    case 1:
      this.verf =true;
    }
  }


  //limpiar
  limpiar (){
    this.user.Usuario ="";
    this.user.Nombre ="";
    this.user.Clave ="";
    this.user.Tipo ="";
  }

  //validar
  validar(){
    if (this.user.Nombre== ""){
      this.validnombre = false;
    }else{
      this.validnombre = true;
    }

    if (this.user.Usuario== ""){
      this.validusuario = false;
    }else{
      this.validusuario = true;
    }

    if (this.user.Clave== ""){
      this.validclave = false;
    }else{
      this.validclave = true;
    }

    if (this.user.Tipo== ""){
      this.validtipo= false;
    }else{
      this.validtipo = true;
    }
  }

  consulta () {
    this.suser.consultar().subscribe ((result:any) => {
      this.usuario = result;
        //console.log (this.usuario);
    })

  }

  ingresar (){
    //console.log (this.cat);
    this.validar();

    if (this.validnombre== true && this.validusuario == true && this. validclave== true && this.validtipo==true){
      this.suser.insertar(this.user).subscribe((datos:any)=>{
        if (datos['resultado']=='OK') {
          //alert (datos['mensaje']);
          this.consulta();
        }
      });
      this.mostrar(0);
      this.limpiar(); 
    }
    
  }

  pregunta(id:any, Nombre:any){
    console.log ("entro con el id " + id);  
    Swal.fire({
      title: '¿Esta seguro de eliminar el usuario '+Nombre+'?',
      text: "El proceso no podra ser revertido!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarusuario(id);
        Swal.fire(
          'Eliminar!',
          'Usuario eliminado.',
          'success'
        )
      }
    })
  }


  borrarusuario(id:any){
    console.log (id);

    this.suser.eliminar (id). subscribe ((datos:any) => {
      if (datos['resultado'] == 'OK' ){
         
        this.consulta();
      }
    });
  }
}
