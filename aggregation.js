// aggregation example
// 1. Group Documents by a Field and Calculate Count: find the count of the orders in different status
db.orders.aggregate(
	[
		{$group: {_id: "$status", "count": {$sum: 1}}}
	]
);

// 2. Group Document by a field and calculate sum: find the sum of the amount of the orders in different status
db.orders.aggregate(
	[
		{$group: {_id: "$status", "total": {$sum: "$amount"}}}
	]
);

// 3. Pipeline: find the sum of the amount of the orders with different cust_id and have status "A"
db.orders.aggregate(
	[
		{$match: {status: "A"}},
		{$group: {_id: "$cust_id", "total": {$sum: "$amount"}}}
		
	]
);

// 4. Pipeline: find sum of the amount for those who have a status record "A"
// For you to implement
db.orders.aggregate(
	[
		
	]
);

