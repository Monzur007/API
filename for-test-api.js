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
            btnList.classList = `btn bg-rose-600` 
           
            btnList.innerHTML = `
            <button>${category.category}</button>
        
             `
             btn1.appendChild(btnList)
        });
        
     };

    
// ghkghl
  
    // ghgaUFH;
//  const loadItems = async (categoryId) => {
//     const response = await fetch (
//         `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
//     );
//     const data = await response.json();
//     const cardContainer = document.getElementById("cards-container");
//  };

//     data.data.forEach((cards) => {
//         console.log(cards);
//         const div = document.createElement ('div');
//         div.innerHTML = `
//         <div class="card w-96 bg-base-100 shadow-xl">
//         <figure><img src="${card.thumbnail}" alt="" /></figure>
//         <div class="card-body">
//           <h2 class="card-title">
//             Card1
//             <div class="badge badge-secondary">M</div>
//           </h2>
//           <p>view</p>
//           <div class="card-actions justify-end">
//             <div class="badge badge-outline"></div> 
//             <div class="badge badge-outline"></div>
//           </div>
//         </div>
//       </div>
        
//         `
//         cardContainer.appendChild(div);
//     });
   
mainbtns ();
  
       








