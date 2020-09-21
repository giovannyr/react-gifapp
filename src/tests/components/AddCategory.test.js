import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("pruebas <AddCategory />", () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test("debe mostrar componente correctamente ", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe simular evento change", () => {
        const input = wrapper.find("input");
        const value = "Hola mundo";

        input.simulate("change", {
            target: { value: value },
        });
    });

    test("No debe postear la informacion con submit", () => {
        // wrapper.find("form").simulate("submit", { preventDefault: () => {} });
        // FORMA ABREVIADA
        wrapper.find("form").simulate("submit", { preventDefault() {} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test("debe llamar setCategories y limpiart caja de texto", () => {
        const value = "Hola mundo";

        // 1. simular input change
        wrapper.find("input").simulate("change", { target: { value } });

        // 2. simular submit
        wrapper.find("form").simulate("submit", { preventDefault() {} });

        // 3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. el valor del imput debe estar ''
        expect(wrapper.find("input").prop("value")).toBe("");
    });
});
