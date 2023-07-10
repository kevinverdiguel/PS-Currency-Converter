async function convertPrice() {
    const original = document.querySelectorAll('span.psw-t-title-m');
    const elements = document.querySelectorAll('span.psw-t-title-m');
    const cambios = document.querySelector('span.psw-t-title-m');
    let text = [];
    let floatValue = [];
    var cambioAMXN;

    var requestURL = 'https://api.exchangerate.host/latest?&base=USD'; 
    var request = new XMLHttpRequest(); 
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      var response = request.response;
      console.log(response);
      //console.log(response.rates.MXN);
      cambioAMXN = response.rates.MXN;
      parseFloat(cambioAMXN);
      console.log(cambioAMXN);
      if(original.length > 0){
        original.forEach((originals) => {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = originals.innerHTML;
          const currentText = tempElement.textContent;
          text.push(currentText);
          //Muestra el texto de los precios en pantalla
          //console.log(text)
          
          
        });
        if(text.length > 0){
          text.forEach((precios) => {
            const precio = precios;
            const numericString = precio.replace('US$', '');
            //floatValue = parseFloat(numericString);
            floatValue.push(parseFloat(numericString).toFixed(3));
            console.log(floatValue);
          });
      }
  
      if(floatValue.length > 0){
        floatValue.forEach((precios)=>{
          const precio = precios * cambioAMXN;
          const precioImpuesto = (precios * 1.16) * cambioAMXN;
          console.log(precio);
          console.log(precioImpuesto);
        });
    }


   /* if(original.length > 0){
      original.forEach((originals) => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = originals.innerHTML;
        const currentText = tempElement.textContent;
        text.push(currentText);
        //Muestra el texto de los precios en pantalla
        //console.log(text)
        
        
      });
      if(text.length > 0){
        text.forEach((precios) => {
          const precio = precios;
          const numericString = precio.replace('US$', '');
          //floatValue = parseFloat(numericString);
          floatValue.push(parseFloat(numericString).toFixed(3));
          console.log(floatValue);
        });
    }

    if(floatValue.length > 0){
      floatValue.forEach((precios)=>{
        const precio = precios * cambioAMXN;
        console.log(precio);
      });
    }

    
    if (elements.length > 0) {
      // Iterate over each element
      elements.forEach((element) => {
        const text = element.textContent;
        //const number = parseFloat(text.match(/\d+/)[0]);
        //console.log(number);
        // Modify the data inside each element
        element.textContent = 'US$99.99';
        console.log(element);
        // Replace the original element with the modified element's outerHTML
        elements.forEach((updatedElement) => {
          element.outerHTML = updatedElement.outerHTML;
        });
      });*/


  
      
  }
}
}
convertPrice();