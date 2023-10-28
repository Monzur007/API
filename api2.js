// const btnAll = async () =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
//     const data = await res.json();
//     const cards = data.data ;
//     displaycards(cards);
   
//     }

//     const displaycards = cards => {
//         // console.log (btnM);
//        const cardContainer = document.getElementById('cards-container');

//         cards.forEach (card=> {
//             console.log(card);

//           const cardList = document.createElement('div');
//           cardList.classList = `card w-96 bg-base-100 shadow-xl`
          
//           cardList.innerHTML =  `
//           <figure><img sec="${card.authors}></figure>
//           <div class="card-body">
//             <h2 class="card-title">
//               ${cards}</h2?
//               <div class="badge badge-secondary">NEW</div>
//             </h2>
//             <p>${card.name}</p>
//             <div class="card-actions justify-end">
//               <div class="badge badge-outline">Fashion</div> 
//               <div class="badge badge-outline">Products</div>
//             </div>
//           </div>

//           `
//           cardContainer.appendChild(div)
//           ;
          

//         })
       
//     }

    
//   btnAll ();


    
