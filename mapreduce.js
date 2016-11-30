// mapreduce example
// find the sum of the amount of the orders with different cust_id and have status "A"
var mapper = function() {
	var key = this.cust_id;
	var value = this.amount;
	emit(key, value);
}

var reducer = function(key, values) {
	return Array.sum(values);
}

var finalizer = function(key, reduceValue) {
	return reduceValue;
}

db.orders.mapReduce(
	mapper, // map function
	reducer, // reduce function
	{
		out: "order_sum_example",
		query: {status: "A"},
		finalize: finalizer
	}
	m)