import '../../../src/index.css';
import '../../../src/App.css';
import image from '../../assets/picbuku.png';
import save from '../../assets/save.png';
import share from '../../assets/share.png';
import card from '../../assets/card.png';
import Bar from '../navbar';

function Desc() {
  return (
    <div>
      <Bar />
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-transparent p-4"> 
          <img src={image} style={{ maxWidth: "80%", maxHeight: "80%" }} className="max-w-full h-auto" alt="Book Cover"/>
            <div className="description">
              <h1 className="font-barlow font-bold text-lg ml-20 -mt-10">Description</h1>
                <p className="font-barlow text-sm mt-5 ml-20">
                  The story takes place during Harry's sixth year at Hogwarts School of Witchcraft and Wizardry.The story takes place during Harry's sixth year
                  at Hogwarts School of Witchcraft and Wizardry.The story takes place during Harry's sixth year at Hogwarts School of Witchcraft and Wizardry.
                  The story takes place during Harry's sixth year at Hogwarts School of Witchcraft and Wizardry.The story takes place during Harry's sixth year
                  at Hogwarts School of Witchcraft and Wizardry.The story takes place during Harry's sixth year at Hogwarts School of Witchcraft and Wizardry.
                </p>
          </div>
        </div>
                    
        <div className="bg-transparent p-4 -ml-20"> 
          <h1 className="font-playfair-semi text-5xl mt-40">Harry Potter: Half Blood Prince</h1>
          <p className="font-barlow text-lg mt-5">JK Rowling</p>
          <p className="font-barlow text-sm mt-7">
            Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.
            Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.
          </p>

          <div className="button mt-10 grid-cols-3 w-auto">
            <button className="bg-dark hover:bg-darkhover text-white py-2 px-14 text-sm rounded-full">Buy Now</button>

            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-72">
              <img src={card} className="max-w-full h-auto" alt="Book Cover"/>
            </button>
            
            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-5">
              <img src={save} className="max-w-full h-auto" alt="Book Cover"/>
            </button>

            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-5">
              <img src={share} className="max-w-full h-auto" alt="Book Cover"/>
            </button>
          </div>

          <div className="editors ml-40">
            <h1 className="font-poppins font-bold text-lg mt-52">Editors</h1>
            <p className="font-barlow text-sm mt-6">
              Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.
              Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc;