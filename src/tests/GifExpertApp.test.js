import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
    test("debe mostrar el componente correctamente", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test("debe mostrar una lista de categorias", () => {
        const categories = ["Homero", "Bart"];
        const wrapper = shallow(
            <GifExpertApp defaultCategories={categories} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
});
