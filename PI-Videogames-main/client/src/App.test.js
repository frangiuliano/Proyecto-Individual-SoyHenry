// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import rootReducer from "../src/reducer/index";
import {
    getVideogames,
    searchByName,
    searchById,
    getGenres,
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_VIDEOGAME_BY_ID,
    GET_VIDEOGAME_BY_NAME,
} from "../src/actions/index";
import * as data from "../../api/src/db.js"

describe("Reducer", () => {
    const state = {
        videogames: [],
        allVideogames: [],
        genres: [],
        videogameDetail: {}
    }

    it("Debería retornar el estado inicial si no se pasa un type válido", () => {
        expect(rootReducer(undefined, [])).toEqual({ videogames: [], allVideogames: [], genres: [], videogameDetail: {} });
      });

      it('Debería guardar en nuestro state el videogame obtenido de nuestro llamado al back cuando action type es "GET_GENRES"', () => {
        const result = rootReducer(state, {
          type: GET_GENRES,
          payload: data.genres,
        });
        expect(result).not.toEqual(state);
        expect(result).toEqual({
          genres: data.genres,
          videogames: [],
          allVideogames: [],
          videogameDetail: {}
        });
      });

      it('Debería guardar en nuestro state el videogame obtenido de nuestro llamado al back cuando action type es "GET_VIDEOGAME_BY_ID"', () => {
        const result = rootReducer(state, {
          type: GET_VIDEOGAME_BY_ID,
          payload: data.videogameDetail,
        });
        expect(result).not.toEqual(state);
        expect(result).toEqual({
          videogameDetail: data.videogameDetail,
          videogames: [],
          allVideogames: [],
          genres: []
        });
      });

      it('Debería guardar en nuestro state el videogame obtenido de nuestro llamado al back cuando action type es "GET_VIDEOGAME_BY_NAME"', () => {
        const result = rootReducer(state, {
          type: GET_VIDEOGAME_BY_NAME,
          payload: data.videogames,
        });
        expect(result).not.toEqual(state);
        expect(result).toEqual({
          videogames: data.videogames,
          genres: [],
          allVideogames: [],
          videogameDetail: {}
        });
      });

})
