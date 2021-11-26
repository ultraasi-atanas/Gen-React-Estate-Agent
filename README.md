# Getting Started with Create React App
Atanas
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Estate Agents Full Stack Project, tasklist
We actually need to send two texts - one to the  customer (enquirer) "We have received your enquiry"
and one to the Agent "This customer wants a viewing at ...'
One will go to the number submitted - and the other to a 'fixed' number (yours.. you are the Agent)
1) On the back end (app.js) ..
	* add an ID Key/value to each house object - number them sequentially
2) On the front end (app.js) ensure that you pass the id of each house as a key prop into each <Tile />
	(note, that now we have a unique ID for each house, we do not need to use the index)
	(hint 	 key={h.id})
	* You will also need to pass the id={h.id} as we are not 'allowed' to directly use the key prop *
3) Look carefully at Appointment.js and what you are passing down (to it) in the props (from Tile.js)
4) Change the front end (Appointment.js) to send (POST) all of the form fields AND the house ID (it should be available to you in the props)
	* The customer name (You will need to add a form field for this)
	* Requested viewing date
	* Requested viewing time
	* Customer email
	* Customer mobile number
	* The house ID (and name if you like a challenge)
	* Notes
5) Construct a message (server side/back end),
	template literals (the `backtick ${variable}` may be useful here
	Containing:-
	* The customer name
	* requested viewing date
	* requested viewing time
	* customer email
	* Customer mobile number
	* The house ID/Name
	* Notes
6) Send as an SMS to a fixed number (Your mobile) (as if you were the Estate Agent)
7) Send a 'Receipt' SMS to the customers number with a *different* message saying:-
	Thank you we have received your enquiry for :- .....(etc.)
	An agent will contact shortly
