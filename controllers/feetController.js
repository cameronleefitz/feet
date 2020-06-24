const db = require('../models/feetModels');
// db = {
// 	query: (text, params, callback) => {
// 		console.log('executed query', text);
// 		return pool.query(text, params, callback);
// 	}
// };

const starWarsController = {};

starWarsController.getFeet = (req, res, next) => {
	// write code here
	//name, gender, species, species_id, birth_year, eye_color, hair_color, homeworld, homeworld_id, and films (which should be an array of objects with keys: title and id).
	const sqlQuery = 'SELECT * FROM "public"."feet"';
	db
		.query(sqlQuery)
		.then((data) => {
			console.log(data);
			res.locals.feet = data.rows;
			return next();
		})
		.catch((err) => {
			return next({
				log: 'feetController.getFeet: ERROR: Error getting feet data from the dabase',
				message: { err: 'sfeetController.getFeet: ERROR: Check server logs for details' }
			});
		});
};

// starWarsController.getSpecies = (req, res, next) => {
// 	// write code here
// 	// console.log('this is id', req.query.id);
// 	// console.log('this is req***', req)
// 	const id = [ req.query.id ];
// 	const sqlQuery = `select species.*, planets.name as homeworld from species left outer join planets on species.homeworld_id = planets._id where species._id = $1;`;
// 	db
// 		.query(sqlQuery, id)
// 		.then((data) => {
// 			// console.log('characters***', res.locals.characters.length)
// 			// console.log('data***', data.rows)
// 			res.locals.details = data.rows[0];
// 			return next();
// 		})
// 		.catch((err) => {
// 			return next({
// 				log: 'starWarsController.getSpecies: ERROR: Error getting species data from the dabase',
// 				message: { err: 'starWarsController.getSpecies: ERROR: Check server logs for details' }
// 			});
// 		});
// };

// starWarsController.getHomeworld = (req, res, next) => {
// 	// write code here
// 	const id = [ req.query.id ];
// 	const sqlQuery = `select planets.* from planets where planets._id = $1;`;
// 	// console.log(req.query.id)
// 	db
// 		.query(sqlQuery, id)
// 		.then((data) => {
// 			console.log(data);
// 			res.locals.details = data.rows[0];
// 			// console.log(res.locals.characters);
// 			return next();
// 		})
// 		.catch((err) => {
// 			return next({
// 				log: 'starWarsController.getHomeworld: ERROR: Error getting homeworld data from the dabase',
// 				message: { err: 'starWarsController.getHomeworld: ERROR: Check server logs for details' }
// 			});
// 		});
// };

// starWarsController.getFilm = (req, res, next) => {
// 	// write code here
// 	// console.log('req**',res.locals.characters)
// 	console.log('inside get films');
// 	let arr = [];
// 	const id = [ req.query.id ];
// 	for (let character of res.locals.characters) {
// 		const sqlQuery = `select films.title, films._id as id from people left outer join people_in_films on people._id = people_in_films.person_id left outer join films on people_in_films.film_id = films._id where people._id = $1;`;
// 		arr.push(
// 			db.query(sqlQuery, id).then((data) => {
// 				// console.log('one row', data.rows);
// 				character.films = data.rows;
// 				// console.log(res.locals.characters);
// 			})
// 			// .catch((err) => {
// 			//   return next({
// 			//     log: 'starWarsController.getFilm: ERROR: Error getting films data from the dabase',
// 			//     message: { err: 'starWarsController.getFilm: ERROR: Check server logs for details' },
// 			//   });
// 			// });
// 		);
// 	}
// };

// starWarsController.addCharacter = (req, res, next) => {
// 	// write code here
// 	console.log(req.body);
// 	const body = req.body;
// 	// add to people table all the type inputs
// 	const sqlQuery = `INSERT INTO people (name, mass, hair_color, skin_color, eye_color, birth_year, gender, species_id, homeworld_id, height) VALUES ('${body.name}', '${body.mass}', '${body.hair_color}', '${body.skin_color}', '${body.eye_color}', '${body.birth_year}', '${body.gender}', '${body.species_id}', '${body.homeworld_id}', '${body.height}');`;

// 	console.log(sqlQuery);
// 	// console.log(req.query.id)
// 	db.query(sqlQuery).then(() => next()).catch((err) => {
// 		return next({
// 			log: 'starWarsController.addCharacter: ERROR: Error getting new character data from the input form',
// 			message: { err: 'starWarsController.addCharacter: ERROR: Check server logs for details' }
// 		});
// 	});
// };

module.exports = starWarsController;
