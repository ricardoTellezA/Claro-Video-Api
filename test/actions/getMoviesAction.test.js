import { getMoviesAction } from "../../src/actions/getMoviesAction";

describe("ListActions", () => {
  it("Debe mandar un llamado a los datos", () => {
    const dispatch = jest.fn();
    const movieSearch = "";
    getMoviesAction(movieSearch)(dispatch);
    expect(dispatch).toHaveBeenCalled();
    
  });


    // it("Debe mandar un llamado a los datos", () => {});
});
