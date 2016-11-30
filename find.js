// 1. find with equality filter: Please find data records with status equal to "A"
	db.orders.find({status: "A"})
// 2. find with range filter: Please find data records with amount greater than 300
	db.orders.find({amount: {$gt: 300}})
// 3. find with projection: Please find all cust_id with status equal to "A"
	db.orders.find({status: "A"}, {cust_id: 1, _id: 0})
// 4. find with iterator: Please find sum of the amount for those who have a status record "A"
var amount_sum = 0;
db.orders.find({status: "A"}).forEach(
	function (order) {
		amount_sum += order.amount;
	}
)
print(amount_sum);
