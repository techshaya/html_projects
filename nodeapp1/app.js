var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/nodeapp1",function(err,db)
{
	if(err)
	{
		console.dir(err)
	}
	// console.log(db)
	findDocuments(db,function()
	{
		db.close();
	})
    // InsertDocument(db,function()
    // {   console.log("closing db")
    // 	db.close()
    // })
    // updateDocument(db,function()
    // {
    //    db.close();
    // });
    // deleteDocument(db,function()
    // 	{
    // 		db.close();
    // 	});
    
});

 InsertDocument  = function(db,reply)
{
	const collection = db.collection('users')
	collection.insert([{
		name:"Rameel Azhungal Chellattan",
		email:"rameel.rehim@alshaya.com"
	},{name:"Ram Achuthan",
		email:"ram.achuthan@alshaya.com"}],function(err,result)
	{
		if(err)
		{
			console.log(err)
		}
		console.log("Inserted "+result.ops.length+" documents")
		reply(result)
	});

}
updateDocument = function(db,callback)
{
	var collection = db.collection('users')
	collection.update({name:"Rajesh Nambiar"},{$set:{name:"Rajesh V.K"}},
		function(err,result)
		{
			if(err)
			{
				console.log(err)
			}
			callback(result)
		})
}
deleteDocument = function(db)
{
	var collection = db.collection('users')
	collection.deleteMany({},function()
	{
         console.log("All documents deleted")
	});
}
findDocuments = function(db,reply)
{
	var collection = db.collection('users')
	collection.find({}).toArray(function(err,res)
	{
		if(err)
		{
			console.log(err)
		}
		console.log(res)
		reply(res)
	})
	
}
