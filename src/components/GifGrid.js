import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__flipInX animate__slow">
                {category}
            </h3>

            {loading && (
                <p className="animate__animated animate__flash animate__delay-2s">
                    cargando...
                </p>
            )}

            <div className="card-grid">
                {images.map((image) => (
                    <GifGridItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
