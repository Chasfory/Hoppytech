import React from "react";
import HoppyCard from "./HoppyCard";

function DrawCards({cards}) {
    return cards.map((values, index) => {
        return (
            <div key={index} className="col">
                <HoppyCard name={values.name} description={values.description} date={values.date} image_url={values.image_url} id={values._id} />
            </div>
        );
    });
}

export default function HoppyCards({cards}) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <DrawCards cards={cards} />
        </div>
    );
}