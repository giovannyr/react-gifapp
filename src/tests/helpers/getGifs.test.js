import "@testing-library/jest-dom";
import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs fetch", () => {
    test("debe traer 10 elementos", async () => {
        const gifs = await getGifs("The simpsons");
        expect(gifs.length).toBe(10);
    });
    test("debe traer 0 elementos cuando se envia string vacio", async () => {
        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);
    });
});
