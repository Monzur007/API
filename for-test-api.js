const mainbtns = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const btns = data.data ;
//    console.log(btns);



      displaybtns (btns);
      
    }
    const displaybtns = btns => {
        // console.log(btns);

        const btn1 = document.getElementById('btn1')
        btns.forEach(category =>{
            console.log(category)
            const btnList = document.createElement('div');
            btnList.classList = `btn bg-rose-600
            id= ${category.category}` 
           
            btnList.innerHTML = `
            <button>${category.category}</button>
        
             `
             btn1.appendChild(btnList)
        })
        
     }

    

mainbtns ();



// const btnAll = async () =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
//     const data = await res.json();
//     const cards = data.data
    
//       displayCards(cards);

// const displayCards = cards =>{
//     console.log(cards);
// }

// }



