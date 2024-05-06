let mascota = {
    moly:{
        nombre:"moly",
        peso:1,
        especie:"canino",
        raza:"frances",
        img:'./public/img/gato.webp',
        fNto:new Date("01/22/2023"),
        img:'./public/img/gato.webp',
        propietario:{
          nombre:"lea",
          cc:"1235478",
          email:"lea@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    bicy:{
        nombre:"bicy",
        peso:3,
        especie:"canino",
        raza:"frances",
        img:new URL("https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"),
        fNto:new Date("04/11/2023"),
        propietario:{
          nombre:"lea",
          cc:"1235478",
          email:"lea@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    vianca:{
        nombre:"vianca",
        peso:3,
        especie:"canino",
        raza:"frances",
        img:new URL("https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930_1280.jpg"),
        fNto:new Date("05/11/2022"),
        propietario:{
          nombre:"luis",
          cc:"256455",
          email:"luis@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    maty:{
        nombre:"maty",
        peso:3,
        especie:"canino",
        raza:"frances",
        // img:new URL("https://cdn.pixabay.com/photo/2024/02/15/16/57/cat-8575768_1280.png"),
        fNto:new Date("04/05/2020"),
        propietario:{
          nombre:"tati",
          cc:"7884566",
          email:"tati@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    leo:{
        nombre:"leo",
        peso:3,
        especie:"canino",
        raza:"frances",
        img:'./public/img/gato.webp',
        fNto:new Date("10/20/2018"),
        propietario:{
          nombre:"mateo",
          cc:"7844562",
          email:"mateo@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    gregor:{
        nombre:"gregor",
        peso:3,
        especie:"canino",
        raza:"frances",
        img:'./public/img/gato.webp',
        fNto:new Date("04/7/2023"),
        propietario:{
          nombre:"Hanna",
          cc:"524569",
          email:"Hana@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    Tony:{
        nombre:"Tony",
        peso:1,
        especie:"canino",
        raza:"frances",
        img:'./public/img/gato.webp',
        fNto:new Date("11/23/2017"),
        propietario:{
          nombre:"Vianca",
          cc:"5456987",
          email:"vianca@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    coco:{
        nombre:"coco",
        peso:2,
        especie:"canino",
        raza:"frances",
        img:'./public/img/gato.webp',
        fNto:new Date("5/23/2020"),
        propietario:{
          nombre:"Leonardo",
          cc:"5486662",
          email:"leonardo@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    max:{
        nombre:"max",
        peso:1,
        especie:"canino",
        raza:"frances",
        img:'./public/img/gato.webp',
        fNto:new Date("02/25/2023"),
        propietario:{
          nombre:"Lili",
          cc:"8485855",
          email:"lili@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    maty:{
        nombre:"maty",
        peso:2,
        especie:"canino",
        raza:"frances",
        img:'./public/img/gato.webp',
        fNto:new Date("03/03/2018"),
        propietario:{
          nombre:"Abigail",
          cc:"589445",
          email:"abigail@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    leo:{
        nombre:"leo",
        peso:3,
        especie:"canino",
        img:'./public/img/gato.webp',
        raza:"frances",
        fNto:new Date("10/20/2018"),
        propietario:{
          nombre:"mateo",
          cc:"7844562",
          email:"mateo@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    },
    nana:{
        nombre:"nana",
        peso:3,
        especie:"perruno",
        raza:"fresspuder",
        img:'./public/img/gato.webp',
        fNto:new Date("09/17/2021"),
        propietario:{
          nombre:"Maria Fernanda Caceres",
          cc:"145266987",
          email:"mariacaceres@example.com"
        },
        calcularEdad:function(){
         const actual = new Date()
         return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
        }
    }
    

}

function agregarMascota(){
    let nombre = prompt("nombre mascota");
    mascota[nombre]= {
        nombre:prompt("confrimar nombre mascota"),
        peso:prompt("peso mascota"),
        fNto: new Date (prompt("Fecha nacimiento mascota", "MM/DD/YYYY")),
        propietario:{
        nombre:prompt("propietario mascota"),
        cc:prompt("id"),
        email:prompt("email")
        },
        calcularEdad:function(){
        const actual = new Date();
        return actual.getFullYear()-this.fNto.getFullYear()
        },
        determinarPeso:function(){
            if(this.peso < 10 && this.peso > 1.5){
                return("Estable")
            }else{
                return("Critico")
            }
    }
  }
}

console.log(mascota)

function listarMascotas(array){
    array.forEach( masco => {
        return sistemaImpresion(masco)
       
    })

}

function sistemaImpresion(masco){
    console.log(`**********  Informacion Mascotas  ***********************`)
    console.log(`
                 Nombre: ${masco.nombre}
                 Especie: ${masco.especie}
                 Raza: ${masco.raza}
                 Peso: ${masco.peso}
                 Estado Peso: ${masco.determinarPeso()}
                 Edad: ${masco.calcularEdad()}
                 propietario: ${masco.propietario.nombre}
                 Id: ${masco.propietario.cc}
                 `)
                 
}


