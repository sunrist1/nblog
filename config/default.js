module.exports = {
	port:3333,
	session:{
		secret:'nblog',
		key:'nblog',
		maxAge:2592000000
	},
	mongodb:'mongodb://localhost:27017/nblog'
}