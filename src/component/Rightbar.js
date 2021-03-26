import React from 'react'
import Listitem from './Listitem'

function Rightbar({displayData}) {
    return (
        <div className="rightbar">
          <div className="tm-black-bg tm-drinks-nav">
              <ul>
                <li>
                  <a href="#" class="tm-tab-link active" data-id="cold">Iced Coffee</a>
                </li>
                <li>
                  <a href="#" class="tm-tab-link" data-id="hot">Hot Coffee</a>
                </li>
                <li>
                  <a href="#" class="tm-tab-link" data-id="juice">Fruit Juice</a>
                </li>
              </ul>
            </div>
            
            {displayData.map((el) => {
                return <Listitem product={el}/>
          })}

        </div>
    )
}

export default Rightbar
