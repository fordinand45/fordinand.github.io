// Menghitung nilai Sinus dengan memanggil method math.sin()
function sin(){
	document.calcul.result.value=Math.sin(document.calcul.result.value);
}

// Menghitung nilai Cosinus dengan memanggil method math.cos()
function cos(){
	document.calcul.result.value=Math.cos(document.calcul.result.value);
}

// Menghitung nilai Tangen dengan memanggil method math.tan()
function tan(){
	document.calcul.result.value=Math.tan(document.calcul.result.value);
}

// Menghitung logaritma dengan basis 10(logaritma biasa) dengan method math.log10()
function log(){
	document.calcul.result.value=Math.log10(document.calcul.result.value);
}

// Fungsi backspc() sebagai penghapus sebuah angka secara bertahap.
function BACKSPC(){
	var a = document.calcul.result.value;
	document.calcul.result.value = a.substr(0, a.length-1);
}

// Fungsi square() --> hasil dari suatu bilangan n dikalikan dengan dirinya sendiri. 
// Menghitung hasil pemangkatan dgn method math.pow()
function square(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
}

// Fungsi cubed() / fungsi pangkat tiga / dengan kata lain merupakan suatu polinomial orde tiga. Turunan dari suatu fungsi kubik adalah suatu fungsi kuadrat.
// Menghitung hasil pemangkatan dgn method math.pow(). 
function cubed(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
}

//Fungsi sqrt2() --> digunakan untuk mencari hasil dari akar kuadrat sebuah angka
// Menghitung hasil pemangkatan dgn method math.pow().
function sqrt2(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/2);
}

//Fungsi sqer3() --> digunakan untuk mencari hasil dari 3 akar kuadrat sebuah angka.
//Menghitung hasil pemangkatan dgn method math.pow().
function sqrt3(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/3);
}

// Fungsi number(value) --> Atribut ini berisi skrip nilai tunggal yang berfungsi saat mouse mengklik elemen.
function number(value){
	document.calcul.result.value += value;
}

// Menghapus keseluruhan angka pada bar.
function remv(){
	document.calcul.result.value=" ";
}

// untuk membandingkan 2 buah operand atau variabel.
function equal(){
	document.calcul.result.value=eval(document.calcul.result.value);
}