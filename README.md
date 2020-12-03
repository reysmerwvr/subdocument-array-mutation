# Subdocument Array Mutation

> Subdocument Array Mutation Exercise

## ❗️ Requirements

- Node >= 12.19.0
- yarn >= 1.22.10

## ⬇️ Version

1.0.0

## 🛠 Installation

Download zip file and extract it [subdocument-array-mutation](https://github.com/reysmerwvr/subdocument-array-mutation). Or clone the repository and cd into it.

subdocument-array-mutation uses a number of open source projects to work properly:

- [Node]
- [nodejs-starter]

Install the dependencies and start the server.

```sh
cd subdocument-array-mutation
yarn install
```

## 🚀 Running it with YARN

```sh
yarn start
```

## API

### Mutations: `api/subdocuments/mutations`

```json
POST api/subdocuments/mutations
Host: localhost:3000
Content-Type: application/json

body:
{
    "document": {
        "_id": 1,
        "name": "Johnny Content Creator",
        "posts": [
            {
                "_id": 2,
                "value": "one",
                "mentions": []
            },
            {
                "_id": 3,
                "value": "two",
                "mentions": [
                    {
                        "_id": 5,
                        "text": "apple"
                    },
                    {
                        "_id": 6,
                        "text": "orange"
                    }
                ]
            },
            {
                "_id": 4,
                "value": "three",
                "mentions": []
            }
        ]
    },
    "mutation": {
        "posts": [
            {
                "_id": 3,
                "mentions": [
                    {
                        "_id": 5,
                        "text": "pear"
                    }
                ]
            }
        ]
    }
}
```

## Meta

Reysmer Valle – [@ReysmerWVR]

## License

Subdocument Array Mutation is (c) 2020 Reysmer Valle ([@ReysmerWVR]) and may be freely distributed under the [license-url](LICENSE). See the `MIT-LICENSE` file.

### 📝 Todos

- [ ] Add more unit tests
- [ ] Add integration tests
- [ ] Add code comments
- [ ] Improve generateUpdateStatement logic
- [ ] Fix multiple operations in single statement output
- [ ] Add Docker and Docker Compose

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does
its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Node]: <https://nodejs.org/en/>
   [nodejs-starter]: <https://github.com/app-generator/nodejs-starter>
   [@ReysmerWVR]: <http://twitter.com/ReysmerWVR>
