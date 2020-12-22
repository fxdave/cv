import "./Me.scss";
import React from "react";

import img from "url:../images/me.jpg";
import imgMap from "url:../images/me_depth.png";

export default () => {
    React.useEffect(() => {
        require("../fake3D.js");
    });

    let me = React.createRef();

    const handleClick = (_e) => {
        window.scrollTo({
            top: me.current.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <>
            <section className="me" onClick={handleClick} ref={me}>
                <div
                    id="gl"
                    data-imageoriginal={img}
                    data-imagedepth={imgMap}
                    data-horizontalthreshold="15"
                    data-verticalthreshold="30"
                />

                <h1>
                    {" "}
                    <span>David Biro</span> Full-stack Web developer{" "}
                </h1>
            </section>
        </>
    );
};
