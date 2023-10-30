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
            <button onclick= "showAll()">${category.category}</button>
        
             `
             btn1.appendChild(btnList)
        });
        
     };

    const showAll = async (categoryId) =>{
        const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
        const data = await res.json();
        const items = data.data ;
        // console.log(items);

        allBtns(items);
    };

    const allBtns = items => {
        //  console.log(items);
        const itemContainer = document.getElementById('item-container')

        items.forEach(item =>{
            console.log(item);

            const itemCard = document.createElement('div');
            itemCard.classList = `card w-80 bg-base-100 shadow-xl`;
            itemCard.innerHTML = `
            <figure><img src="${item.thumbnail}" alt="" /></figure>
            <div class="card-body">
            <figure><img src="${item.authors.profile_picture}" alt="" /></figure>
              <h2 class="card-title">
                ${item.title}
              </h2>
              <p>${item.authors}</p>
              <p>${item.others.views} views</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline"></div> 
                <div class="badge badge-outline"></div>
              </div>
            </div>
            `
            itemContainer.appendChild(itemCard);
        })
    }
   
// ghkghl
  
showAll();
   
mainbtns ();
  
       








