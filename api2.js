const btnAll = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const cards = data.data ;
    displaycards(cards);
   
    }

    const displaycards = cards => {
        // console.log (btnM);
        cards.forEach (card=> {
            console.log(card);
        })
        
    }

  btnAll ();

