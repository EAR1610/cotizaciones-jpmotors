function Numeros(string){
    var out = '';
    var filtro = '1234567890';
    
    for(var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
            out += string.charAt(i);    
    return out;
} 

function Totales(string){
    var out = '';
    var filtro = '1234567890.';
    
    for(var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
            out += string.charAt(i);    
    return out;
} 


function Letras(string){
    var out = '';
    var filtro = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    
    for(var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
            out += string.charAt(i);    
    return out;
} 

function NumerosLetras(string){
    var out = '';
    var filtro = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    for(var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
            out += string.charAt(i);    
    return out;
} 

function CodigoC(string){
    var out = '';
    var filtro = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-';
    
    for(var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
            out += string.charAt(i);    
    return out;
} 

function Pass(string){
    var out = '';
    var filtro = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-/*_-.';
    
    for(var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
            out += string.charAt(i);    
    return out;
} 