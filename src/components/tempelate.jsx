import React from "react";
import Util from "./util";

let Temp = () => {

    return <div className="card-container">
        <div className="card mx d-flex align-items-center">
            <img src={Util[0].img} className="card-img-top" alt="Logo" />
            <div className="card-body">
                <h6 className="card-title">{Util[0].title}</h6>
                <p className="card-text">{Util[0].seriesName}</p>
                  <button type="button" class="btn btn-outline-secondary">Watch-Now</button>
            </div>
        </div>


        <div className="card mx  d-flex align-items-center">
            <img src={Util[1].img} className="card-img-top" alt="Logo" />
            <div className="card-body">
                <h6 className="card-title">{Util[0].title}</h6>
                <p className="card-text">{Util[1].seriesName}</p>
                  <button type="button" class="btn btn-outline-secondary">Watch-Now</button>
            </div>
        </div>


        <div className="card mx  d-flex align-items-center ">
            <img src={Util[2].img} className="card-img-top" alt="Logo" />
            <div className="card-body">
                <h6 className="card-title">{Util[0].title}</h6>
                <p className="card-text">{Util[2].seriesName}</p>
                  <button type="button" class="btn btn-outline-secondary">Watch-Now</button>
            </div>
        </div>

    </div>
}



export default Temp;