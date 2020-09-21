import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas componente GifGridItem", () => {
    const title = "Titulo para pruebas";
    const url = "https://localhost/img.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test("debe mostrar <GifGridItem /> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe tener un parrafo con el titulo", () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });

    test("debe tener la imagen igual al url y alt de los props", () => {
        const img = wrapper.find("img");
        // console.log(img.props());
        // console.log(img.prop("alt"));
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });

    test("debe tener clase animate__zoomInDown", () => {
        const div = wrapper.find("div");
        const className = div.prop("className");
        expect(className.includes("animate__zoomInDown")).toBe(true);
        // NEGACION
        // expect(className.includes("animate__zoomInDown")).not.toBe(true);
    });
});
