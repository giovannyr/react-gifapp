import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
    const category = "Bart Simpson";

    test("debe mostrar componente <GifGrid /> correctamente", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test("debe mostrar items cuando se cargan imagenes useFetchGifs", () => {
        const gifs = [
            {
                id: "abc",
                title: "Culquier titulo",
                url: "https://localhost/algo",
            },
            {
                id: "abcd",
                title: "Culquier titulo",
                url: "https://localhost/algo",
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    });
});
