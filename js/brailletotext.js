$(document).ready(function() {
        var tabla = {
            65: false, //A - Salto de Linea
            72: false, //H - Space
            71: false, //G - Tabulador
            192: false, //; - Backspace
            70: false, //F - 1
            68: false, //D - 2
            83: false, //S - 3
            74: false, //J - 4
            75: false, //K - 5
            76: false, //L - 6
            90: false, //Z - Bold
            88: false, //X - Italic
            67: false  //C - Underline
        };
        var mayus = false;        
        var number = false;
        var bold = false;
        var italic = false;
        var underline = false;
        var div = document.getElementById("bloque");
        var punto1 = document.getElementById("punto1");  
        var punto2 = document.getElementById("punto2");  
        var punto3 = document.getElementById("punto3");  
        var punto4 = document.getElementById("punto4");  
        var punto5 = document.getElementById("punto5");  
        var punto6 = document.getElementById("punto6");  

        function boldb(){
            if(bold == false){
                bold = true;
                NegritaA.play();}
            else{ 
                bold = false;
                NegritaD.play();}
        }
        function italicb(){
            if(italic == false){
                italic = true;
                CursivaA.play();}
            else{ 
                italic = false;
                CursivaD.play();}
        }
        function underlineb(){
            if(!underline){
                underline = true;
                SubrayadoA.play();}
            else{ 
                underline = false;
                SubrayadoD.play();}
        }

        function tal(){
            $('#bloque').css('text-align', 'left');
        }
        function tar(){
            $('#bloque').css('text-align', 'right');
        }
        function tac(){
            $('#bloque').css('text-align', 'center');
        }
        function taj(){
            $('#bloque').css('text-align', 'justify');
        }

        document.getElementById("boldn").onclick = boldb;
        document.getElementById("italicn").onclick = italicb;
        document.getElementById("underlinen").onclick = underlineb;
        document.getElementById("alignl").onclick=tal;
        document.getElementById("alignr").onclick=tar;
        document.getElementById("alignc").onclick=tac;
        document.getElementById("alignj").onclick=taj;

        $('#menu li a').css('color', 'blue');
     
        var A = new Audio('audio/A.mp3');
        var B = new Audio('audio/B.mp3');
        var C = new Audio('audio/C.mp3');
        var D = new Audio('audio/D.mp3');
        var E = new Audio('audio/E.mp3');
        var F = new Audio('audio/F.mp3');
        var G = new Audio('audio/G.mp3');
        var H = new Audio('audio/H.mp3');
        var I = new Audio('audio/I.mp3');
        var J = new Audio('audio/J.mp3');
        var K = new Audio('audio/K.mp3');
        var L = new Audio('audio/L.mp3');
        var M = new Audio('audio/M.mp3');
        var N = new Audio('audio/N.mp3');
        var Ñ = new Audio('audio/Ñ.mp3');
        var O = new Audio('audio/O.mp3');
        var P = new Audio('audio/P.mp3');
        var Q = new Audio('audio/Q.mp3');
        var R = new Audio('audio/R.mp3');
        var S = new Audio('audio/S.mp3');
        var T = new Audio('audio/T.mp3');
        var U = new Audio('audio/U.mp3');
        var V = new Audio('audio/V.mp3');
        var W = new Audio('audio/W.mp3');
        var X = new Audio('audio/X.mp3');
        var Y = new Audio('audio/Y.mp3');
        var Z = new Audio('audio/Z.mp3');
        var MayusculaA = new Audio('audio/MayusculaActivado.mp3');
        var NegritaA = new Audio('audio/NegritaActivado.mp3');
        var NegritaD = new Audio('audio/NegritaDesactivado.mp3');
        var SubrayadoA = new Audio('audio/SubrayadoActivado.mp3');
        var SubrayadoD = new Audio('audio/SubrayadoDesactivado.mp3');
        var CursivaA = new Audio('audio/CursivaActivado.mp3');
        var CursivaD = new Audio('audio/CursivaDesactivado.mp3');
        var Uno = new Audio('audio/1.mp3');
        var Dos = new Audio('audio/2.mp3');
        var Tres = new Audio('audio/3.mp3');
        var Cuatro = new Audio('audio/4.mp3');
        var Cinco = new Audio('audio/5.mp3');
        var Seis = new Audio('audio/6.mp3');
        var Siete = new Audio('audio/7.mp3');
        var Ocho = new Audio('audio/8.mp3');
        var Nueve = new Audio('audio/9.mp3');
        var Cero = new Audio('audio/0.mp3');
        var NumeroA = new Audio('audio/NumerosA.mp3');

        function ClearTabla(){
            for (var item in tabla)
                tabla[item] = false;
        } 
        function Count(){
            var i = 0;
            for (var item in tabla)
                if (tabla[item]){
                    i++;
                }
            return i;
        }
        function Clear(div){
            strng = div.innerHTML;
            div.innerHTML=strng.substring(0,strng.length-1)
        }
        function Write(div, texto){
            if (bold & !italic & !underline)
                div.innerHTML+="<b>"+texto+"</b>"
            else if(italic &  !bold & !underline)
                div.innerHTML+="<i>"+texto+"</i>"
            else if(underline & !italic &  !bold)
                div.innerHTML+="<u>"+texto+"</u>"
            else if (bold & italic & !underline)
                div.innerHTML+="<b><i>" + texto + "</b></i>"
            else if (bold & !italic & underline)
                div.innerHTML+="<u><b>" + texto + "</u></b>"
            else if (!bold & italic & underline)
                div.innerHTML+="<u><i>" + texto + "</u></i>"
            else if (bold & italic & underline)
                div.innerHTML+="<u><b><i>" + texto + "</u></b></i>";
            else
                div.innerHTML+=texto;                
        }
        function ChangeColor(puntoid){
            move(puntoid)
                .set('background-color', '#5BC0DE')
                .duration(300)
                .end(function(){
                    move(puntoid)
                        .set('background-color', '#1c1c1c')
                        .end();
                });
        }
        function Verify1(i){
            if (Count()==1 && tabla[i])
                return 1;
        }
        function Verify2(i,j){
            if (Count()==2 && tabla[i] && tabla[j])
                return 1;
        }
        function Verify3(i,j,k){
            if (Count()==3 && tabla[i] && tabla[j] && tabla[k])
                return 1;
        }
        function Verify4(i,j,k,w){
            if (Count()==4 && tabla[i] && tabla[j] && tabla[k] && tabla[w])
                return 1;
        }
        function Verify5(i,j,k,w,s){
            if (Count()==5 && tabla[i] && tabla[j] && tabla[k] && tabla[w] && tabla[s])
                return 1;
        }
        $(document).keydown(function(event) {
            var keyCode = event.which;
            var keyChar = String.fromCharCode(keyCode);

            //Reset
            if (tabla.hasOwnProperty(keyCode)) {
                tabla[keyCode] = true;
            }else{
                ClearTabla();
            }

            if(Count()>5)             
                ClearTabla();

            for (var item in tabla){
                if(tabla[item])
                    console.log(Count(),item);
            }

            for (var item in tabla){ 
                //Numero                
                if(Verify4(83,74,75,76)){
                    number = true;
                    NumerosA.play();
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                } 
                //Mayuscula
                if(Verify2(74,76)){
                    mayus = true; 
                    MayusculaA.play();         
                    ClearTabla(); 
                    ChangeColor(punto4);
                    ChangeColor(punto6);                   
                }    
                //Espacio            
                if (Verify1(72)){
                    Write(div, " ");
                    ClearTabla();
                }
                //Backspace
                if (Verify1(192)) {
                    Clear(div);
                    ClearTabla();
                }
                //Salto de Linea
                if (Verify1(65)) {
                    Write(div, "\n");
                    ClearTabla();
                }
                //Tabulador
                if (Verify1(71)) {
                    Write(div, "\t");
                    ClearTabla();
                }
                //Bold
                if (Verify1(90)) {
                    if(bold == false){
                        bold = true;
                        NegritaA.play();}
                    else{ 
                        bold = false;
                        NegritaD.play();}
                    ClearTabla();
                }
                //Italic
                if (Verify1(88)) {
                    if(italic == false){
                        italic = true;
                        CursivaA.play();}
                    else{ 
                        italic = false;
                        CursivaD.play();}
                    ClearTabla();
                }
                //Underline
                if (Verify1(67)) {
                    if(!underline){
                        underline = true;
                        SubrayadoA.play();}
                    else{ 
                        underline = false;
                        SubrayadoD.play();}
                    ClearTabla();
                }       
                // //Punto
                // if (tabla[83] && Count()==1) {
                //     div.value+=".";
                //     ClearTabla();
                // } 
                // //Coma 
                // if (tabla[68] && Count()==1) {
                //     div.value+=",";
                //     ClearTabla();
                // }          
                //Guion
                if(Verify2(83,76)){
                    Write(div, "-");                    
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                }               
                //Comillas                                
                if(Verify3(68,83,76)){
                    Write(div, "\"");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                }

                //Letra F-f-6
                if(Verify3(70,74,68)){
                    if(mayus){
                        Write(div, "F");                    
                        mayus = false;
                        F.play();
                    }else if (number){
                        Write(div, "6");
                        Seis.play();
                        number = false;
                    }
                    else{
                        Write(div, "f");
                        F.play();
                    }
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                    ChangeColor(punto2);
                } 
                
                //Letra A-a-1
                if (Verify1(70)){
                    if(mayus){
                        Write(div, "A");
                        mayus = false;
                        A.play();
                    } else if (number){
                        Write(div, "1");
                        Uno.play();
                        number = false;
                    }                   
                    else{
                        Write(div,"a");
                        A.play();}
                    ChangeColor(punto1);
                    ClearTabla();
                }
                //Letra B-b-2
                if(Verify2(70,68)){
                    if(mayus){
                        Write(div, "B");                    
                        mayus = false;
                        B.play();
                    }else if (number){
                        Write(div, "2");
                        Dos.play();
                        number = false;
                    }
                    else{
                        Write(div, "b");
                        B.play();}
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ClearTabla();
                }                 
                //Letra C-c-3
                if(Verify2(70,74)){
                    if(mayus){
                        Write(div, "C");                    
                        mayus = false;
                        C.play();
                    }else if (number){
                        Write(div, "3");
                        Tres.play();
                        number = false;
                    }
                    else{
                        Write(div, "c");
                        C.play();}
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                }
                //Letra D-d-4                                  
                if(Verify3(70,74,75)){
                    if(mayus){
                        Write(div, "D");                    
                        mayus = false;
                        D.play();
                    }else if(number){
                        Write(div, "4");
                        Cuatro.play();
                        number = false;
                    }
                    else{
                        Write(div, "d");
                        D.play();}
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }
                //Letra E-e-5
                if(Verify2(70,75)){
                    if(mayus){
                        Write(div, "E");
                        E.play();                    
                        mayus = false;
                    }else if (number){
                        Write(div, "5");
                        Cinco.play();
                        number = false;
                    }
                    else{
                        Write(div, "e");
                        E.play();}
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto5);
                }                          
                  //Letra G-g-7
                if(Verify4(70,74,68,75)){
                    if(mayus){
                        Write(div, "G"); 
                        G.play();                   
                        mayus = false;
                    }else if (number){
                        Write(div, "7");
                        Siete.play();
                        number = false;
                    }
                    else{
                        Write(div, "g");
                        G.play();}
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }  
                //Letra H-h-8
                if(Verify3(70,75,68)){
                    if(mayus){
                        Write(div, "H");
                        H.play();                    
                        mayus = false;
                    }else if (number){
                        Write(div, "8");
                        Ocho.play();
                        number = false;
                    }
                    else{
                        Write(div, "h");
                        H.play();}
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto5);
                }                  
                //Letra I-i-9
                if(Verify2(68,74)){
                    if(mayus){
                        Write(div, "I"); 
                        I.play();                   
                        mayus = false;
                    }else if (number){
                        Write(div, "9");
                        Nueve.play();
                        number = false;
                    }
                    else{
                        Write(div, "i");
                        I.play();}
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                }   
                //Letra J-j-0
                if(Verify3(68,75,74)){
                    if(mayus){
                        Write(div, "J");                    
                        mayus = false;
                        J.play();
                    }else if (number){
                        Write(div, "0");
                        Cero.play();
                        number = false;
                    }
                    else{
                        Write(div, "j");
                        J.play();}
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }  
                //Letra K-k
                if(Verify2(70,83)){
                    if(mayus){
                        Write(div, "K");                    
                        mayus = false;
                    }else
                        Write(div, "k");
                    K.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                } 
                //Letra L-l
                if(Verify3(70,68,83)){
                    if (mayus) {
                        Write(div, "L");
                        mayus = false;
                    }
                    else
                        Write(div, "l"); 
                    L.play();    
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                }
                //Letra M-m
                 if(Verify3(70,74,83)){
                    if(mayus){
                        Write(div, "M");                    
                        mayus = false;
                    }else
                        Write(div, "m");
                    M.play();
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                }
                //Letra N-n
                 if(Verify4(70,74,75,83)){
                    if(mayus){
                        Write(div, "N");                    
                        mayus = false;
                    }else
                        Write(div, "n");
                    ClearTabla();
                    N.play();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }  
                 //Letra Ñ-ñ
                if(Verify5(70,74,75,76,68)){
                    if(mayus){
                        Write(div, "Ñ");                    
                        mayus = false;
                    }else
                        Write(div, "ñ");
                    ClearTabla();
                    Ñ.play();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                }                
                //Letra O-o
                 if(Verify3(70,75,83)){
                    if(mayus){
                        Write(div, "O");                    
                        mayus = false;
                    }else
                        Write(div, "o");
                    O.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                    ChangeColor(punto5);
                }
                //Letra P-p
                 if(Verify4(70,68,83,74)){
                    if(mayus){
                        Write(div, "P");                    
                        mayus = false;
                    }else
                        Write(div, "p");
                    P.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                }
                 //Letra Q-q
                if(Verify5(70,68,83,75,74)){
                    if(mayus){
                        Write(div, "Q");                    
                        mayus = false;
                    }else
                        Write(div, "q");
                    ClearTabla();
                    P.play();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }     
                //Letra R-r
                 if(Verify4(70,68,83,75)){
                    if(mayus){
                        Write(div, "R");                    
                        mayus = false;
                    }else
                        Write(div, "r");
                    R.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto5);
                }
                //Letra S-s
                 if(Verify3(68,83,74)){
                    if(mayus){
                        Write(div, "S");                    
                        mayus = false;
                    }else
                        Write(div, "s");
                    S.play();
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                }
                //Letra T-t
                 if(Verify4(68,83,74,75)){
                    if(mayus){
                        Write(div, "T");                    
                        mayus = false;
                    }else
                        Write(div, "t");
                    T.play();
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }
                //Letra U-u
                 if(Verify3(70,83,76)){
                    if(mayus){
                        Write(div, "U");                    
                        mayus = false;
                    }else
                        Write(div, "u");
                    U.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                    ChangeColor(punto6);
                } 
                //Letra V-v
                 if(Verify4(70,68,83,76)){
                    if(mayus){
                        Write(div, "V");                    
                        mayus = false;
                    }else
                        Write(div, "v");
                    V.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                }
                //Letra W-w
                 if(Verify4(68,74,75,76)){
                    if(mayus){
                        Write(div, "W");                    
                        mayus = false;
                    }else
                        Write(div, "w");
                    W.play();
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                }
                //Letra X-x
                 if(Verify4(70,74,83,76)){
                    if(mayus){
                        Write(div, "X");                    
                        mayus = false;
                    }else
                        Write(div, "x");
                    X.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto6);
                } 
                 //Letra Y-y
                if(Verify5(70,83,74,75,76)){
                    if(mayus){
                        Write(div, "Y");                    
                        mayus = false;
                    }else
                        Write(div, "y");
                    Y.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto6);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                } 
                //Letra Z-z
                 if(Verify4(70,83,75,76)){
                    if(mayus){
                        Write(div, "Z");                    
                        mayus = false;
                    }else
                        Write(div, "z");
                    Z.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                    ChangeColor(punto5);
                }     
                 //Letra Á-á
                if(Verify5(70,68,83,75,76)){
                    if(mayus){
                        Write(div, "Á");                    
                        mayus = false;
                    }else
                        Write(div, "á");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                    ChangeColor(punto5);
                }    
                //Letra É-é
                if(Verify4(68,83,74,76)){
                    if(mayus){
                        Write(div, "É");                    
                        mayus = false;
                    }else
                        Write(div, "é");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto6);
                }
                //Letra Í-í
                if(Verify2(83,74)){
                    if(mayus){
                        Write(div, "Í");                    
                        mayus = false;
                    }else
                        Write(div, "í");
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                } 
                //Letra Ó-ó
                if(Verify3(83,76,74)){
                    if(mayus){
                        Write(div, "Ó");                    
                        mayus = false;
                    }else
                        Write(div, "ó");
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto6);
                } 
                //Letra Ú-ú
                if(Verify5(68,83,74,75,76)){
                    if(mayus){
                        Write(div, "Ú");                    
                        mayus = false;
                    }else
                        Write(div, "ú");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                }    
                //Letra Ü-ü
                if(Verify4(70,68,75,76)){
                    if(mayus){
                        Write(div, "Ü");                    
                        mayus = false;
                    }else
                        Write(div, "ü");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto1);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                } 
                //Letra Signo de Interrogacion
                //Letra Signa de Exclamacion
                //Letra Parentesis Abierto
                if(Verify3(70,68,76)){
                    Write(div, "(");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                } 
                //Letra Parentesis Cerrado
                if(Verify3(74,75,83)){
                    Write(div, ")");
                    ClearTabla();
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto3);
                } 
                // //Punto y Coma
                // if(Verify2(83,68)){
                //     Write(div, ";");                    
                //     ClearTabla();
                //     ChangeColor(punto3);
                //     ChangeColor(punto2);
                // }
            }
        });
    });