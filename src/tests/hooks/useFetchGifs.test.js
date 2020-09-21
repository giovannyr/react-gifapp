import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"; // trabaja con hooks

describe("Pruebas hook useFetchGifs", () => {
    test("debe retornar el estado inicial", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs("The simpsons")
        );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test("debe retornar un arreglo de imagenes y el loading en false", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs("The simpsons")
        );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
