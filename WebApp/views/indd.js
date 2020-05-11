//window.onload=function(){
//}


document.querySelector('.bookclass').addEventListener('click',function (e) {
    
    fetch("http://localhost:4545/books").then(resp => resp.json())
    .then(results=>{

        const htmlelementparent = document.getElementById('fetchlist');

        console.log(results)
        results.forEach(element => {
            console.log(element.title)
            const li = document.createElement("li");

            const html = `
             <p>${element.title}</p>
            `
            li.innerHTML = html;
            htmlelementparent.insertAdjacentElement('afterbegin', li)
           

        });

    })
  
  });

  document.querySelector('#custie').addEventListener('click',function (e) {
    
    fetch("http://localhost:5555/customers").then(resp => resp.json())
    .then(results=>{

        const htmlelementparent = document.getElementById('customerlist');

        console.log(results)
        results.forEach(element => {
            console.log(element.title)
            const li = document.createElement("li");

            const html = `
             <p>${element.name}</p>
            `
            li.innerHTML = html;
            htmlelementparent.insertAdjacentElement('afterbegin', li)
           

        });

    })
  
  });


  document.querySelector('#oodie').addEventListener('click',function (e) {
     fetch("http://localhost:7777/orders").then(resp => resp.json())
     .then(results=>{
         results.forEach(element=>{
            fetch(`http://localhost:7777/orders/${element._id}`).then(resp => resp.json())
            .then(re=>{

                const htmlelementparent = document.getElementById('orderlist');
                const li = document.createElement("li");
                const html = `
                <p>${re.Customername}</p>
                <p>${re.Bookname}</p>
               `
               li.innerHTML = html;
               htmlelementparent.insertAdjacentElement('afterbegin', li)



            })


         })
     })

  });




