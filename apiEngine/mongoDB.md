# learn mongo DB

- https://www.mongodb.com/download-center/community

## help
- https://tecadmin.net/tutorial/mongodb/create-database/

### run the terminal



- cd here   C:\Program Files\MongoDB\Server\4.2\bin
- ./mongo.exe

```
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test1   0.000GB
> use test1
switched to db test1
> show collections
products
> db.dropDatabase()
{ "dropped" : "test1", "ok" : 1 }
> 
>
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
>
>
> db
acme
> db.createCollection('posts')
{ "ok" : 1 }
> 
>
> show collections
posts
>
> db.posts.insert({title: 'mr', name:'test'})
WriteResult({ "nInserted" : 1 })

>
>
> 
> db.posts.find().pretty()
{
        "_id" : ObjectId("5d748acf1789b43a9b426700"),
        "title" : "mr",
        "name" : "test"
}
> 
> db
acme
> db.collection
acme.collection
> db          
acme
> show collections
posts
> db.posts.count()
1
>
>  db.post.update(
...      {_id:'5d748acf1789b43a9b426700' },
...      {title: 'ms'}
...      )
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })

```


db.emailMessages.insert({
        name: 'fred1',
        email: "1@2.com",
        message: 'test1'

})