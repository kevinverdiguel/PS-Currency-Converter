async function convertToUSD() {
    const original = document.querySelector('span.psw-t-title-m');
    const elements = document.querySelectorAll('span.psw-t-title-m');
  
    if (elements.length > 0) {
      // Iterate over each element
      elements.forEach((element) => {
        // Modify the data inside each element
        element.textContent = 'US$99.99';
        console.log(element);
      });
  
      // Replace the original element with the modified element's outerHTML
      if (original) {
        elements.forEach((updatedElement) => {
          elements.outerHTML = updatedElement.outerHTML;
          console.log(original);
        });
      }
    }
  }
  
  convertToUSD();

/*async function convertToUSD() {
    const original = document.querySelector('span.psw-t-title-m[data-qa="mfeCtaMain#offer0#finalPrice"]');
    const element = document.querySelector('span.psw-t-title-m');
  
    if (element) {
      // Modify the data inside the element
      element.textContent = 'US$99.99';
      console.log(element);
  
      if (original) {
        // Replace the original element with the modified element's outerHTML
        original.outerHTML = element.outerHTML;
      }
    }
  }
  
  convertToUSD();*/