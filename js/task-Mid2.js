var ar = [1, 2, 3, 4, 5, 6];

for (var i =1 ; i <= ar.length ; i += 1) {
   
    var index = ar.indexOf(i) + 1;
    document.writeln(index);
    
    if (i < ar.length ) {
        document.writeln(",");
    }
}
